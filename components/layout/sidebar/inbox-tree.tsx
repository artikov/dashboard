export function InboxTree() {
	return (
		<div className="ml-4 pl-4 border-l space-y-1">
			{[
				["Unassigned", 20],
				["Assigned to me", 12],
				["Unread", 32],
				["Trash"],
			].map(([label, count]) => (
				<div
					key={label}
					className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-muted"
				>
					<span>{label}</span>
					{typeof count === "number" && (
						<span className="w-6.5 h-5.5 rounded-[11px] text-center p-0.75 text-xs text-black bg-secondary mr-6">
							{count}
						</span>
					)}
				</div>
			))}
		</div>
	);
}
