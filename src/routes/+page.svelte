<script lang="ts">
	import { bots } from '$lib/bots';
</script>

<svelte:head
	><title>Voicely Bots — Text-to-speech, alerts, and translation</title><meta
		name="description"
		content="Voicely makes Discord voice chat easier to join, follow, and understand—with text-to-speech, personal and server-wide voice notifications, and cost-friendly live translation."
	/><link rel="canonical" href="https://voicely.gozarproductions.com/" />

	<meta property="og:title" content="Voicely Bots — Text-to-speech, alerts, and translation" />
	<meta
		property="og:description"
		content="Voicely makes Discord voice chat easier to join, follow, and understand—with text-to-speech, personal and server-wide voice notifications, and cost-friendly live translation."
	/>
	<meta
		property="og:image"
		content="https://voicely.gozarproductions.com/images/preview-image.webp"
	/>
	<meta property="og:image:width" content="1731" />
	<meta property="og:image:height" content="909" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:url" content="https://voicely.gozarproductions.com/" />
	<meta property="og:site_name" content="Voicely Bots" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Voicely Bots — Text-to-speech, alerts, and translation" />
	<meta
		name="twitter:description"
		content="Voicely makes Discord voice chat easier to join, follow, and understand—with text-to-speech, personal and server-wide voice notifications, and cost-friendly live translation."
	/>
	<meta
		name="twitter:image"
		content="https://voicely.gozarproductions.com/images/preview-image.webp"
	/>
</svelte:head>

<main>
	<section class="hero wrap">
		<div class="hero-copy">
			<span class="status"><i></i> Voicely Discord bots</span>
			<h1>Enhance your voice chat.<br />Speak with ease.</h1>
			<p>
				Voicely makes Discord voice chat easier to join, follow, and understand—with text-to-speech,
				personal and server-wide voice notifications, and cost-friendly live translation.
			</p>
			<a class="primary-action" href="#bots">Browse bots</a>
		</div>
		<div class="preview" aria-label="Voicely bot directory preview">
			<div class="preview-bar"><span></span><span></span><span></span><b>voicely / bots</b></div>
			{#each bots as bot (bot.slug)}<div
					class="preview-row"
					style:--accent={bot.accent}
					style:--accent-soft={bot.accentSoft}
				>
					<img src={bot.icon} alt="" />
					<div><strong>{bot.name}</strong><small>{bot.tagline}</small></div>
					<i></i>
				</div>{/each}
		</div>
	</section>

	<section class="catalog wrap" id="bots">
		<header>
			<div>
				<span class="section-label">Bot directory</span>
				<h2>Find the right bot for your voice chat.</h2>
			</div>
			<p>
				Speak through text, know when people gather, invite more members to join, or translate
				conversations without a monthly subscription.
			</p>
		</header>
		<div class="bot-grid">
			{#each bots as bot (bot.slug)}<a
					class="bot-card"
					href="/{bot.slug}/"
					style:--accent={bot.accent}
					style:--accent-soft={bot.accentSoft}
					style:--bg-start={bot.backgroundStart}
					style:--bg-end={bot.backgroundEnd}
					><div class="banner"><img src={bot.banner} alt="" /></div>
					<div class="card-body">
						<img class="avatar" src={bot.icon} alt="{bot.name} logo" />
						<div class="title-line">
							<h3>{bot.name}</h3>
							<span>View bot →</span>
						</div>
						<p>{bot.description}</p>
						<div class="tags"><span>{bot.tagline}</span></div>
					</div></a
				>{/each}
		</div>
	</section>

	<section class="gozar">
		<div class="wrap">
			<div>
				<span class="section-label">The team behind Voicely</span>
				<h2>Built by Gozar Productions.</h2>
			</div>
			<a href="https://GozarProductions.com" rel="external">Visit Gozar Productions ↗</a>
		</div>
	</section>
</main>

<style>
	main {
		background: #0f1117;
		color: #e6e9ef;
	}
	.hero {
		min-height: 760px;
		padding-top: 9rem;
		padding-bottom: 6rem;
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 6rem;
		align-items: center;
	}
	.status,
	.section-label {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #9aa1ad;
		font-weight: 700;
	}
	.status i {
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: #3ba55c;
		margin-right: 0.45rem;
		box-shadow: 0 0 0 4px rgba(59, 165, 92, 0.12);
	}
	.hero h1 {
		font-size: clamp(3.5rem, 6vw, 6rem);
		line-height: 1.02;
		letter-spacing: -0.055em;
		margin: 1.3rem 0 1.5rem;
	}
	.hero-copy > p {
		max-width: 590px;
		color: #aeb4bf;
		font-size: 1.15rem;
		line-height: 1.7;
	}
	.primary-action {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.9rem 1.2rem;
		border-radius: calc(var(--panel-radius) * 0.7);
		background: #5865f2;
		color: white;
		text-decoration: none;
		font-weight: 700;
	}
	.preview {
		background: #181b23;
		border: 1px solid #2a2e39;
		border-radius: var(--panel-radius);
		box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
		overflow: hidden;
	}
	.preview-bar {
		height: 46px;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0 1rem;
		background: #13151b;
		border-bottom: 1px solid #292d37;
	}
	.preview-bar > span {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: #343946;
	}
	.preview-bar b {
		font-size: 0.72rem;
		color: #7e8591;
		margin-left: 0.5rem;
		font-weight: 600;
	}
	.preview-row {
		display: grid;
		grid-template-columns: 42px 1fr auto;
		gap: 0.85rem;
		align-items: center;
		padding: 1rem 1.1rem;
		border-bottom: 1px solid #252933;
	}
	.preview-row:last-child {
		border: 0;
	}
	.preview-row img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
	}
	.preview-row strong,
	.preview-row small {
		display: block;
	}
	.preview-row strong {
		font-size: 0.9rem;
	}
	.preview-row small {
		color: #747c89;
		font-size: 0.72rem;
		margin-top: 0.2rem;
	}
	.preview-row > i {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--accent), var(--accent-soft));
	}
	.catalog {
		padding-top: 7rem;
		padding-bottom: 8rem;
	}
	.catalog > header {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 3rem;
		margin-bottom: 2.5rem;
	}
	.catalog h2,
	.gozar h2 {
		font-size: clamp(2rem, 4vw, 3.5rem);
		margin: 0.65rem 0 0;
	}
	.catalog header > p {
		color: #9198a5;
		max-width: 360px;
		line-height: 1.6;
	}
	.bot-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.bot-card {
		overflow: hidden;
		background: #181b23;
		border: 1px solid #2a2e39;
		border-radius: var(--panel-radius);
		text-decoration: none;
		transition:
			border-color 0.18s,
			transform 0.18s;
	}
	.bot-card:hover {
		border-color: #4a5060;
		transform: translateY(-2px);
	}
	.banner {
		height: 160px;
		background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
		overflow: hidden;
	}
	.banner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card-body {
		position: relative;
		padding: 2.2rem 1.4rem 1.4rem;
	}
	.avatar {
		position: absolute;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		left: 1.4rem;
		top: -36px;
		border: 5px solid #181b23;
	}
	.title-line {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: center;
	}
	.title-line h3 {
		font-size: 1.35rem;
		margin: 0;
	}
	.title-line span {
		font-size: 0.75rem;
		font-weight: 700;
		background: linear-gradient(135deg, var(--accent), var(--accent-soft));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}
	.card-body > p {
		color: #969eaa;
		line-height: 1.55;
		min-height: 3em;
		margin: 1rem 0;
	}
	.tags span {
		display: inline-block;
		background: #222631;
		color: #aeb5c0;
		border-radius: calc(var(--panel-radius) * 0.45);
		padding: 0.45rem 0.55rem;
		font-size: 0.7rem;
	}
	.gozar {
		background: #15181f;
		border-top: 1px solid #272b35;
		padding: 5rem 0;
	}
	.gozar .wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
	}
	.gozar a {
		border: 1px solid #3a3f4b;
		border-radius: calc(var(--panel-radius) * 0.7);
		padding: 0.85rem 1rem;
		text-decoration: none;
		font-weight: 700;
	}
	@media (max-width: 800px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 3rem;
			min-height: 0;
		}
		.catalog > header,
		.gozar .wrap {
			align-items: flex-start;
			flex-direction: column;
		}
		.bot-grid {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 520px) {
		.hero {
			padding-top: 8rem;
		}
		.preview {
			display: none;
		}
		.banner {
			height: 125px;
		}
	}
</style>
