<script lang="ts">
    import type { PageData } from "./$types";
    import PostList from "$lib/components/PostList.svelte";
    export let data: PageData;
</script>

<svelte:head>
    <title>Pat's Page</title>
    <meta property="og:title" content="Pat's Page" />
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
            <PostList posts={data.posts.data} />
        </div>
    </div>
    <hr />
    <div>
        <div class="stack">
            <h2>Latest Projects</h2>
            <article class="flow">
                <h3>Lorem ipsum rules!</h3>
                <div class="sidebar">
                    <div class="sidebar-reverse">
                        <img src="https://placehold.co/200x200" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet orci malesuada, consectetur
                            dolor ac, vulputate quam. Integer pellentesque, nunc
                            eget consequat convallis, erat nunc pulvinar nisl,
                            vitae tincidunt metus neque auctor est. Sed sed
                            lectus sed nunc malesuada viverra. Nulla facilisi.
                            Sed quis elit vitae ipsum vestibulum egestas. Mauris
                            et tortor nec sapien scelerisque eleifend. Sed ac mi
                            et nunc cursus malesuada. Sed consequat, est eu
                            viverra eleifend, nunc urna semper erat, a dignissim
                            dolor leo quis dolor.
                        </p>
                    </div>
                </div>
            </article>
            <article class="flow">
                <h3>Lorem ipsum rules!</h3>
                <div class="sidebar">
                    <div>
                        <img src="https://placehold.co/200x200" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas sit amet orci malesuada, consectetur
                            dolor ac, vulputate quam. Integer pellentesque, nunc
                            eget consequat convallis, erat nunc pulvinar nisl,
                            vitae tincidunt metus neque auctor est. Sed sed
                            lectus sed nunc malesuada viverra. Nulla facilisi.
                            Sed quis elit vitae ipsum vestibulum egestas. Mauris
                            et tortor nec sapien scelerisque eleifend. Sed ac mi
                            et nunc cursus malesuada. Sed consequat, est eu
                            viverra eleifend, nunc urna semper erat, a dignissim
                            dolor leo quis dolor.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</div>
