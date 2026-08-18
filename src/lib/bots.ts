export type Bot = {
	slug: string;
	name: string;
	shortName: string;
	tagline: string;
	description: string;
	icon: string;
	banner: string;
    whatItDoes: string;
	repository: string;
	inviteUrl: string;
	appDirectoryUrl: string;
	accent: string;
	accentSoft: string;
	backgroundStart: string;
	backgroundEnd: string;
	features: { title: string; description: string }[];
};

export const bots: Bot[] = [
	{
		slug: 'text',
		name: 'Voicely Text',
		shortName: 'Text',
		tagline: 'Give every message a voice.',
		description:
			"Speak messages from a voice channel's text chat aloud, with personal voices, accents, regions, and nicknames.",
		icon: '/images/voicely-text.webp',
		banner: '/images/voicely-text-banner.webp',
        whatItDoes: "Built for mutes and talkers alike.",
		repository: 'https://github.com/Erallie/voicely-text',
		inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1290741552158609419',
		appDirectoryUrl: 'https://discord.com/application-directory/1290741552158609419',
		accent: '#c2767a',
		accentSoft: '#dabda2',
		backgroundStart: '#36948d',
		backgroundEnd: '#203153',
		features: [
			{
				title: 'Natural text-to-speech',
				description: 'Read messages from the chat attached to your current voice channel.'
			},
			{
				title: 'Your voice, your way',
				description: 'Choose an accent and region, then save them as your defaults.'
			},
			{
				title: 'Flexible controls',
				description: 'Start autoread, speak one message, or skip messages whenever you need.'
			},
			{
				title: 'Friendly nicknames',
				description: 'Choose how Voicely Text refers to you across Discord or in one server.'
			}
		]
	},
	{
		slug: 'ping',
		name: 'Voicely Ping',
		shortName: 'Ping',
		tagline: 'Know when the conversation starts.',
		description:
			'Get a private notification when a voice channel reaches the number of people you choose.',
		icon: '/images/voicely-ping.webp',
		banner: '/images/voicely-ping-banner.webp',
		whatItDoes: 'Built with flexibility in mind.',
		repository: 'https://github.com/Erallie/voicely-ping',
		inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1290742648377966735',
		appDirectoryUrl: 'https://discord.com/application-directory/1290742648377966735',
		accent: '#e7cf71',
		accentSoft: '#fcfabd',
		backgroundStart: '#db5e68',
		backgroundEnd: '#642621',
		features: [
			{
				title: 'Personal thresholds',
				description: 'Choose how many people should be present before you receive a message.'
			},
			{
				title: 'Multiple channels',
				description: 'Watch several voice channels and configure each one independently.'
			},
			{ title: 'Silent hours', description: 'Set recurring quiet periods in your own time zone.' },
			{
				title: 'Do Not Disturb',
				description: 'Pause all notifications temporarily and resume them when you are ready.'
			}
		]
	},
	{
		slug: 'role',
		name: 'Voicely Role',
		shortName: 'Role',
		tagline: 'Turn a few voices into a full room.',
		description:
			'Let your community know when people gather in voice by notifying a role at the perfect moment.',
		icon: '/images/voicely-role.webp',
		banner: '/images/voicely-role-banner.webp',
		whatItDoes: 'Built to promote server activity.',
	    repository: 'https://github.com/Erallie/voicely-role',
		inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1527731147428073493',
		appDirectoryUrl: 'https://discord.com/application-directory/1527731147428073493',
		accent: '#f9f8e6',
		accentSoft: '#fffe9a',
		backgroundStart: '#472857',
		backgroundEnd: '#383890',
		features: [
			{
				title: 'Configurable role pings',
				description: 'Notify a chosen role when a voice channel reaches your threshold.'
			},
			{
				title: 'Watch every gathering place',
				description: 'Monitor one or many voice channels in the same server.'
			},
			{
				title: 'Live updates',
				description: 'Keep the notification current as people join, leave, and wrap up.'
			},
			{
				title: 'Flexible destinations',
				description: 'Post in a text channel, the voice side chat, or notify everyone.'
			}
		]
	},
	{
		slug: 'translate',
		name: 'Voicely Translate',
		shortName: 'Translate',
		tagline: 'Help every voice be understood.',
		description:
			'Bring multilingual communities closer with translation designed for conversations on Discord.',
		icon: '/images/voicely-translate.webp',
		banner: '/images/voicely-translate-banner.webp',
        whatItDoes: 'Built to suit every server.',
		repository: 'https://github.com/Erallie/voicely-translate',
		inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1535789654974930964',
		appDirectoryUrl: 'https://discord.com/application-directory/1535789654974930964',
		accent: '#c3b142',
		accentSoft: '#e3dc88',
		backgroundStart: '#156c6b',
		backgroundEnd: '#0c5024',
		features: [
			{
				title: 'Supports all BCP 47 language codes',
				description: 'Translate messages in any language, including dialects and regional variations.'
			},
			{
				title: 'Translate multiple languages at once',
				description: 'Choose which languages to translate messages into, and let Voicely Translate do the rest.'
			},
			{
				title: 'Voicely Text integration',
				description: 'Read translated messages aloud in the voice channel with Voicely Text.'
			},
			{
				title: 'An affordable solution',
				description: 'Only pay for the tokens you use, with no monthly subscription required.'
			}
		]
	}
];

export const getBot = (slug: string) => bots.find((bot) => bot.slug === slug);
