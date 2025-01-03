// src/lib/utils/posts.ts
import type { Post } from '$lib/types';

/**
 * Fetches and returns all markdown posts sorted by date in descending order.
 *
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts.
 * @throws Will throw an error if fetching posts fails.
 */
export async function fetchPosts(): Promise<Post[]> {
    try {
        const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
        const iterablePostFiles = Object.entries(allPostFiles);

        const allPosts = await Promise.all(
            iterablePostFiles.map(async ([path, resolver]) => {
                const resolvedPost = await resolver();
                const { metadata } = resolvedPost as { metadata: Post['meta'] };
                const postPath = path.slice(11, -3); // Adjust slicing based on your directory structure

                return {
                    meta: metadata,
                    path: postPath
                };
            })
        );

        return allPosts.sort((a, b) => {
            return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}