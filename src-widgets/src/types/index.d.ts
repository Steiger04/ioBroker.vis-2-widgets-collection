/**
 * Central export point for the new type infrastructure (Phase 1).
 *
 * This module provides type-safe utilities for building vis-2 Collection widgets
 * with compile-time validation and enhanced TypeScript support.
 *
 * @module newTypes
 * @see file:src-widgets/src/newTypes/all-ideas-for-new-types.md
 *
 * @remarks
 * Phase 1 establishes the foundational type infrastructure. Future phases will add:
 * - Phase 2: Field definition types (common-fields, gauge-fields, etc.)
 * - Phase 3: Widget-specific data types
 * - Phase 4-10: Complete widget migration with full type safety
 *
 * The new type system coexists with the existing types in src/types/index.d.ts
 * to ensure backward compatibility during the migration.
 */

// ============================================================================
// Type Utilities (Phase 1)
// ============================================================================

/**
 * Widget builder types for composing widget data from field definitions.
 *
 * Key exports:
 * - `UnionToIntersection<U>` - Converts union types to intersection types
 * - `ExtractFieldTypes<T>` - Extracts rxData from field modules
 * - `BuildWidgetData<T>` - Composes widget data from field array
 * - `BuildWidgetState<T>` - Converts data to state with nullable properties
 * - `ValidateFields<T>` - Compile-time field validation
 *
 * @example
 * ```typescript
 * import type { BuildWidgetData } from 'vis-2-widgets-collection/newTypes';
 *
 * type MyWidgetData = BuildWidgetData<[
 *   typeof commonFields,
 *   typeof stateFields
 * ]>;
 * ```
 */
export type * from './widget-builder';

/**
 * Utility functions and type guards for runtime operations.
 *
 * Key exports:
 * - `OidObject` - Interface for OID object parameters (runtime + type)
 * - `OidType` - Union type for supported OID types (runtime + type)
 * - `getDynamicProperty<T, K>` - Type-safe dynamic property access
 * - `setDynamicProperty<T, K, V>` - Type-safe dynamic property assignment
 * - `getAllIndexedProperties<T, P>` - Get all indexed properties (oid1, oid2, ...)
 * - `isValidWidgetData<T>` - Runtime type guard for widget data
 * - `hasIndexedProperty<T, P>` - Check if indexed property exists
 *
 * @remarks
 * OidObject and OidType are runtime types exported from utility-types.ts.
 * Other utilities are type declarations only - implementations will be created
 * in .ts files when needed by widget components.
 *
 * @example
 * ```typescript
 * import { getDynamicProperty, type OidObject } from 'vis-2-widgets-collection/newTypes';
 *
 * const oid = getDynamicProperty(this.props, `oid${index}`);
 * ```
 */
export type * from './utility-types';
export type { OidObject, OidType } from './utility-types';

/**
 * Module augmentation and extensions for @iobroker/types-vis-2.
 *
 * Key exports:
 * - `CollectionWidgetInfo` - Extended widget info with collection metadata
 * - `FieldChangeCallback<T>` - Callback type for field changes
 * - `FieldValidationCallback<T>` - Callback type for field validation
 *
 * Module augmentation:
 * - Extends `VisRxWidgetStateValues` with collection state patterns
 *
 * @example
 * ```typescript
 * import type { CollectionWidgetInfo } from 'vis-2-widgets-collection/newTypes';
 *
 * static getWidgetInfo(): CollectionWidgetInfo {
 *   return {
 *     id: 'tplStateCollectionWidget',
 *     collectionType: 'state',
 *     maxItems: 10,
 *     // ...
 *   };
 * }
 * ```
 */
export type * from './vis-2-extensions';

// ============================================================================
// Field Definitions (Phase 2 - Not Yet Implemented)
// ============================================================================

/**
 * TODO Phase 2: Field definition types will be exported here.
 *
 * Planned exports:
 * - common-fields.d.ts - Common field types (label, visible, etc.)
 * - common-object-fields.d.ts - Object field types (oid, type, etc.)
 * - state-fields.d.ts - State field types
 * - delay-fields.d.ts - Delay field types
 * - gauge-fields.d.ts - Gauge-specific fields
 * - slider-fields.d.ts - Slider-specific fields
 * - button-group-fields.d.ts - Button group fields
 * - ... (more to be added in Phase 2)
 *
 * @example
 * ```typescript
 * // After Phase 2 implementation:
 * export * from './field-definitions/common-fields';
 * export * from './field-definitions/common-object-fields';
 * export * from './field-definitions/state-fields';
 * // etc.
 * ```
 */

// ✅ Phase 2 Complete - Field Definitions
export * from './field-definitions/common-fields';
export * from './field-definitions/common-object-fields';
export * from './field-definitions';

// ✅ Phase 3 Complete - Widget-specific field definitions
export * from './field-definitions/state-fields';
export * from './field-definitions/delay-fields';
export * from './field-definitions/gauge-fields';
export * from './field-definitions/slider-fields';
export * from './field-definitions/button-group-fields';
export * from './field-definitions/switch-fields';
export * from './field-definitions/checkbox-fields';
export * from './field-definitions/dialog-fields';
export * from './field-definitions/select-fields';
export * from './field-definitions/radio-group-fields';
export * from './field-definitions/light2-fields';

// ============================================================================
// Widget Registry & Context Types (Phase 4)
// ============================================================================

/**
 * Widget registry with auto-generated widget data types.
 * Maps widget IDs to their composed field definitions.
 *
 * Key exports:
 * - `WidgetRegistry` - Auto-generated registry mapping widget IDs to data types
 * - `WidgetFieldMappings` - Source of truth for widget field composition
 * - `WidgetDataFor<T>` - Helper to extract widget data type
 * - `WidgetFieldsFor<T>` - Helper to extract field names for widget
 * - `WidgetId` - Union of all valid widget IDs
 * - `AnyWidgetData` - Union of all widget data types
 *
 * @remarks
 * The Widget Registry is the central mapping that defines which field definitions
 * each widget uses. All widget data types are automatically generated from this
 * mapping using type-level programming, eliminating manual type definitions.
 *
 * Supported widgets:
 * - Template (tplTemplateCollectionWidget)
 * - State (tplStateCollectionWidget)
 * - Checkbox (tplCheckboxCollectionWidget)
 * - Switch (tplSwitchCollectionWidget)
 * - Slider (tplSliderCollectionWidget)
 * - Radio Group (tplRadioGroupCollectionWidget)
 * - Button Group (tplButtonGroupCollectionWidget)
 * - Select (tplSelectCollectionWidget)
 * - Gauge (tplGaugeCollectionWidget)
 * - Dialog (tplDialogCollectionWidget)
 * - Light2 (tplLight2CollectionWidget)
 *
 * @example
 * ```typescript
 * import type { WidgetRegistry } from 'vis-2-widgets-collection/newTypes';
 *
 * // Get widget data type automatically
 * type StateWidgetData = WidgetRegistry['tplStateCollectionWidget'];
 * // Result: CommonFieldsRxData & CommonObjectFieldsRxData & StateFieldsRxData & DelayFieldsRxData
 *
 * // Use in widget class
 * class StateWidget extends Generic<StateWidgetData> {
 *     // TypeScript knows about all properties from all field definitions
 * }
 * ```
 */
export * from './widget-registry';

/**
 * React Context types for Collection widgets.
 * Provides type-safe context props for all widget implementations.
 *
 * Key exports:
 * - `CollectionContextProps<T>` - Generic context interface
 * - `TemplateCollectionContextProps` - Template widget context
 * - `StateCollectionContextProps` - State widget context
 * - `CheckboxCollectionContextProps` - Checkbox widget context
 * - `SwitchCollectionContextProps` - Switch widget context
 * - `SliderCollectionContextProps` - Slider widget context
 * - `RadioGroupCollectionContextProps` - Radio Group widget context
 * - `ButtonGroupCollectionContextProps` - Button Group widget context
 * - `SelectCollectionContextProps` - Select widget context
 * - `GaugeCollectionContextProps` - Gauge widget context
 * - `DialogCollectionContextProps` - Dialog widget context
 * - `Light2CollectionContextProps` - Light2 widget context
 * - `AllCollectionContextProps` - Union of all context types
 *
 * @remarks
 * Context types are automatically composed from the Widget Registry,
 * ensuring consistency between widget data definitions and their
 * runtime context structure.
 *
 * Each context type includes:
 * - Widget identification (id)
 * - Widget data (data) with type-safe field access
 * - State management (values, setValue, setState)
 * - ioBroker socket connection
 * - Theme and visualization utilities
 *
 * @example
 * ```typescript
 * import React from 'react';
 * import type { StateCollectionContextProps } from 'vis-2-widgets-collection/newTypes';
 *
 * const StateContext = React.createContext<StateCollectionContextProps>(null!);
 *
 * export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 *     const contextValue: StateCollectionContextProps = {
 *         id: 'w00001',
 *         widget: {
 *             data: {
 *                 // TypeScript knows all properties:
 *                 alias1: 'Temperature',
 *                 oid1: 'system.adapter.temperature',
 *                 onlyStates: true,
 *                 delay: 500
 *             },
 *             style: {}
 *         },
 *         // ... other context properties
 *     };
 *     return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
 * };
 * ```
 */
export * from './context-types';

// ============================================================================
// Module Declaration for Package Exports
// ============================================================================

/**
 * Module declaration to enable imports from package path.
 * Allows: import { ... } from 'vis-2-widgets-collection/newTypes'
 *
 * @remarks
 * This declaration works in conjunction with the package.json "exports" field
 * to provide a clean import path for consumers of this package.
 */
declare module 'vis-2-widgets-collection/newTypes' {
    export type * from './widget-builder';
    export type * from './utility-types';
    export type * from './vis-2-extensions';

    // ✅ Phase 2 exports (now active):
    export * from './field-definitions/common-fields';
    export * from './field-definitions/common-object-fields';
    export * from './field-definitions';

    // ✅ Phase 3 widget-specific exports:
    export * from './field-definitions/state-fields';
    export * from './field-definitions/delay-fields';
    export * from './field-definitions/gauge-fields';
    export * from './field-definitions/slider-fields';
    export * from './field-definitions/switch-fields';
    export * from './field-definitions/checkbox-fields';
    export * from './field-definitions/dialog-fields';
    export * from './field-definitions/select-fields';
    export * from './field-definitions/radio-group-fields';
    export * from './field-definitions/button-group-fields';
    export * from './field-definitions/light2-fields';

    // ✅ Phase 4 widget registry & context exports:
    export * from './widget-registry';
    export * from './context-types';
}

// ============================================================================
// Type Import Notes
// ============================================================================

/**
 * Best Practice: Always use explicit imports for widget types.
 *
 * @remarks
 * For type safety and clarity, always import BuildWidgetData explicitly:
 *
 * @example
 * ```typescript
 * import type { BuildWidgetData } from 'vis-2-widgets-collection/newTypes';
 *
 * type MyWidgetData = BuildWidgetData<[
 *   typeof commonFields,
 *   typeof stateFields
 * ]>;
 * ```
 *
 * Avoid using overly generic types like `BuildWidgetData<any[]>` in production code.
 * Always specify the exact field modules your widget uses for proper type checking.
 */

// ============================================================================
// Compatibility Layer (Backward Compatibility)
// ============================================================================

/**
 * Type aliases for backward compatibility with old type system.
 *
 * @deprecated These types are from the legacy type system in src/types/index.d.ts
 * @remarks
 * During the migration period, these aliases help maintain compatibility.
 * New code should use types from newTypes/ instead.
 *
 * Migration guide:
 * - Old: import type { CommonFieldsRxData } from '../lib/commonFields'
 * - New: import type { CommonFieldsRxData } from 'vis-2-widgets-collection/newTypes'
 *
 * **Important for Widget-Specific Fields (Phase 3):**
 * - Widget code should ONLY import from `vis-2-widgets-collection/newTypes` for all field types
 * - Legacy interfaces in `src/lib/*Fields.tsx` (e.g., DialogFieldsRxData in dialogFields.tsx) are
 *   maintained for runtime compatibility but will be removed in Phase 10
 * - The new type system defines all properties as optional for flexibility, while legacy interfaces
 *   may have required properties - this is intentional during the migration period
 * - Do NOT modify runtime field generators in `lib/*Fields.tsx` to avoid breaking existing widgets
 *
 * Example migration:
 * ```typescript
 * // ❌ Old (legacy, will be removed in Phase 10)
 * import type { DialogFieldsRxData } from '../lib/dialogFields';
 *
 * // ✅ New (recommended, use this for all new code)
 * import type { DialogFieldsRxData } from 'vis-2-widgets-collection/newTypes';
 * ```
 *
 * These aliases will be removed in Phase 10 (final cleanup).
 */
// export type LegacyCommonFieldsRxData = import('../lib/commonFields').CommonFieldsRxData;
// export type LegacyCommonObjectFieldsRxData = import('../lib/commonObjectFields').CommonObjectFieldsRxData;
// ... etc. (to be added as needed during migration)
