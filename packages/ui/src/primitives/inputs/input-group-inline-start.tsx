import { Field, FieldDescription, FieldLabel } from "@auto-form"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"
import {IconSearch} from "@tabler/icons-react"

export function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <IconSearch className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  )
}
