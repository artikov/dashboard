"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { SidebarItem } from "./sidebar-item";
import { InboxTree } from "./inbox-tree";
import { SidebarFooter } from "./sidebar-footer";
import { HouseIcon } from "../../icons/Navigation/HouseIcon";
import { ChatCircleIcon } from "../../icons/Communication/ChatCircleIcon";
import { ShareAndroidIcon } from "../../icons/Communication/ShareAndroidIcon";
import { UsersIcon } from "../../icons/User/UsersIcon";
import { PaperPlaneIcon } from "../../icons/Communication/PaperPlaneIcon";
import { AddPlusIcon } from "../../icons/Edit/AddPlusIcon";

export function Sidebar() {
	const [isChatsOpen, setIsChatsOpen] = useState(true);
	const [isCentralOpen, setIsCentralOpen] = useState(true);
	const [isTestInboxOpen, setIsTestInboxOpen] = useState(false);

	return (
		<div className="h-full flex flex-col bg-sidebar">
			<ScrollArea className="h-full px-3 py-4">
				<div className="flex flex-col h-full">
					<WorkspaceSwitcher />

					<SidebarItem icon={HouseIcon} label="Home" />

					<SidebarItem
						icon={ChatCircleIcon}
						label="Chats"
						count={32}
						active
						expandable
						expanded={isChatsOpen}
						onToggle={() => setIsChatsOpen((v) => !v)}
					/>

					{isChatsOpen && (
						<>
							<SidebarItem
								label="Central"
								count={32}
								expandable
								expanded={isCentralOpen}
								onToggle={() => setIsCentralOpen((v) => !v)}
							/>

							{isCentralOpen && <InboxTree />}

							<SidebarItem
								label="Test inbox"
								count={0}
								expandable
								expanded={isTestInboxOpen}
								onToggle={() => setIsTestInboxOpen((v) => !v)}
							/>
						</>
					)}

					<SidebarItem
						icon={(props) => <AddPlusIcon {...props} color="#b5b5b5" />}
						label="Add new inbox"
						disabled
					/>

					<div>
						<SidebarItem icon={ShareAndroidIcon} label="Automation" />
						<SidebarItem icon={UsersIcon} label="Contacts" expandable />
						<SidebarItem
							icon={PaperPlaneIcon}
							label="Campaigns"
							expandable
						/>
					</div>
				</div>
			</ScrollArea>
			<div className="mt-auto px-3 pb-6.25">
				<SidebarFooter />
			</div>
		</div>
	);
}
