import { PageHeader } from "@/components/page/page-header";

export default function DashboardPage() {
	return (
		<>
			<PageHeader
				title="Lorem ipsum"
				count={12}
				description="Manage your conversations and inboxes here"
				actionLabel="Create new"
			/>

			<div className="rounded-lg border h-[400px] flex items-center justify-center">
				Main content area
			</div>
		</>
	);
}
