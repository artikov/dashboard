import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen grid grid-rows-[auto_1fr] font-medium">
			<header className="border-b">
				<Header />
			</header>

			<div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
				<aside className="border-r hidden md:block">
					<Sidebar />
				</aside>

				<main className="overflow-auto">
					<div className="mx-auto w-full px-4 md:px-6">{children}</div>
				</main>
			</div>
		</div>
	);
}
