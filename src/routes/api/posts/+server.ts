// src/routes/api/posts/+server.ts
import { fetchMarkdownPosts } from '$lib/utils';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Post } from '$lib/types';

export const GET: RequestHandler = async ({ url }) => {
    try {
        // Fetch all posts
        const allPosts: Post[] = await fetchMarkdownPosts();

        // Retrieve pagination parameters from query string
        const pageParam = url.searchParams.get('page');
        const limitParam = url.searchParams.get('limit');

        // Parse and validate 'page' parameter (default to 1 if invalid or not provided)
        let page = parseInt(pageParam || '1', 10);
        if (isNaN(page) || page < 1) {
            page = 1;
        }

        // Parse and validate 'limit' parameter (default to 10 if invalid or not provided)
        let limit = parseInt(limitParam || '10', 10);
        if (isNaN(limit) || limit < 1) {
            limit = 10;
        }

        const totalPosts = allPosts.length;
        const totalPages = Math.ceil(totalPosts / limit);

        // Adjust page if it exceeds totalPages
        if (page > totalPages) {
            page = totalPages;
        }

        // Calculate the starting and ending indices for slicing
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        // Slice the posts array to get the paginated posts
        const paginatedPosts = allPosts.slice(startIndex, endIndex);

        // Prepare the response with pagination metadata
        const response = {
            data: paginatedPosts,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                pageSize: limit,
                totalItems: totalPosts
            }
        };

        return json(response, { status: 200 });
    } catch (err) {
        console.error('Error fetching posts:', err);

        // You can customize the error message based on the type of error
        throw error(500, 'Failed to fetch posts. Please try again later.');
    }
};