import { NextResponse } from "next/server"
import { getLiveTableRows } from "@repo/ui/lib/data-library/data-library_service"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tableKey = searchParams.get("tableKey") ?? "metrics_core.lkp_segment"
  const search = searchParams.get("search") ?? ""
  const statusFilter = searchParams.get("statusFilter") ?? "all"

  try {
    const result = await getLiveTableRows(tableKey, {
      search,
      statusFilter,
      limit: 100,
    })
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load live table rows", details: String(error) },
      { status: 500 }
    )
  }
}
