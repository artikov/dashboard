"use client";
import { MagnifyingGlassIcon, BellRingingIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<div className="h-14 px-4 flex items-center bg-(--header) text-white">
			<div className="flex items-center gap-3 ml-34 mr-2">
				<span className="w-11.25 h-5.5 rounded-full bg-input p-0.75 text-center text-xs font-medium text-[#b5b5b5]">
					beta
				</span>
			</div>

			<div className="flex-1 flex justify-center">
				<div className="w-full max-w-130">
					<div className="flex items-center gap-2 rounded-full bg-input px-4 py-2 text-sm text-white/70">
						<MagnifyingGlassIcon className="h-4.5 w-4.5" />
						<span className="flex-1">Search</span>
						<div className="gap-1 hidden sm:flex">
							<span className="text-xs bg-white/10 rounded-xl px-1.5 py-0.5">
								⌘
							</span>
							<span className="text-xs bg-white/10 rounded-xl px-1.5 py-0.5">
								K
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3 min-w-70 justify-end">
				<Button className="bg-primary text-black hover:bg-primary/90">
					Account plans
				</Button>

				<button className="p-2 rounded-full hover:bg-white/10">
					<BellRingingIcon className="h-5 w-5" />
				</button>

				<button className="text-sm text-white hover:text-white/80">
					Support
				</button>

				<div className="h-9 w-9 rounded-full bg-[#d9d9d9] flex items-center justify-center text-sm font-medium text-black">
					KC
				</div>
			</div>
		</div>
	);
}
