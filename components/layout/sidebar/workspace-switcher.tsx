"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const workspaces = [
	{
		id: "li",
		name: "Lorem ipsum",
		plan: "Pro plan",
		initials: "LI",
	},
	{
		id: "ac",
		name: "Acme Inc",
		plan: "Free plan",
		initials: "AC",
	},
];

const activeWorkspaceId = "li";

export function WorkspaceSwitcher() {
	const activeWorkspace = workspaces.find((w) => w.id === activeWorkspaceId)!;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					className="w-full rounded-xl bg-background p-3 flex items-center justify-between hover:bg-muted transition-colors mb-5"
				>
					<div className="flex items-center gap-3">
						<div className="h-9 w-9 rounded-full bg-sidebar-primary flex items-center justify-center text-sm font-medium text-black">
							{activeWorkspace.initials}
						</div>

						<div className="text-left">
							<p className="font-semibold leading-none">
								{activeWorkspace.name}
							</p>
							<p className="text-sm text-[#b5b5b5]">{activeWorkspace.plan}</p>
						</div>
					</div>

					<CaretUpDownIcon className="h-5 w-5" weight="bold" />
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="start" side="bottom" className="w-65">
				{workspaces.map((workspace) => {
					const isActive = workspace.id === activeWorkspaceId;

					return (
						<DropdownMenuItem
							key={workspace.id}
							className="flex items-center gap-3 py-2"
						>
							<div
								className={cn(
									"h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium",
									isActive
										? "bg-sidebar-primary text-black"
										: "bg-muted text-foreground",
								)}
							>
								{workspace.initials}
							</div>

							<div className="flex-1">
								<p className="text-sm font-medium leading-none">
									{workspace.name}
								</p>
								<p className="text-xs text-muted-foreground">
									{workspace.plan}
								</p>
							</div>

							{isActive && (
								<CheckIcon className="h-4 w-4 text-muted-foreground" />
							)}
						</DropdownMenuItem>
					);
				})}

				<DropdownMenuSeparator />

				<DropdownMenuItem className="text-sm">
					+ Create workspace
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
