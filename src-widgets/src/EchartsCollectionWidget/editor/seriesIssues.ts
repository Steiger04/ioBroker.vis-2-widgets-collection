/**
 * The validation issues ONE series carries itself (ADR-0101 ticket 05) — a leaf shared by the
 * validation engine (the section rollup + Sammel-Header count) and the series card (its own
 * Karten-Tab ⚠ dot). One function, so the card's dot and the counted issue can never disagree.
 *
 * @module EchartsCollectionWidget/editor/seriesIssues
 */
import type { EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';
import { colorScaleRangeInvalid } from '../seriesColorScale';
import type { EditorState } from './editorState';
import type { ValidationIssue } from './issueTabs';

/** The Farbskala input error: scale on, both bounds entered, Min ≥ Max (placed on the Stil tab). */
export const COLOR_SCALE_RANGE_ISSUE = 'echarts_val_color_scale_range';

/**
 * The per-series issues of a cartesian series config.
 *
 * @param meta - The series config (Verlauf/tabellarisch: `state.series[i]`; JSON: the overlay entry).
 * @param label - How the warning list names the series (its name, else its position).
 */
export const seriesMetaIssues = (meta: EchartsSeriesMeta | undefined, label: string): ValidationIssue[] =>
    colorScaleRangeInvalid(meta) ? [{ key: COLOR_SCALE_RANGE_ISSUE, args: [label] }] : [];

/** One series card's config (absent = a payload series without an overlay entry) and its warning label. */
export interface SeriesCardMeta {
    meta: EchartsSeriesMeta | undefined;
    label: string;
}

/**
 * The series cards in card order — ONE list for the validation (the counted issue) and the series
 * section's Karten-Tab jump (the card index), so the ⚠ count and the jump target never disagree.
 * Serien-förmig JSON keeps the config in the name-keyed overlay: only the visible payload series
 * have a card (hidden ones render nothing, stale overlay entries no card). Every other data path
 * (Verlauf, tabellarisch) has one card per `state.series` entry.
 *
 * @param state - The editor state (data path + series / overlay).
 * @param jsonSeriesNames - Serien-förmig JSON: the payload's series names in payload order;
 *   absent = unknown (every overlay entry counts).
 */
export const seriesCardMetas = (
    state: Pick<EditorState, 'mode' | 'jsonKind' | 'series' | 'jsonHidden' | 'jsonSeriesStyle'>,
    jsonSeriesNames: readonly string[] | undefined,
): SeriesCardMeta[] =>
    state.mode === 'json' && state.jsonKind !== 'table'
        ? (jsonSeriesNames ?? Object.keys(state.jsonSeriesStyle))
              .filter(name => !state.jsonHidden.includes(name))
              .map(name => {
                  const meta = state.jsonSeriesStyle[name];
                  return { meta, label: meta?.name || name };
              })
        : state.series.map((s, i) => ({ meta: s, label: s.name || s.yPath || `${i + 1}` }));
