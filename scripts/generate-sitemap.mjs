import { promises as fs } from 'fs';
import { createWriteStream } from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

const ROUTES_DIR = path.resolve('src/routes');
const OUTPUT_FILE = path.resolve('static/sitemap.xml');

const HOSTNAME = 'https://voicely.gozarproductions.com';

const DYNAMIC_PARAMS = {
	bot: ['text', 'ping', 'role', 'translate'],
	section: ['docs', 'privacy', 'terms']
};

/**
 * Expands a SvelteKit route into one or more concrete URLs.
 *
 * Examples:
 *   /[bot]           → /text, /ping, /role, /translate
 *   /[section]       → /docs, /privacy-policy, /terms
 *   /[bot]/[section] → every bot/section combination
 */
function expandSegments(segments) {
	let expandedRoutes = [[]];

	for (const segment of segments) {
		// Route groups such as (marketing) aren't included in the URL.
		if (segment.startsWith('(') && segment.endsWith(')')) {
			continue;
		}

		// Skip named layouts or similar internal directories.
		if (segment.startsWith('@')) {
			return [];
		}

		const dynamicMatch = segment.match(/^\[([^\]]+)\]$/);

		if (dynamicMatch) {
			const parameterName = dynamicMatch[1];
			const values = DYNAMIC_PARAMS[parameterName];

			if (!values?.length) {
				console.warn(`Skipping route: no values configured for [${parameterName}]`);

				return [];
			}

			expandedRoutes = expandedRoutes.flatMap((route) => values.map((value) => [...route, value]));

			continue;
		}

		// Skip unsupported patterns such as [...rest] and [[optional]].
		if (segment.includes('[') || segment.includes(']')) {
			console.warn(`Skipping unsupported dynamic segment: ${segment}`);
			return [];
		}

		expandedRoutes = expandedRoutes.map((route) => [...route, segment]);
	}

	return expandedRoutes.map((route) => (route.length === 0 ? '/' : `/${route.join('/')}`));
}

async function getRoutes(directory, baseDirectory = ROUTES_DIR) {
	const entries = await fs.readdir(directory, {
		withFileTypes: true
	});

	let routes = [];

	for (const entry of entries) {
		const fullPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			routes.push(...(await getRoutes(fullPath, baseDirectory)));
			continue;
		}

		if (entry.name !== '+page.svelte') {
			continue;
		}

		const segments = path
			.relative(baseDirectory, path.dirname(fullPath))
			.split(path.sep)
			.filter(Boolean);

		routes.push(...expandSegments(segments));
	}

	return routes;
}

async function generateSitemap() {
	const discoveredRoutes = await getRoutes(ROUTES_DIR);

	// Remove duplicates and sort the URLs for consistent output.
	const routes = [...new Set(discoveredRoutes)].sort();

	await fs.mkdir(path.dirname(OUTPUT_FILE), {
		recursive: true
	});

	const sitemap = new SitemapStream({
		hostname: HOSTNAME
	});

	const outputStream = createWriteStream(OUTPUT_FILE);

	sitemap.pipe(outputStream);

	for (const route of routes) {
		sitemap.write({
			url: route
		});
	}

	sitemap.end();

	await streamToPromise(sitemap);

	console.log(`Generated static/sitemap.xml with ${routes.length} routes.`);
}

generateSitemap().catch((error) => {
	console.error('Sitemap generation failed:', error);
	process.exitCode = 1;
});
