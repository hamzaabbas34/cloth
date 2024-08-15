/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				anybody: ["Anybody", "sans-serif"], // Ensure 'Anybody' is correctly defined in your font-face
				"Jost-Regular": ["Jost-Regular"], // Ensure 'Jost-Regular' is correctly defined in your font-face
				"Jost-Medium": ["Jost-Medium"],
				"Jost-light": ["Jost-Medium"], // Ensure 'Jost-Medium' is correctly defined in your font-face
			},
			backgroundColor: {
				lightgray: "#D3D3D3",
				textliht: "#666666",
				btnbg: "#F1F1F1",
				bgdark: "#f5f5f5",
			},
		},
	},
	plugins: [],
};
