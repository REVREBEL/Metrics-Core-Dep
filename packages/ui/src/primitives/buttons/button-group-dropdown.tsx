"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@dropdown";
import {
	Alert01Icon,
	ChevronDown,
	Copy01Icon,
	Delete01Icon,
	Share01Icon,
	Tick01Icon,
	UserRemove01Icon,
	VolumeMute02Icon,
} from "@hugeicons/core-free-icons";
import { IconHugeiconsIcon } from "@tabler/icons-react";
import { Button } from "./button";
import { ButtonGroup } from "./button-group";

export default function ButtonGroupDropdown() {
	return (
		<ButtonGroup>
			<Button variant="outline">Follow</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="pl-2!">
						<HugeiconsIcon icon={ChevronDown} />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-44">
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<HugeiconsIcon icon={VolumeMute02Icon} />
							Mute Conversation
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HugeiconsIcon icon={Tick01Icon} />
							Mark as Read
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HugeiconsIcon icon={Alert01Icon} />
							Report Conversation
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HugeiconsIcon icon={UserRemove01Icon} />
							Block User
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HugeiconsIcon icon={Share01Icon} />
							Share Conversation
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HugeiconsIcon icon={Copy01Icon} />
							Copy Conversation
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem variant="destructive">
							<HugeiconsIcon icon={Delete01Icon} />
							Delete Conversation
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</ButtonGroup>
	);
}
