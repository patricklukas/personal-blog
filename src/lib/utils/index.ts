import type { Post } from '$lib/types';

export const fetchMarkdownPosts = async (): Promise<Post[]> => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const resolvedPost = await resolver();
            const { metadata } = resolvedPost as { metadata: Post['meta'] };
            const postPath = path.slice(11, -3);

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return allPosts.sort((a, b) => {
        return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
};

export function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}