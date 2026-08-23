/**
 * Unit tests for the moment-based Time format core (ADR-0052) — one format, two surfaces
 * (X-axis labels + tooltip header).
 *
 * @module EchartsCollectionWidget/timeFormat.test
 * @remarks
 * All dates are constructed via local-time `new Date(y, m, d, …)` components so the assertions
 * hold in every test-runner timezone (moment formats in the runtime's local zone). The locale is
 * always passed/applied per instance — the tests never rely on moment's global default locale.
 */
import { afterEach, describe, expect, it } from 'vitest';

import {
    DEFAULT_TOOLTIP_FORMAT,
    SAMPLE_TS,
    TIME_FORMAT_PRESETS,
    dataSpanMs,
    formatAxisLabel,
    formatTooltipHeader,
    makeAxisLabelFormatter,
    resolveHostLang,
} from './timeFormat';

/** Local-time date helper — timezone-independent fixtures. */
const at = (y: number, mo: number, d: number, h = 0, mi = 0, s = 0): number => new Date(y, mo, d, h, mi, s).getTime();

/** The shared demo Wednesday (14:05:09) — the same timestamp the combobox example renders. */
const WED_2026_08_19_14_05_09 = SAMPLE_TS;

afterEach(() => {
    delete (window as { sysLang?: string }).sysLang;
});

describe('resolveHostLang', () => {
    it("reads the host language from window.sysLang ('en' fallback)", () => {
        expect(resolveHostLang()).toBe('en');
        (window as { sysLang?: string }).sysLang = 'de';
        expect(resolveHostLang()).toBe('de');
        // Unknown languages fall back to English (moment would render keys otherwise).
        (window as { sysLang?: string }).sysLang = 'xx';
        expect(resolveHostLang()).toBe('en');
    });
});

describe('formatAxisLabel — the authored pattern surface (ADR-0052)', () => {
    it('formats a timestamp with moment tokens', () => {
        expect(formatAxisLabel('HH:mm', WED_2026_08_19_14_05_09, 'en')).toBe('14:05');
        expect(formatAxisLabel('HH:mm:ss', WED_2026_08_19_14_05_09, 'en')).toBe('14:05:09');
        expect(formatAxisLabel('DD.MM.yyyy', WED_2026_08_19_14_05_09, 'en')).toBe('19.08.2026');
    });

    it('replaces the <br /> token with a newline AFTER formatting (moment swallows \\n in patterns)', () => {
        // The ioBroker.echarts two-line trick: the token survives moment's token regex as literal
        // text and is exchanged for the real line break afterwards.
        expect(formatAxisLabel('HH:mm <br /> DD.MM.', WED_2026_08_19_14_05_09, 'en')).toBe('14:05\n19.08.');
    });

    it('renders weekday/month names in the passed locale (the reason moment replaces {HH} templates)', () => {
        expect(formatAxisLabel('HH:mm ddd', WED_2026_08_19_14_05_09, 'de')).toBe('14:05 Mi.');
        expect(formatAxisLabel('HH:mm ddd', WED_2026_08_19_14_05_09, 'en')).toBe('14:05 Wed');
    });
});

describe('makeAxisLabelFormatter — the emitted echarts formatter', () => {
    it('authored pattern → a pure pattern labeler (BR token → newline)', () => {
        const fmt = makeAxisLabelFormatter('HH:mm <br /> DD.MM.', 0);
        expect(typeof fmt).toBe('function');
        expect(fmt(WED_2026_08_19_14_05_09, 0)).toBe('14:05\n19.08.');
    });

    it('Auto (unset) → adaptive labelling: seconds when the span is under 30 minutes', () => {
        const fmt = makeAxisLabelFormatter(undefined, 10 * 60_000);
        expect(fmt(at(2026, 7, 19, 14, 5, 9), 0)).toBe('19.08.\n14:05:09');
    });

    it('Auto → minute labelling (no seconds) for a longer span, date prefix at chart start + day change', () => {
        const fmt = makeAxisLabelFormatter(undefined, 2 * 3_600_000);
        // index < 2 anchors the date at the chart start (ioBroker.echarts parity).
        expect(fmt(at(2026, 7, 19, 14, 0), 0)).toBe('19.08.\n14:00');
        expect(fmt(at(2026, 7, 19, 14, 30), 1)).toBe('19.08.\n14:30');
        // Same day after the start → time only …
        expect(fmt(at(2026, 7, 19, 15, 0), 2)).toBe('15:00');
        expect(fmt(at(2026, 7, 19, 15, 30), 3)).toBe('15:30');
        // … and the date returns at the day change.
        expect(fmt(at(2026, 7, 20, 0, 30), 4)).toBe('20.08.\n00:30');
    });

    it('Auto → date-only two-line labelling when the span reaches a week', () => {
        const fmt = makeAxisLabelFormatter(undefined, 8 * 24 * 3_600_000);
        expect(fmt(at(2026, 7, 19, 14, 0), 0)).toBe('19.08.\n2026');
        expect(fmt(at(2026, 7, 25, 14, 0), 5)).toBe('25.08.\n2026');
    });
});

describe('formatTooltipHeader — the tooltip surface (ADR-0052)', () => {
    it('defaults to ddd, DD.MM.yyyy HH:mm (DD = day of month; dd would be the locale weekday)', () => {
        expect(formatTooltipHeader(undefined, WED_2026_08_19_14_05_09, 'de')).toBe('Mi., 19.08.2026 14:05');
        expect(formatTooltipHeader(undefined, WED_2026_08_19_14_05_09, 'en')).toBe('Wed, 19.08.2026 14:05');
        expect(DEFAULT_TOOLTIP_FORMAT).toBe('ddd, DD.MM.yyyy HH:mm');
    });

    it('an authored Time format wins over the default header', () => {
        expect(formatTooltipHeader('DD.MM.YY HH:mm', WED_2026_08_19_14_05_09, 'en')).toBe('19.08.26 14:05');
    });

    it('keeps the <br /> token as-is — the tooltip renders HTML, the token IS its line break', () => {
        expect(formatTooltipHeader('HH:mm <br /> DD.MM.', WED_2026_08_19_14_05_09, 'en')).toBe('14:05 <br /> 19.08.');
    });
});

describe('dataSpanMs', () => {
    it('spans across ALL series (global min → global max)', () => {
        const span = dataSpanMs([
            {
                name: 'a',
                data: [
                    [at(2026, 7, 19, 10, 0), 1],
                    [at(2026, 7, 19, 12, 0), 2],
                ],
            },
            {
                name: 'b',
                data: [
                    [at(2026, 7, 19, 11, 0), 3],
                    [at(2026, 7, 19, 15, 0), 4],
                ],
            },
        ]);
        expect(span).toBe(5 * 3_600_000);
    });

    it('returns 0 for fewer than two points (nothing to derive)', () => {
        expect(dataSpanMs([])).toBe(0);
        expect(dataSpanMs([{ name: 'a', data: [] }])).toBe(0);
        expect(dataSpanMs([{ name: 'a', data: [[at(2026, 7, 19, 10, 0), 1]] }])).toBe(0);
    });
});

describe('TIME_FORMAT_PRESETS — the curated dropdown (ADR-0052)', () => {
    it('offers the 26 ioBroker.echarts presets grouped by intent (25 + Auto)', () => {
        expect(TIME_FORMAT_PRESETS).toHaveLength(26);
        // Auto leads the list.
        expect(TIME_FORMAT_PRESETS[0]).toEqual({ value: '', group: 'auto' });
        // Every entry grouped; the values match the ioBroker.echarts preset strings verbatim.
        const values = TIME_FORMAT_PRESETS.map(p => p.value);
        expect(values).toContain('HH:mm');
        expect(values).toContain('HH:mm <br /> DD.MM.');
        expect(values).toContain('hh:mm:ss MM/DD/YY a');
        expect(values).toContain('HH:mm ddd');
        expect(values).toContain('DD.MM.YY');
        expect(new Set(values).size).toBe(26);
    });
});
