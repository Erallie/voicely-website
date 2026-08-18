import textPrivacy from '$lib/legal/text/privacy.md?raw';
import textTerms from '$lib/legal/text/terms.md?raw';
import pingPrivacy from '$lib/legal/ping/privacy.md?raw';
import pingTerms from '$lib/legal/ping/terms.md?raw';
import rolePrivacy from '$lib/legal/role/privacy.md?raw';
import roleTerms from '$lib/legal/role/terms.md?raw';
import translatePrivacy from '$lib/legal/translate/privacy.md?raw';
import translateTerms from '$lib/legal/translate/terms.md?raw';

const legalDocuments: Record<string, { privacy: string; terms: string }> = {
	text: { privacy: textPrivacy, terms: textTerms },
	ping: { privacy: pingPrivacy, terms: pingTerms },
	role: { privacy: rolePrivacy, terms: roleTerms },
	translate: { privacy: translatePrivacy, terms: translateTerms }
};

export function getLegalDocument(bot: string, section: string) {
	if (section !== 'privacy' && section !== 'terms') return '';
	return legalDocuments[bot]?.[section] ?? '';
}
