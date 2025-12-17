/**
 * Type utilities for composing widget data structures from field definitions.
 * These types enable type-safe widget building with compile-time validation.
 *
 * @module widget-builder
 * @see file:src-widgets/src/types/all-ideas-for-new-types.md (lines 599-651)
 */

/**
 * Converts a union type to an intersection type.
 * Uses conditional types and contravariance for type inference.
 *
 * @example
 * ```typescript
 * type A = { a: string };
 * type B = { b: number };
 * type Result = UnionToIntersection<A | B>; // { a: string } & { b: number }
 * ```
 * @remarks
 * This utility is fundamental for combining multiple field definitions into a single
 * widget data type. It leverages TypeScript's contravariant position in function
 * parameters to infer the intersection type.
 *
 * The transformation works as follows:
 * 1. For each type in the union, create a function type (k: T) => void
 * 2. Create a union of these function types
 * 3. Infer the parameter type from this union (which becomes an intersection)
 * @template U - The union type to convert
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * Extracts the `rxData` property type from a field module.
 * Used to get the data type that a field definition contributes to the widget.
 *
 * @example
 * ```typescript
 * const commonFields = {
 *   rxData: { label: string, visible: boolean }
 * };
 * type Data = ExtractFieldTypes<typeof commonFields>; // { label: string, visible: boolean }
 * ```
 * @remarks
 * Field modules in vis-2 follow a pattern where they export an object with an
 * `rxData` property containing the TypeScript types for the fields they define.
 * This utility extracts that type for composition with other field types.
 *
 * If the module doesn't have an `rxData` property, it returns `never`, which
 * is safely ignored in union/intersection operations.
 * @template T - The field module type to extract from
 */
export type ExtractFieldTypes<T> = T extends { rxData: infer R } ? R : never;

/**
 * Core type builder for composing widget data from multiple field definitions.
 * Combines an array of field modules into a single intersection type.
 *
 * @example
 * ```typescript
 * type MyWidgetFields = [
 *   typeof commonFields,
 *   typeof stateFields,
 *   typeof delayFields
 * ];
 * type MyWidgetData = BuildWidgetData<MyWidgetFields>;
 * // Result: { label: string, visible: boolean, oid: string, delay: number, ... }
 * ```
 * @remarks
 * This is the primary type utility used by widget implementations. It enables
 * type-safe composition of widget properties from reusable field modules.
 *
 * The process works as follows:
 * 1. Takes a readonly tuple of field module types
 * 2. Converts tuple to union with `T[number]`
 * 3. Extracts `rxData` from each module
 * 4. Converts union of extracted types to intersection
 *
 * Usage in widget classes:
 * ```typescript
 * class MyWidget extends Generic<BuildWidgetData<[
 *   typeof commonFields,
 *   typeof stateFields
 * ]>> {
 *   // Widget implementation with full type safety
 * }
 * ```
 * @template T - Readonly array of field module types
 */
export type BuildWidgetData<T extends readonly any[]> = UnionToIntersection<ExtractFieldTypes<T[number]>>;

/**
 * Converts widget data type to widget state type with nullable properties.
 * Properties that were `undefined` become `T[K] | null` in the state.
 *
 * @example
 * ```typescript
 * type WidgetData = { label: string, value?: number };
 * type WidgetState = BuildWidgetState<WidgetData>;
 * // Result: { label: string, value: number | null }
 * ```
 * @remarks
 * In vis-2 widgets, the state is initialized asynchronously from ioBroker states.
 * During initialization, optional properties from `rxData` should be represented
 * as `null` in the widget state until they receive their actual values.
 *
 * This transformation ensures:
 * - Required properties remain their original type
 * - Optional properties become explicitly nullable
 * - Type safety is maintained throughout the widget lifecycle
 *
 * Usage pattern:
 * ```typescript
 * interface MyWidgetState extends BuildWidgetState<MyWidgetData> {
 *   // Additional state properties
 *   isLoading: boolean;
 * }
 * ```
 * @template T - The widget data type to convert
 */
export type BuildWidgetState<T> = {
    [K in keyof T]-?: undefined extends T[K] ? Exclude<T[K], undefined> | null : T[K];
};

/**
 * Compile-time validation for field configurations.
 * Ensures that field definitions are proper Record types.
 *
 * @example
 * ```typescript
 * type ValidFields = ValidateFields<{ label: string }>; // OK
 * type InvalidFields = ValidateFields<string>; // never
 * ```
 * @remarks
 * This utility provides compile-time safety when creating field definitions.
 * It ensures that field configurations are always object types (Record<string, any>)
 * and not primitives or other invalid types.
 *
 * When a field configuration doesn't match the expected structure, the type
 * resolves to `never`, which will cause TypeScript compilation errors at the
 * point of use, providing early feedback to developers.
 *
 * Usage in field definition modules:
 * ```typescript
 * export const myFields = (): ValidateFields<{
 *   label: string,
 *   visible: boolean
 * }> => ({
 *   // Field definitions
 * });
 * ```
 * @template T - The type to validate
 */
export type ValidateFields<T> = T extends Record<string, any> ? T : never;
