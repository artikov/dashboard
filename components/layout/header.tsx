"use client";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "../icons/SearchIcon";
import { CommandIcon } from "../icons/CommandIcon";
import { BellRingIcon } from "../icons/Communication/BellRingIcon";

export function Header() {
	return (
		<div className="h-14 px-4 flex items-center bg-(--header) text-white">
			<div className="flex items-center gap-3 ml-30 mr-2">
				<span className="w-11.25 h-5.5 rounded-[11px] bg-input p-0.75 text-center text-xs text-[#b5b5b5]">
					beta
				</span>
			</div>

			<div className="flex-1 flex justify-center">
				<div className="w-full max-w-130">
					<label className="flex items-center gap-2 rounded-[12px] bg-input px-4 py-2 text-sm text-white/70 border border-[#404040] cursor-text focus-within:border-white/40">
						{/* <MagnifyingGlassIcon
							className="h-4.5 w-4.5 shrink-0"
							weight="bold"
						/> */}

						<SearchIcon size={18} />

						<input
							type="text"
							placeholder="Search"
							className="flex-1 bg-transparent outline-none placeholder:text-[#b5b5b5]"
						/>

						<div className="gap-1 hidden sm:flex">
							<span className="text-xs bg-white/10 rounded-[8px] px-1.5 py-0.5 inline-flex items-center justify-center">
								<CommandIcon size={10} />
							</span>
							<span className="text-xs bg-white/10 rounded-[8px] px-1.5 py-0.5">
								K
							</span>
						</div>
					</label>
				</div>
			</div>
			<div className="flex items-center gap-3 min-w-70 justify-end">
				<Button className="rounded-[8px] bg-sidebar-primary text-black hover:bg-sidebar-primary/90 font-semibold">
					Account plans
				</Button>

				<button className="p-2 rounded-full hover:bg-white/10">
					<BellRingIcon size={20} />
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
