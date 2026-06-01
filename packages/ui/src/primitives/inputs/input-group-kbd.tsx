import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./input-group"
import { Kbd } from "@ui"
import {IconSearchIcon as SearchIcon} from "@tabler/icons-react"

export function InputGroupKbd() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
