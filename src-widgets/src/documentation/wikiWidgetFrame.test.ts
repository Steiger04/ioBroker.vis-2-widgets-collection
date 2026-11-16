/**
 * The Widget-Rahmen on the wiki pages against the table of its settings (ADR-0117).
 *
 * @remarks
 * The eight frame settings have no field default on purpose: vis-2 stores a field's default when
 * a widget is dropped, and a stored value would keep the widget from following the Rahmenvorgabe
 * of the Theme Studio. The wiki tables name a default per field, so they are where a default would
 * come back in words, and where a reader would learn a standard that is not the built-in one. This
 * test keeps the hand-written pages in step with {@link WIDGET_FRAME_SETTINGS}:
 * - the Common settings (`*-Home.md`) show no default for the eight settings and name the
 *   built-in standard in the description;
 * - the Theme Studio page (`*-Theme-Studio.md`) lists the theme path of every setting.
 *
 * Wording is not checked; the form of the pages is checked by the structure gate next to this file.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { WIDGET_FRAME_KEYS, WIDGET_FRAME_SETTINGS } from '../lib/widgetFrame';

const DOCS_DIR = __dirname;

/** The cells of every table row of a page, the separator rows left out. */
const tableRowsOf = (page: string): string[][] =>
    page
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.startsWith('|') && !/^\|\s*:?-/.test(line))
        .map(line =>
            line
                .replace(/^\||\|$/g, '')
                .split('|')
                .map(cell => cell.trim()),
        );

describe.each(['de/De-Home.md', 'en/En-Home.md'])('%s: the frame settings among the Common settings', path => {
    const rows = tableRowsOf(readFileSync(join(DOCS_DIR, path), 'utf8'));

    describe.each(WIDGET_FRAME_KEYS)('%s', key => {
        // The field column ends with the key: "Label `key`".
        const own = rows.filter(cells => cells[0]?.endsWith(`\`${key}\``));

        it('has exactly one row', () => {
            expect(own).toHaveLength(1);
        });

        it('shows no default: the setting erbt', () => {
            // Columns: field, type, default, description.
            expect(own[0]?.[2]).toBe('-');
        });

        it('names the built-in standard in its description', () => {
            const standard = `\`${String(WIDGET_FRAME_SETTINGS[key].standard)}\``;
            expect(own[0]?.[3]?.includes(standard), `${standard} in "${own[0]?.[3]}"`).toBe(true);
        });
    });
});

describe.each(['de/De-Theme-Studio.md', 'en/En-Theme-Studio.md'])('%s: the Widget-Rahmen section', path => {
    const rows = tableRowsOf(readFileSync(join(DOCS_DIR, path), 'utf8'));

    it.each(WIDGET_FRAME_KEYS)('lists the theme path of %s', key => {
        // Columns: setting, theme path, description.
        expect(rows.filter(cells => cells[1] === `\`widgetFrame.${key}\``)).toHaveLength(1);
    });
});
