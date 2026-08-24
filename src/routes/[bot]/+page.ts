import { error } from '@sveltejs/kit';
import { getBot } from '$lib/bots';

export const entries = () => [
	{ bot: 'text' },
	{ bot: 'ping' },
	{ bot: 'role' },
	{ bot: 'translate' }
];

export function load({ params }) {
	const bot = getBot(params.bot);
	if (!bot) error(404, 'Bot not found');
	return { bot };
}
