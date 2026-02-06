import { sidebarSections } from "@/config/sidebar.config";

export function Sidebar() {
	return (
		<aside className="h-full px-3 py-4 text-sm">
			<div className="space-y-6">
				{sidebarSections.map((section, index) => (
					<div key={index}>
						{section.title && (
							<p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
								{section.title}
							</p>
						)}

						<ul className="space-y-1">
							{section.items.map((item, idx) => (
								<li
									key={idx}
									className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-muted cursor-pointer"
								>
									<div className="flex items-center gap-2">
										{item.icon && <item.icon className="h-4 w-4" />}
										<span>{item.label}</span>
									</div>

									{typeof item.count === "number" && (
										<span className="text-xs text-muted-foreground">
											{item.count}
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</aside>
	);
}
