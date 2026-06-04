import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"
import { Kbd } from "@ui"
import {IconSearch} from "@tabler/icons-react"

export function InputGroupKbd() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <IconSearch className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
