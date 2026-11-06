/**
 * The Skala of the Slider collection widget: range, grid, marks and the
 * selected mark behind one interface.
 *
 * @module widgets/SliderCollectionWidget/scale
 * @remarks
 * Pure (ADR-0106, decision 4): the body hands in the slider fields of the
 * widget data plus what useData resolved (states, State-Spanne, mark base
 * style) and wires the result only. The mark list comes from the pure mark
 * function `buildSliderMarks`, which stays a seam of its own behind the Skala.
 */

import { buildSliderMarks, type SliderMark } from './marks';
import type { MarkBaseStyle, StateStyleData } from '../hooks/useData/types';
import type { SliderCollectionContextProps } from '../types';

/** The slider fields of the widget data the Skala reads. */
export type ScaleFields = Pick<
    SliderCollectionContextProps['widget']['data'],
    | 'minValue'
    | 'maxValue'
    | 'step'
    | 'markStep'
    | 'onlyStates'
    | 'iconColorActive'
    | 'aliasActive'
    | 'iconXOffsetActive'
    | 'iconYOffsetActive'
>;

/** Parameters for {@link buildScale}. */
export interface BuildScaleParams {
    /** The slider fields of the widget data. */
    fields: ScaleFields;
    /** Resolved state items from useData. */
    states: StateStyleData[];
    /** Lower end of useData's State-Spanne, `null` without numeric states. */
    stateMin: number | null;
    /** Upper end of useData's State-Spanne, `null` without numeric states. */
    stateMax: number | null;
    /** useData's mark base style (inactive + active). */
    markBaseStyle: MarkBaseStyle;
    /** Unit of the bound object, appended to the labels of generated marks. */
    unit?: string;
    /** Backend value deciding the Aktiver Zustand of the generated marks. */
    oidValue: string | number | boolean | undefined | null;
}

/** The Skala: what the MUI Slider takes as `min`/`max`/`step`/`marks`, plus the selected mark. */
export interface Scale {
    /** Slider minimum, `null` when unbounded. */
    min: number | null;
    /** Slider maximum, `null` when unbounded. */
    max: number | null;
    /** Grid: `null` snaps to the marks, `undefined` leaves MUI's default. */
    step: number | null | undefined;
    /** Sorted marks, the selected one carrying its final presentation. */
    marks: SliderMark[];
    /** Index of the selected mark (the first active one), `null` without one. */
    selectedIndex: number | null;
}

/**
 * Builds the Skala.
 *
 * @param params - See {@link BuildScaleParams}.
 */
export function buildScale(params: BuildScaleParams): Scale {
    const { fields, states, stateMin, stateMax, markBaseStyle, unit, oidValue } = params;

    // Range rule: Nur Zustände spans the states; otherwise the field, unset → State-Spanne.
    const min = !fields.onlyStates && fields.minValue !== undefined ? Number(fields.minValue) : stateMin;
    const max = !fields.onlyStates && fields.maxValue !== undefined ? Number(fields.maxValue) : stateMax;

    // Grid rule (ADR-0002): Nur Zustände snaps to the marks (`null`); otherwise
    // the field, unset → MUI's default.
    const step = fields.onlyStates ? null : fields.step !== undefined ? Number(fields.step) : undefined;

    const marks = buildSliderMarks({
        states,
        minValue: min,
        maxValue: max,
        markStep: fields.markStep,
        onlyStates: fields.onlyStates,
        unit,
        oidValue,
        baseStyle: markBaseStyle.inactive,
        activeStyle: markBaseStyle.active,
        iconColorActive: fields.iconColorActive,
        aliasActive: fields.aliasActive,
        iconXOffsetActive: fields.iconXOffsetActive,
        iconYOffsetActive: fields.iconYOffsetActive,
    });

    // The mark function decided the selection by the flag: the first active mark.
    const selected = marks.findIndex(mark => mark.active);

    return { min, max, step, marks, selectedIndex: selected === -1 ? null : selected };
}
