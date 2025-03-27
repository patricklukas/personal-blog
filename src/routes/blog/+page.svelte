<!-- blog/+page.svelte -->
<script lang="ts">
  import type { PageData } from "./$types";
  import PostList from "$lib/components/PostList.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Patrick Hein - Blog</title>
  <meta property="og:title" content="Patrick Hein" />
  <meta name="description" content="A blog about life" />
</svelte:head>

<div class="stack">
  <h1>Blog</h1>
  <PostList posts={data.posts} />
</div>
