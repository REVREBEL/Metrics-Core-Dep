import { InputGroup, InputGroupAddon, InputGroupInput } from "@inputs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui";
import { IconAudioLines, IconPlus } from "@tabler/icons-react";
import { Button } from "./button";
import { ButtonGroup } from "./button-group";

export function ButtonGroupNested() {
	return (
		<ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="icon">
					<IconPlus />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<InputGroup>
					<InputGroupInput placeholder="Send a message..." />
					<Tooltip>
						<TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
							<IconAudioLines />
						</TooltipTrigger>
						<TooltipContent>Voice Mode</TooltipContent>
					</Tooltip>
				</InputGroup>
			</ButtonGroup>
		</ButtonGroup>
	);
}
