/**
 * The moment-based **Time format** core (ADR-0052) — one format string, two surfaces: the X-axis
 * tick labels AND the tooltip's time header.
 *
 * @module EchartsCollectionWidget/timeFormat
 * @remarks
 * The format is a moment.js token string (`HH:mm`, `ddd`, …) authored in the X-Karte's freeSolo
 * combobox. We take moment over echarts' own `{HH}` label templates because echarts templates
 * cannot render weekday/month *names* — the locale-correct labelling (`dd.MM.`, `HH:mm ddd`) the
 * ioBroker.echarts presets rely on. The old `{HH}` dialect is deliberately NOT migrated: old
 * values render as literal text until re-authored (conscious break, accepted in the ADR review).
 *
 *  - Locale: moment's locale follows the HOST language (`window.sysLang`); the 11 widget
 *    languages are statically imported beside `en` (moment's built-in default), so the MF remote
 *    grows once and cacheably (the ioBroker.echarts `main.ts` idiom).
 *  - Two-line presets use the ioBroker.echarts trick: a `<br />` token inside the format string,
 *    exchanged for `\n` only AFTER formatting — moment's token regex ends with `.` and would
 *    swallow a literal `\n` in the pattern. The tooltip keeps the token as-is: it renders HTML,
 *    where the token IS the line break.
 *  - `Auto` (unset) is the adaptive labelling: seconds (< 30 min span, ioBroker.echarts parity)
 *    and the day-change date prefix are derived from the data span; spans ≥ 7 days degrade to
 *    date-only two-line labels. The span is recomputed on every pipeline build, so a data update
 *    re-derives the resolution.
 */
import moment from 'moment';
// The widget set's 11 languages minus `en` (moment's built-in default) — static imports so the
// locales are part of the remote bundle (ADR-0052; ioBroker.echarts `main.ts` idiom).
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/nl';
import 'moment/locale/pl';
import 'moment/locale/pt';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/zh-cn';

/** The languages the 11 static moment locales cover (`en` is moment's built-in default). */
const SUPPORTED_LANGS = new Set(['en', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'uk', 'zh-cn']);

/**
 * Resolve the moment locale from the host language. Read lazily per format call (not at module
 * load) so a re-render after a host language change picks the new locale without a reload.
 */
export const resolveHostLang = (): string => {
    const raw = (window as { sysLang?: string }).sysLang;
    return typeof raw === 'string' && SUPPORTED_LANGS.has(raw) ? raw : 'en';
};

/**
 * The two-line token, exchanged for `\n` AFTER formatting on the AXIS surface (moment's token
 * regex ends with `.` — a literal `\n` in the pattern is swallowed). The tooltip surface keeps
 * the token: it renders HTML, where it already IS a line break. ioBroker.echarts `BR_TAG`.
 */
const BR_TAG = /\s*<\s*br\s*\/?\s*>\s*/gi;

/** The tooltip header when no Time format is authored (ADR-0052). */
export const DEFAULT_TOOLTIP_FORMAT = 'ddd, DD.MM.yyyy HH:mm';

/** Span thresholds for the adaptive Auto labelling (ioBroker.echarts parity: 30 min / 7 days). */
const SECONDS_SPAN_MS = 30 * 60_000;
const TIME_SPAN_MS = 7 * 24 * 3_600_000;

/** A series-shaped input for {@link dataSpanMs} — only the `[ts, …]` points are read. */
type SpannedSeries = { name?: string; data?: readonly (readonly [number, unknown])[] };

/**
 * The data span (global max ts − global min ts across ALL series) in ms — the Auto labelling's
 * clock. Fewer than two points → 0 (nothing derivable; the Auto labeler then renders minute
 * labels, which is honest for a chart still waiting for its first point).
 */
export const dataSpanMs = (series: readonly SpannedSeries[]): number => {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (const s of series) {
        for (const p of s.data ?? []) {
            // Only `[ts, …]` POINTS carry a timestamp — plain value arrays (the ADR-0065
            // buckets, the ADR-0075 table family) contribute nothing (no points → span 0 →
            // the minute-level Auto labels, honest for a chart with no time axis data).
            if (!Array.isArray(p) || typeof p[0] !== 'number') {
                continue;
            }
            const ts = p[0];
            if (ts < min) {
                min = ts;
            }
            if (ts > max) {
                max = ts;
            }
        }
    }
    return Number.isFinite(min) && Number.isFinite(max) ? max - min : 0;
};

/** Format one timestamp with an authored pattern for the AXIS surface (BR token → `\n`). */
export const formatAxisLabel = (pattern: string, value: number | Date, lang: string): string =>
    moment(value).locale(lang).format(pattern).replace(BR_TAG, '\n');

/** Format the tooltip header — the authored pattern or the default; the BR token stays (HTML). */
export const formatTooltipHeader = (pattern: string | undefined, value: number | Date, lang: string): string =>
    moment(value)
        .locale(lang)
        .format(pattern ?? DEFAULT_TOOLTIP_FORMAT);

/**
 * Fixed demo timestamp (a Wednesday, 14:05:09) for the combobox's live example — exercises the
 * weekday, date and seconds tokens of most presets in one rendering (also reused by the tests).
 */
export const SAMPLE_TS = new Date(2026, 7, 19, 14, 5, 9).getTime();

/**
 * The echarts `axisLabel.formatter` for the X-Karte: the authored pattern as a moment labeler,
 * or — with no pattern (Auto) — the adaptive span-derived labelling. ALWAYS a function; the raw
 * JSON stays function-free (the X-Raw analysis pins `axisLabel.formatter` as GUI-owned).
 *
 * The Auto labeler is stateful per formatter instance (ioBroker.echarts parity): the day prefix
 * appears at the chart start (index < 2), after a backwards jump (re-render), and at day
 * changes — echarts calls the formatter per label in axis order.
 */
export const makeAxisLabelFormatter = (
    pattern: string | undefined,
    spanMs: number,
): ((value: number | Date, index: number) => string) => {
    if (pattern) {
        return value => formatAxisLabel(pattern, value, resolveHostLang());
    }
    const withSeconds = spanMs < SECONDS_SPAN_MS;
    const withTime = spanMs < TIME_SPAN_MS;
    let lastTs: number | null = null;
    return (value, index) => {
        const ts = value instanceof Date ? value.getTime() : value;
        const lang = resolveHostLang();
        if (!withTime) {
            // Long span: date-only, two-line with the year (the `<br />` idiom — moment would
            // swallow a literal `\n` in the pattern).
            return formatAxisLabel('DD.MM. <br /> yyyy', ts, lang);
        }
        const m = moment(ts).locale(lang);
        const showDate = index < 2 || lastTs === null || ts < lastTs || moment(lastTs).date() !== m.date();
        lastTs = ts;
        const time = m.format(withSeconds ? 'HH:mm:ss' : 'HH:mm');
        return showDate ? `${m.format('DD.MM.')}\n${time}` : time;
    };
};

/** Intent groups for the X-Karte's Time-format combobox dropdown (ADR-0052). */
export type TimeFormatGroupId = 'auto' | 'time' | 'date' | 'dateTime' | 'twoLine' | 'international' | 'weekday';

/** A dropdown entry: `''` is Auto (unset — the adaptive labelling). */
export interface TimeFormatPreset {
    value: string;
    group: TimeFormatGroupId;
}

/**
 * The curated preset dropdown — the 26 ioBroker.echarts presets verbatim, grouped by intent
 * (`PresetTabs.tsx`), Auto leading. The pattern doubles as its own label: locale-neutral by
 * construction, and a picked or typed pattern is simply that pattern.
 */
export const TIME_FORMAT_PRESETS: readonly TimeFormatPreset[] = [
    { value: '', group: 'auto' },
    // ── time of day ────────────────────────────────────────────────────
    { value: 'HH:mm', group: 'time' },
    { value: 'HH:mm:ss', group: 'time' },
    { value: 'HH', group: 'time' },
    { value: 'mm', group: 'time' },
    // ── date ───────────────────────────────────────────────────────────
    { value: 'DD.MM', group: 'date' },
    { value: 'DD.MM.', group: 'date' },
    { value: 'DD.MM.YY', group: 'date' },
    { value: 'MM/DD', group: 'date' },
    { value: 'DD', group: 'date' },
    { value: 'MM', group: 'date' },
    { value: 'YY', group: 'date' },
    { value: 'ddd', group: 'date' },
    // ── time + date ────────────────────────────────────────────────────
    { value: 'HH:mm DD.MM', group: 'dateTime' },
    { value: 'HH:mm DD.MM.', group: 'dateTime' },
    { value: 'HH:mm DD.MM.YY', group: 'dateTime' },
    { value: 'HH:mm MM.DD', group: 'dateTime' },
    { value: 'HH:mm:ss DD.MM.YY', group: 'dateTime' },
    // ── two-line (the <br /> token) ────────────────────────────────────
    { value: 'HH:mm <br /> DD.MM', group: 'twoLine' },
    { value: 'HH:mm <br /> DD.MM.', group: 'twoLine' },
    { value: 'HH:mm <br /> DD.MM.YY', group: 'twoLine' },
    // ── international orderings ────────────────────────────────────────
    { value: 'hh:mm:ss MM/DD/YY a', group: 'international' },
    { value: 'HH:mm:ss DD/MM/YY', group: 'international' },
    { value: 'HH:mm:ss MM.DD.YY', group: 'international' },
    // ── with weekday name (the moment-over-{HH} payoff) ────────────────
    { value: 'HH:mm ddd', group: 'weekday' },
    { value: 'HH:mm:ss ddd', group: 'weekday' },
];
