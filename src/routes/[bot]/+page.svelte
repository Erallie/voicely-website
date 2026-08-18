<script lang="ts">
	let { data } = $props();
	let bot = $derived(data.bot);
</script>

<svelte:head
	><title>{bot.name} — Voicely</title><meta name="description" content={bot.description} /><link
		rel="canonical"
		href="https://voicely.gozarproductions.com/{bot.slug}/"
	/></svelte:head
>
<main
	style:--bot-accent={bot.accent}
	style:--bot-soft={bot.accentSoft}
	style:--bot-bg-start={bot.backgroundStart}
	style:--bot-bg-end={bot.backgroundEnd}
>
	<section class="bot-hero">
		<img src={bot.banner} alt="{bot.name} banner" />
		<div class="hero-copy wrap">
			<p class="eyebrow">Meet {bot.name}</p>
			<h1>{bot.tagline}</h1>
			<p>{bot.description}</p>
			<div class="actions">
				{#if bot.inviteUrl}
					<a class="button invite" href={bot.inviteUrl} rel="external">Invite {bot.name}</a>
				{:else}
					<span class="button invite unavailable" title="Add inviteUrl in src/lib/bots.ts"
						>Invite link coming soon</span
					>
				{/if}
				{#if bot.appDirectoryUrl}
					<a class="button directory" href={bot.appDirectoryUrl} rel="external"
						>View in App Directory</a
					>
				{:else}
					<span
						class="button directory unavailable"
						title="Add appDirectoryUrl in src/lib/bots.ts">App Directory coming soon</span
					>
				{/if}
			</div>
		</div>
	</section>
	<section class="features wrap">
		<div>
			<p class="eyebrow">What it does</p>
			<h2>Built for the moments that bring people together.</h2>
		</div>
		<div class="feature-list">
			{#each bot.features as feature, index}<article>
					<span>0{index + 1}</span>
					<div>
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
				</article>{/each}
		</div>
	</section>
	<section class="resources">
		<div class="wrap">
			<p class="eyebrow">Keep exploring</p>
			<h2>Everything you need.</h2>
			<div class="resource-grid">
				<a href="/{bot.slug}/docs/"
					><span>01</span>
					<h3>Documentation</h3>
					<p>Learn how to get started and find every command.</p>
					<b>Read the docs →</b></a
				><a href="/{bot.slug}/privacy/"
					><span>02</span>
					<h3>Privacy</h3>
					<p>Understand what data {bot.name} uses and why.</p>
					<b>View privacy policy →</b></a
				><a href="/{bot.slug}/terms/"
					><span>03</span>
					<h3>Terms</h3>
					<p>Read the terms that apply when using the bot.</p>
					<b>View terms →</b></a
				><a href={bot.repository}
					><span>04</span>
					<h3>Open source</h3>
					<p>Browse the code, report an issue, or contribute on GitHub.</p>
					<b>Visit GitHub ↗</b></a
				>
			</div>
		</div>
	</section>
	<section class="next wrap">
		<p>Part of the Voicely family</p>
		<h2>Explore all four bots.</h2>
		<a class="button button-light" href="/#bots">Meet the family →</a>
	</section>
</main>

<style>
	.bot-hero {
		position: relative;
		background: #0a1122;
		color: white;
		padding-bottom: 6rem;
	}
	.bot-hero:after {
		content: '';
		position: absolute;
		inset: auto 0 0;
		height: 220px;
		background: linear-gradient(
			0deg,
			color-mix(in srgb, var(--bot-accent) 9%, #0a1122),
			transparent
		);
		pointer-events: none;
	}
	.bot-hero > img {
		width: 100%;
		height: clamp(270px, 42vw, 560px);
		object-fit: cover;
		display: block;
	}
	.hero-copy {
		position: relative;
		z-index: 1;
		padding-top: 4rem;
	}
	.hero-copy .eyebrow {
		color: var(--bot-accent);
	}
	.hero-copy h1 {
		font-size: clamp(3.5rem, 9vw, 8rem);
		line-height: 0.9;
		max-width: 950px;
		margin: 0.6rem 0 1.8rem;
		color: var(--bot-soft);
	}
	.hero-copy > p:not(.eyebrow) {
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		line-height: 1.6;
		max-width: 630px;
		color: #c9cdd7;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}
	.invite {
		background: var(--bot-accent);
		color: #11172d;
	}
	.directory {
		border: 1px solid #4b5267;
		color: #afb4c2;
		cursor: not-allowed;
	}
	.unavailable {
		cursor: not-allowed;
		filter: saturate(0.35);
		opacity: 0.72;
	}
	.features {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
		padding-top: 8rem;
		padding-bottom: 8rem;
		background: radial-gradient(
			circle at 15% 20%,
			color-mix(in srgb, var(--bot-accent) 8%, transparent),
			transparent 35%
		);
	}
	.features h2 {
		font-size: clamp(2.5rem, 5vw, 4.6rem);
		line-height: 1;
		color: var(--bot-soft);
	}
	.feature-list article {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1.4rem;
		border-top: 1px solid var(--line);
		padding: 1.6rem 0;
	}
	.feature-list span {
		font-size: 0.7rem;
		font-weight: 800;
		color: var(--bot-accent);
	}
	.feature-list h3 {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}
	.feature-list p {
		color: var(--muted);
		line-height: 1.6;
	}
	.resources {
		background: linear-gradient(
			145deg,
			color-mix(in srgb, var(--bot-accent) 17%, #0b1326),
			#0b1326 55%,
			#151d34
		);
		padding: 7rem 0;
	}
	.resources .eyebrow {
		color: var(--bot-accent);
	}
	.resources h2 {
		font-size: clamp(3rem, 7vw, 6rem);
		margin: 0.5rem 0 3rem;
		color: var(--bot-soft);
	}
	.resource-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background: rgba(255, 255, 255, 0.14);
	}
	.resource-grid a {
		background: rgba(9, 15, 32, 0.78);
		padding: 2rem;
		text-decoration: none;
		min-height: 250px;
		display: flex;
		flex-direction: column;
		transition: background 0.2s;
	}
	.resource-grid a:hover {
		background: rgba(9, 15, 32, 0.58);
	}
	.resource-grid span {
		font-size: 0.7rem;
		font-weight: 800;
		color: var(--bot-accent);
	}
	.resource-grid h3 {
		font-size: 2rem;
		margin: 2rem 0 0.6rem;
	}
	.resource-grid p {
		color: #aeb8c9;
		line-height: 1.5;
		max-width: 390px;
	}
	.resource-grid b {
		margin-top: auto;
		color: var(--bot-accent);
	}
	.next {
		text-align: center;
		padding-top: 9rem;
		padding-bottom: 9rem;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--bot-accent) 8%, transparent),
			transparent 60%
		);
	}
	.next > p {
		color: var(--muted);
	}
	.next h2 {
		font-size: clamp(3rem, 7vw, 6rem);
		margin-bottom: 2rem;
		color: var(--bot-soft);
	}
	@media (max-width: 750px) {
		.features {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding-top: 5rem;
			padding-bottom: 5rem;
		}
		.resource-grid {
			grid-template-columns: 1fr;
		}
		.bot-hero > img {
			height: 240px;
		}
		.hero-copy {
			padding-top: 3rem;
		}
	}
	main {
		background: linear-gradient(145deg, var(--bot-bg-start), var(--bot-bg-end));
		color: var(--bot-accent);
	}
	.bot-hero,
	.features,
	.resources,
	.next {
		background: transparent;
	}
	.bot-hero:after {
		display: none;
	}
	.hero-copy h1,
	.features h2,
	.resources h2,
	.next h2,
	.feature-list h3,
	.resource-grid h3 {
		color: var(--bot-accent);
	}
	.hero-copy > p:not(.eyebrow),
	.feature-list p,
	.resource-grid p,
	.next > p {
		color: color-mix(in srgb, var(--bot-accent) 78%, transparent);
	}
	.feature-list article,
	.resource-grid {
		border-color: color-mix(in srgb, var(--bot-accent) 32%, transparent);
	}
	.resource-grid {
		gap: 1px;
		background: color-mix(in srgb, var(--bot-accent) 32%, transparent);
	}
	.resource-grid a {
		background: color-mix(in srgb, var(--bot-bg-end) 84%, transparent);
	}
	.resource-grid a:hover {
		background: color-mix(in srgb, var(--bot-bg-end) 70%, transparent);
	}
	.directory {
		border-color: color-mix(in srgb, var(--bot-accent) 45%, transparent);
		color: color-mix(in srgb, var(--bot-accent) 72%, transparent);
	}
	main {
		position: relative;
		isolation: isolate;
		background: transparent;
		padding-bottom: 4rem;
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
	.bot-hero {
		padding: 8rem 0 2rem;
	}
	.bot-hero > img {
		display: block;
		width: min(1180px, calc(100% - 3rem));
		height: auto;
		aspect-ratio: 680 / 240;
		margin: 0 auto;
		border: 1px solid color-mix(in srgb, var(--bot-accent) 22%, transparent);
		border-radius: var(--panel-radius);
	}
	.hero-copy {
		margin-top: 1rem;
		padding: 2.5rem;
		background: rgba(5, 7, 11, var(--bot-panel-opacity));
		border: 1px solid color-mix(in srgb, var(--bot-accent) 20%, transparent);
		border-radius: var(--panel-radius);
	}
	.hero-copy h1 {
		font-size: clamp(2.8rem, 6vw, 5.5rem);
		line-height: 1;
	}
	.features.wrap {
		margin-top: 1rem;
		padding: 3rem;
		background: rgba(5, 7, 11, var(--bot-panel-opacity));
		border: 1px solid color-mix(in srgb, var(--bot-accent) 20%, transparent);
		border-radius: var(--panel-radius);
	}
	.features h2,
	.resources h2,
	.next h2 {
		font-size: clamp(2.2rem, 4vw, 3.7rem);
		line-height: 1.08;
	}
	.resources {
		padding: 4rem 0;
	}
	.resource-grid {
		gap: 1rem;
		background: transparent;
	}
	.resource-grid a {
		min-height: 220px;
		background: rgba(5, 7, 11, var(--bot-panel-opacity));
		border: 1px solid color-mix(in srgb, var(--bot-accent) 20%, transparent);
		border-radius: var(--panel-radius);
	}
	.resource-grid a:hover {
		background: rgba(5, 7, 11, calc(var(--bot-panel-opacity) + 0.1));
		border-color: color-mix(in srgb, var(--bot-accent) 42%, transparent);
	}
	.next.wrap {
		padding: 4rem 2rem;
		background: rgba(5, 7, 11, var(--bot-panel-opacity));
		border: 1px solid color-mix(in srgb, var(--bot-accent) 20%, transparent);
		border-radius: var(--panel-radius);
	}
	.hero-copy h1,
	.hero-copy p,
	.eyebrow,
	.features h2,
	.feature-list h3,
	.feature-list p,
	.feature-list span,
	.resources h2,
	.resource-grid h3,
	.resource-grid p,
	.resource-grid span,
	.resource-grid b,
	.next h2,
	.next p {
		background: linear-gradient(135deg, var(--bot-accent), var(--bot-soft));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}
	.invite,
	.next .button-light {
		background: linear-gradient(135deg, var(--bot-accent), var(--bot-soft));
		color: #090b10;
		-webkit-text-fill-color: #090b10;
	}
	@media (max-width: 750px) {
		.bot-hero > img {
			width: calc(100% - 2rem);
			height: auto;
		}
		.hero-copy,
		.features.wrap {
			width: calc(100% - 2rem);
			padding: 1.5rem;
		}
	}
</style>
