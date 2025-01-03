// src/routes/blog/+page.ts
import type { PageLoad } from './$types';
import { fetchPosts } from '$lib/utils/';

export const load: PageLoad = async () => {
    return {
        posts: await fetchPosts()
    };
};