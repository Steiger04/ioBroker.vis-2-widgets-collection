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
    | 'configureTableMapping' // json-table (ADR-0075 decision 6): no yPath series bound yet
    | 'jsonNoSeries'; // json: OID bound, but the parse yields no plottable series (format/family)

/**
 * i18n key per reason — shared by the runtime canvas and the editor preview so the reason→message
 * mapping lives in ONE place and the two surfaces cannot diverge.
 */
export const PLACEHOLDER_I18N_KEY: Record<EmptyPlaceholderReason, string> = {
    selectJsonOid: 'echarts_preview_select_json_oid',
    configureSeries: 'echarts_preview_configure_series',
    configureTableMapping: 'echarts_preview_configure_table',
    jsonNoSeries: 'echarts_preview_json_no_series',
};

/**
 * The table family's Leerfall-CTA (ADR-0075 decision 6): an UNCONFIGURED tabellarisch widget
 * renders the empty placeholder pointing at the Zuordnung — never an auto-mapping, never a
 * silent second truth. The optional inputs are the json kind, whether any series carries a
 * yPath binding, whether a json OID is bound and whether the pipeline produced data (absent
 * = the legacy call sites' byte-stable defaults).
 *
 * @param mode - Data mode.
 * @param jsonKind - The payload family (json mode only; absent = series-shaped).
 * @param hasTableSeries - True when at least one series carries a yPath binding.
 * @param jsonOidSet - True when a usable json OID is bound (the honest-empty gate: a SET OID
 *   with no plottable output is a format/family matter — NOT another "select the OID" plea).
 * @param hasData - The pipeline's merged-data verdict; `true` (the default) never forces the
 *   empty-state branch — the caller renders the chart instead.
 */
export const emptyPlaceholderReason = (
    mode: EchartsMode,
    jsonKind?: EchartsJsonKind,
    hasTableSeries = false,
    jsonOidSet = false,
    hasData = true,
): EmptyPlaceholderReason => {
    if (mode === 'json') {
        if (jsonKind === 'table' && !hasTableSeries) {
            return 'configureTableMapping';
        }
        if (jsonOidSet && !hasData) {
            return 'jsonNoSeries';
        }
        return 'selectJsonOid';
    }
    return 'configureSeries';
};
