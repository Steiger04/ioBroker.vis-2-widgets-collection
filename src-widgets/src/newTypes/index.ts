/**
 * Runtime exports for the new type infrastructure.
 *
 * This module provides runtime-accessible exports from the newTypes system.
 * Type-only exports are defined in index.d.ts.
 *
 * @module newTypes
 */

// Re-export runtime types from utility-types
export type { OidType, OidObject } from './utility-types';

// Re-export runtime utility functions
export {
    getDynamicProperty,
    setDynamicProperty,
    getAllIndexedProperties,
    isSliderFieldsRxData,
    isCommonObjectFieldsRxData,
    isValidWidgetData,
} from './utility-types';

// Re-export type-only exports for TypeScript resolution
export type * from './widget-registry';
export type * from './context-types';
export type * from './field-definitions';
