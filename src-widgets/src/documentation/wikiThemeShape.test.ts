/**
 * The theme shape on the wiki pages for the AI assistant against the theme state's description.
 *
 * @remarks
 * The wiki is the second place an external MCP client learns the shape of the theme from
 * (ADR-0115): an instance that existed before the description was added to the theme state has
 * no description on its object, so the pages carry the text for the user to hand to the client.
 * That text is hand-written Markdown and cannot import anything, so this test keeps it from
 * becoming a third truth: both pages quote the description of the theme state word for word.
 * Whether that description is a usable theme shape is checked where it is declared
 * ({@link module:lib/theme/themeStateDescription.test}); the form of the pages is checked by
 * the structure gate next to this file.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { THEME_STATE_ID } from '../lib/constants';
import { themeStateDescription } from '../lib/testing/themeStateDescription';

const DOCS_DIR = __dirname;

/** The description as an MCP client reads it from the theme state's object. */
const description = themeStateDescription();

/**
 * The fenced code blocks of a page, each as one text: its lines joined by a blank. A page breaks
 * the description into lines to stay readable; a client reads the lines as one text.
 */
const codeBlocksOf = (page: string): string[] => {
    const blocks: string[] = [];
    let open: string[] | null = null;
    for (const line of page.split(/\r?\n/)) {
        if (/^\s*```/.test(line)) {
            if (open) {
                blocks.push(open.join(' '));
                open = null;
            } else {
                open = [];
            }
        } else if (open) {
            open.push(line);
        }
    }
    return blocks;
};

describe('theme shape on the wiki pages for the AI assistant (AI channel for MCP clients)', () => {
    it('has a description of the theme state to compare with', () => {
        expect(description).not.toBe('');
    });

    describe.each(['de/De-AI-Assistant.md', 'en/En-AI-Assistant.md'])('%s', path => {
        const page = readFileSync(join(DOCS_DIR, path), 'utf8');

        it('quotes the description of the theme state word for word, as a text to hand to a client', () => {
            expect(codeBlocksOf(page)).toContain(description);
        });

        it('names the state the text is about', () => {
            // The description says "this state": handed over without the object, it needs the id.
            // A boolean, so a failure names the id instead of printing the page.
            expect(page.includes(`\`${THEME_STATE_ID}\``), THEME_STATE_ID).toBe(true);
        });
    });
});
