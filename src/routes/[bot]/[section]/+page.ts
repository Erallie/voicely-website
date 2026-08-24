const sections = ['docs', 'privacy', 'terms'] as const;

export const entries = () =>
	['text', 'ping', 'role', 'translate'].flatMap((bot) =>
		sections.map((section) => ({ bot, section }))
	);
