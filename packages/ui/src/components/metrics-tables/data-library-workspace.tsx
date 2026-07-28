"use client"

import { Database, FileSpreadsheet, CheckCircle2, AlertTriangle, XCircle } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../primitives/ui"
import { GenericDataGrid } from "./generic-data-grid"
import { listDataLibraryRegistryEntries, getDataLibraryTableDefinition } from "../../lib/data-library/data-library_registry"
import type {
  DataLibraryQueryResult,
  DataLibraryTableDefinition,
} from "../../lib/data-library/data-library_types"

export interface DataLibraryWorkspaceProps {
  initialTableKey?: string
  initialData?: DataLibraryQueryResult
  fetchTableRowsAction?: (
    tableKey: string,
    options?: { search?: string; statusFilter?: string }
  ) => Promise<DataLibraryQueryResult>
}

export function DataLibraryWorkspace({
  initialTableKey = "metrics_core.lkp_segment",
  initialData,
  fetchTableRowsAction,
}: DataLibraryWorkspaceProps) {
  const [selectedKey, setSelectedKey] = useState<string>(initialTableKey)
  const [queryResult, setQueryResult] = useState<DataLibraryQueryResult | undefined>(initialData)
  const [isLoading, setIsLoading] = useState<boolean>(!initialData)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const registryEntries = listDataLibraryRegistryEntries()
  const lookupTables = registryEntries.filter((e) => e.tableType === "lookup")
  const mappingTables = registryEntries.filter((e) => e.tableType === "mapping")
  const dimensionTables = registryEntries.filter((e) => e.tableType === "dimension")

  const currentDefinition: DataLibraryTableDefinition =
    getDataLibraryTableDefinition(selectedKey) ?? registryEntries[0]!

  const loadRows = useCallback(async (
    key: string,
    search: string,
    status: string
  ) => {
    setIsLoading(true)
    try {
      if (fetchTableRowsAction) {
        const result = await fetchTableRowsAction(key, { search, statusFilter: status })
        setQueryResult(result)
      } else {
        const res = await fetch(`/api/data-library?tableKey=${encodeURIComponent(key)}&search=${encodeURIComponent(search)}&statusFilter=${encodeURIComponent(status)}`)
        if (res.ok) {
          const result = await res.json() as DataLibraryQueryResult
          setQueryResult(result)
        }
      }
    } catch {
      // Gracefully retain current result or empty set
    } finally {
      setIsLoading(false)
    }
  }, [fetchTableRowsAction])

  useEffect(() => {
    if (!initialData || selectedKey !== initialTableKey) {
      void loadRows(selectedKey, searchTerm, statusFilter)
    }
  }, [selectedKey, searchTerm, statusFilter, loadRows, initialData, initialTableKey])

  const metadata = queryResult?.metadata ?? {
    key: selectedKey,
    displayName: currentDefinition.displayName,
    tableType: currentDefinition.tableType,
    category: currentDefinition.category,
    totalRows: 0,
    mappedCount: 0,
    partialCount: 0,
    unmappedCount: 0,
    lastRefreshedAt: new Date().toISOString(),
    status: "synced" as const,
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Top Header & Table Picker */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Metrics Data Library</h1>
            <Badge variant="secondary" className="font-mono text-xs uppercase">
              {currentDefinition.tableType}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Governed lookup definitions and live mapping tables from BigQuery analytics layer.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Select value={selectedKey} onValueChange={setSelectedKey}>
            <SelectTrigger className="w-full md:w-80 font-medium">
              <Database className="size-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Select Table..." />
            </SelectTrigger>
            <SelectContent>
              {lookupTables.length > 0 && (
                <SelectGroup>
                  <SelectLabel className="text-xs font-semibold text-muted-foreground">
                    Lookup Tables (lkp_)
                  </SelectLabel>
                  {lookupTables.map((table) => (
                    <SelectItem key={table.key} value={table.key}>
                      {table.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              )}

              {mappingTables.length > 0 && (
                <SelectGroup>
                  <SelectLabel className="text-xs font-semibold text-muted-foreground mt-2">
                    Mapping Tables (map_)
                  </SelectLabel>
                  {mappingTables.map((table) => (
                    <SelectItem key={table.key} value={table.key}>
                      {table.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              )}

              {dimensionTables.length > 0 && (
                <SelectGroup>
                  <SelectLabel className="text-xs font-semibold text-muted-foreground mt-2">
                    Dimension Master (dim_)
                  </SelectLabel>
                  {dimensionTables.map((table) => (
                    <SelectItem key={table.key} value={table.key}>
                      {table.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Metadata Summary KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Live Rows</CardTitle>
            <FileSpreadsheet className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metadata.totalRows}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Registered in {currentDefinition.bigQueryDataset}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Mapped / Active</CardTitle>
            <CheckCircle2 className="size-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{metadata.mappedCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Governed & ready for reporting
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Partial / Review</CardTitle>
            <AlertTriangle className="size-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{metadata.partialCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires validation or grouping
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unmapped / Inactive</CardTitle>
            <XCircle className="size-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{metadata.unmappedCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Unassigned codes or disabled
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Generic Data Grid */}
      <GenericDataGrid
        definition={currentDefinition}
        rows={queryResult?.rows ?? []}
        totalCount={queryResult?.totalCount ?? 0}
        isLoading={isLoading}
        onSearchChange={setSearchTerm}
        onStatusFilterChange={setStatusFilter}
        onRefresh={() => void loadRows(selectedKey, searchTerm, statusFilter)}
      />
    </div>
  )
}
