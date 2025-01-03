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
                        Over time, I'll be writing about a wide range of topics,
                        from my projects, philosophy, and life to my work and
                        achievements.
                    </p>
                    <p>
                        Feel free to browse my <a
                            data-sveltekit-preload-code
                            href="/blog">blog</a
                        >
                        and
                        <a data-sveltekit-preload-code href="/about"
                            >reading list</a
                        >. Also feel free to get in touch with me!
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
