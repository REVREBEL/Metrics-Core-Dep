"use client"

import { Button } from "@buttons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Delete01Icon, Edit02Icon, Share01Icon } from "@hugeicons/core-free-icons"
import { IconHugeiconsIcon } from "@tabler/icons-react"

export function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconHugeiconsIcon icon={Edit02Icon} />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconHugeiconsIcon icon={Share01Icon} />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <IconHugeiconsIcon icon={Delete01Icon} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
