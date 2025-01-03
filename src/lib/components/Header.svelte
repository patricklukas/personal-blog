<script>
    import { Rss } from "lucide-svelte";
</script>

<header>
    <nav>
        <a href="/" class="nav-logo">Pat's Site</a>
        <ul>
            <li><a data-sveltekit-preload-code href="/blog">Blog</a></li>
            <li><a data-sveltekit-preload-code href="/about">Resources</a></li>
            <li>|</li>
            <li>
                <a
                    data-sveltekit-preload-code
                    href="/rss.xml"
                    aria-label="Access the RSS feed"><Rss /></a
                >
            </li>
        </ul>
    </nav>
</header>
