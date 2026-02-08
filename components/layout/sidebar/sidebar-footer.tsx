import { PuzzlePieceIcon, GearIcon } from "@phosphor-icons/react";
import { SidebarItem } from "./sidebar-item";

export function SidebarFooter() {
	return (
		<div className="">
			<SidebarItem icon={PuzzlePieceIcon} label="Integrations" />
			<SidebarItem icon={GearIcon} label="Settings" />
		</div>
	);
}
