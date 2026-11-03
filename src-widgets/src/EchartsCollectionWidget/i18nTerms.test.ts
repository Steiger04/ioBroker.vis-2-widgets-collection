import { describe, expect, it } from 'vitest';
import de from '../i18n/de.json';
import en from '../i18n/en.json';

/**
 * Term drift guard for the chart configurator texts (spec echarts-configurator-review,
 * ticket 02 / finding C2). Every thing has exactly one name in the UI; the banned
 * synonyms below must not creep back into any `echarts_*` value. Basis for the JSON
 * terms is the glossary entry **Payload-Familie** in CONTEXT.md: the Datenpunkt is the
 * state (OID), the Payload its JSON content — never „Dokument".
 *
 * Add a pattern when a new term is pinned; each entry names the replacement so a red
 * run says what to write instead.
 */
interface Banned {
    pattern: RegExp;
    use: string;
}

const BANNED: Record<'de' | 'en', Banned[]> = {
    de: [
        { pattern: /Dokument/, use: 'Payload (JSON-Inhalt) bzw. Datenpunkt (State)' },
        { pattern: /Label/, use: 'Beschriftung' },
        { pattern: /Strichfarbe|[Ss]triche\b/, use: 'Ticks / Tick-Farbe / Zwischen-Ticks' },
        { pattern: /Padding|Rahmenabstand/, use: 'Innenabstand' },
        { pattern: /Dezimalstellen/, use: 'Nachkommastellen' },
        { pattern: /Achsname|Achszeiger/, use: 'Achsenname / Achsenzeiger' },
        { pattern: /Nullwerte|Null-Lücken|NULL-Behandlung/, use: 'Null-Werte' },
        { pattern: /^erben|Diagramm-Einstellung erben/, use: 'Erben (→ %s)' },
        { pattern: /^Keins$|^Ohne$/, use: '„Aus“ (Schalter) bzw. „Keine“ (Auswahl)' },
        { pattern: /\b(wähle|gestalte|verstecke|prüfe|setze|nutze|klicke)\b/, use: 'Infinitiv statt Du-Anrede' },
    ],
    en: [
        { pattern: /[Ss]plit line/, use: 'Grid line' },
        { pattern: /\b[Dd]ocument/, use: 'payload (JSON content) / data point (state)' },
        { pattern: /NULL handling|Null gaps/, use: 'Null values' },
        { pattern: /^inherit/, use: 'Inherit (→ %s)' },
    ],
};

function hits(dict: Record<string, string>, banned: Banned[]): string[] {
    const out: string[] = [];
    for (const [key, value] of Object.entries(dict)) {
        if (!key.startsWith('echarts_')) {
            continue;
        }
        for (const { pattern, use } of banned) {
            if (pattern.test(value)) {
                out.push(`${key}: "${value}" — use ${use}`);
            }
        }
    }
    return out;
}

describe('echarts_* texts — banned synonyms (C2 term drift)', () => {
    it('de uses one name per thing', () => {
        expect(hits(de as Record<string, string>, BANNED.de)).toEqual([]);
    });

    it('en uses one name per thing', () => {
        expect(hits(en as Record<string, string>, BANNED.en)).toEqual([]);
    });

    it('the guard itself fires on a banned synonym', () => {
        expect(hits({ echarts_probe: 'Spalten des Dokuments' }, BANNED.de)).toHaveLength(1);
        expect(hits({ other_probe: 'Spalten des Dokuments' }, BANNED.de)).toHaveLength(0);
    });
});
