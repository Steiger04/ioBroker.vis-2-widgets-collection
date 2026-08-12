/**
 * Empty-canvas placeholder reason (ADR-0031 honest empty-state).
 *
 * @module EchartsCollectionWidget/emptyPlaceholder
 * @remarks
 * Pure decision: WHY is the chart canvas empty? Both the runtime canvas ({@link EchartsCollection})
 * and the editor preview ({@link ChartPreview}) call this so the two surfaces never drift apart. The
 * one non-obvious case is **Live with series configured but the rolling buffer still empty** — it
 * used to read "Configure series to see data", which is a lie (the user HAD configured series). Live
 * has no backfill, so the chart legitimately starts empty and fills only as values arrive; the honest
 * message is that it is waiting. Gauge/radar/json/history keep their existing messages (the honesty
 * gap was Live-only; widening is out of scope). The caller maps each reason to a localized string via
 * {@link PLACEHOLDER_I18N_KEY}.
 */
import type { EchartsChartFamily, EchartsMode } from '../types/field-definitions/echarts-fields';

/** Why the canvas is empty. The caller maps each to a localized string. */
export type EmptyPlaceholderReason =
    | 'selectValueOid' // gauge: no scalar OID bound
    | 'addIndicators' // radar: no indicator OIDs bound
    | 'selectJsonOid' // json: no jsonOid bound
    | 'waitingForValues' // live: series bound, rolling buffer still empty (ADR-0031)
    | 'configureSeries'; // history/live: no series bound yet

/**
 * i18n key per reason — shared by the runtime canvas and the editor preview so the reason→message
 * mapping lives in ONE place and the two surfaces cannot diverge.
 */
export const PLACEHOLDER_I18N_KEY: Record<EmptyPlaceholderReason, string> = {
    selectValueOid: 'echarts_preview_select_value_oid',
    addIndicators: 'echarts_preview_add_indicators',
    selectJsonOid: 'echarts_preview_select_json_oid',
    waitingForValues: 'echarts_preview_waiting_for_values',
    configureSeries: 'echarts_preview_configure_series',
};

/**
 * @param input - The empty-state inputs.
 * @param input.family - Chart family.
 * @param input.mode - Data mode (ignored for gauge/radar — they always read the current value).
 * @param input.seriesCount - Number of bound series OIDs (cartesian/pie).
 */
export const emptyPlaceholderReason = (input: {
    family: EchartsChartFamily;
    mode: EchartsMode;
    seriesCount: number;
}): EmptyPlaceholderReason => {
    const { family, mode, seriesCount } = input;
    if (family === 'gauge') {
        return 'selectValueOid';
    }
    if (family === 'radar') {
        return 'addIndicators';
    }
    if (mode === 'json') {
        return 'selectJsonOid';
    }
    // Live + series bound + buffer empty: the rolling buffer has no backfill, so an empty chart here
    // is expected (waiting for values), not a missing configuration. ADR-0031.
    if (mode === 'live' && seriesCount > 0) {
        return 'waitingForValues';
    }
    return 'configureSeries';
};
