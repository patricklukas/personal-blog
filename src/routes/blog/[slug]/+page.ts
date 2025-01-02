import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

interface PostData {
    metadata: Post['meta'];
    default: any;
}

export const load: PageLoad = async ({ params }: { params: { slug: string } }) => {
    try {
        const post = await import(`../${params.slug}.md`) as PostData;
        console.log('Imported Post:', post); // Debugging output
        
        const { title, date } = post.metadata;
        const Content = post.default;

        if (!title || !date) {
            throw new Error(`Metadata is missing or malformed in markdown file: ${params.slug}.md`);
        }

        return {
            Content,
            meta: {
                title,
                date
            }
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
};