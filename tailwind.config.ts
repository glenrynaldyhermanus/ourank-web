import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#E6F1E0",
					100: "#BFD8B8",
					200: "#9BB49C",
					300: "#7A8C7F",
					400: "#4D5C51",
					500: "#2F3E34",
				},
			},
		},
	},
	plugins: [],
};
export default config;
