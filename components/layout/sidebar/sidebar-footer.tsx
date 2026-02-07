import { PuzzlePieceIcon, GearIcon } from "@phosphor-icons/react";

export function SidebarFooter() {
	return (
		<div className="">
			<div className="rounded-xl bg-background p-3 flex items-center gap-3">
				<PuzzlePieceIcon className="h-5 w-5" />
				<span>Integrations</span>
			</div>

			<div className="rounded-xl bg-background p-3 flex items-center gap-3">
				<GearIcon className="h-5 w-5" />
				<span>Settings</span>
			</div>
		</div>
	);
}
