"use client"
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
	return (
		<div className="bg-white dark:bg-black text-black dark:text-white min-h-screen w-full">
			<Sidebar />
			{children}
		</div>
	);
}
