import { Puzzle, Settings } from "lucide-react";

export function SidebarFooter() {
	return (
		<div className="">
			<div className="rounded-xl bg-background p-3 flex items-center gap-3">
				<Puzzle className="h-5 w-5" />
				<span>Integrations</span>
			</div>

			<div className="rounded-xl bg-background p-3 flex items-center gap-3">
				<Settings className="h-5 w-5" />
				<span>Settings</span>
			</div>
		</div>
	);
}
