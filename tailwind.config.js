/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				tech: {
					dark: "#0F0F0F",
					darker: "#050505",
					grid: "rgba(0, 255, 163, 0.07)",
					"grid-bright": "rgba(0, 255, 163, 0.15)",
					highlight: "#00FFA3",
					purple: "#BD00FF",
					cyan: "#00F0FF",
					"purple-glow": "rgba(189, 0, 255, 0.2)",
					"green-glow": "rgba(0, 255, 163, 0.2)",
				},
			},
			backgroundImage: {
				"tech-grid": `
					linear-gradient(to right, var(--tw-colors-tech-grid) 1px, transparent 1px),
					linear-gradient(to bottom, var(--tw-colors-tech-grid) 1px, transparent 1px)
				`,
				"tech-glow": `
					radial-gradient(circle at 0% 0%, var(--tw-colors-tech-purple-glow) 0%, transparent 50%),
					radial-gradient(circle at 100% 100%, var(--tw-colors-tech-green-glow) 0%, transparent 50%)
				`,
			},
			aspectRatio: {
				"16/9": "16 / 9",
			},
		},
	},
	plugins: [],
};
