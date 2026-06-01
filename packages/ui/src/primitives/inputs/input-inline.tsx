import { Button } from "@buttons"
import { Field } from "@auto-form"
import { Input } from "./input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
