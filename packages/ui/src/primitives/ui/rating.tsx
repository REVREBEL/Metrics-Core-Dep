import { IconStar } from "@tabler/icons-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
	value: number;
	max?: number;
	size?: number;
}

export function Rating({
	value,
	max = 5,
	size = 20,
	className,
	...props
}: RatingProps) {
	return (
		<div className={cn("flex items-center gap-0.5", className)} {...props}>
			{Array.from({ length: max }).map((_, i) => (
				<IconStar
					key={i}
					size={size}
					className={cn(
						"shrink-0",
						i < value
							? "fill-primary text-primary"
							: "fill-muted text-muted-foreground",
					)}
				/>
			))}
		</div>
	);
}
