import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

export function ChevronUpIcon({ size = 18, ...props }: IconProps) {
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
				d="M3.75 11.25L9 6L14.25 11.25"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
