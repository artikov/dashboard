import { SidebarItem } from "./sidebar-item";
import { PuzzleIcon } from "../../icons/Environment/PuzzleIcon";
import { SettingsIcon } from "../../icons/Interface/SettingsIcon";

export function SidebarFooter() {
	return (
		<div className="">
			<SidebarItem icon={PuzzleIcon} label="Integrations" />
			<SidebarItem icon={SettingsIcon} label="Settings" />
		</div>
	);
}
