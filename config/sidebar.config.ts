import { Home, MessageSquare, Inbox, Settings } from "lucide-react";

export type SidebarItem = {
	label: string;
	icon?: React.ElementType;
	count?: number;
};

export type SidebarSection = {
	title?: string;
	items: SidebarItem[];
};

export const sidebarSections: SidebarSection[] = [
	{
		items: [
			{ label: "Home", icon: Home },
			{ label: "Chats", icon: MessageSquare },
		],
	},
	{
		title: "Inbox",
		items: [
			{ label: "Central", count: 12 },
			{ label: "Unassigned", count: 4 },
			{ label: "Assigned to me", count: 3 },
			{ label: "Unread", count: 2 },
			{ label: "Trash" },
		],
	},
	{
		items: [
			{ label: "Automation" },
			{ label: "Contacts" },
			{ label: "Campaigns" },
			{ label: "Settings", icon: Settings },
		],
	},
];
