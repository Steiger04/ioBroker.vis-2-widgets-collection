/**
 * Pure slider-mark computation for the Slider collection widget.
 *
 * @module widgets/SliderCollectionWidget/marks
 * @remarks
 * Extracted from the former inline `useMemo` in `SliderCollection.tsx` so the
 * mark logic (numeric filter, range filter, min/max injection, step division,
 * active flag, selected mark) is testable without mounting the widget. The
 * caller passes in the style data `useData` resolved (`states`, `markBaseStyle`,
 * `data`) — this module stays free of React and context.
 *
 * The selected mark is ONE decision here (ADR-0106): every mark carries
 * `active`, the selected mark is the first active one, and its final
 * presentation is written onto it — CollectionMark paints mark data only.
 */

import { sameStateValue } from '../hooks/useData/stateValueEquality';
import type { StyleData, StateStyleData } from '../hooks/useData/types';

/** The style fields a mark paints (CollectionMark) — shared by state marks and generated marks. */
export type SliderMarkStyle = Pick<
    StyleData,
    'textColor' | 'valueSize' | 'icon' | 'iconSize' | 'iconColor' | 'forceColorMask' | 'iconXOffset' | 'iconYOffset'
>;

/**
 * A slider mark: the painted style fields plus value, label and activity.
 *
 * @remarks
 * A Zustandsmarke is a numeric state entry from `useData` (its `active` is
 * useData's flag, ADR-0105); an erzeugte Zwischenmarke is built here from the
 * base mark style and is no state entry. Both assign to this type.
 */
export type SliderMark = SliderMarkStyle & {
    value: number;
    label?: string;
    /** Aktiver Zustand of the mark: its value matches the backend value by `sameStateValue`. */
    active: boolean;
};

/** Parameters for {@link buildSliderMarks}. */
export interface BuildSliderMarksParams {
    /** Resolved state items; only entries with a numeric `value` are used. */
    states: StateStyleData[];
    /** Slider minimum or `null` when unbounded. */
    minValue: number | null;
    /** Slider maximum or `null` when unbounded. */
    maxValue: number | null;
    /** Step between generated marks; `Math.abs(x) || 1` (negative → distance, else fallback 1). */
    markStep?: number;
    /** When truthy, only state marks are used (no min/max/step injection). */
    onlyStates?: boolean;
    /** Unit appended to the labels of generated marks. */
    unit?: string;
    /** Backend value deciding the generated marks' `active` flag. */
    oidValue: string | number | boolean | undefined | null;
    /** Base mark style — the caller's `markBaseStyle.inactive`. */
    baseStyle: StyleData;
    /** Active mark style — the caller's `markBaseStyle.active`. */
    activeStyle: StyleData;
    /** Truthy when an active icon color is configured (guards the icon colour overlay). */
    iconColorActive?: string;
    /** Label of the selected mark (HTML allowed); replaces a mark label only. */
    aliasActive?: string;
    /** Raw active icon X offset of the widget data — input of the `0px` rule. */
    iconXOffsetActive?: string;
    /** Raw active icon Y offset of the widget data — input of the `0px` rule. */
    iconYOffsetActive?: string;
}

/** Result of {@link buildSliderMarks}: the mark list and the selected mark's position in it. */
export interface SliderMarks {
    /** Sorted marks (ascending by value), the selected one carrying its final presentation. */
    marks: SliderMark[];
    /** Index of the selected mark (the first active one), `null` without one. */
    selectedIndex: number | null;
}

/**
 * The `0px` rule: the icon offset of the selected mark (ADR-0106 decision 2).
 *
 * @param activeOffset - The RAW active offset from the widget data (only it
 * tells `''` from unset).
 * @param markOffset - The mark's own offset.
 * @returns A value other than `0px` wins, `''` keeps the mark's offset,
 * anything else (unset, `'0px'`) yields `0px`.
 * @remarks
 * Frozen presentation, deliberately NOT the shared resolver semantics (which
 * fall back to the base): the field has no default, so every existing slider
 * reaches the `0px` branch, and switching would move icons visibly.
 */
function selectedMarkIconOffset(activeOffset: string | undefined, markOffset: string | undefined): string | undefined {
    if (activeOffset && activeOffset !== '0px') {
        return activeOffset;
    }
    return activeOffset === '' ? markOffset : '0px';
}

/**
 * Builds the slider mark list from resolved states and range settings.
 *
 * @param params - See {@link BuildSliderMarksParams}.
 * @returns Sorted marks (ascending by value), the selected one carrying its
 * final presentation, plus the selected mark's index — the one place that
 * decides it, the Skala passes it through.
 * @remarks
 * Generated marks get `active` by `sameStateValue`; state marks keep useData's
 * flag. The selected mark is the FIRST active mark (like `activePosition`).
 * It gets the label `aliasActive` (when it has a label) and the `0px` offset
 * rule; a selected generated mark additionally takes `iconSize`/`forceColorMask`,
 * `textColor`/`valueSize` from `activeStyle` and `iconColor` only when an
 * active icon colour is set —
 * an unset `iconColorActive` must not override the base icon color. The former
 * `!== undefined` guards around size/mask were dropped as ineffective: with the
 * Active fields unset, the style resolver falls back to the base cascade.
 */
export function buildSliderMarks(params: BuildSliderMarksParams): SliderMarks {
    const { states, minValue, maxValue, markStep, onlyStates, unit, oidValue, baseStyle } = params;

    const generated = new Set<SliderMark>();
    const generatedMark = (value: number): SliderMark => {
        const mark: SliderMark = {
            ...baseStyle,
            value,
            label: `${value}${unit || ''}`,
            active: sameStateValue(value, oidValue),
        };
        generated.add(mark);
        return mark;
    };

    // Numeric states inside the range (type guard: only numeric values become marks)
    const marks: SliderMark[] = states.filter(
        (state): state is typeof state & { value: number } =>
            typeof state.value === 'number' &&
            (minValue === null || state.value >= minValue) &&
            (maxValue === null || state.value <= maxValue),
    );

    if (!onlyStates) {
        // Ensure minimum value is included
        if (minValue !== null && !marks.some(m => m.value === minValue)) {
            marks.push(generatedMark(minValue));
        }

        // Ensure maximum value is included
        if (maxValue !== null && !marks.some(m => m.value === maxValue)) {
            marks.push(generatedMark(maxValue));
        }

        // Add step divisions. |markStep| guards the loop: a negative step is kept
        // truthy by the plain `Number(x) || 1` fallback and would make `i += step`
        // diverge for min < max (endless loop). Interpreting it as its absolute
        // value matches the field's intent (a distance between marks).
        if (minValue !== null && maxValue !== null) {
            const step = Math.abs(Number(markStep)) || 1;
            for (let i = minValue + step; i < maxValue; i += step) {
                if (!marks.some(m => m.value === i)) {
                    marks.push(generatedMark(i));
                }
            }
        }
    }

    marks.sort((a, b) => a.value - b.value);

    const selected = marks.findIndex(mark => mark.active);
    if (selected === -1) {
        return { marks, selectedIndex: null };
    }
    marks[selected] = presentSelectedMark(marks[selected], generated.has(marks[selected]), params);
    return { marks, selectedIndex: selected };
}

/**
 * The final presentation of the selected mark — a new object, the state entry
 * from useData stays untouched.
 *
 * @param mark - The selected mark.
 * @param isGenerated - Whether it is an erzeugte Zwischenmarke (no state entry).
 * @param params - The active style and the raw active fields.
 */
function presentSelectedMark(mark: SliderMark, isGenerated: boolean, params: BuildSliderMarksParams): SliderMark {
    const { activeStyle, iconColorActive, aliasActive, iconXOffsetActive, iconYOffsetActive } = params;

    return {
        ...mark,
        // A state mark resolved its Active tier per state in useData; a generated
        // mark takes it from the active base mark style — the resolved label style,
        // so a gradient textColorActive paints like on a state mark.
        ...(isGenerated && {
            iconSize: activeStyle.iconSize,
            ...(iconColorActive ? { iconColor: activeStyle.iconColor } : {}),
            forceColorMask: activeStyle.forceColorMask,
            textColor: activeStyle.textColor,
            valueSize: activeStyle.valueSize,
        }),
        // Labels may carry HTML; a mark without a label stays empty.
        label: mark.label && aliasActive ? aliasActive : mark.label,
        iconXOffset: selectedMarkIconOffset(iconXOffsetActive, mark.iconXOffset),
        iconYOffset: selectedMarkIconOffset(iconYOffsetActive, mark.iconYOffset),
    };
}
