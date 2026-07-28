import { DataLibraryWorkspace } from "@repo/ui/components/metrics-tables/data-library-workspace"
import { getLiveTableRows } from "@repo/ui/lib/data-library/data-library_service"

export const revalidate = 0

export default async function DataLibraryPage() {
  const initialTableKey = "metrics_core.lkp_segment"
  const initialData = await getLiveTableRows(initialTableKey)

  return (
    <main className="min-h-screen bg-background">
      <DataLibraryWorkspace
        initialTableKey={initialTableKey}
        initialData={initialData}
      />
    </main>
  )
}
