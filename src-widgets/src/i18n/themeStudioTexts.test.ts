import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Translation guard for the texts of the Theme Studio (`theme_*`): no language shows a text in
 * English. The key sync only adds missing keys, so a text copied over in English stays
 * unnoticed — the studio's colour mode, its colour labels and its font labels did in nine
 * languages. Some of these labels are also what the vis-2 assistant reads of a Theme-Auftrag.
 *
 * A text may equal the English one where it is a name or a word spelled alike; those keys are
 * listed with the reason.
 */
const DIR = __dirname;
const readLang = (file: string): Record<string, string> =>
    JSON.parse(readFileSync(join(DIR, file), 'utf8')) as Record<string, string>;

const en = readLang('en.json');
const languages = readdirSync(DIR).filter(f => f.endsWith('.json') && f !== 'en.json');
const allLanguages = readdirSync(DIR).filter(f => f.endsWith('.json'));

/** Keys whose text may equal the English text in a language, by reason. */
const SAME_AS_ENGLISH: { reason: string; keys: (key: string) => boolean }[] = [
    {
        reason: 'the KI-Leitfaden is English in every language',
        keys: key => key.endsWith('_ai_guide'),
    },
    {
        reason: 'the name of the studio',
        keys: key => ['theme_config_wizard', 'theme_wizard_button', 'theme_wizard_title'].includes(key),
    },
    {
        reason: 'preset names',
        keys: key => key.startsWith('theme_studio_preset_'),
    },
    {
        reason: 'names and sample text of the font picker',
        keys: key =>
            [
                'theme_wizard_typography_font_family_group_system',
                'theme_wizard_typography_font_family_sample',
                'theme_wizard_typography_google_font',
            ].includes(key),
    },
    {
        reason: 'words spelled alike in some languages (Layout, Text, Accents, Surfaces, Auto, Bold, 1 problem)',
        keys: key =>
            [
                'theme_studio_group_accents',
                'theme_studio_group_layout',
                'theme_studio_group_surface',
                'theme_studio_group_text',
                'theme_studio_problems_one',
                'theme_studio_section_status_text',
                'theme_wizard_palette_mode_auto',
                'theme_wizard_typography_weight_bold',
                'theme_wizard_typography_weight_light',
                'theme_wizard_typography_weight_medium',
                'theme_wizard_typography_weight_regular',
            ].includes(key),
    },
];

const maySameAsEnglish = (key: string): boolean => SAME_AS_ENGLISH.some(entry => entry.keys(key));

describe('i18n: the texts of the Theme Studio', () => {
    it.each(languages)('%s leaves no text in English', file => {
        const lang = readLang(file);
        const untranslated = Object.keys(en)
            .filter(key => key.startsWith('theme_') && !maySameAsEnglish(key) && lang[key] === en[key])
            .map(key => `${key}: "${en[key]}"`);

        expect(untranslated).toEqual([]);
    });
});

/**
 * The hint of a Theme-Auftrag that was not confirmed has to be readable inside the element the
 * host gives a widget its assistant places: 200 × 120 px (vis-2 `AiChat/aiTools.ts`
 * newWidgetStyle). The hint is set in the caption size without an icon: 184 px of text width and
 * five lines of 20 px. A Cyrillic letter takes about 7 px there, which makes 26 letters a line;
 * a line break can cost a word, so four of the five lines are counted. A CJK character is twice
 * as wide and counts as two.
 */
const HINT_LETTERS = 100;
const lettersOf = (text: string): number => [...text].reduce((sum, char) => sum + (char > '\u2e7f' ? 2 : 1), 0);

describe('i18n: the hint of a Theme-Auftrag that was not confirmed', () => {
    it.each(allLanguages)('%s is short enough for the element the host gives a placed order', file => {
        const hint = readLang(file).theme_config_wizard_not_confirmed;

        expect(hint).toBeTruthy();
        expect(lettersOf(hint)).toBeLessThanOrEqual(HINT_LETTERS);
    });
});
