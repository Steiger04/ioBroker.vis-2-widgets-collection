/**
 * Type definitions for useData hook.
 *
 * @module hooks/useData/types
 * @since 2.2.0
 */

import type { SliderFieldsRxData, CommonFieldsRxData } from '../../types/field-definitions';
import type { OidObject } from '../../types/utility-types';
import type { PropertyResolvers } from './propertyResolvers';

/**
 * Derived style/presentation data for a Collection widget: one key per resolver of
 * `createPropertyResolvers`, with the type that resolver returns. Optional, because
 * the helpers reading an entry also take hand-built parts of one.
 */
export type StyleData = { [Key in keyof PropertyResolvers]?: ReturnType<PropertyResolvers[Key]> };

/**
 * Generic type for priority resolution.
 * Enables declarative fallback chains for property values.
 *
 * @template T - Type of the value to resolve
 * @example
 * ```typescript
 * const options: PriorityOption<number>[] = [
 *   { condition: isActive, value: activeSize },
 *   { value: defaultSize },
 *   { value: 100 }
 * ];
 * ```
 */
export interface PriorityOption<T> {
    /**
     * Optional: Condition that must be fulfilled.
     * If undefined, option is always considered.
     */
    condition?: boolean;

    /**
     * The value to use when condition=true (or no condition).
     */
    value: T | undefined;
}

/**
 * The marker layer (CONTEXT "Marker-Ebene"): the widget-level style every mark
 * takes where its state sets none of its own — a tier between the per-state
 * values and the base values of the resolver chains.
 *
 * A widget passes it explicitly via `useData(idName, { markerLayer })`; the core
 * never derives it from the widget data. It applies to marks only: useData
 * resolves `states` and `markBaseStyle` with it, the active style `data` without.
 * Each chain carrying it places it behind the per-state tier and before the base
 * (see `createPropertyResolvers()`).
 */
export interface MarkerLayer {
    /** Icon size in percent of the 24px default icon. */
    iconSize?: number;

    /** Icon color (CSS color value). */
    iconColor?: string;

    /** Text color (CSS color value); an empty string counts as unset. */
    textColor?: string;

    /** Text size, formatted like the other size fields. */
    textSize?: number;
}

/**
 * Style data for individual state items without active-state overrides.
 *
 * Derived from StyleData by selecting only non-active properties.
 * Used by states computation to build independent state items.
 *
 * @remarks
 * Excludes the Cm suffix properties (common/shared properties) and the header/footer
 * properties. `value` is the row's own value here, typed after the OID, not the
 * formatted text of {@link StyleData}.
 * @since 2.2.0
 */
export type StateStyleData = Pick<
    StyleData,
    | 'alias'
    | 'textColor'
    | 'icon'
    | 'iconSize'
    | 'iconSizeOnly'
    | 'iconColor'
    | 'iconXOffset'
    | 'iconYOffset'
    | 'forceColorMask'
    | 'valueSize'
    | 'background'
    | 'frameBackground'
> & {
    value?: string | number | boolean;

    /**
     * Feldnummer: the 1-based suffix of this state's field row (`value{i}`, `alias{i}`,
     * `textColor{i}` …) — the key it was style-resolved with.
     *
     * @remarks
     * NOT the state's position in `states`: blank value rows are skipped, so after a gap
     * the two diverge (blank `value2` → the state of `value3` sits at position 1).
     */
    fieldNumber: number;

    /**
     * Aktiver Zustand: whether this state matches the current OID value — the
     * `sameStateValue` decision its style was resolved with (ADR-0105).
     *
     * @remarks
     * Every duplicate of the matching value is active. Consumers that need ONE entry
     * (the Select's value, the active style `data`) use
     * {@link UseDataResult.activePosition} instead — the first match.
     */
    active: boolean;

    label?: string;

    iconWidth?: number;
    iconHeight?: number;
};

/**
 * The base style of a mark (`ext=''`) with the marker layer — what a generated
 * mark between the states renders with.
 */
export interface MarkBaseStyle {
    /** The base mark style, `includeActive=false`. */
    inactive: StyleData;
    /** The base mark style, `includeActive=true` (the active overlay's source). */
    active: StyleData;
}

/**
 * Return type for useData hook.
 */
export interface UseDataResult {
    /** Array of computed state items with resolved properties, marker layer included */
    states: StateStyleData[];

    /**
     * The marks' base style with the marker layer, for marks without a state row
     * (see {@link MarkBaseStyle}); without a marker layer, the plain base style.
     */
    markBaseStyle: MarkBaseStyle;

    /** Minimum numeric value (for slider/number types) or null */
    minValue: number | null;

    /** Maximum numeric value (for slider/number types) or null */
    maxValue: number | null;

    /** Resolved style/presentation data for current state (without the marker layer) */
    data: StyleData;

    /**
     * 0-based position of the currently active state in `states`, or undefined
     * when no state matches the current OID value.
     *
     * @remarks
     * For consumers that need ONE entry of the state list (the Select's entry):
     * `states[activePosition]` is the first active state. With duplicate values more
     * states are active — read {@link StateStyleData.active} per state. Not a Feldnummer —
     * that is the entry's {@link StateStyleData.fieldNumber}, which also keys the active
     * state's style `data`. Deliberately not named `activeIndex`: that name used to
     * denote the 1-based field number.
     */
    activePosition: number | undefined;

    /** Current OID value from ioBroker */
    oidValue: ioBroker.StateValue;
}

// Re-exports
export type { SliderFieldsRxData, CommonFieldsRxData };
export type { OidObject };
