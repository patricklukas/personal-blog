<script lang="ts">
  import type { PageData } from "./$types";
  import PostList from "$lib/components/PostList.svelte";
  export let data: PageData;
</script>

<svelte:head>
  <title>Pat's Page</title>
  <meta property="og:title" content="Patrick Hein" />
  <meta
    name="description"
    content="Patrick Hein - Advocating for simplicity and the courage to use your own mind"
  />
</svelte:head>

<div class="center stack">
  <div>
    <!-- <div class="sidebar">
      <div class="sidebar-reverse">
        <img src="https://placehold.co/300x300" alt="" /> -->
    <article class="flow">
      <h1>Hey, I'm Patrick Hein</h1>
      <p>
        Entrepreneur, AI Consultant, Permaculturist and advocate for simplicity
        and sustainability.
      </p>
      <ul>
        <li>
          Currently traveling Europe while building Socrates, an approachable
          and incredibly helpful AI coach.
        </li>
        <li>
          Founder of fivehive, an AI consultancy that helps companies build
          AI-powered products and services.
        </li>
      </ul>
      <p>
        Feel free to browse my <a data-sveltekit-preload-code href="/blog"
          >blog</a
        >
        and
        <a data-sveltekit-preload-code href="/about">reading list</a>. Also feel
        free to get in touch with me!
      </p>
    </article>
    <!-- </div>
    </div> -->
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
