import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { IconMinus, IconPlus } from "@tabler/icons-react"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <IconPlus />
      </Button>
      <Button variant="outline" size="icon">
        <IconMinus />
      </Button>
    </ButtonGroup>
  )
}
