/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: {
					bg: "#000000",
					text: "#ffffff",
					secondary: "#1a1a1a",
					border: "#333333",
				},
				primary: {
					light: "#667eea",
					dark: "#667eea",
				},
				accent: {
					cyan: "#06b6d4",
					purple: "#a855f7",
					pink: "#ec4899",
					emerald: "#10b981",
				}
			},
			backgroundImage: {
				"gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				"gradient-cyan": "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
				"gradient-purple": "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
				"gradient-pink": "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
				"gradient-emerald": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
			}
		},
	},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
