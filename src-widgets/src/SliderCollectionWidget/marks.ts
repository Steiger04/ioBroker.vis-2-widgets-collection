/**
 * Pure slider-mark computation for the Slider collection widget.
 *
 * @module widgets/SliderCollectionWidget/marks
 * @remarks
 * Extracted from the former inline `useMemo` in `SliderCollection.tsx` so the
 * mark logic (numeric filter, range filter, min/max injection, step division,
 * active overlay) is testable without mounting the widget. The caller resolves
 * the style data (`resolveStyleData`) and passes the results in — this module
 * stays free of React and context.
 */

import type { StyleData, StateStyleData } from '../hooks/useData/types';

/**
 * A slider mark: resolved style fields plus the numeric value and label.
 *
 * @remarks
 * State marks carry the full `StateStyleData` shape (they are resolved per
 * state by `useData`); generated marks carry the base/active `StyleData`.
 * `SliderMark` is the common supertype both assign to.
 */
export type SliderMark = StyleData & {
    value: number;
    label?: string;
};

/** Parameters for {@link buildSliderMarks}. */
export interface BuildSliderMarksParams {
    /** Resolved state items; only entries with a numeric `value` are used. */
    states: StateStyleData[];
    /** Slider minimum or `null` when unbounded. */
    minValue: number | null;
    /** Slider maximum or `null` when unbounded. */
    maxValue: number | null;
    /** Step between generated marks; falls back to 1 via `Number(x) || 1`. */
    markStep?: number;
    /** When truthy, only state marks are used (no min/max/step injection). */
    onlyStates?: boolean;
    /** Unit appended to the labels of generated marks. */
    unit?: string;
    /** Current OID value driving the active overlay. */
    oidValue: string | number | boolean | undefined | null;
    /** Base mark style — the caller's `resolveStyleData('', false)`. */
    baseStyle: StyleData;
    /** Active mark style — the caller's `resolveStyleData('', true)`. */
    activeStyle: StyleData;
    /** Truthy when an active icon color is configured (guards the overlay). */
    iconColorActive?: string;
}

/**
 * Builds the slider mark list from resolved states and range settings.
 *
 * @param params - See {@link BuildSliderMarksParams}.
 * @returns Sorted marks (ascending by value).
 * @remarks
 * The active overlay applies `iconSize`/`forceColorMask` from `activeStyle`
 * unconditionally (for the mark matching `oidValue`); the legacy
 * `!== undefined` guards around them were dropped as ineffective: when the
 * Active fields are unset, the style resolver falls back to the base cascade,
 * so the overlay writes back the value the base spread already set. Only the
 * `iconColor` overlay stays guarded — an unset `iconColorActive` must not
 * override the base icon color.
 */
export function buildSliderMarks(params: BuildSliderMarksParams): SliderMark[] {
    const {
        states,
        minValue,
        maxValue,
        markStep,
        onlyStates,
        unit,
        oidValue,
        baseStyle,
        activeStyle,
        iconColorActive,
    } = params;

    const getGeneratedMarkStyle = (value: number): StyleData => {
        if (String(value) !== String(oidValue)) {
            return baseStyle;
        }

        return {
            ...baseStyle,
            iconSize: activeStyle.iconSize,
            ...(iconColorActive ? { iconColor: activeStyle.iconColor } : {}),
            forceColorMask: activeStyle.forceColorMask,
        };
    };

    // Type guard to ensure we only work with numeric values
    const numericStates = states.filter(
        (state): state is typeof state & { value: number } => typeof state.value === 'number',
    );

    const marks: SliderMark[] = numericStates.filter(
        state => (minValue === null || state.value >= minValue) && (maxValue === null || state.value <= maxValue),
    );

    if (onlyStates) {
        return marks.sort((a, b) => a.value - b.value);
    }

    // Ensure minimum value is included
    if (minValue !== null && !marks.some(m => m.value === minValue)) {
        marks.push({
            ...getGeneratedMarkStyle(minValue),
            value: minValue,
            label: `${minValue}${unit || ''}`,
        });
    }

    // Ensure maximum value is included
    if (maxValue !== null && !marks.some(m => m.value === maxValue)) {
        marks.push({
            ...getGeneratedMarkStyle(maxValue),
            value: maxValue,
            label: `${maxValue}${unit || ''}`,
        });
    }

    // Add step divisions
    if (minValue !== null && maxValue !== null) {
        const step = Number(markStep) || 1;
        for (let i = minValue + step; i < maxValue; i += step) {
            if (!marks.some(m => m.value === i)) {
                marks.push({ ...getGeneratedMarkStyle(i), value: i, label: `${i}${unit || ''}` });
            }
        }
    }

    return marks.sort((a, b) => a.value - b.value);
}
