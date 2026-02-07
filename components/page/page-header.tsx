import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type PageHeaderProps = {
	title: string;
	count?: number;
	description?: string;
	actionLabel?: string;
};

export function PageHeader({
	title,
	count,
	description,
	actionLabel,
}: PageHeaderProps) {
	return (
		<div className="mb-6 flex items-start justify-between gap-4">
			<div>
				<div className="flex items-center gap-2">
					<h1 className="text-2xl font-semibold">{title}</h1>

					{typeof count === "number" && (
						<Badge variant="secondary">{count}</Badge>
					)}
				</div>

				{description && (
					<p className="mt-1 text-sm text-muted-foreground">{description}</p>
				)}
			</div>

			{actionLabel && <Button>{actionLabel}</Button>}
		</div>
	);
}
