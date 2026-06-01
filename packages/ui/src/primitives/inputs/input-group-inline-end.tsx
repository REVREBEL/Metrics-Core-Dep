import { Field, FieldDescription, FieldLabel } from "@auto-form"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"
import {IconEyeOffIcon as EyeOffIcon} from "@tabler/icons-react"

export function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="Enter password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  )
}
