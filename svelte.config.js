import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings
			]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			// show site's 404 page +error.svelte
			fallback: '404.html'
		}),
		prerender: {
			entries: ['*']
		},
		paths: {
			base: process.env.PUBLIC_SITE_URL
		}
	}
};

export default config;
