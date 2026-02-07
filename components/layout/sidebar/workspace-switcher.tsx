"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, Check } from "lucide-react";
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
						<div className="h-10 w-10 rounded-full bg-sidebar-primary flex items-center justify-center text-sm font-medium text-black">
							{activeWorkspace.initials}
						</div>

						<div className="text-left">
							<p className="font-medium leading-none">{activeWorkspace.name}</p>
							<p className="text-sm text-muted-foreground">
								{activeWorkspace.plan}
							</p>
						</div>
					</div>

					<ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="start" side="bottom" className="w-[260px]">
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
										? "bg-purple-400 text-black"
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

							{isActive && <Check className="h-4 w-4 text-muted-foreground" />}
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
