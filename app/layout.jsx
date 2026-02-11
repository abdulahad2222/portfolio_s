import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
	title: "Shahid Ansari | Portfolio",

	description:
		"My name is Shahid Ansari, I'm a PHP Laravel Developer passionate about building secure, scalable, and high-performance web applications.",

	author: "Shahid Ansari",
	siteUrl: "https://www.alvalens.my.id",
	applicationName: "Alvalens",

	keywords: [
		"shahid",
		"ansari",
		"shahid ansari",
		"shahid ansari portfolio",
		"laravel developer",
		"php developer",
		"backend developer",

	],

	openGraph: {
		type: "website",
		url: "#",
		title: "Shahid Ansari | Portfolio",
		site_name: "Shahid | Portfolio",
		description: "My name is Shahid Ansari, This is my portfolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Shahid Portfolio",
			},
		],
		site_name: "Shahid | Portfolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
