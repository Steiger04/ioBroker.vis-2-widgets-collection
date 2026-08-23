/**
 * Unit tests for the chart-frame resolver (parity Build D, ADR-0056).
 *
 * @module EchartsCollectionWidget/frameStyle.test
 * @remarks
 * The frame is pure CONTAINER CSS around the chart area (never an echarts option) — the resolver
 * is the extracted pure decision function the body + preview both apply (view itself untested,
 * project rule).
 */
import { describe, expect, it } from 'vitest';

import { FRAME_STYLES, resolveFrameCss } from './frameStyle';

describe('resolveFrameCss (parity Build D chart frame, ADR-0056)', () => {
    it('returns null when disabled — or enabled with width 0 (the „ohne Rahmen" switch point)', () => {
        expect(resolveFrameCss({ enabled: false, width: 2 }, '#d')).toBeNull();
        expect(resolveFrameCss({}, '#d')).toBeNull(); // enabled unset = off
        // Width 0 while enabled IS "no frame" (the spec's Weiche), not a 0-px border.
        expect(resolveFrameCss({ enabled: true, width: 0 }, '#d')).toBeNull();
        expect(resolveFrameCss({ enabled: true }, '#d')).toBeNull(); // width unset
    });

    it('defaults the colour to the host divider token (inherit); an explicit colour wins', () => {
        expect(resolveFrameCss({ enabled: true, width: 2 }, '#divider')).toMatchObject({
            borderColor: '#divider',
        });
        expect(resolveFrameCss({ enabled: true, width: 2, color: '#f00' }, '#divider')).toMatchObject({
            borderColor: '#f00',
        });
        // An empty string colour is "cleared back to inherit", not an invalid CSS value.
        expect(resolveFrameCss({ enabled: true, width: 2, color: '' }, '#divider')).toMatchObject({
            borderColor: '#divider',
        });
    });

    it('passes the eight CSS border styles through; an unknown value (legacy blob) falls back to solid', () => {
        for (const style of FRAME_STYLES) {
            expect(resolveFrameCss({ enabled: true, width: 1, style }, '#d')).toMatchObject({
                borderStyle: style,
            });
        }
        expect(resolveFrameCss({ enabled: true, width: 1, style: 'wavy' }, '#d')).toMatchObject({
            borderStyle: 'solid',
        });
        expect(resolveFrameCss({ enabled: true, width: 1 }, '#d')).toMatchObject({
            borderStyle: 'solid', // unset style = the CSS default
        });
    });

    it('emits the px width, padding, and border-box sizing so the chart shrinks inside the frame', () => {
        expect(resolveFrameCss({ enabled: true, width: 3, padding: 8 }, '#d')).toEqual({
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: '#d',
            padding: 8,
            boxSizing: 'border-box',
        });
        // Padding unset/invalid = 0 (no dead margin); numbers arriving as rxData strings coerce.
        expect(resolveFrameCss({ enabled: true, width: 1 }, '#d')).toMatchObject({ padding: 0 });
        expect(resolveFrameCss({ enabled: true, width: '2', padding: '6' }, '#d')).toEqual({
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: '#d',
            padding: 6,
            boxSizing: 'border-box',
        });
    });
});
