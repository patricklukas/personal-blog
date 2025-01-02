// src/lib/utils/fetchPosts.ts
import type { Post } from '$lib/types';

interface PaginationMeta {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
}

interface FetchPostsResponse {
    data: Post[];
    pagination: PaginationMeta;
}

export async function fetchPosts(
    fetchFn: typeof fetch,
    page: number = 1,
    limit: number = 10
): Promise<FetchPostsResponse> {
    try {
        const response = await fetchFn(`/api/posts?page=${page}&limit=${limit}`);

        if (!response.ok) {
            // Handle HTTP errors
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch posts');
        }

        const data: FetchPostsResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error in fetchPosts:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}