import { PageHeader } from "@/components/page/page-header";

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<div>
				<div className="mx-auto max-w-270 px-6">
					<PageHeader
						title="Lorem ipsum"
						count={12}
						description="Lorem ipsum dolar sit amet"
						actionLabel="Lorem ipsum"
					/>
				</div>

				<div className="border-b border-[#f5f5f5]" />
			</div>

			<div className="mx-auto max-w-270 px-6">
				<div className="rounded-[12px] bg-[#d9d9d9] h-53.25" />
			</div>
		</div>
	);
}
