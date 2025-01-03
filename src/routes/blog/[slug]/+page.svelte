<script>
    import { formatDate } from "$lib/utils";
    export let data;
    const {
        Content,
        meta: { title, date, description },
    } = data;
</script>

<svelte:head>
    <title>Pat's Page - {title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
</svelte:head>

<article class="flow">
    <h1>{title}</h1>
    <small>{formatDate(date)}</small>
    <Content />
</article>
