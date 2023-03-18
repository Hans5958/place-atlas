module.exports = {
	plugins: [
		require('@fullhuman/postcss-purgecss')({
			content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		}),
		require('cssnano'),
	],
};