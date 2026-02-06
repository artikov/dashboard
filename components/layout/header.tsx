import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header className="h-14 px-4 flex items-center justify-between">
			<div className="flex items-center gap-2">
				<span className="text-sm font-medium">Dashboard</span>
			</div>

			<div className="flex-1 px-4 max-w-xl">
				<div className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-muted-foreground">
					<Search className="h-4 w-4" />
					<span>Search</span>
					<span className="ml-auto text-xs">⌘K</span>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<Button variant="ghost" size="icon">
					<Bell className="h-4 w-4" />
				</Button>

				<div className="h-8 w-8 rounded-full bg-muted" />
			</div>
		</header>
	);
}
