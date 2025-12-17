/**
 * Module augmentation and extensions for @iobroker/types-vis-2.
 * Adds Collection-specific types and interfaces to the vis-2 type system.
 *
 * @module vis-2-extensions
 * @see file:src-widgets/src/types/all-ideas-for-new-types.md (lines 762-792)
 * @remarks
 * This file extends the official vis-2 types with Collection widget-specific
 * additions without modifying the original type definitions. It uses TypeScript's
 * module augmentation feature to safely add new properties and types.
 *
 * **Module Path Verification:**
 * - The module string `'@iobroker/types-vis-2'` matches the package name exactly
 * - The interface `VisRxWidgetStateValues` is exported from `@iobroker/types-vis-2/index.d.ts` (line 1152)
 * - TypeScript will merge this augmentation with the original interface declaration
 * @see {@link ../../../../../../ioBroker.vis-2/packages/types-vis-2/index.d.ts} for original VisRxWidgetStateValues definition
 */

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

/**
 * Module augmentation for @iobroker/types-vis-2
 * Extends VisRxWidgetStateValues interface with Collection-specific state values.
 *
 * @remarks
 * This augmentation is verified to work correctly:
 * - Module path `'@iobroker/types-vis-2'` matches the import path used throughout the codebase
 * - Interface name `VisRxWidgetStateValues` matches the exported interface exactly (case-sensitive)
 * - TypeScript will automatically merge this with the original interface from the dependency
 */
declare module '@iobroker/types-vis-2' {
    /**
     * Extended interface for widget state values.
     * Adds support for Collection widget state patterns.
     *
     * @remarks
     * Collection widgets use a naming convention for state values:
     * - `collection_${widgetType}` for widget-specific states
     * - Dynamic indexing for multiple items (e.g., collection_state_1, collection_state_2)
     *
     * This augmentation allows TypeScript to recognize these patterns without
     * causing type errors when accessing dynamic state properties.
     *
     * **Phase 4 Status**: Generic `any` type for all collection states
     *
     * **Future Refinement (Phase 5-8)**: The `any` type will be replaced with
     * concrete union types for each widget's specific state structure:
     * - `collection_state_${number}`: StateFieldsRxData properties
     * - `collection_slider_${number}`: SliderFieldsRxData properties
     * - `collection_gauge_${number}`: GaugeFieldsRxData properties
     * - `collection_checkbox_${number}`: CheckboxFieldsRxData properties
     * - `collection_switch_${number}`: SwitchFieldsRxData properties
     * - `collection_radioGroup_${number}`: RadioGroupFieldsRxData properties
     * - `collection_buttonGroup_${number}`: ButtonGroupFieldsRxData properties
     * - `collection_select_${number}`: SelectFieldsRxData properties
     * - `collection_dialog_${number}`: DialogFieldsRxData properties
     * - `collection_light2_${number}`: Light2FieldsRxData properties
     *
     * This will provide type-safe access to widget-specific state properties
     * while maintaining backward compatibility during migration.
     * @example
     * ```typescript
     * // Phase 4: Generic access (current)
     * interface MyWidgetState extends VisRxWidgetStateValues {
     *   collection_state: any;
     *   collection_slider_value: any;
     * }
     *
     * // Phase 5-8: Type-safe access (future)
     * interface MyWidgetState extends VisRxWidgetStateValues {
     *   collection_state_1: string | undefined; // from StateFieldsRxData.oid1
     *   collection_slider_value: number | undefined; // from SliderFieldsRxData.min/max
     * }
     * ```
     */
    interface VisRxWidgetStateValues {
        /**
         * Collection widget state values with dynamic keys.
         * Pattern: collection_${widgetType}_${property}
         *
         * @remarks
         * Phase 4: Generic `any` type for all collection states
         *
         * Includes legacy `.ack` pattern for backward compatibility:
         * - `${string}.ack`: boolean (from legacy types/index.d.ts)
         * - `collection_${string}`: any (new collection states)
         * @see {@link context-types.d.ts} for widget-specific context types
         */
        [key: `collection_${string}`]: any;

        /**
         * Legacy state acknowledgment pattern.
         * Inherited from types/index.d.ts for backward compatibility.
         *
         * @deprecated Use collection-specific state patterns instead
         */
        [key: `${string}.ack`]: boolean;
    }
}

/**
 * Extended widget info interface for Collection widgets.
 * Adds metadata specific to Collection widget types.
 *
 * @example
 * ```typescript
 * static getWidgetInfo(): CollectionWidgetInfo {
 *   return {
 *     id: 'tplStateCollectionWidget',
 *     visSet: 'vis-2-widgets-collection',
 *     visName: 'StateCollectionWidget',
 *     collectionType: 'state',
 *     maxItems: 10,
 *     // ... other RxWidgetInfo properties
 *   };
 * }
 * ```
 * @remarks
 * Collection widgets share common characteristics:
 * - They manage multiple items (states, buttons, sliders, etc.)
 * - They have a maximum number of items
 * - They have a specific collection type for categorization
 *
 * This interface extends the standard `RxWidgetInfo` with these additional
 * properties, enabling:
 * - Type-safe widget metadata definition
 * - Runtime validation of collection constraints
 * - Better tooling support (autocomplete, type checking)
 *
 * Properties:
 * - `collectionType`: Identifies the category (e.g., 'state', 'slider', 'button')
 * - `maxItems`: Optional limit on number of items (used for validation)
 */
export interface CollectionWidgetInfo extends RxWidgetInfo {
    /**
     * The type of collection this widget manages.
     * Used for categorization and runtime behavior.
     *
     * @example 'state', 'slider', 'button', 'switch', 'gauge'
     */
    collectionType: string;

    /**
     * Maximum number of items this collection can contain.
     * Optional - if undefined, no limit is enforced.
     *
     * @default undefined (no limit)
     * @remarks
     * This is used for:
     * - Validation in the property editor
     * - Dynamic field generation (1..maxItems)
     * - Performance optimization (limiting subscriptions)
     */
    maxItems?: number;
}

/**
 * Callback type for field value changes.
 * Used in property editors and validation logic.
 *
 * @example
 * ```typescript
 * const handleFieldChange: FieldChangeCallback<string> = (field, value) => {
 *   console.log(`Field ${field} changed to:`, value);
 *   // Update widget configuration
 * };
 * ```
 * @remarks
 * This callback type is used throughout the Collection widget system for:
 * - Property editor field updates
 * - Validation triggers
 * - Side-effect handling (e.g., subscribing to new OIDs)
 *
 * Type parameter `T` provides type safety for the value:
 * ```typescript
 * const oidChange: FieldChangeCallback<string> = (field, value) => {
 *   // value is typed as string
 * };
 * const delayChange: FieldChangeCallback<number> = (field, value) => {
 *   // value is typed as number
 * };
 * ```
 * @template T - The type of the field value (default: any)
 * @param field - The name of the field that changed
 * @param value - The new value of the field
 */
export type FieldChangeCallback<T = any> = (field: string, value: T) => void;

/**
 * Callback type for field validation.
 * Returns true if the value is valid, false otherwise.
 *
 * @example
 * ```typescript
 * const validateOid: FieldValidationCallback<string> = (field, value) => {
 *   // Check if OID exists in ioBroker
 *   return value.length > 0 && value.includes('.');
 * };
 *
 * const validateRange: FieldValidationCallback<number> = (field, value) => {
 *   return value >= 0 && value <= 100;
 * };
 * ```
 * @remarks
 * Validation callbacks are used for:
 * - Real-time validation in property editor
 * - Pre-save validation
 * - Error highlighting in UI
 *
 * Validation patterns:
 * - Synchronous: Return boolean immediately
 * - Can access field name for context-aware validation
 * - Should not throw errors (return false instead)
 *
 * Integration with property editor:
 * ```typescript
 * {
 *   name: 'oid',
 *   type: 'id',
 *   onChange: handleFieldChange,
 *   validate: validateOid  // This callback
 * }
 * ```
 * @template T - The type of the field value (default: any)
 * @param field - The name of the field being validated
 * @param value - The value to validate
 * @returns True if valid, false if invalid
 */
export type FieldValidationCallback<T = any> = (field: string, value: T) => boolean;
