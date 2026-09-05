import { error } from '@sveltejs/kit';
import { getBot } from '$lib/bots';
import { getLegalDocument } from '$lib/legal';
import { marked, Renderer, type Tokens } from 'marked';

class NewTabRenderer extends Renderer {
	override link(token: Tokens.Link) {
		const link = super.link(token);

		return link.replace(
			'<a ',
			'<a target="_blank" rel="noopener noreferrer" '
		);
	}
}

const markdownRenderer = new NewTabRenderer();

export async function load({ params }) {
	const bot = getBot(params.bot);
	if (!bot || !['docs', 'privacy', 'terms'].includes(params.section)) {
		error(404, 'Page not found');
	}

	const section = params.section as 'docs' | 'privacy' | 'terms';
	const legalMarkdown = getLegalDocument(bot.slug, section);
	const legalHtml =
		section === 'docs' || !legalMarkdown
			? ''
			: await marked.parse(legalMarkdown, { renderer: markdownRenderer });

	return { bot, section, legalHtml };
}
