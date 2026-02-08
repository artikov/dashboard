import { CaretDownIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
	icon?: React.ElementType;
	label: string;
	count?: number;
	active?: boolean;
	expandable?: boolean;
	expanded?: boolean;
	onToggle?: () => void;
	disabled?: boolean;
};

export function SidebarItem({
	icon: Icon,
	label,
	count,
	active,
	expandable,
	expanded,
	onToggle,
	disabled,
}: SidebarItemProps) {
	return (
		<button
			type="button"
			onClick={expandable ? onToggle : undefined}
			className={cn(
				"w-full flex items-center justify-between rounded-xl px-2 py-3 text-sm bg-white font-medium",
				active ? "bg-sidebar-accent font-medium" : "hover:bg-muted",
				disabled && "opacity-60 bg-sidebar",
			)}
		>
			<div className="flex items-center gap-3">
				{Icon ? <Icon size={19} weight="bold" /> : <span className="w-5" />}
				<span>{label}</span>
			</div>

			<div className="flex items-center gap-2">
				{typeof count === "number" && (
					<span
						className={cn(
							"w-6.5 h-5.5 text-center rounded-[11px] p-0.75 text-xs bg-sidebar-primary text-black",
						)}
					>
						{count}
					</span>
				)}

				{expandable && (
					<CaretDownIcon
						size={19}
						weight="bold"
						className={cn("transition-transform", expanded && "rotate-180")}
					/>
				)}
			</div>
		</button>
	);
}
