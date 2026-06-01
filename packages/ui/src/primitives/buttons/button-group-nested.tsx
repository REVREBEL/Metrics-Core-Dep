import { Input } from "@inputs";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@inputs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@popovers";
import { IconAudioLinesIcon, IconPlusIcon } from "@tabler/icons-react";
import { Button } from "./button";
import { ButtonGroup } from "./button-group";

export function ButtonGroupNested() {
	return (
		<ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="icon">
					<PlusIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<InputGroup>
					<InputGroupInput placeholder="Send a message..." />
					<Tooltip>
						<TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
							<AudioLinesIcon />
						</TooltipTrigger>
						<TooltipContent>Voice Mode</TooltipContent>
					</Tooltip>
				</InputGroup>
			</ButtonGroup>
		</ButtonGroup>
	);
}
