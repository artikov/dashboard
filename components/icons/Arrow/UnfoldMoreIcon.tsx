import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

export function UnfoldMoreIcon({ size = 20, ...props }: IconProps) {
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
				d="M13.3334 12.5L10.0001 15.8333L6.66675 12.5M6.66675 7.5L10.0001 4.16666L13.3334 7.5"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
