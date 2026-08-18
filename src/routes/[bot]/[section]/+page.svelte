<script lang="ts">
	import { getLegalDocument } from '$lib/legal';
	import { marked } from 'marked';

	let { data } = $props();
	let bot = $derived(data.bot);
	let section = $derived(data.section);
	const titles: Record<string, string> = {
		docs: 'Documentation',
		privacy: 'Privacy Policy',
		terms: 'Terms of Service'
	};
	let description = $derived(
		section === 'docs'
			? `Documentation and support for ${bot.name}.`
			: section === 'privacy'
				? `Privacy information for ${bot.name}.`
				: `Terms of service for ${bot.name}.`
	);
	let legalMarkdown = $derived(getLegalDocument(bot.slug, section));
	let legalHtml = $derived(legalMarkdown ? (marked.parse(legalMarkdown) as string) : '');

	function linkHeadings(node: HTMLElement) {
		const usedIds = new Set<string>();
		const headings = node.querySelectorAll<HTMLElement>(
			'.legal-document h1, .legal-document h2, .legal-document h3, .legal-document h4'
		);

		for (const heading of headings) {
			const baseId =
				heading.textContent
					?.toLowerCase()
					.normalize('NFKD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/^-|-$/g, '') || 'section';
			let id = baseId;
			let suffix = 2;
			while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
			usedIds.add(id);
			heading.id = id;

			const link = document.createElement('a');
			link.href = `#${id}`;
			while (heading.firstChild) link.append(heading.firstChild);
			heading.append(link);
		}

		if (location.hash) {
			requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
		}
	}
</script>

<svelte:head
	><title>{titles[section]} — {bot.name}</title><meta
		name="description"
		content={description}
	/><link
		rel="canonical"
		href="https://voicely.gozarproductions.com/{bot.slug}/{section}/"
	/></svelte:head
>
<main
	style:--bot-accent={bot.accent}
	style:--bot-soft={bot.accentSoft}
	style:--bot-bg-start={bot.backgroundStart}
	style:--bot-bg-end={bot.backgroundEnd}
>
	<header class="page-hero">
		<div class="wrap">
			<a class="back" href="/{bot.slug}/">← {bot.name}</a>
			<p class="eyebrow">{bot.name}</p>
			<h1>{titles[section]}</h1>
		</div>
	</header>
	<article class="content wrap" use:linkHeadings>
		{#if section === 'docs'}
			<p class="lead">
				The latest setup instructions, commands, examples, and troubleshooting notes for {bot.name} live
				alongside the bot's source code.
			</p>
			<section>
				<h2>Start with the official guide</h2>
				<p>
					The repository README is maintained with the bot, so it is the best place to find
					instructions that match the current release. Keeping one authoritative copy also avoids
					stale or duplicated documentation.
				</p>
				<a class="button primary" href="{bot.repository}#readme">Read the guide on GitHub ↗</a>
			</section>
			<section>
				<h2>Need help?</h2>
				<p>
					If something is not working or you would like to suggest a feature, open an issue in the
					repository. Include the command you used, what you expected, and what happened.
				</p>
				<a class="text-link" href="{bot.repository}/issues">View support issues →</a>
			</section>
		{:else}
			<div class="legal-document">{@html legalHtml}</div>
		{/if}
	</article>
</main>

<style>
	.page-hero {
		position: relative;
		overflow: hidden;
		background: radial-gradient(
			circle at 80% 40%,
			color-mix(in srgb, var(--bot-accent) 18%, #11172d),
			#0a1122 62%
		);
		color: white;
		padding: 10rem 0 4rem;
		border-bottom: 3px solid var(--bot-accent);
	}
	.page-hero:after {
		content: '';
		position: absolute;
		width: 360px;
		aspect-ratio: 1;
		border: 1px solid color-mix(in srgb, var(--bot-accent) 42%, transparent);
		border-radius: 50%;
		right: 6vw;
		top: 4rem;
		box-shadow:
			inset 0 0 0 58px transparent,
			0 0 0 58px color-mix(in srgb, var(--bot-accent) 8%, transparent),
			0 0 0 116px color-mix(in srgb, var(--bot-accent) 5%, transparent);
	}
	.back {
		position: relative;
		z-index: 1;
		display: inline-block;
		color: #aeb4c3;
		text-decoration: none;
		margin-bottom: 4rem;
	}
	.page-hero .eyebrow {
		position: relative;
		z-index: 1;
		color: var(--bot-accent);
	}
	.page-hero h1 {
		position: relative;
		z-index: 1;
		font-size: clamp(3.5rem, 8vw, 7rem);
		line-height: 0.9;
		margin: 0.5rem 0;
	}
	.content {
		max-width: 840px;
		padding-top: 5rem;
		padding-bottom: 8rem;
	}
	.lead {
		font-size: clamp(1.5rem, 3vw, 2.1rem);
		line-height: 1.45;
		color: #e0e4ed;
	}
	.content section {
		border-top: 1px solid var(--line);
		margin-top: 3.5rem;
		padding-top: 2rem;
	}
	.content h2 {
		font-size: 2rem;
	}
	.content p {
		line-height: 1.75;
		color: var(--muted);
	}
	.primary {
		background: var(--bot-accent);
		color: #11172d;
		margin-top: 1rem;
	}
	.text-link {
		font-weight: 750;
		color: var(--bot-accent);
	}
	:global(.legal-document h1) {
		font-size: clamp(2rem, 4vw, 3.25rem);
		line-height: 1.1;
		margin: 0 0 1.5rem;
	}
	:global(.legal-document h2) {
		font-size: clamp(1.5rem, 3vw, 2.1rem);
		line-height: 1.2;
		margin: 3rem 0 1rem;
		padding-top: 2rem;
		border-top: 1px solid color-mix(in srgb, var(--bot-accent) 24%, transparent);
	}
	:global(.legal-document h3) {
		font-size: 1.3rem;
		margin: 2rem 0 0.8rem;
	}
	:global(.legal-document h4) {
		font-size: 1.08rem;
		margin: 1.75rem 0 0.7rem;
	}
	:global(.legal-document p),
	:global(.legal-document li) {
		font-size: 1rem;
		line-height: 1.75;
	}
	:global(.legal-document ul),
	:global(.legal-document ol) {
		padding-left: 1.4rem;
		margin: 1rem 0 1.5rem;
	}
	:global(.legal-document li) {
		padding-left: 0.35rem;
		margin: 0.45rem 0;
	}
	:global(.legal-document a) {
		color: inherit;
		font-weight: 700;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.2em;
	}
	:global(.legal-document :is(h1, h2, h3, h4) > a) {
		color: inherit;
		text-decoration: none;
	}
	:global(.legal-document :is(h1, h2, h3, h4) > a:hover),
	:global(.legal-document :is(h1, h2, h3, h4) > a:focus-visible) {
		text-decoration: underline;
	}
	:global(.legal-document code) {
		padding: 0.15rem 0.38rem;
		border-radius: 0.35rem;
		background: rgba(0, 0, 0, 0.32);
		font-size: 0.9em;
	}
	:global(.legal-document hr) {
		border: 0;
		border-top: 1px solid color-mix(in srgb, var(--bot-accent) 24%, transparent);
		margin: 2.5rem 0;
	}
	:global(.legal-document h1),
	:global(.legal-document h2),
	:global(.legal-document h3),
	:global(.legal-document h4),
	:global(.legal-document p),
	:global(.legal-document li),
	:global(.legal-document a) {
		background: linear-gradient(135deg, var(--bot-accent), var(--bot-soft));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}
	main {
		background: linear-gradient(145deg, var(--bot-bg-start), var(--bot-bg-end));
		color: var(--bot-accent);
	}
	.page-hero {
		background: transparent;
		border-color: var(--bot-accent);
	}
	.page-hero:after {
		border-color: color-mix(in srgb, var(--bot-accent) 40%, transparent);
		box-shadow:
			0 0 0 58px color-mix(in srgb, var(--bot-accent) 9%, transparent),
			0 0 0 116px color-mix(in srgb, var(--bot-accent) 5%, transparent);
	}
	.back,
	.lead,
	.content h2,
	.content p {
		color: var(--bot-accent);
	}
	.back,
	.content p {
		opacity: 0.8;
	}
	.content section {
		border-color: color-mix(in srgb, var(--bot-accent) 35%, transparent);
	}
	main {
		position: relative;
		isolation: isolate;
		background: transparent;
		min-height: 100vh;
	}
	main:before {
		content: '';
		position: fixed;
		z-index: -1;
		inset: 0;
		width: 100vw;
		height: 100vh;
		background:
			linear-gradient(
				rgba(0, 0, 0, var(--bot-background-darken)),
				rgba(0, 0, 0, var(--bot-background-darken))
			),
			linear-gradient(135deg, var(--bot-bg-start), var(--bot-bg-end));
	}
	.page-hero {
		margin: 0 auto;
		padding: 9rem 0 3rem;
		border-bottom-width: 1px;
	}
	.page-hero:after {
		display: none;
	}
	.content {
		margin-top: 2rem;
		margin-bottom: 4rem;
		padding: 3rem;
		background: rgba(5, 7, 11, var(--bot-panel-opacity));
		border: 1px solid color-mix(in srgb, var(--bot-accent) 20%, transparent);
		border-radius: var(--panel-radius);
	}
	.page-hero h1 {
		font-size: clamp(2.8rem, 6vw, 5rem);
	}
	.page-hero h1,
	.page-hero p,
	.back,
	.content h2,
	.content p,
	.text-link {
		background: linear-gradient(135deg, var(--bot-accent), var(--bot-soft));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}
	.primary {
		background: linear-gradient(135deg, var(--bot-accent), var(--bot-soft));
		color: #090b10;
		-webkit-text-fill-color: #090b10;
	}
	@media (max-width: 650px) {
		.content {
			width: calc(100% - 2rem);
			padding: 1.5rem;
		}
	}
</style>
