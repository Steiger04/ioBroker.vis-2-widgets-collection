/**
 * The notice model (ADR-0067 addendum 2026-11-03): advisory → one snackbar notice.
 *
 * @module EchartsCollectionWidget/editor/editorNotice.test
 */
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { lossText, noticeOf } from './editorNotice';
import type { StructureLoss } from './structureEvents';

// Echo translator: `key(arg,…)` — makes key choice + parameters visible.
const t = (key: string, ...args: string[]): string => (args.length ? `${key}(${args.join(',')})` : key);
const none: StructureLoss = { series: 0, axes: 0, marks: 0, dataPoint: false, templates: 0 };

describe('lossText', () => {
    it('names every segment as its own clause, in the fixed order', () => {
        expect(lossText({ series: 3, axes: 3, marks: 2, dataPoint: true, templates: 4 }, t)).toBe(
            'echarts_loss_series(3) · echarts_loss_axes(3) · echarts_loss_marks(2) · echarts_loss_datapoint · echarts_loss_templates(4)',
        );
    });

    it('omits zero segments and uses the singular key for one item', () => {
        expect(lossText({ ...none, series: 1, templates: 1 }, t)).toBe(
            'echarts_loss_series_one · echarts_loss_templates_one',
        );
    });

    it('nothing lost → null', () => {
        expect(lossText(none, t)).toBeNull();
    });
});

describe('noticeOf', () => {
    it('an undoable axis death warns with undo', () => {
        expect(noticeOf({ kind: 'axisDeath', names: ['A', 'B'], undoable: true }, t)).toEqual({
            message: 'echarts_axis_died(A, B)',
            severity: 'warning',
            undoable: true,
        });
    });

    it('the payload-vanish death is info-only', () => {
        expect(noticeOf({ kind: 'axisDeath', names: ['A'], undoable: false }, t)).toEqual({
            message: 'echarts_axis_died_info(A)',
            severity: 'info',
            undoable: false,
        });
    });

    it('a unit mismatch warns with undo', () => {
        expect(noticeOf({ kind: 'unitMismatch' }, t)).toEqual({
            message: 'echarts_axis_rebind_unit_mismatch',
            severity: 'warning',
            undoable: true,
        });
    });

    it('a data-path reset reports its loss with undo; an empty loss is no notice', () => {
        expect(noticeOf({ kind: 'dataPathReset', loss: { ...none, dataPoint: true } }, t)).toEqual({
            message: 'echarts_loss_datapoint',
            severity: 'info',
            undoable: true,
        });
        expect(noticeOf({ kind: 'dataPathReset', loss: none }, t)).toBeNull();
    });
});

describe('lossText — whole clauses in every language (no fragment assembly)', () => {
    const langs = ['en', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'uk', 'zh-cn'];
    const keys = ['series', 'axes', 'marks', 'templates'];

    it('the frame key is gone and every counted clause carries its number', () => {
        for (const lang of langs) {
            const dict = JSON.parse(
                readFileSync(new URL(`../../i18n/${lang}.json`, import.meta.url), 'utf8'),
            ) as Record<string, string>;
            expect(dict).not.toHaveProperty('echarts_loss_deleted');
            for (const k of keys) {
                expect(dict[`echarts_loss_${k}`], `${lang} ${k}`).toContain('%s');
                expect(dict[`echarts_loss_${k}_one`], `${lang} ${k}_one`).not.toContain('%s');
            }
            expect(dict.echarts_loss_datapoint, lang).toBeTruthy();
        }
    });
});
