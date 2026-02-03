"use client";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ThemeToggle = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<motion.button
			onClick={toggleTheme}
			className="p-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-800 dark:hover:to-blue-700 shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-blue-900/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
			whileHover={{ scale: 1.15 }}
			whileTap={{ scale: 0.9 }}
			aria-label="Toggle dark mode"
		>
			<FontAwesomeIcon
				icon={isDark ? faSun : faMoon}
				className="text-lg"
			/>
		</motion.button>
	);
};

export default ThemeToggle;
