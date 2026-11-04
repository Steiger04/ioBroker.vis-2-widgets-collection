/**
 * The validation issues ONE series carries itself (ADR-0101 ticket 05) — a leaf shared by the
 * validation engine (the section rollup + Sammel-Header count) and the series card (its own
 * Karten-Tab ⚠ dot). One function, so the card's dot and the counted issue can never disagree.
 *
 * @module EchartsCollectionWidget/editor/seriesIssues
 */
import type { EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';
import { colorScaleRangeInvalid } from '../seriesColorScale';
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
