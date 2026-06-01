"use client"

import { Button } from "@buttons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { CreditCardIcon, Logout01Icon, Settings01Icon, UserIcon } from "@hugeicons/core-free-icons"
import { IconHugeiconsIcon } from "@tabler/icons-react"

export function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <IconHugeiconsIcon icon={UserIcon} />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconHugeiconsIcon icon={CreditCardIcon} />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconHugeiconsIcon icon={Settings01Icon} />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <HugeiconsIcon icon={Logout01Icon} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
