<script lang="ts">
    import type { PageData } from "./$types";
    import PostList from "$lib/components/PostList.svelte";
    export let data: PageData;
</script>

<svelte:head>
    <title>Pat's Page</title>
    <meta property="og:title" content="Pat's Page" />
    <meta name="description" content="A blog about life" />
</svelte:head>

<div class="center stack">
    <div>
        <div class="sidebar">
            <div class="sidebar-reverse">
                <img src="https://placehold.co/300x300" alt="" />
                <article class="flow">
                    <h1>Welcome to my piece of the web</h1>
                    <p>
                        Visit <a href="https://svelte.dev/docs/kit"
                            >svelte.dev/docs/kit</a
                        > to read the documentation
                    </p>
                </article>
            </div>
        </div>
    </div>
    <hr />
    <div>
        <div class="stack">
            <h2>Latest from the blog</h2>
            <PostList posts={data.posts} />
        </div>
    </div>
    <!-- <hr /> -->
</div>
