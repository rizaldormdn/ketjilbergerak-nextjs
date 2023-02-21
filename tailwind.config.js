/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		// colors: {
		// 	blue: "#1fb6ff",
		// 	pink: "#ff49db",
		// 	orange: "#ff7849",
		// 	green: "#13ce66",
		// 	"gray-dark": "#273444",
		// 	gray: "#8492a6",
		// 	"gray-light": "#d3dce6",
		// },
		extend: {
			backgroundImage: {
				bg1:'url("https://i.scdn.co/image/ab67616d00001e02cb40a585d3c5a53b3d84ef44")',
				bg2:'url("/public/static/images/KB2.png")',
				bg3:'url("/public/static/images/KB3.png")',
				bg4:'url("/public/static/images/KB4.png")',				
			}
		},
	},
	plugins: [],
};
