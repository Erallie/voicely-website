import { error } from '@sveltejs/kit';
import { getBot } from '$lib/bots';
import { getLegalDocument } from '$lib/legal';
import { marked } from 'marked';

export async function load({ params }) {
	const bot = getBot(params.bot);
	if (!bot || !['docs', 'privacy', 'terms'].includes(params.section)) {
		error(404, 'Page not found');
	}

	const section = params.section as 'docs' | 'privacy' | 'terms';
	const legalMarkdown = getLegalDocument(bot.slug, section);
	const legalHtml = section === 'docs' || !legalMarkdown ? '' : await marked.parse(legalMarkdown);

	return { bot, section, legalHtml };
}
