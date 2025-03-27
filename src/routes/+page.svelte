<script lang="ts">
  import type { PageData } from "./$types";
  import PostList from "$lib/components/PostList.svelte";
  export let data: PageData;
</script>

<svelte:head>
  <title>Patrick Hein</title>
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
        a stay-at-home Gamer turned Entrepreneur, AI Consultant, Permaculturist
        and advocate for simplicity and sustainability. Happy you're here!
      </p>
      <ul>
        <li>
          Currently traveling Europe in my van while building <a
            href="https://socratesai.eu">Socrates</a
          >, an approachable and incredibly helpful AI coach.
        </li>
        <li>
          Founded fivehive in 2024, an AI consultancy that helps companies build
          AI-powered products and services.
        </li>
        <li>
          3 Years of Data Science and Machine Learning at <a
            href="https://finanzguru.de/index.html">Finanzguru</a
          >, one of the
          <a href="https://finanzguru.de/magazin/dhdl-2-8/ios.html"
            >most successful Fintech startups of Europe</a
          >
        </li>
        <li>
          A year of Data Engineering at <a href="https://ihaus.com/">iHaus AG</a
          >, an innovative IOT company from Munich.
        </li>
        <li>
          MSc Computer Science Graduate of the <a href="https://www.tum.de/"
            >Technical University of Munich</a
          >
        </li>
      </ul>
      <p>
        In my <a data-sveltekit-preload-code href="/blog">blog</a> you'll find
        my thoughts and ideas on life, technology, and the environment we live
        in. Most articles are short and to the point, I will not waste your time
        - or mine. Check out my
        <a data-sveltekit-preload-code href="/resources">reading list</a> if you're
        looking for a great book to read. Also feel free to get in touch with me!
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
