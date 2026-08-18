<script lang="ts">
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
	<article class="content wrap">
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
		{:else if section === 'privacy'}
			<p class="lead">
				Your community's trust matters. This page is reserved for the official {bot.name} privacy policy.
			</p>
			<div class="notice">
				<strong>Policy text coming soon</strong>
				<p>
					Add the reviewed policy here before publicly inviting users. Until then, the repository
					remains the source for current legal information.
				</p>
			</div>
			<section>
				<h2>Current policy source</h2>
				<p>Review the legal files maintained with {bot.name} on GitHub.</p>
				<a class="button primary" href="{bot.repository}/tree/main/legal"
					>View legal documents on GitHub ↗</a
				>
			</section>
		{:else}
			<p class="lead">This page is reserved for the official terms governing use of {bot.name}.</p>
			<div class="notice">
				<strong>Terms text coming soon</strong>
				<p>
					Add the reviewed terms here before publicly inviting users. Until then, the repository
					remains the source for current legal information.
				</p>
			</div>
			<section>
				<h2>Current terms source</h2>
				<p>Review the legal files maintained with {bot.name} on GitHub.</p>
				<a class="button primary" href="{bot.repository}/tree/main/legal"
					>View legal documents on GitHub ↗</a
				>
			</section>
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
	.notice {
		background: #111a30;
		border: 1px solid #27334c;
		border-left: 5px solid var(--bot-accent);
		padding: 1.5rem 1.7rem;
		margin: 3rem 0;
	}
	.notice strong {
		font-size: 1.25rem;
		color: var(--bot-accent);
	}
	.notice p {
		margin: 0.6rem 0 0;
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
	.notice {
		background: color-mix(in srgb, var(--bot-bg-end) 72%, transparent);
		border-color: color-mix(in srgb, var(--bot-accent) 30%, transparent);
		border-left-color: var(--bot-accent);
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
	.content strong,
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
	.notice {
		background: rgba(0, 0, 0, calc(var(--bot-panel-opacity) * 0.5));
	}
	@media (max-width: 650px) {
		.content {
			width: calc(100% - 2rem);
			padding: 1.5rem;
		}
	}
</style>
