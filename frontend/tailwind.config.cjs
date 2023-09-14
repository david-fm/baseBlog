/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'coral': '#EF8354',
				'ucla-blue': '#467599',
				'erie-black': '#28231C',
				'ghost-white': '#F4F4F9',
				'thistle': '#E5D0E3'
	
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
