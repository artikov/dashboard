import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="h-screen grid grid-cols-[260px_1fr]">
			<aside className="border-r">Sidebar</aside>
			<div className="flex flex-col">
				<header className="h-14 border-b">Header</header>
				<main className="flex-1 overflow-auto p-6">{children}</main>
			</div>
		</div>
	);
}
