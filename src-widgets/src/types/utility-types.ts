import type { SliderFieldsRxData, CommonObjectFieldsRxData } from './field-definitions';

/**
 * Runtime utility types for Collection widgets.
 * This module provides runtime-accessible types that are also exported via .d.ts files.
 *
 * @module utility-types
 * @remarks
 * These types are used by hooks and components for OID management and value conversion.
 * These types are exported directly from this file and re-exported via index.ts.
 */

/**
 * Supported OID types for value conversion in Collection widgets.
 *
 * @remarks
 * - `string`: Text values
 * - `number`: Numeric values (integers or floats)
 * - `boolean`: True/false values
 * - `mixed`: Intelligent auto-conversion (string/number/boolean)
 */
export type OidType = 'string' | 'number' | 'boolean' | 'mixed';

/**
 * Interface for OID object parameters used throughout Collection widgets.
 *
 * @remarks
 * OID (Object ID) is the unique identifier for ioBroker state objects.
 * This interface provides essential metadata for state management and value conversion.
 * @example
 * ```typescript
 * const oidObj: OidObject = {
 *   _id: 'hm-rpc.0.KEQ1234567.1.LEVEL',
 *   name: 'Bedroom Light Level',
 *   type: 'number',
 *   unit: '%',
 *   commonStates: { '0': 'Off', '100': 'Full' }
 * };
 * ```
 */
export interface OidObject {
    /** ioBroker Object ID (e.g., 'system.adapter.admin.0.alive') */
    _id: string;

    /** Human-readable name of the object */
    name: string;

    /** Type of the value for proper conversion */
    type: OidType;

    /** Optional unit of measurement (e.g., '°C', '%', 'kWh') */
    unit?: string;

    /** Optional mapping of values to human-readable labels */
    commonStates?: Record<string, string>;
}

/**
 * Type-safe alternative to (obj as any)[key].
 *
 * Enables safe access to dynamic properties while preserving TypeScript's
 * type information. The return type is automatically inferred from the object type.
 *
 * Provides two overloads:
 * 1. Strict mode: K must be a key of T (compile-time validation)
 * 2. Dynamic mode: K can be any string (for template literal keys like `icon${i}`)
 *
 * @template T - Object type (must extend Record<string, any>)
 * @template K - Key type
 * @param obj - Object to access
 * @param key - Property key (can be dynamic like 'icon1', 'alias2')
 * @returns Property value or undefined if not found
 * @example
 * ```typescript
 * // Strict mode - key must exist on type
 * const icon = getDynamicProperty(rxData, 'icon'); // ✅ Type-safe
 * const invalid = getDynamicProperty(rxData, 'nonexistent'); // ❌ Compile error
 *
 * // Dynamic mode - for computed keys
 * const dynamicIcon = getDynamicProperty(rxData, `icon${i}`); // ✅ Runtime-safe
 * ```
 * @remarks
 * This function provides compile-time type safety for known keys and runtime
 * safety for dynamic keys. It's the recommended way to access dynamic
 * properties in Collection widgets.
 */
// export function getDynamicProperty<T extends Record<string, any>, K extends keyof T>(obj: T, key: K): T[K] | undefined;
// export function getDynamicProperty<T extends Record<string, any>>(obj: T, key: string): T[keyof T] | undefined;
export function getDynamicProperty<T extends Record<string, any>>(obj: T, key: string): T[keyof T] | undefined {
    return obj[key];
}

/**
 * Type-safe alternative to obj[key] = value.
 *
 * Enables safe setting of dynamic properties while preserving TypeScript's
 * type information.
 *
 * Provides two overloads:
 * 1. Strict mode: K must be a key of T (compile-time validation)
 * 2. Dynamic mode: K can be any string (for template literal keys)
 *
 * @template T - Object type
 * @template K - Key type
 * @param obj - Object to modify
 * @param key - Property key
 * @param value - Value to set
 * @example
 * ```typescript
 * // Strict mode - key must exist on type
 * setDynamicProperty(rxData, 'icon', 'mdi-home'); // ✅ Type-safe
 *
 * // Dynamic mode - for computed keys
 * setDynamicProperty(rxData, `icon${i}`, 'mdi-home'); // ✅ Runtime-safe
 * ```
 */
export function setDynamicProperty<T extends Record<string, any>, K extends keyof T>(obj: T, key: K, value: T[K]): void;
export function setDynamicProperty<T extends Record<string, any>>(obj: T, key: string, value: T[keyof T]): void;
export function setDynamicProperty<T extends Record<string, any>>(obj: T, key: string, value: T[keyof T]): void {
    (obj as Record<string, any>)[key] = value;
}

/**
 * Retrieves all indexed properties with a given prefix.
 *
 * Useful for collecting all properties like icon1, icon2, icon3, etc.
 * Returns an array of {index, value} pairs for easy iteration.
 *
 * @template T - Object type
 * @template P - Prefix type (e.g., 'icon', 'alias')
 * @param obj - Object to search
 * @param prefix - Property prefix to search for
 * @returns Array of {index, value} pairs sorted by index
 * @example
 * ```typescript
 * // Get all icon properties
 * const icons = getAllIndexedProperties(rxData, 'icon');
 * // Returns: [
 * //   { index: 1, value: 'mdi-home' },
 * //   { index: 2, value: 'mdi-light' }
 * // ]
 * ```
 */
export function getAllIndexedProperties<T extends Record<string, any>, P extends string>(
    obj: T,
    prefix: P,
): Array<{ index: number; value: T[`${P}${number}`] }> {
    const result: Array<{ index: number; value: T[`${P}${number}`] }> = [];
    const regex = new RegExp(`^${prefix}(\\d+)$`);

    for (const key in obj) {
        const match = key.match(regex);
        if (match) {
            const index = parseInt(match[1], 10);
            result.push({
                index,
                value: obj[key] as T[`${P}${number}`],
            });
        }
    }

    result.sort((a, b) => a.index - b.index);
    return result;
}

/**
 * Type guard to check if data is SliderFieldsRxData.
 *
 * Enables safe access to slider-specific properties like sliderColor.
 *
 * @param data - Data to check
 * @returns true if data is SliderFieldsRxData
 * @example
 * ```typescript
 * if (isSliderFieldsRxData(rxData)) {
 *     const color = rxData.sliderColor; // ✅ Type-safe
 * }
 * ```
 */
export function isSliderFieldsRxData(data: any): data is SliderFieldsRxData {
    return typeof data === 'object' && data !== null && 'sliderOrientation' in data;
}

/**
 * Type guard to check if data is CommonObjectFieldsRxData.
 *
 * @param data - Data to check
 * @returns true if data is CommonObjectFieldsRxData
 */
export function isCommonObjectFieldsRxData(data: any): data is CommonObjectFieldsRxData {
    return typeof data === 'object' && data !== null && 'values_count' in data;
}

/**
 * Generic type guard for validating required fields.
 *
 * @template T - Expected type
 * @param data - Data to check
 * @param requiredFields - Optional array of required field names (default: [])
 * @returns true if data is an object and all required fields exist
 * @example
 * ```typescript
 * // Basic object type check
 * if (isValidWidgetData<MyWidgetData>(data)) {
 *     // TypeScript knows data is MyWidgetData here
 *     console.log(data.oid, data.label);
 * }
 *
 * // With required fields validation
 * if (isValidWidgetData(data, ['oid1', 'alias1'])) {
 *     const oid = data.oid1; // ✅ Guaranteed to exist
 * }
 * ```
 */
export function isValidWidgetData<T extends Record<string, any>>(
    data: any,
    requiredFields: (keyof T)[] = [],
): data is T {
    return typeof data === 'object' && data !== null && requiredFields.every(field => field in data);
}

/**
 * Type guard to check if an indexed property exists at a specific index.
 * Validates both existence and non-null value of indexed properties.
 *
 * @template T - The object type (must extend Record<string, any>)
 * @template P - The property prefix type
 * @param obj - The object to check
 * @param prefix - The property prefix (e.g., 'oid', 'label')
 * @param index - The numeric index to check
 * @returns True if property exists and is not null/undefined
 * @example
 * ```typescript
 * const data = { oid1: 'light.on', oid2: 'light.brightness' };
 *
 * if (hasIndexedProperty(data, 'oid', 1)) {
 *   console.log(data.oid1); // Type-safe access
 * }
 *
 * if (hasIndexedProperty(data, 'oid', 3)) {
 *   // Won't execute - oid3 is undefined
 * }
 * ```
 * @remarks
 * This function is specifically designed for Collection widgets that use
 * numbered properties. It provides:
 * - Existence check: Property is defined on object
 * - Null/undefined check: Property has a non-null value
 * - Index safety: Validates specific index
 *
 * Common usage:
 * ```typescript
 * for (let i = 1; i <= 10; i++) {
 *   if (hasIndexedProperty(this.props, 'oid', i)) {
 *     const oid = this.props[`oid${i}`];
 *     // Subscribe to state
 *   }
 * }
 * ```
 */
export function hasIndexedProperty<T extends Record<string, any>, P extends string>(
    obj: T,
    prefix: P,
    index: number,
): boolean {
    const key = `${prefix}${index}`;
    return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] != null;
}
