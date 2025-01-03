<!-- src/lib/components/PostList.svelte -->
<script lang="ts">
    import type { Post } from "$lib/types";
    import { formatDate } from "$lib/utils";

    export let posts: Post[];
</script>

<div class="stack">
    {#each posts as post}
        <div>
            <a
                data-sveltekit-preload-code
                class="no-underline"
                href={post.path}
            >
                <h3>{post.meta.title}</h3>
            </a>
            <small>{formatDate(post.meta.date)}</small>
            <p>{post.meta.description}</p>
            <a data-sveltekit-preload-code href={post.path}
                >Continue reading...</a
            >
        </div>
    {/each}
</div>

<style>
    .no-underline {
        text-decoration: none;
    }
    p {
        --flow-space: var(--s-4);
    }
    a {
        --flow-space: var(--s-1);
    }
</style>
