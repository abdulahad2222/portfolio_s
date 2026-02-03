"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	// Initialize theme from localStorage on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

		setIsDark(shouldBeDark);
		updateTheme(shouldBeDark);
		setIsMounted(true);
	}, []);

	const updateTheme = (dark) => {
		const html = document.documentElement;
		if (dark) {
			html.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			html.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);
		updateTheme(newTheme);
	};

	if (!isMounted) {
		return <>{children}</>;
	}

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme, isMounted }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
};
