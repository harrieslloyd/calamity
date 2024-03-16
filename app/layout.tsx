import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Script from "next/script"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="h-screen overflow-y-scroll overflow-x-hidden" lang="en" suppressHydrationWarning>
			<Script src="https://kit.fontawesome.com/ec00d7389a.js"></Script>
			<head>
			<link
				rel="preload"
				href="CollageBig.png"
				as="image"
			/>
			</head>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				{children}
				</Providers>
		</html>
	);
}
