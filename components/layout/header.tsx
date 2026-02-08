"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "../icons/SearchIcon";
import { CommandIcon } from "../icons/CommandIcon";
import { BellRingIcon } from "../icons/Communication/BellRingIcon";

export function Header() {
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				searchInputRef.current?.focus();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	return (
		<div className="px-4 py-2 md:py-0 md:h-14 flex flex-col md:flex-row md:items-center gap-3 md:gap-0 bg-(--header) text-white">
			<div className="flex items-center gap-3 md:ml-30 md:mr-24">
				<span className="w-11.25 h-5.5 rounded-[11px] bg-input p-0.75 text-center text-xs text-[#b5b5b5]">
					beta
				</span>
			</div>

			<div className="md:flex-1 md:flex md:justify-center">
				<div className="w-full md:max-w-none md:w-135">
					<label className="flex items-center gap-2 h-9 rounded-[12px] bg-input px-4 text-sm text-white/70 border border-[#404040] cursor-text focus-within:border-white/40">
						<SearchIcon size={18} />

						<input
							ref={searchInputRef}
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
			<div className="flex items-center gap-3 md:min-w-70 md:justify-end">
				<Button className="rounded-[8px] bg-sidebar-primary text-black hover:bg-sidebar-primary/90 font-semibold hidden sm:inline-flex w-30.75 h-8">
					Account plans
				</Button>

				<button className="p-2 rounded-full hover:bg-white/10">
					<BellRingIcon size={20} />
				</button>

				<button className="text-sm text-white hover:text-white/80 hidden sm:inline-flex">
					Support
				</button>

				<div className="h-9 w-9 rounded-full bg-[#d9d9d9] flex items-center justify-center text-sm font-medium text-black">
					KC
				</div>
			</div>
		</div>
	);
}
