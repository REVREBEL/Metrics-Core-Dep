import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconAppWindow, IconCode } from "@tabler/icons-react"

export function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <IconAppWindow />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <IconAppWindow />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
