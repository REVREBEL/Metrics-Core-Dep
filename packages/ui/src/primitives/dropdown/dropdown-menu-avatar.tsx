"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@ui"
import { Button } from "@buttons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { IconBadgeCheck, IconBell, IconCreditCard, IconLogOut } from "@tabler/icons-react"

export function DropdownMenuAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" className="rounded-full" />}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconBadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconCreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconBell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconLogOut />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
