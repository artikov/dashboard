"use client";
import { Button } from "@/components/ui/button";
import { AddPlusIcon } from "../icons/Edit/AddPlusIcon";

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
		<div className="py-4">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2">
						<h1 className="text-lg font-semibold">{title}</h1>

						{typeof count === "number" && (
							<span className="text-sm text-[#b5b5b5]">({count})</span>
						)}
					</div>

					{description && (
						<span className="text-sm text-(--header)">{description}</span>
					)}
				</div>

				{/* Right */}
				{actionLabel && (
					<Button className="bg-(--header) text-white hover:bg-black/90 font-semibold rounded-[8px]">
						<AddPlusIcon size={20} color="#ffffff" className="size-5" />
						{actionLabel}
					</Button>
				)}
			</div>
		</div>
	);
}
