import { ButtonGroup, ButtonGroupText } from "@buttons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"
import { Label } from "@ui"
import {Link02Icon} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <HugeiconsIcon icon={Link02Icon} />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
