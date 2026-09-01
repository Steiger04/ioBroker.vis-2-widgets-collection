/**
 * Empty-canvas placeholder reason (ADR-0031 honest empty-state).
 *
 * @module EchartsCollectionWidget/emptyPlaceholder
 * @remarks
 * Pure decision: WHY is the chart canvas empty? Both the runtime canvas ({@link EchartsCollection})
 * and the editor preview ({@link ChartPreview}) call this so the two surfaces never drift apart.
 * The caller maps each reason to a localized string via {@link PLACEHOLDER_I18N_KEY}.
 */
import type { EchartsMode } from '../types/field-definitions/echarts-fields';

/** Why the canvas is empty. The caller maps each to a localized string. */
export type EmptyPlaceholderReason =
    | 'selectJsonOid' // json: no jsonOid bound
    | 'configureSeries'; // history: no series bound yet

/**
 * i18n key per reason — shared by the runtime canvas and the editor preview so the reason→message
 * mapping lives in ONE place and the two surfaces cannot diverge.
 */
export const PLACEHOLDER_I18N_KEY: Record<EmptyPlaceholderReason, string> = {
    selectJsonOid: 'echarts_preview_select_json_oid',
    configureSeries: 'echarts_preview_configure_series',
};

/** @param mode - Data mode. */
export const emptyPlaceholderReason = (mode: EchartsMode): EmptyPlaceholderReason =>
    mode === 'json' ? 'selectJsonOid' : 'configureSeries';
