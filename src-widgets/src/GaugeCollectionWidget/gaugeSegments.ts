/**
 * Highlight-Zone model of the Gauge widget.
 *
 * @module GaugeCollectionWidget/gaugeSegments
 * @remarks
 * Pure range model + segment style resolution. A Highlight-Zone is a range
 * segment derived from the widget's value rows (`states[i].value …
 * states[i+1].value`, the last zone stretched to the effective max) carrying
 * the styling overrides of the active zone. The zones feed the canvas
 * highlights arc AND the segment lookup; the resolved segment styles flow
 * declaratively into CollectionBase via the pre-composed `data` (K3 — the
 * retired paper0/paper1 imperative handle writes).
 */

import { extractColorFromValue } from '../lib/helper/extractColorFromValue';

import type { StyleData, StateStyleData } from '../hooks/useData/types';

/** Style slice a Highlight-Zone can override. */
export type HighlightState = Pick<
    StyleData,
    | 'textColor'
    | 'icon'
    | 'iconColor'
    | 'forceColorMask'
    | 'iconSize'
    | 'iconSizeOnly'
    | 'iconXOffset'
    | 'iconYOffset'
    | 'frameBackgroundColor'
    | 'frameBackgroundColorActive'
    | 'backgroundColor'
    | 'backgroundColorActive'
    | 'background'
    | 'backgroundActive'
    | 'frameBackground'
    | 'frameBackgroundActive'
>;

/** A Highlight-Zone: range + styling overrides. */
export interface Highlight {
    from: number;
    to: number;
    color: string;
    state: HighlightState;
}

/**
 * Returns the Highlight-Zone containing the value.
 *
 * @remarks
 * Half-open intervals (`from` inclusive, `to` exclusive) — closed only at the
 * absolute maximum, so a value exactly at `maxValue` still resolves to the last
 * zone instead of falling out of the model.
 */
export const findSegment = (highlights: Highlight[], value: number, maxValue: number): Highlight | null => {
    const segment = highlights.find(highlight => {
        return value >= highlight.from && (value < highlight.to || (value === highlight.to && value === maxValue));
    });
    return segment || null;
};

/**
 * Builds the Highlight-Zones from the widget's value rows.
 *
 * @remarks
 * Each row spans up to the next row's value; the last zone is stretched to
 * `maxValue` when the last row ends below it. `??` (not `||`): a boundary of
 * exactly 0 is a real limit, not "unset".
 */
export const buildHighlights = (states: StateStyleData[], maxValue: number): Highlight[] => {
    const highlights = states.map((state, index) => {
        const nextValue = states[index + 1]?.value ?? maxValue;

        return {
            from: Number(state.value),
            to: Number(nextValue),
            color: extractColorFromValue(state.textColor) || 'transparent',
            state: { ...state },
        };
    });

    if (states.length > 0 && Number(states[states.length - 1].value) < maxValue) {
        highlights[highlights.length - 1].to = maxValue;
    }

    return highlights;
};

/** First non-empty value, `undefined` when the whole chain is empty. */
const firstDefined = (...values: Array<string | undefined>): string | undefined =>
    values.find(value => value !== undefined && value !== '');

/**
 * Effective frame background of the active zone (outer paper).
 *
 * @remarks
 * Active-flat → plain-flat → active-background → plain-background — the exact
 * precedence the retired imperative paper0 write applied. `undefined` keeps the
 * base style data (no zone override).
 */
export const resolveSegmentFrame = (segment: Highlight): string | undefined =>
    firstDefined(
        segment.state.frameBackgroundColorActive,
        segment.state.frameBackgroundColor,
        segment.state.frameBackgroundActive,
        segment.state.frameBackground,
    );

/**
 * Effective content background of the active zone (inner paper).
 *
 * @remarks
 * Same precedence shape as {@link resolveSegmentFrame}, for the inner paper.
 */
export const resolveSegmentBackground = (segment: Highlight): string | undefined =>
    firstDefined(
        segment.state.backgroundColorActive,
        segment.state.backgroundColor,
        segment.state.backgroundActive,
        segment.state.background,
    );
