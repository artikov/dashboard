import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="h-screen grid grid-rows-[56px_1fr]">
			<header className="border-b">
				<Header />
			</header>

			<div className="grid grid-cols-[240px_1fr]">
				<aside className="border-r">
					<Sidebar />
				</aside>

				<main className="overflow-auto p-6">
					<div className="mx-auto w-full max-w-270">{children}</div>
				</main>
			</div>
		</div>
	);
}
