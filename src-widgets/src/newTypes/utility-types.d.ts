/**
 * Helper functions and type guards for runtime operations with widget data.
 * These utilities provide type-safe alternatives to dynamic property access.
 *
 * @module utility-types
 * @see file:src-widgets/src/newTypes/all-ideas-for-new-types.md (lines 716-760)
 *
 * @remarks
 * This file contains type declarations and re-exports runtime types from utility-types.ts.
 * The runtime implementations are available for hooks and components that need them.
 */

/**
 * Re-export runtime types from utility-types.ts
 */
export type { OidType, OidObject } from './utility-types';

/**
 * Type-safe getter for dynamic property access.
 * Provides a safe alternative to `(data as any)[key]` with full type inference.
 *
 * @example
 * ```typescript
 * interface WidgetData {
 *   oid1: string;
 *   oid2: string;
 *   label: string;
 * }
 *
 * const data: WidgetData = { oid1: 'light.on', oid2: 'light.brightness', label: 'My Light' };
 * const dynamicKey = 'oid1';
 * const value = getDynamicProperty(data, dynamicKey); // Type: string | undefined
 * ```
 *
 * @remarks
 * This function eliminates the need for `as any` casts when accessing properties
 * with computed keys. It preserves type safety by:
 * - Restricting keys to strings that exist on the object type
 * - Inferring the correct return type from the object's property type
 * - Returning `undefined` when the property doesn't exist at runtime
 *
 * Common use case: Iterating over indexed properties (oid1, oid2, ...)
 * ```typescript
 * for (let i = 1; i <= 10; i++) {
 *   const oid = getDynamicProperty(data, `oid${i}`);
 *   if (oid !== undefined) {
 *     // Process oid
 *   }
 * }
 * ```
 *
 * @template T - The object type (must extend Record<string, any>)
 * @template K - The key type (must be an existing property of T)
 * @param obj - The object to access
 * @param key - The property key to retrieve
 * @returns The property value or undefined if not found
 */
export function getDynamicProperty<T extends Record<string, any>, K extends keyof T & string>(
    obj: T,
    key: K,
): T[K] | undefined;

/**
 * Type-safe setter for dynamic property assignment.
 * Prevents type errors when setting properties with computed keys.
 *
 * @example
 * ```typescript
 * interface WidgetData {
 *   oid1?: string;
 *   oid2?: string;
 * }
 *
 * const data: WidgetData = {};
 * setDynamicProperty(data, 'oid1', 'light.on'); // OK
 * setDynamicProperty(data, 'oid2', 42); // Type error: number not assignable to string
 * ```
 *
 * @remarks
 * This function provides type-checked assignment for computed property keys.
 * Benefits:
 * - Type safety: Ensures assigned value matches property type
 * - No casts needed: Eliminates `as any` in assignment operations
 * - IntelliSense support: IDE provides autocomplete for valid keys
 *
 * Usage pattern for batch updates:
 * ```typescript
 * const updates: Array<[string, any]> = [
 *   ['oid1', 'device.state'],
 *   ['label', 'My Label']
 * ];
 * updates.forEach(([key, value]) => {
 *   setDynamicProperty(data, key, value);
 * });
 * ```
 *
 * @template T - The object type (must extend Record<string, any>)
 * @template K - The key type (must be an existing property of T)
 * @param obj - The object to modify
 * @param key - The property key to set
 * @param value - The value to assign
 */
export function setDynamicProperty<T extends Record<string, any>, K extends keyof T & string>(
    obj: T,
    key: K,
    value: T[K],
): void;

/**
 * Retrieves all indexed properties with a specific prefix.
 * Returns array of objects containing index and value.
 *
 * @example
 * ```typescript
 * interface WidgetData {
 *   oid1: string;
 *   oid2: string;
 *   oid3: string;
 *   label: string;
 * }
 *
 * const data: WidgetData = {
 *   oid1: 'light.on',
 *   oid2: 'light.brightness',
 *   oid3: 'light.color',
 *   label: 'Light'
 * };
 *
 * const oids = getAllIndexedProperties(data, 'oid');
 * // Result: [
 * //   { index: 1, value: 'light.on' },
 * //   { index: 2, value: 'light.brightness' },
 * //   { index: 3, value: 'light.color' }
 * // ]
 * ```
 *
 * @remarks
 * This utility is essential for Collection widgets that use indexed properties
 * (e.g., oid1, oid2, ..., oid10). It extracts all properties matching a prefix
 * pattern and returns them in a structured format.
 *
 * Features:
 * - Automatic index extraction from property names
 * - Sorted by index (ascending)
 * - Filters out undefined/null values
 * - Type-safe value inference
 *
 * Implementation consideration:
 * ```typescript
 * // Iterates through properties, extracts numeric suffix
 * // Returns only properties matching pattern `${prefix}${number}`
 * ```
 *
 * Use case in widgets:
 * ```typescript
 * const allOids = getAllIndexedProperties(this.props, 'oid');
 * allOids.forEach(({ index, value }) => {
 *   this.subscribeState(value, `oid${index}`);
 * });
 * ```
 *
 * @template T - The object type (must extend Record<string, any>)
 * @template P - The prefix string type
 * @param obj - The object to search
 * @param prefix - The property prefix to match (e.g., 'oid', 'label')
 * @returns Array of objects with index and value properties
 */
export function getAllIndexedProperties<T extends Record<string, any>, P extends string>(
    obj: T,
    prefix: P,
): Array<{ index: number; value: T[`${P}${number}`] }>;

/**
 * Type guard for runtime validation of widget data.
 * Checks if an arbitrary object matches the expected widget data type.
 *
 * @example
 * ```typescript
 * interface MyWidgetData {
 *   oid: string;
 *   label: string;
 *   visible: boolean;
 * }
 *
 * function processWidgetData(data: unknown) {
 *   if (isValidWidgetData<MyWidgetData>(data)) {
 *     // TypeScript knows data is MyWidgetData here
 *     console.log(data.oid, data.label);
 *   } else {
 *     console.error('Invalid widget data');
 *   }
 * }
 * ```
 *
 * @remarks
 * Type guards are critical for runtime type safety, especially when:
 * - Receiving data from external sources (ioBroker states, user input)
 * - Deserializing JSON configurations
 * - Validating widget properties before rendering
 *
 * Implementation approach:
 * ```typescript
 * // Check if object has all required properties of type T
 * // Validate property types match expectations
 * // Return boolean with type predicate
 * ```
 *
 * Benefits:
 * - Runtime type checking combined with compile-time types
 * - TypeScript narrows the type in the scope after the check
 * - Prevents invalid data from causing runtime errors
 *
 * Usage pattern:
 * ```typescript
 * const rxData = this.props; // type: any (from vis-2)
 * if (isValidWidgetData<MyWidgetData>(rxData)) {
 *   this.setState({ ...rxData }); // Type-safe
 * }
 * ```
 *
 * @template T - The expected widget data type
 * @param data - The data to validate
 * @returns True if data matches type T (with type predicate)
 */
export function isValidWidgetData<T>(data: any): data is T;

/**
 * Type guard to check if an indexed property exists at a specific index.
 * Validates both existence and type of indexed properties.
 *
 * @example
 * ```typescript
 * interface WidgetData {
 *   oid1?: string;
 *   oid2?: string;
 *   oid3?: string;
 * }
 *
 * const data: WidgetData = { oid1: 'light.on', oid2: 'light.brightness' };
 *
 * if (hasIndexedProperty(data, 'oid', 1)) {
 *   console.log(data.oid1); // Type-safe access
 * }
 *
 * if (hasIndexedProperty(data, 'oid', 3)) {
 *   // Won't execute - oid3 is undefined
 * }
 * ```
 *
 * @remarks
 * This function is specifically designed for Collection widgets that use
 * numbered properties. It provides:
 * - Existence check: Property is defined
 * - Type validation: Property has the expected type
 * - Index safety: Validates specific index
 *
 * Note: This function returns a boolean but does not provide TypeScript type narrowing.
 * For type-safe access after the check, you may still need to assert or check the property type.
 *
 * Advantages over simple undefined checks:
 * - More explicit intent in code
 * - Consistent validation pattern across codebase
 * - Can be extended with additional validation logic
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
 *
 * @template T - The object type (must extend Record<string, any>)
 * @template P - The property prefix type
 * @param obj - The object to check
 * @param prefix - The property prefix (e.g., 'oid', 'label')
 * @param index - The numeric index to check
 * @returns True if property exists and is defined
 */
export function hasIndexedProperty<T extends Record<string, any>, P extends string>(
    obj: T,
    prefix: P,
    index: number,
): boolean;
