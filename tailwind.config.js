/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
	theme: {
		typography: (theme) => ({}),
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["light", "night", "winter"],
	},
};
