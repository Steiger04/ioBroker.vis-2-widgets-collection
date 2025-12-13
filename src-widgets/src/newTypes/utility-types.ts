/**
 * Runtime utility types for Collection widgets.
 * This module provides runtime-accessible types that are also exported via .d.ts files.
 *
 * @module utility-types
 * @remarks
 * These types are used by hooks and components for OID management and value conversion.
 * The types are re-exported from utility-types.d.ts for declaration file compatibility.
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
 *
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
