"use client"

import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  RefreshCw,
  Search,
} from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { Button } from "../../primitives/buttons"
import { Input } from "../../primitives/inputs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../primitives/tables"
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "../../primitives/ui"
import type {
  DataLibraryColumnDef,
  DataLibraryRow,
  DataLibraryTableDefinition,
} from "../../lib/data-library/data-library_types"

export interface GenericDataGridProps {
  definition: DataLibraryTableDefinition
  rows: DataLibraryRow[]
  totalCount: number
  isLoading?: boolean
  onSearchChange?: (search: string) => void
  onStatusFilterChange?: (status: string) => void
  onRefresh?: () => void
}

type SortDirection = "asc" | "desc" | null

function renderStatusBadge(status: DataLibraryRow["status"]) {
  switch (status) {
    case "mapped":
    case "active":
      return <Badge variant="default">{status.toUpperCase()}</Badge>
    case "partial":
    case "pending":
      return <Badge variant="secondary">{status.toUpperCase()}</Badge>
    case "unmapped":
    case "inactive":
      return <Badge variant="destructive">{status.toUpperCase()}</Badge>
    default:
      return <Badge variant="outline">{String(status).toUpperCase()}</Badge>
  }
}

function renderCellContent(
  row: DataLibraryRow,
  column: DataLibraryColumnDef
) {
  const value = row[column.name]

  if (column.type === "status") {
    return renderStatusBadge(row.status)
  }

  if (column.type === "badge" && typeof value === "string") {
    return <Badge variant="outline">{value}</Badge>
  }

  if (column.type === "code" && typeof value === "string") {
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold">
        {value || "—"}
      </code>
    )
  }

  if (column.type === "date" && typeof value === "string") {
    try {
      return new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return value
    }
  }

  if (column.name === "confidence" && typeof value === "number") {
    return (
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary">
          <div
            className={`h-full ${
              value >= 90
                ? "bg-emerald-500"
                : value >= 70
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{value}%</span>
      </div>
    )
  }

  if (value === null || value === undefined || value === "") {
    return <span className="text-muted-foreground italic">—</span>
  }

  return String(value)
}

export function GenericDataGrid({
  definition,
  rows,
  totalCount,
  isLoading = false,
  onSearchChange,
  onStatusFilterChange,
  onRefresh,
}: GenericDataGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    onSearchChange?.(term)
  }

  const handleStatusChange = (status: string) => {
    setStatusFilter(status)
    onStatusFilterChange?.(status)
  }

  const processedRows = useMemo(() => {
    let result = [...rows]

    if (sortField && sortDirection) {
      result.sort((a, b) => {
        const aVal = a[sortField]
        const bVal = b[sortField]

        if (typeof aVal === "string" && typeof bVal === "string") {
          return sortDirection === "asc"
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal)
        }

        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortDirection === "asc" ? aVal - bVal : bVal - aVal
        }

        return 0
      })
    }

    return result
  }, [rows, sortField, sortDirection])

  useEffect(() => {
    setCurrentPage(1)
  }, [itemsPerPage, searchTerm, statusFilter])

  const totalPages = Math.max(1, Math.ceil(processedRows.length / itemsPerPage))
  const paginatedRows = processedRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (fieldName: string) => {
    if (sortField === fieldName) {
      if (sortDirection === "asc") {
        setSortDirection("desc")
        return
      }
      if (sortDirection === "desc") {
        setSortField(null)
        setSortDirection(null)
        return
      }
    }
    setSortField(fieldName)
    setSortDirection("asc")
  }

  const exportCsv = () => {
    const headers = definition.columns.map((c) => c.label)
    const lines = [
      headers.join(","),
      ...processedRows.map((r) =>
        definition.columns
          .map((c) => `"${String(r[c.name] ?? "").replace(/"/g, '""')}"`)
          .join(",")
      ),
    ]

    const blob = new Blob([lines.join("\n")], {
      type: "text/csv;charset=utf-8;",
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${definition.bigQueryTable}-rows.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-56" />
          <Skeleton className="h-4 w-72" />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-24" />
          </div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton key={`skeleton-${idx}`} className="h-12 w-full" />
          ))}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle>{definition.displayName}</CardTitle>
            <Badge variant="outline" className="font-mono text-xs">
              {definition.bigQueryDataset}.{definition.bigQueryTable}
            </Badge>
          </div>
          <CardDescription className="mt-1">{definition.description}</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {onRefresh && (
            <Button variant="outline" size="sm" onClick={onRefresh}>
              <RefreshCw className="size-4 mr-1" />
              Refresh
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={exportCsv}>
            <Download className="size-4 mr-1" />
            Export CSV
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={`Search ${definition.displayName.toLowerCase()}...`}
              className="pl-9"
            />
          </div>

          <Select value={statusFilter} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-full lg:w-40">
              <Filter className="size-4 mr-1" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="mapped">Mapped / Active</SelectItem>
                <SelectItem value="partial">Partial / Review</SelectItem>
                <SelectItem value="unmapped">Unmapped / Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={String(itemsPerPage)}
            onValueChange={(val) => setItemsPerPage(Number(val))}
          >
            <SelectTrigger className="w-full lg:w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10 / page</SelectItem>
                <SelectItem value="25">25 / page</SelectItem>
                <SelectItem value="50">50 / page</SelectItem>
                <SelectItem value="100">100 / page</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {definition.columns.map((col) => (
                  <TableHead key={col.name}>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 font-semibold text-xs text-foreground"
                      onClick={() => handleSort(col.name)}
                    >
                      {col.label}
                      <ArrowUpDown className="size-3 text-muted-foreground" />
                    </button>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedRows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={definition.columns.length}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No rows match your query or filter.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedRows.map((row) => (
                  <TableRow key={row.id}>
                    {definition.columns.map((col) => (
                      <TableCell key={`${row.id}-${col.name}`}>
                        {renderCellContent(row, col)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {paginatedRows.length} of {processedRows.length} rows (Total live: {totalCount})
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="size-4 mr-1" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
