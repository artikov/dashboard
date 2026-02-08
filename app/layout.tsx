import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const aspekta = localFont({
	variable: "--font-aspekta",
	src: [
		{
			path: "../public/fonts/Aspekta-500.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Aspekta-600.woff2",
			weight: "600",
			style: "normal",
		},
	],
});

export const metadata: Metadata = {
	title: "Dashboard UI",
	description: "Dashboard UI built with Next.js and Tailwind CSS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${aspekta.variable} antialiased`}>{children}</body>
		</html>
	);
}
