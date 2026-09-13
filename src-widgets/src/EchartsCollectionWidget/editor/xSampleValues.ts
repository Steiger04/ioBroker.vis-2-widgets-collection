/**
 * The X column's sample-values line (zuordnung-redesign ticket 04) — the pure formatter that
 * turns `JsonTableColumn.samples` into the one-glance confirmation „z. B. …" under the X picker.
 *
 * @module EchartsCollectionWidget/editor/xSampleValues
 * @remarks
 * Formatting follows the column's detected type: dates render through the SAME moment core as
 * the chart's time axis (ADR-0052 — `resolveHostLang` locale, `L LT` localized pattern),
 * numbers through the host-locale `Intl.NumberFormat`, strings raw and capped. The gate is
 * as honest as the picker: no line for the row index, drifted paths, or null-only columns —
 * the ⚠ validation owns the drift, this line never invents values.
 */
import moment from 'moment';

import { parseDateToMs } from '../../hooks/useJsonTableAnalysis/dateValue';
import type { DetectedType, JsonTableColumn } from '../../hooks/useJsonTableAnalysis';

/** Per-value string cap before the ellipsis — values are confirmations, not data dumps. */
const VALUE_CAP = 24;

const ellipsize = (s: string): string => (s.length > VALUE_CAP ? `${s.slice(0, VALUE_CAP - 1)}…` : s);

/** Format one sample value per its column's detected type (raw fallback for the odd mixed column). */
export const formatSampleValue = (
    value: string | number | boolean,
    type: DetectedType,
    dateFormat: JsonTableColumn['dateFormat'],
    lang: string,
): string => {
    switch (type) {
        case 'date': {
            const ms = parseDateToMs(value, dateFormat);
            // An unparsable sample (mixed column, drifted format) falls back to its raw text —
            // the line confirms what IS there, never a formatted invention.
            return ms === null ? ellipsize(String(value)) : moment(ms).locale(lang).format('L LT');
        }
        case 'number':
            return Number.isFinite(value) ? new Intl.NumberFormat(lang).format(Number(value)) : String(value);
        case 'boolean':
            return String(value);
        default:
            return ellipsize(String(value));
    }
};

/**
 * The joined sample line for the SELECTED X column — `null` when there is nothing honest to
 * show: row index (`xpath === ''`), a drifted path (no schema column), or a null-only column
 * (no samples).
 */
export const xSampleLine = (columns: readonly JsonTableColumn[], xpath: string, lang: string): string | null => {
    if (!xpath) {
        return null;
    }
    const col = columns.find(c => c.path === xpath);
    if (!col?.samples?.length) {
        return null;
    }
    return col.samples.map(v => formatSampleValue(v, col.type, col.dateFormat, lang)).join(', ');
};
