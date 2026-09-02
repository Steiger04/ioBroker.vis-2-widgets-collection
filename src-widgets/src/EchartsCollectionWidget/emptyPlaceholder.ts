/**
 * Empty-canvas placeholder reason (ADR-0031 honest empty-state; ADR-0075 ticket 07 the CTA).
 *
 * @module EchartsCollectionWidget/emptyPlaceholder
 * @remarks
 * Pure decision: WHY is the chart canvas empty? Both the runtime canvas ({@link EchartsCollection})
 * and the editor preview ({@link ChartPreview}) call this so the two surfaces never drift apart.
 * The caller maps each reason to a localized string via {@link PLACEHOLDER_I18N_KEY}. The body
 * renders the text STATIC; only the editor preview makes it clickable (the CTA steers the rail
 * to the section — and, for the table Leerfall, the Zuordnung TAB — that would fill it).
 */
import type { EchartsJsonKind, EchartsMode } from '../types/field-definitions/echarts-fields';

/** Why the canvas is empty. The caller maps each to a localized string. */
export type EmptyPlaceholderReason =
    | 'selectJsonOid' // json: no jsonOid bound
    | 'configureSeries' // history: no series bound yet
    | 'configureTableMapping'; // json-table (ADR-0075 decision 6): no yPath series bound yet

/**
 * i18n key per reason — shared by the runtime canvas and the editor preview so the reason→message
 * mapping lives in ONE place and the two surfaces cannot diverge.
 */
export const PLACEHOLDER_I18N_KEY: Record<EmptyPlaceholderReason, string> = {
    selectJsonOid: 'echarts_preview_select_json_oid',
    configureSeries: 'echarts_preview_configure_series',
    configureTableMapping: 'echarts_preview_configure_table',
};

/**
 * The table family's Leerfall-CTA (ADR-0075 decision 6): an UNCONFIGURED tabellarisch widget
 * renders the empty placeholder pointing at the Zuordnung — never an auto-mapping, never a
 * silent second truth. The two optional inputs are the json kind plus whether any series
 * carries a yPath binding (absent = the serien-förmig/legacy call sites, byte-stable).
 *
 * @param mode - Data mode.
 * @param jsonKind - The payload family (json mode only; absent = series-shaped).
 * @param hasTableSeries - True when at least one series carries a yPath binding.
 */
export const emptyPlaceholderReason = (
    mode: EchartsMode,
    jsonKind?: EchartsJsonKind,
    hasTableSeries = false,
): EmptyPlaceholderReason => {
    if (mode === 'json') {
        if (jsonKind === 'table' && !hasTableSeries) {
            return 'configureTableMapping';
        }
        return 'selectJsonOid';
    }
    return 'configureSeries';
};
