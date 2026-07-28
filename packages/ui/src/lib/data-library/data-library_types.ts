export type DataLibraryTableType = "lookup" | "mapping" | "dimension"

export type DataLibraryColumnType =
  | "string"
  | "number"
  | "boolean"
  | "badge"
  | "status"
  | "date"
  | "code"

export interface DataLibraryColumnDef {
  name: string
  label: string
  type: DataLibraryColumnType
  editable?: boolean
  required?: boolean
  width?: string
  description?: string
}

export interface DataLibraryTableDefinition {
  key: string
  displayName: string
  description: string
  tableType: DataLibraryTableType
  category: string
  bigQueryDataset: string
  bigQueryTable: string
  primaryKey: string
  columns: DataLibraryColumnDef[]
  lookupTableDependencies?: string[]
  supportsDrafts: boolean
  supportsPublish: boolean
  supportsUnmappedQueue: boolean
  requiredPermissions: {
    view: string
    edit: string
    publish: string
  }
}

export interface DataLibraryRow {
  id: string
  tableKey: string
  sourceSystem?: string
  rawCode?: string
  rawName?: string
  mappedCode?: string
  mappedValue?: string
  mappedGroup?: string
  status: "mapped" | "partial" | "unmapped" | "active" | "inactive" | "pending"
  confidence?: number
  reviewReason?: string
  overrideReason?: string
  hasDraft?: boolean
  draftValue?: string
  updatedAt?: string
  updatedBy?: string
  notes?: string
  [key: string]: unknown
}

export interface DataLibraryTableMetadata {
  key: string
  displayName: string
  tableType: DataLibraryTableType
  category: string
  totalRows: number
  mappedCount: number
  partialCount: number
  unmappedCount: number
  lastRefreshedAt: string
  status: "synced" | "syncing" | "stale" | "error"
}

export interface DataLibraryQueryOptions {
  search?: string
  statusFilter?: string
  categoryFilter?: string
  limit?: number
  offset?: number
  sortBy?: string
  sortDirection?: "asc" | "desc"
}

export interface DataLibraryQueryResult {
  rows: DataLibraryRow[]
  totalCount: number
  filteredCount: number
  metadata: DataLibraryTableMetadata
}
