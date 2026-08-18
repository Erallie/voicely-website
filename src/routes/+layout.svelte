<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<meta name="theme-color" content="#11172d" />
</svelte:head>

<header class="site-header">
	<a class="brand" href="/" aria-label="Voicely home"
		><img class="brand-mark" src={favicon} alt="" /><span>Voicely</span></a
	>
	<nav aria-label="Main navigation">
		<a href="/#bots">Bots</a><a href="https://GozarProductions.com" rel="external"
			>Gozar Productions ↗</a
		>
	</nav>
</header>
{@render children()}
<footer>
	<div class="wrap footer-inner">
		<div>
			<a class="brand" href="/"><img class="brand-mark" src={favicon} alt="" /><span>Voicely</span></a>
			<p>Thoughtful Discord bots for more connected communities.</p>
		</div>
		<div>
			<p class="footer-label">The family</p>
			<a href="/text/">Text</a><a href="/ping/">Ping</a><a href="/role/">Role</a><a
				href="/translate/">Translate</a
			>
		</div>
		<div>
			<p class="footer-label">Created by</p>
			<a href="https://GozarProductions.com" rel="external">Gozar Productions ↗</a>
		</div>
	</div>
	<p class="copyright wrap">© {new Date().getFullYear()} Gozar Productions</p>
</footer>

<style>
	:global(:root) {
		/* Easy visual controls: adjust these three values to retune the entire site. */
		--panel-radius: 20px;
		--bot-background-darken: 0.48;
		--bot-panel-opacity: 0.58;
		--paper: #090f20;
		--ink: #f7f4ed;
		--muted: #aab4c6;
		--line: #29344b;
		--coral: #df7d84;
		--sans:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		font-family: var(--sans);
		color: var(--ink);
		background: var(--paper);
		font-synthesis: none;
	}
	:global(*) {
		box-sizing: border-box;
	}
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		margin: 0;
		background: var(--paper);
	}
	:global(a) {
		color: inherit;
	}
	:global(h1),
	:global(h2),
	:global(h3),
	:global(p) {
		margin-top: 0;
	}
	:global(h1),
	:global(h2),
	:global(h3) {
		letter-spacing: -0.045em;
	}
	:global(.wrap) {
		width: min(1180px, calc(100% - 3rem));
		margin-inline: auto;
	}
	:global(.eyebrow) {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--coral);
	}
	:global(.button) {
		display: inline-flex;
		align-items: center;
		gap: 0.9rem;
		padding: 1rem 1.25rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 750;
		transition:
			transform 0.2s,
			background 0.2s;
	}
	:global(.button:hover) {
		transform: translateY(-2px);
	}
	:global(.button-light) {
		background: linear-gradient(135deg, #d8737e, #e9ca92);
		color: #10182b;
	}
	.site-header {
		position: absolute;
		z-index: 20;
		top: 0;
		left: 0;
		right: 0;
		width: min(1180px, calc(100% - 3rem));
		margin: auto;
		padding: 1.4rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.13);
	}
	.brand {
		display: inline-flex;
		gap: 0.65rem;
		align-items: center;
		text-decoration: none;
		font-weight: 850;
		letter-spacing: -0.03em;
	}
	.brand-mark {
		display: block;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0 0 22px rgba(223, 125, 132, 0.25);
	}
	.site-header nav {
		display: flex;
		gap: 1.7rem;
	}
	.site-header nav a {
		font-size: 0.86rem;
		text-decoration: none;
		color: #c1cad8;
	}
	footer {
		background: #060b18;
		color: #f6f2e9;
		padding: 5rem 0 1.4rem;
		border-top: 1px solid #202a41;
	}
	.footer-inner {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 3rem;
	}
	.footer-inner > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
	.footer-inner p {
		color: #9ca2b3;
		max-width: 330px;
		line-height: 1.5;
	}
	.footer-inner a:not(.brand) {
		color: #d5d7df;
		text-decoration: none;
	}
	.footer-label {
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: 0.68rem;
	}
	.copyright {
		border-top: 1px solid #293047;
		margin-top: 4rem;
		padding-top: 1.4rem;
		color: #777e91;
		font-size: 0.75rem;
	}
	@media (max-width: 650px) {
		.site-header nav a:first-child {
			display: none;
		}
		.site-header nav {
			gap: 0.5rem;
		}
		.site-header {
			width: calc(100% - 2rem);
		}
		:global(.wrap) {
			width: calc(100% - 2rem);
		}
		.footer-inner {
			grid-template-columns: 1fr 1fr;
		}
		.footer-inner > div:first-child {
			grid-column: 1/-1;
		}
	}
</style>
