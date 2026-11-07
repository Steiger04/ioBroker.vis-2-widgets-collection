/**
 * Type definitions for useData hook.
 *
 * @module hooks/useData/types
 * @since 2.2.0
 */

import type { SliderFieldsRxData, CommonFieldsRxData } from '../../types/field-definitions';
import type { OidObject } from '../../types/utility-types';

/**
 * Derived style/presentation data for a Collection widget.
 *
 * @remarks
 * Mirrors the legacy definitions in useData for drop-in compatibility.
 */
export interface StyleData {
    /** Text color (from widget config or theme). */
    textColorCm?: string;
    /** Text color (from widget config or theme). */
    textColor?: string;
    /** Active-state text color. */
    textColorActive?: string;

    /** Header text (newlines removed). */
    header?: string;
    /** Header font size (usually `%` or CSS size string). */
    headerSize?: string | null;

    /** Footer text (newlines removed). */
    footer?: string;
    /** Footer font size (usually `%` or CSS size string). */
    footerSize?: string | null;

    /** Alias text shown instead of the raw value. */
    alias?: string;
    /** Formatted value (may include unit). */
    value?: string | number | boolean;
    /** Value font size. */
    valueSize?: string | null;
    /** Active value font size (or `false` when not configured). */
    valueSizeActive?: string | null;

    /** Icon URL/name or `null` when not configured. */
    icon?: string;
    /** Active icon URL/name (or `null`). */
    iconActive?: string;
    /** Icon size as CSS string. */
    iconSize?: number | string;
    /** Icon size (or `false`). */
    iconSizeCm?: string;
    /** Active icon size (or `false`). */
    iconSizeActive?: string;
    /** Active icon size as numeric percent when available. */
    iconSizeActiveOnly?: number;
    /** Force color mask on icon. */
    forceColorMaskCm?: boolean;
    /** Force color mask on icon. */
    forceColorMask?: boolean;
    /** Force color mask on icon when active. */
    forceColorMaskActive?: boolean;
    /** Icon size as string percent when available. */
    iconSizeOnly?: string;
    /** Icon width */
    iconWidth?: number;
    /** Icon height */
    iconHeight?: number;
    /** Icon color. */
    iconColor?: string;
    /** Active icon color. */
    iconColorActive?: string;
    /** Icon X offset as a CSS value (with unit). */
    iconXOffsetCm?: string;
    /** Icon Y offset as a CSS value (with unit). */
    iconYOffsetCm?: string;
    /** Icon X offset as a CSS value (with unit). */
    iconXOffset?: string;
    /** Icon Y offset as a CSS value (with unit). */
    iconYOffset?: string;
    /** Active icon X offset as a CSS value (with unit). */
    iconXOffsetActive?: string;
    /** Active icon Y offset as a CSS value (with unit). */
    iconYOffsetActive?: string;

    /** The widget's CSS background-color (read by the dialogs). */
    backgroundColor?: string;
    /** Background (gradient/image). */
    background?: string;
    /** Active background. */
    backgroundActive?: string;

    /** The widget's CSS background-color, used for the view dialog's frame details. */
    frameBackgroundColor?: string;
    /** Frame background (gradient/image). */
    frameBackground?: string;
    /** Active frame background. */
    frameBackgroundActive?: string;
}

/**
 * Represents a state item with visual and data properties.
 * Mirrors the legacy StateItem shape for compatibility.
 */
export interface StateItem {
    value: string | number | boolean;
    valueSize: string | null | undefined;
    label: string;
    alias: string;
    fontSize?: string | null;
    textColor?: string;
    icon?: string;
    iconSize?: string;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor?: string;
    forceColorMask?: boolean;
    background?: string;
    backgroundActive?: string;
    frameBackground?: string;
    frameBackgroundActive?: string;
}

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
 * Generic interface for type-safe dynamic property access.
 * Enables safe access to indexed properties like `icon1`, `alias2`.
 *
 * @template T - Type of the object whose properties are resolved
 * @example
 * ```typescript
 * const resolver: PropertyResolver<CommonFieldsRxData> = createResolver(rxData);
 * const icon = resolver.resolve('icon', 1); // Accesses rxData.icon1
 * ```
 */
export interface PropertyResolver<T> {
    /**
     * Resolves a property value, optionally with index suffix.
     *
     * @param key - Property name (e.g. 'icon')
     * @param index - Optional: Index suffix (e.g. 1 for 'icon1')
     * @returns Property value or undefined
     */
    resolve<K extends keyof T>(key: K, index?: number): T[K] | undefined;
}

/**
 * Utility type for indexed properties.
 * Extracts value type from indexed properties like `icon1`, `icon2`.
 *
 * @template T - Type of the object
 * @template P - Prefix of the property name (e.g. 'icon')
 * @example
 * ```typescript
 * // If T = { icon1: string, icon2: string }
 * type IconValue = IndexedProperty<T, 'icon'>; // string
 * ```
 */
export type IndexedProperty<T, P extends string> = T extends Record<`${P}${number}`, infer V> ? V : never;

/**
 * The marker layer (CONTEXT "Marker-Ebene"): the widget-level style every mark
 * takes where its state sets none of its own — a tier between the per-state
 * values and the base values of the resolver chains.
 *
 * A widget passes it explicitly via `useData(idName, { markerLayer })`; the core
 * never derives it from the widget data. It applies to marks only: useData
 * resolves `states` and `markBaseStyle` with it, the active style `data` and
 * `resolveStyleData` without. Each chain carrying it places it behind the
 * per-state tier and before the base (see `createPropertyResolvers()`).
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
 * Type-safe resolver functions for all widget properties.
 *
 * Each resolver function accepts an extension (state index) and includeActive flag,
 * returning the resolved property value with proper fallback chain logic.
 *
 * @remarks
 * Defines 38 resolver functions across 5 categories: Icon Properties (20),
 * Text Properties (3), Size Properties (5), Content Properties (4) and
 * Background Properties (6).
 * @since 2.2.0
 */
export interface PropertyResolvers {
    // Icon Properties (20 resolvers)
    icon: (ext: string | number, includeActive: boolean) => string;
    iconActive: (ext: string | number, includeActive: boolean) => string;
    iconSize: (ext: string | number, includeActive: boolean) => string;
    iconSizeActive: (ext: string | number, includeActive: boolean) => string;
    iconSizeCm: (ext: string | number, includeActive: boolean) => string;
    iconSizeOnly: (ext: string | number, includeActive: boolean) => string;
    iconSizeActiveOnly: (ext: string | number, includeActive: boolean) => number | undefined;
    iconWidth: (ext: string | number, includeActive: boolean) => number;
    iconHeight: (ext: string | number, includeActive: boolean) => number;
    iconColor: (ext: string | number, includeActive: boolean) => string;
    iconColorActive: (ext: string | number, includeActive: boolean) => string;
    iconXOffset: (ext: string | number, includeActive: boolean) => string;
    iconXOffsetActive: (ext: string | number, includeActive: boolean) => string;
    iconXOffsetCm: (ext: string | number, includeActive: boolean) => string;
    iconYOffset: (ext: string | number, includeActive: boolean) => string;
    iconYOffsetActive: (ext: string | number, includeActive: boolean) => string;
    iconYOffsetCm: (ext: string | number, includeActive: boolean) => string;
    forceColorMask: (ext: string | number, includeActive: boolean) => boolean;
    forceColorMaskActive: (ext: string | number, includeActive: boolean) => boolean;
    forceColorMaskCm: (ext: string | number, includeActive: boolean) => boolean;

    // Text Properties (3 resolvers)
    textColor: (ext: string | number, includeActive: boolean) => string;
    textColorActive: (ext: string | number, includeActive: boolean) => string | undefined;
    textColorCm: (ext: string | number, includeActive: boolean) => string;

    // Size Properties (5 resolvers)
    fontSize: (ext: string | number, includeActive: boolean) => string | null;
    headerSize: (ext: string | number, includeActive: boolean) => string | null;
    footerSize: (ext: string | number, includeActive: boolean) => string | null;
    valueSize: (ext: string | number, includeActive: boolean) => string | null;
    valueSizeActive: (ext: string | number, includeActive: boolean) => string | null;

    // Content Properties (4 resolvers)
    header: (ext: string | number, includeActive: boolean) => string;
    footer: (ext: string | number, includeActive: boolean) => string;
    alias: (ext: string | number, includeActive: boolean) => string;
    value: (ext: string | number, includeActive: boolean) => string | undefined;

    // Background Properties (6 resolvers)
    backgroundColor: (ext: string | number, includeActive: boolean) => string;
    background: (ext: string | number, includeActive: boolean) => string;
    backgroundActive: (ext: string | number, includeActive: boolean) => string | undefined;
    frameBackgroundColor: (ext: string | number, includeActive: boolean) => string;
    frameBackground: (ext: string | number, includeActive: boolean) => string;
    frameBackgroundActive: (ext: string | number, includeActive: boolean) => string | undefined;
}

/**
 * Style data for individual state items without active-state overrides.
 *
 * Derived from StyleData by selecting only non-active properties.
 * Used by states computation to build independent state items.
 *
 * @remarks
 * Excludes all Active suffix properties (except background-related which are handled separately),
 * Cm suffix properties (common/shared properties), and header/footer properties.
 * @since 2.2.0
 */
export type StateStyleData = Pick<
    StyleData,
    | 'value'
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
    | 'backgroundActive'
    | 'frameBackground'
    | 'frameBackgroundActive'
> & {
    /**
     * Feldnummer: the 1-based suffix of this state's field row (`value{i}`, `alias{i}`,
     * `textColor{i}` …) — the key it was style-resolved with (`resolveStyleData(i)`).
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
     * {@link UseDataResult.activePosition} / {@link UseDataResult.activeFieldNumber}
     * instead — the first match.
     */
    active: boolean;

    label?: string;
    fontSize?: string | null;

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
 * Matches the return type structure of useData for API compatibility.
 */
export interface UseDataResult {
    /** Array of computed state items with resolved properties, marker layer included */
    states: StateStyleData[];

    /**
     * The marks' base style with the marker layer, for marks without a state row
     * (see {@link MarkBaseStyle}); without a marker layer, the plain base style.
     */
    markBaseStyle: MarkBaseStyle;

    /** Mapping of state values to string labels for widget-specific use */
    widgetStates: Record<string, string>;

    /** Minimum numeric value (for slider/number types) or null */
    minValue: number | null;

    /** Maximum numeric value (for slider/number types) or null */
    maxValue: number | null;

    /** Resolved style/presentation data for current state (without the marker layer) */
    data: StyleData;

    /**
     * Feldnummer of the currently active state (its `fieldNumber`), or undefined
     * when no state matches the current OID value.
     *
     * @remarks
     * It keys the active state's style resolution, so `data` is
     * `resolveStyleData(activeFieldNumber, true)`. NOT a position in `states` (see
     * {@link StateStyleData.fieldNumber}) — index the list with
     * {@link UseDataResult.activePosition} instead. Matching goes through
     * `sameStateValue`; with duplicate values the first state wins.
     * Deliberately 1-based, so the first field number stays truthy.
     */
    activeFieldNumber: number | undefined;

    /**
     * 0-based position of the currently active state in `states`, or undefined
     * when no state matches the current OID value.
     *
     * @remarks
     * For consumers that need ONE entry of the state list (the Select's entry):
     * `states[activePosition]` is the first active state. With duplicate values more
     * states are active — read {@link StateStyleData.active} per state. Not a Feldnummer —
     * see {@link UseDataResult.activeFieldNumber}. Deliberately not named `activeIndex`:
     * that name used to denote the 1-based field number.
     */
    activePosition: number | undefined;

    /** Current OID value from ioBroker */
    oidValue: ioBroker.StateValue;

    /**
     * Memoized style data resolver function.
     * Computes StyleData for a given state extension and active flag, without the
     * marker layer.
     *
     * @param ext - State extension: '' for base, numeric index (1-N) for state-specific
     * @param includeActive - Whether to include active-state properties in resolution
     * @returns Resolved StyleData object
     * @since 2.2.3
     * @example
     * ```typescript
     * const { resolveStyleData } = useData('oid');
     * const baseStyle = resolveStyleData('', true);
     * const state1Style = resolveStyleData(1, false);
     * ```
     */
    resolveStyleData: (ext: string | number, includeActive: boolean) => StyleData;
}

// Re-exports
export type { SliderFieldsRxData, CommonFieldsRxData };
export type { OidObject };
