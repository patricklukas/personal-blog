<!-- src/lib/components/PostList.svelte -->
<script lang="ts">
    import type { Post } from "$lib/types";
    import { formatDate } from "$lib/utils";

    export let posts: Post[];
</script>

<div class="stack">
    {#each posts as post}
        <article class="flow">
            <a class="no-underline" href={post.path}>
                <h3>{post.meta.title}</h3>
                <small>{formatDate(post.meta.date)}</small>
            </a>
            <p>{post.meta.description}</p>
            <p>
                <a href={post.path}>Continue reading...</a>
            </p>
        </article>
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
