import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		'process.env.NODE_ENV': '"production"'
	},
	plugins: [sveltekit()]
};

export default config;
