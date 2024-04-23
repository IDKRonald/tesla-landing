/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {},
		fontSize:{
			'4xl':'2.5rem',
		},
		minWidth:{
			'50':'12.5rem'
		},
		animation: {
			'spin-slow': 'spin 3s linear infinite',
		  }

	},
	plugins: [],
}
