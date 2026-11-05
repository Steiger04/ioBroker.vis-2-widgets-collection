import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Placeholder parity guard: every translation keeps exactly the placeholders of its
 * English source (`%s`, `%d`, `{name}`). A translation that drops one silently loses
 * the interpolated value in the UI — e.g. the JSON table's auto tooltip lost the
 * column type and the on/off state in every language but en/de.
 */
const DIR = __dirname;
const readLang = (file: string): Record<string, string> =>
    JSON.parse(readFileSync(join(DIR, file), 'utf8')) as Record<string, string>;
const placeholders = (text: string): string => (text.match(/%[sd]|\{[a-zA-Z]+\}/g) ?? []).sort().join(' ');

const en = readLang('en.json');
const languages = readdirSync(DIR).filter(f => f.endsWith('.json') && f !== 'en.json');

describe('i18n placeholders', () => {
    it.each(languages)('%s keeps the placeholders of every english text', file => {
        const lang = readLang(file);
        const drift = Object.keys(en)
            .filter(key => typeof lang[key] === 'string' && placeholders(lang[key]) !== placeholders(en[key]))
            .map(key => `${key}: "${lang[key]}" (expected ${placeholders(en[key]) || 'none'})`);
        expect(drift).toEqual([]);
    });
});
