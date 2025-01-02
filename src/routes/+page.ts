// src/routes/+page.ts
import type { PageLoad } from './$types';
import { fetchPosts } from '$lib/utils/fetchPosts';

export const load: PageLoad = async ({ fetch }) => {
    return {
        posts: await fetchPosts(fetch)
    };
};