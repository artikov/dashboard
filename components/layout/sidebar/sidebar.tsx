"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, MessageSquare, Share2, Users, Send, Plus } from "lucide-react";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { SidebarItem } from "./sidebar-item";
import { InboxTree } from "./inbox-tree";
import { SidebarFooter } from "./sidebar-footer";

export function Sidebar() {
	const [isChatsOpen, setIsChatsOpen] = useState(true);
	const [isCentralOpen, setIsCentralOpen] = useState(true);
	const [isTestInboxOpen, setIsTestInboxOpen] = useState(false);

	return (
		<div className="h-full flex flex-col bg-sidebar">
			<ScrollArea className="h-full px-3 py-4">
				<div className="flex flex-col h-full">
					<WorkspaceSwitcher />

					<SidebarItem icon={Home} label="Home" />

					<SidebarItem
						icon={MessageSquare}
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

					<SidebarItem icon={Plus} label="Add new inbox" disabled />

					<div>
						<SidebarItem icon={Share2} label="Automation" />
						<SidebarItem icon={Users} label="Contacts" expandable />
						<SidebarItem icon={Send} label="Campaigns" expandable />
					</div>
				</div>
			</ScrollArea>
			<div className="mt-auto pb-6.25">
				<SidebarFooter />
			</div>
		</div>
	);
}
