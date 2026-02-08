import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "../../icons/Arrow/ChevronDownIcon";

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
				"w-full h-[42px] flex items-center justify-between rounded-xl px-2 text-sm bg-white font-medium",
				active ? "bg-sidebar-accent" : "hover:bg-muted",
				disabled && "opacity-60 bg-sidebar",
			)}
		>
			<div className="flex items-center gap-3">
				{Icon ? <Icon size={20} /> : <span className="w-5" />}
				<span>{label}</span>
			</div>

			<div className="flex items-center gap-1">
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
					<ChevronDownIcon
						size={20}
						className={cn("transition-transform", expanded && "rotate-180")}
					/>
				)}
			</div>
		</button>
	);
}
