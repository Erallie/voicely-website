import { error } from '@sveltejs/kit';
import { getBot } from '$lib/bots';

export const entries = () => ['text','ping','role','translate'].flatMap((bot) => ['docs','privacy','terms'].map((section) => ({ bot, section })));

export function load({ params }) {
	const bot = getBot(params.bot);
	if (!bot || !['docs','privacy','terms'].includes(params.section)) error(404, 'Page not found');
	return { bot, section: params.section };
}
