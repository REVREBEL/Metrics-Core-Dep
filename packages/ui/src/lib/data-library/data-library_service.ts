import { getBigQueryClient } from "../bigquery/biq-query_client"
import { getMappingTableRef, isMappingTableKey, DataLibraryTableKey } from "../bigquery/biq-query_config"
import { getDataLibraryTableDefinition } from "./data-library_registry"
import { lookupTableRowsByKey } from "../lookups/lookups_fixtures"
import { mappingTableRowsByKey } from "../mapping-tables/mapping-table_fixtures"
import type {
  DataLibraryQueryOptions,
  DataLibraryQueryResult,
  DataLibraryRow,
  DataLibraryTableMetadata,
} from "./data-library_types"

export async function getLiveTableRows(
  tableKey: string,
  options: DataLibraryQueryOptions = {}
): Promise<DataLibraryQueryResult> {
  const tableDef = getDataLibraryTableDefinition(tableKey)
  const key = tableKey as DataLibraryTableKey

  let rawRows: DataLibraryRow[] = []

  // Try BigQuery server-side query if tableKey is valid and BQ client works
  if (isMappingTableKey(key)) {
    try {
      const client = getBigQueryClient()
      const ref = getMappingTableRef(key)

      const sql = `
        SELECT *
        FROM ${ref.fullyQualified}
        LIMIT 200
      `

      const [rows] = await client.query({ query: sql })
      if (Array.isArray(rows) && rows.length > 0) {
        rawRows = rows.map((r: Record<string, unknown>, idx: number) => normalizeRow(r, tableKey, idx))
      }
    } catch {
      // Fallback to local fixture data on error or unconfigured BQ
      rawRows = getFallbackRows(tableKey)
    }
  } else {
    rawRows = getFallbackRows(tableKey)
  }

  // Filter by search string if provided
  let filteredRows = rawRows
  if (options.search && options.search.trim() !== "") {
    const searchLower = options.search.toLowerCase()
    filteredRows = filteredRows.filter((row) =>
      Object.values(row).some(
        (val) => typeof val === "string" && val.toLowerCase().includes(searchLower)
      )
    )
  }

  // Filter by status if provided
  if (options.statusFilter && options.statusFilter !== "all") {
    filteredRows = filteredRows.filter((row) => row.status === options.statusFilter)
  }

  const totalCount = rawRows.length
  const filteredCount = filteredRows.length

  // Paginate rows
  const offset = options.offset ?? 0
  const limit = options.limit ?? 50
  const paginatedRows = filteredRows.slice(offset, offset + limit)

  const metadata = computeTableMetadata(tableKey, rawRows)

  return {
    rows: paginatedRows,
    totalCount,
    filteredCount,
    metadata,
  }
}

function getFallbackRows(tableKey: string): DataLibraryRow[] {
  // Check lookup table fixtures first
  if (lookupTableRowsByKey[tableKey]) {
    return lookupTableRowsByKey[tableKey].map((r, idx) => ({
      id: r.id ?? `lkp-${idx}`,
      tableKey,
      sourceSystem: r.sourceSystem ?? "Dataform Inventory",
      rawCode: r.rawCode,
      rawName: r.rawName,
      mappedValue: r.mappedValue,
      mappedGroup: r.mappedGroup,
      status: r.isActive ? "active" : "inactive",
      updatedAt: r.updatedAt,
      updatedBy: r.updatedBy,
      notes: r.notes,
    }))
  }

  // Check mapping table fixtures next
  if (mappingTableRowsByKey[tableKey as keyof typeof mappingTableRowsByKey]) {
    return mappingTableRowsByKey[tableKey as keyof typeof mappingTableRowsByKey].map((r, idx) => ({
      id: r.id ?? `map-${idx}`,
      tableKey,
      sourceSystem: r.sourceSystem,
      rawCode: r.sourceCode,
      rawName: r.sourceValue,
      mappedCode: r.standardCode,
      mappedValue: r.standardValue,
      mappedGroup: r.standardGroup,
      status: r.status as DataLibraryRow["status"],
      confidence: r.confidence,
      reviewReason: r.reviewReason,
      updatedAt: r.updatedAt,
      updatedBy: r.updatedBy,
    }))
  }

  return []
}

function normalizeRow(
  raw: Record<string, unknown>,
  tableKey: string,
  idx: number
): DataLibraryRow {
  const statusStr = String(raw.status ?? raw.mapping_status ?? "mapped").toLowerCase()
  let status: DataLibraryRow["status"] = "mapped"
  if (statusStr.includes("part")) status = "partial"
  else if (statusStr.includes("unmap")) status = "unmapped"
  else if (statusStr === "active" || statusStr === "true") status = "active"
  else if (statusStr === "inactive" || statusStr === "false") status = "inactive"

  return {
    id: String(raw.id ?? raw.row_id ?? `${tableKey}-${idx}`),
    tableKey,
    sourceSystem: String(raw.source_system ?? raw.sourceSystem ?? "PMS"),
    rawCode: String(raw.raw_code ?? raw.source_code ?? raw.rawCode ?? raw.code ?? ""),
    rawName: String(raw.raw_name ?? raw.source_value ?? raw.rawName ?? raw.name ?? ""),
    mappedCode: String(raw.mapped_code ?? raw.standard_code ?? raw.mappedCode ?? ""),
    mappedValue: String(raw.mapped_value ?? raw.standard_value ?? raw.mappedValue ?? ""),
    mappedGroup: String(raw.mapped_group ?? raw.standard_group ?? raw.mappedGroup ?? ""),
    status,
    confidence: typeof raw.confidence === "number" ? raw.confidence : undefined,
    reviewReason: raw.review_reason ? String(raw.review_reason) : undefined,
    updatedAt: raw.updated_at ? String(raw.updated_at) : new Date().toISOString(),
    updatedBy: raw.updated_by ? String(raw.updated_by) : "System",
  }
}

function computeTableMetadata(
  tableKey: string,
  rows: DataLibraryRow[]
): DataLibraryTableMetadata {
  const def = getDataLibraryTableDefinition(tableKey)
  const displayName = def?.displayName ?? tableKey
  const tableType = def?.tableType ?? "lookup"
  const category = def?.category ?? "General"

  const totalRows = rows.length
  const mappedCount = rows.filter((r) => r.status === "mapped" || r.status === "active").length
  const partialCount = rows.filter((r) => r.status === "partial").length
  const unmappedCount = rows.filter((r) => r.status === "unmapped" || r.status === "inactive").length

  return {
    key: tableKey,
    displayName,
    tableType,
    category,
    totalRows,
    mappedCount,
    partialCount,
    unmappedCount,
    lastRefreshedAt: new Date().toISOString(),
    status: "synced",
  }
}
