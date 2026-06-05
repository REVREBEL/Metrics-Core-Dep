import { ButtonGroup, ButtonGroupText } from "@buttons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"
import { Label } from "@ui"
import { IconLink } from "@tabler/icons-react"

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
            <IconLink />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
