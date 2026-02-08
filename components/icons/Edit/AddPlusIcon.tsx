import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
	color?: string;
};

export function AddPlusIcon({ size = 20, color = "#B5B5B5", ...props }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5 10H10M10 10H15M10 10V15M10 10V5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
