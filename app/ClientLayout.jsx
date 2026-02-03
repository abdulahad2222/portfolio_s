"use client";

import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import Navbar from "@/components/Navbar";
import Chat from "@/components/Chat";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({ children }) {
	return (
		<ThemeProvider>
			<ClientTopProgressBar />
			<Navbar />
			{children}
			<Chat />
			<Analytics />
		</ThemeProvider>
	);
}
