import { fetchPosts } from '$lib/utils';
import type { Post } from '$lib/types';
// import type { RequestHandler } from './$types';
import { PUBLIC_SITE_URL, PUBLIC_SITE_TITLE, PUBLIC_SITE_DESCRIPTION } from '$env/static/public';

// Replace the process.env calls with:
const siteURL = PUBLIC_SITE_URL;
const siteTitle = PUBLIC_SITE_TITLE;
const siteDescription = PUBLIC_SITE_DESCRIPTION;

export const prerender = true;

export const GET = async () => {
    const allPosts = await fetchPosts();
    const body = render(allPosts);

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml'
    };

    return new Response(body, {
        status: 200,
        headers
    });
};

const render = (posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
        .map(
            (post) => `<item>
<guid isPermaLink="true">${siteURL}${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}${post.path}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
        )
        .join('')}
</channel>
</rss>
`;