/**
 * Allowed state types for ioBroker object fields.
 * Defines which data types are supported for state values.
 *
 * @remarks
 * These types correspond to ioBroker's common.type values.
 * 'mixed' allows any combination of the other types.
 *
 * @example
 * ```typescript
 * const sensorType: AllowedType = 'number';
 * const switchType: AllowedType = 'boolean';
 * const textType: AllowedType = 'string';
 * const flexibleType: AllowedType = 'mixed';
 * ```
 */
export type AllowedType = 'boolean' | 'number' | 'string' | 'mixed';

/**
 * Common object field definitions for vis-2 Collection widgets.
 *
 * @remarks
 * This interface defines properties for ioBroker state/object handling.
 * Includes static properties for main configuration and dynamic properties
 * for multiple object instances.
 *
 * Object metadata is stored in properties with the pattern `${string}Object`,
 * allowing flexible naming like 'oidObject', 'oid1Object', 'temperatureObject', etc.
 *
 * @example
 * ```typescript
 * import type { CommonObjectFieldsRxData, AllowedType } from 'vis-2-widgets-collection/newTypes';
 *
 * interface MyWidgetData extends CommonObjectFieldsRxData {
 *     customProp: string;
 * }
 *
 * const data: MyWidgetData = {
 *     oid: 'hm-rpc.0.device.TEMPERATURE',
 *     unit: '°C',
 *     values_count: 2,
 *     alias1: 'Living Room',
 *     alias2: 'Bedroom',
 *     value1: 22.5,
 *     value2: 20.3,
 *     oidObject: {
 *         _id: 'hm-rpc.0.device.TEMPERATURE',
 *         name: 'Temperature Sensor',
 *         type: 'number',
 *         unit: '°C',
 *         write: false
 *     }
 * };
 * ```
 */
export interface CommonObjectFieldsRxData {
    // ========================================
    // Basis Properties
    // ========================================

    /**
     * Main ioBroker object ID.
     * Primary state identifier for the widget.
     *
     * @remarks
     * Must be a valid ioBroker state ID.
     * Format: `adapter.instance.device.channel.state`
     *
     * @example
     * ```typescript
     * oid: 'javascript.0.temperature'
     * oid: 'hm-rpc.0.KEQ1234567.1.TEMPERATURE'
     * oid: '0_userdata.0.room.sensor'
     * ```
     */
    oid: string;

    /**
     * Unit of measurement for the value.
     * Displayed alongside the value (e.g., °C, %, km/h).
     *
     * @example
     * ```typescript
     * unit: '°C'     // temperature
     * unit: '%'      // humidity, battery
     * unit: 'kWh'    // energy
     * unit: 'l/min'  // flow rate
     * unit: ''       // no unit
     * ```
     */
    unit: string;

    /**
     * Number of configured values/states.
     * Determines how many value slots are active.
     *
     * @remarks
     * Controls the rendering of dynamic value properties.
     * Widget will process value1 through valueN where N = values_count.
     * Minimum value: 1
     *
     * @default 1
     * @example
     * ```typescript
     * values_count: 1  // single value
     * values_count: 5  // five values (value1...value5)
     * ```
     */
    values_count: number;

    /**
     * Icon identifier for the object.
     * Can be Material Design Icon name or custom path.
     *
     * @example
     * ```typescript
     * icon: 'mdi-thermometer'
     * icon: '/icons/sensor.svg'
     * icon: null  // no icon
     * ```
     */
    icon?: string | null;

    /**
     * Write permission for the state.
     * If true, allows user to modify the state value.
     *
     * @default false
     * @example
     * ```typescript
     * write: true  // user can change value (e.g., switch, slider)
     * write: false // read-only display
     * ```
     */
    write?: boolean;

    /**
     * Display-only mode.
     * If true, widget shows value but prevents interaction.
     *
     * @remarks
     * Differs from `write: false` - this is a UI-level restriction,
     * while `write` is a state-level permission.
     *
     * @default false
     * @example
     * ```typescript
     * onlyDisplay: true  // show value, disable controls
     * onlyDisplay: false // interactive widget
     * ```
     */
    onlyDisplay?: boolean;

    /**
     * Minimum allowed value.
     * Used for validation and UI range limits.
     *
     * @remarks
     * Applies to numeric state types.
     * Widget controls (sliders, gauges) will respect this limit.
     *
     * @example
     * ```typescript
     * minValue: 0     // temperature in °C
     * minValue: -50   // outdoor temperature
     * minValue: 0.5   // decimal minimum
     * ```
     */
    minValue?: number;

    /**
     * Maximum allowed value.
     * Used for validation and UI range limits.
     *
     * @remarks
     * Applies to numeric state types.
     * Widget controls (sliders, gauges) will respect this limit.
     *
     * @example
     * ```typescript
     * maxValue: 100   // percentage
     * maxValue: 50    // temperature in °C
     * maxValue: 999.9 // decimal maximum
     * ```
     */
    maxValue?: number;

    // ========================================
    // Object Metadata (Dynamic)
    // ========================================

    /**
     * Full object metadata from ioBroker.
     * Stores complete state information including type, unit, states, etc.
     *
     * @remarks
     * Property name pattern: `${string}Object` allows flexible naming:
     * - `oidObject` for main object
     * - `oid1Object`, `oid2Object` for indexed objects
     * - `temperatureObject`, `humidityObject` for named objects
     *
     * The object structure contains all information needed to handle the state:
     * - `_id`: State ID
     * - `name`: Human-readable name
     * - `type`: Data type (AllowedType)
     * - `commonStates`: Possible values (for enums/lists)
     * - `unit`: Unit of measurement
     * - `icon`: Icon identifier
     * - `write`: Write permission
     * - `onlyDisplay`: Display-only mode
     * - `minValue`: Minimum value
     * - `maxValue`: Maximum value
     *
     * @example
     * ```typescript
     * // Main object
     * oidObject: {
     *     _id: 'hm-rpc.0.device.TEMPERATURE',
     *     name: 'Living Room Temperature',
     *     type: 'number',
     *     unit: '°C',
     *     write: false,
     *     minValue: -50,
     *     maxValue: 50
     * }
     *
     * // Indexed objects
     * oid1Object: {
     *     _id: 'javascript.0.sensor1',
     *     name: 'Sensor 1',
     *     type: 'number',
     *     unit: '%'
     * }
     *
     * // Named object
     * temperatureObject: {
     *     _id: '0_userdata.0.temp',
     *     name: 'Temperature',
     *     type: 'number',
     *     commonStates: undefined, // no enum values
     *     unit: '°C',
     *     icon: 'mdi-thermometer',
     *     write: true,
     *     onlyDisplay: false,
     *     minValue: 0,
     *     maxValue: 100
     * }
     * ```
     */
    [key: `${string}Object`]:
        | {
              /** State ID from ioBroker */
              _id: string;

              /** Human-readable name */
              name: string;

              /** Data type of the state */
              type: AllowedType;

              /** Possible values for enum/list types */
              commonStates?: ioBroker.StateCommon['states'];

              /** Unit of measurement */
              unit: string;

              /** Icon identifier */
              icon?: string | null;

              /** Write permission */
              write?: boolean;

              /** Display-only mode */
              onlyDisplay?: boolean;

              /** Minimum value */
              minValue?: number;

              /** Maximum value */
              maxValue?: number;
          }
        | undefined;

    // ========================================
    // Dynamic Value Properties
    // ========================================

    /**
     * Alias names for values.
     * User-friendly labels for state values.
     *
     * @remarks
     * Indexed by number (1, 2, 3, ...).
     * Used to override default state names.
     *
     * @example
     * ```typescript
     * alias1: 'Living Room'
     * alias2: 'Bedroom'
     * alias3: 'Kitchen'
     * ```
     */
    [key: `alias${number}`]: string | undefined;

    /**
     * State values for display or control.
     * Current value of each configured state.
     *
     * @remarks
     * Indexed by number (1, 2, 3, ...).
     * Type depends on the state's AllowedType:
     * - number: 22.5, 100, -10
     * - boolean: true, false
     * - string: 'ON', 'Hello', '2024-01-01'
     * - mixed: any of the above
     *
     * @example
     * ```typescript
     * value1: 22.5        // temperature
     * value2: true        // switch state
     * value3: 'Active'    // status text
     * value4: undefined   // no value yet
     * ```
     */
    [key: `value${number}`]: string | number | boolean | undefined;
}
