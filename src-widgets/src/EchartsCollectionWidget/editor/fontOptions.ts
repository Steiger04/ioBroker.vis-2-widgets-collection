/**
 * Pure coercion helpers for the echarts `textStyle.fontWeight` / `fontStyle` model (ADR-0029).
 *
 * @module EchartsCollectionWidget/editor/fontOptions
 * @remarks
 * The font-weight/font-style selects are string-based (HTML `<option>`), but the weight model keeps
 * the numeric grades as real numbers (so echarts receives `600`, not `"600"`). These helpers bridge
 * the two on editor load and on select `onChange`, and live apart from `controls.tsx` (which already
 * imports `editorState` — importing it back would close a cycle, and pulling MUI into this pure
 * module would bloat the editor-state test graph).
 */
import type { EchartsFontWeight, EchartsFontStyle } from '../../types/field-definitions/echarts-fields';

const NAMED_WEIGHTS: ReadonlySet<string> = new Set(['normal', 'bold', 'bolder', 'lighter']);
const STYLES: ReadonlySet<string> = new Set(['normal', 'italic', 'oblique']);

/**
 * Coerce a stored or selected value into a valid {@link EchartsFontWeight}. Numeric strings and
 * numbers map to the numeric grade (any finite value is preserved — echarts accepts the full CSS
 * scale, not only the offered 100–900 set); unknown/named-invalid values fall back to `'normal'`.
 */
export const parseFontWeight = (v: unknown): EchartsFontWeight => {
    if (typeof v === 'number' && Number.isFinite(v)) {
        return v;
    }
    if (typeof v === 'string') {
        if (NAMED_WEIGHTS.has(v)) {
            return v as EchartsFontWeight;
        }
        const n = Number(v);
        if (Number.isFinite(n)) {
            return n;
        }
    }
    return 'normal';
};

/** Coerce a stored or selected value into a valid {@link EchartsFontStyle}; unknown → `'normal'`. */
export const parseFontStyle = (v: unknown): EchartsFontStyle =>
    typeof v === 'string' && STYLES.has(v) ? (v as EchartsFontStyle) : 'normal';

/**
 * The select value for a model weight — numbers stringify so the select highlights the active grade.
 * `null`/`undefined` (the legend inherit state) maps to `'normal'`.
 */
export const weightToSelectValue = (v: EchartsFontWeight | null | undefined): string =>
    v == null ? 'normal' : String(v);

/** The select value for a model style; `null`/`undefined` (legend inherit) maps to `'normal'`. */
export const fontStyleToSelectValue = (v: EchartsFontStyle | null | undefined): string => (v == null ? 'normal' : v);
