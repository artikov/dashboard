import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

export function ChevronDownIcon({ size = 18, ...props }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M14.25 6.75L9 12L3.75 6.75"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
