/**
 * React Context Types Module
 *
 * Provides type-safe React Context interfaces for all Collection widgets.
 * These types are automatically composed from the Widget Registry to ensure
 * consistency between widget data definitions and their runtime context.
 *
 * @module context-types
 * @see {@link widget-registry.d.ts} for widget data type generation
 * @see {@link field-definitions/index.d.ts} for individual field types
 * @remarks
 * Added in Phase 4 of the type system migration.
 * @example
 * ```typescript
 * // Use in React Context provider
 * import React from 'react';
 * import type { StateCollectionContextProps } from 'vis-2-widgets-collection/types';
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

import type { ThemeType } from '@iobroker/adapter-react-v5';
import type { Theme, LegacyConnection, VisRxData, VisRxWidgetStateValues } from '@iobroker/types-vis-2';
import { type WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { CSSProperties } from 'react';
import type { WidgetRegistry } from './widget-registry';

// Note: VisRxWidgetStateValues is exported from @iobroker/types-vis-2/index.d.ts
// and is augmented in vis-2-extensions.d.ts to support collection_${string} patterns

// ============================================================================
// Shared Widget Data Interfaces
// ============================================================================

/**
 * Minimal widget data interface for {@link module:components/CollectionBaseImage}.
 *
 * @remarks
 * This interface defines only the properties actually used by CollectionBaseImage
 * to avoid requiring the full widget data type. All collection widgets that use
 * CollectionBaseImage must provide these properties.
 *
 * Used to replace `any` with a precise, type-safe contract.
 * @example
 * ```typescript
 * import type { CollectionBaseImageWidgetData, CollectionContextProps } from '../types';
 *
 * interface MyComponentProps {
 *     widget: CollectionContextProps<CollectionBaseImageWidgetData>['widget'];
 * }
 * ```
 */
export interface CollectionBaseImageWidgetData {
    /** Hide header icon when true. */
    noHeaderIcon?: boolean;
    /** Horizontal offset for icon positioning (pixels or CSS value). */
    iconXOffset?: number | string;
    /** Vertical offset for icon positioning (pixels or CSS value). */
    iconYOffset?: number | string;
    /** Enable color mask for inactive icon. */
    enableIconColorMask?: boolean;
    /** Enable color mask for active icon. */
    enableIconColorMaskActive?: boolean;
    /** Icon color (CSS color value). */
    iconColor?: string;
    /** Active icon color (CSS color value). */
    iconColorActive?: string;
}

/**
 * Minimal widget data interface for {@link module:hooks/useHtmlValue}.
 *
 * @remarks
 * This interface defines only the `unit` property used by useHtmlValue
 * to avoid requiring the full widget data type.
 *
 * All collection widgets that use this hook must provide a unit property.
 * Used to replace `any` with a precise, type-safe contract.
 * @example
 * ```typescript
 * import type { UseHtmlValueWidgetData, CollectionContextProps } from '../types';
 *
 * const myHook = (
 *     widget: CollectionContextProps<UseHtmlValueWidgetData>['widget']
 * ) => {
 *     const unit = widget.data.unit; // Type-safe access
 * };
 * ```
 */
export interface UseHtmlValueWidgetData {
    /** Unit of measurement displayed alongside the value (e.g., '°C', '%', 'kWh'). */
    unit?: string;
}

// ============================================================================
// Base Context Interface
// ============================================================================

/**
 * Generic React Context properties for Collection widgets.
 *
 * @template T - Widget data type (object that will be intersected with {@link VisRxData})
 * @remarks
 * This interface defines the complete context structure available to all
 * Collection widgets. It includes:
 * - Widget identification and styling
 * - State management callbacks
 * - ioBroker socket connection
 * - Theme and visualization utilities
 *
 * The generic parameter `T` must be a record type (object with string keys) and will be combined with
 * {@link VisRxData} via intersection (`VisRxData & T`) in the `widget.data` property.
 * This allows adding widget-specific properties from field definitions while
 * maintaining the base vis-2 data structure.
 *
 * Typically, `T` should be a type from {@link WidgetRegistry} which automatically
 * composes the correct field definitions for each widget.
 * @example
 * ```typescript
 * import type { CollectionContextProps, WidgetRegistry } from 'vis-2-widgets-collection/types';
 *
 * // Create custom context type with registry
 * type CustomContext = CollectionContextProps<WidgetRegistry['tplStateCollectionWidget']>;
 *
 * // Use in component
 * const MyComponent: React.FC<{ context: CustomContext }> = ({ context }) => {
 *     // Access widget data with full type safety
 *     // context.widget.data is typed as: VisRxData & CommonFieldsRxData & StateFieldsRxData & ...
 *     const { oid, onlyStates } = context.widget.data;
 *
 *     // Use context methods
 *     const handleClick = () => {
 *         context.setValue(oid, true);
 *     };
 * };
 * ```
 * @example
 * ```typescript
 * // Use with React.useContext
 * import React from 'react';
 * import type { StateCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const StateContext = React.createContext<StateCollectionContextProps>(null!);
 *
 * function StateDisplay() {
 *     const context = React.useContext(StateContext);
 *
 *     // TypeScript knows exact properties from composed field definitions
 *     const oid = context.widget.data.oid;
 *     const value = context.values[oid || ''];
 *     const showIcon = context.widget.data.showIcon;
 *
 *     return <div>{value?.val}</div>;
 * }
 * ```
 */
export interface CollectionContextProps<T extends object = object> {
    /**
     * Unique widget identifier.
     *
     * @remarks
     * Format: `w${5-digit-number}` (e.g., 'w00001', 'w12345')
     * Used for widget tracking and DOM element IDs.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     * console.log(context.id); // 'w00042'
     * ```
     */
    id: string;

    /**
     * React ref to the widget's service element.
     *
     * @remarks
     * Used for DOM manipulation, measurements, and scroll handling.
     * The ref points to the widget's root container element.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     * const width = context.refService.current?.offsetWidth;
     * ```
     */
    refService: React.RefObject<HTMLElement>;

    /**
     * Widget container CSS styles.
     *
     * @remarks
     * Applied to the widget's outer container. Includes positioning,
     * sizing, and custom user-defined styles from vis-2 editor.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     * <div style={context.style}>Widget content</div>
     * ```
     */
    style: React.CSSProperties;

    /**
     * Widget data and style configuration.
     *
     * @remarks
     * Contains:
     * - `data`: Widget-specific properties (extends {@link VisRxData} with generic type `T`)
     * - `style`: Additional CSS styles for widget content
     *
     * The `data` property includes all fields defined in the widget's
     * field definitions (common, commonObject, widget-specific, etc.).
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Access widget data
     * const { oid1, alias1, onlyStates } = context.widget.data;
     *
     * // Access widget style
     * const contentStyle = context.widget.style;
     * ```
     */
    widget: {
        /**
         * Widget data properties (composed from field definitions).
         * Type-safe access to all widget configuration.
         */
        data: VisRxData & T;

        /**
         * Additional CSS styles for widget content.
         * Applied to inner widget elements.
         */
        // style: CSSProperties;
        style: WidgetStyleState | undefined;
    };

    /**
     * Set ioBroker state value.
     *
     * @param id - State ID (object ID)
     * @param value - New state value
     * @param ack - Acknowledgment flag (default: false)
     * @remarks
     * Sends state change to ioBroker backend via Socket.IO.
     * Use `ack: false` for control commands (user input).
     * Use `ack: true` for confirmed values (rare in widgets).
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Set boolean state
     * context.setValue('hm-rpc.0.light.STATE', true);
     *
     * // Set numeric state with ack
     * context.setValue('hm-rpc.0.dimmer.LEVEL', 75, false);
     *
     * // Set from widget data
     * const { oid1 } = context.widget.data;
     * context.setValue(oid1!, value);
     * ```
     */
    setValue: (id: string, value: string | number | boolean | ioBroker.SettableState | null, ack?: boolean) => void;

    /**
     * React component setState method.
     *
     * @remarks
     * Provides access to the parent widget's React state setter.
     * Used for internal widget state management.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Update widget state
     * context.setState({ isLoading: true });
     * ```
     */
    setState: React.Component['setState'];

    /**
     * Current values of all widget-related states.
     *
     * @remarks
     * Contains current values from ioBroker for all subscribed states.
     * Keys are state IDs, values include `val`, `ack`, `ts`, etc.
     *
     * Extended by vis-2-extensions.d.ts to include collection-specific
     * state patterns: `collection_${string}`
     * @see {@link vis-2-extensions.d.ts} for collection state patterns
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Get state value
     * const oid = context.widget.data.oid1;
     * const state = context.values[oid!];
     * if (state) {
     *     console.log(state.val, state.ack, state.ts);
     * }
     *
     * // Check collection state
     * const collectionState = context.values['collection_state_1'];
     * ```
     */
    values: VisRxWidgetStateValues;

    /**
     * Check if a signal indicator should be visible.
     *
     * @param index - Signal index (1-based)
     * @returns True if signal should be visible
     * @remarks
     * Used for showing/hiding signal indicators (icons, badges) based on
     * widget configuration and state values.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Check signal visibility
     * const showSignal = context.isSignalVisible(1);
     * if (showSignal) {
     *     return <SignalIcon />;
     * }
     * ```
     */
    isSignalVisible: (index: number) => boolean;

    /**
     * Get property value by state name.
     *
     * @param stateName - State property name
     * @returns Current state value
     * @remarks
     * Retrieves value from widget's state values by property name.
     * Useful for dynamic property access.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Get property value
     * const brightness = context.getPropertyValue('brightness');
     * const temperature = context.getPropertyValue('temperature');
     * ```
     */
    getPropertyValue: (stateName: string) => ioBroker.StateValue;

    /**
     * Current theme mode (light or dark).
     *
     * @remarks
     * Used for conditional styling based on vis-2 theme.
     * Widgets should adapt their appearance to match the theme.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Apply theme-specific styles
     * const backgroundColor = context.mode === 'dark' ? '#333' : '#fff';
     * const textColor = context.mode === 'dark' ? '#fff' : '#000';
     * ```
     */
    mode: ThemeType;

    /**
     * ioBroker Socket.IO connection instance.
     *
     * @remarks
     * Provides access to ioBroker backend for:
     * - State subscriptions
     * - State reads/writes
     * - Object queries
     * - File operations
     * @see {@link LegacyConnection} for available methods
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Subscribe to state
     * context.socket.subscribeState('hm-rpc.0.*.STATE', (id, state) => {
     *     console.log(`State ${id} changed:`, state?.val);
     * });
     *
     * // Get state value
     * const state = await context.socket.getStateAsync('hm-rpc.0.light.STATE');
     * console.log(state?.val);
     *
     * // Set state value
     * await context.socket.setStateAsync('hm-rpc.0.light.STATE', true);
     * ```
     */
    socket: LegacyConnection;

    /**
     * Material-UI theme object.
     *
     * @remarks
     * Provides access to Material-UI theme configuration for consistent
     * styling across widgets. Includes palette, typography, spacing, etc.
     * @see {@link Theme} for theme properties
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Use theme values
     * const primaryColor = context.theme.palette.primary.main;
     * const spacing = context.theme.spacing(2); // 16px
     * const fontSize = context.theme.typography.body1.fontSize;
     * ```
     */
    theme: Theme;

    /**
     * Indicates if widget content is wrapped in a container.
     *
     * @remarks
     * Used for conditional rendering and styling based on container structure.
     * When true, widget is wrapped in additional div for layout purposes.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Adjust padding based on wrapping
     * const padding = context.wrappedContent ? 0 : 16;
     * ```
     */
    wrappedContent: boolean;

    /**
     * Get rendered widget view by name.
     *
     * @param viewName - Name of the view to retrieve
     * @param options - Optional view configuration
     * @param options.style - CSS styles to apply to view
     * @returns React element representing the view
     * @remarks
     * Used for embedding other vis-2 views within a widget.
     * Allows creation of composite widgets and view hierarchies.
     * @example
     * ```typescript
     * const context: StateCollectionContextProps = ...;
     *
     * // Get and render view
     * const subView = context.getWidgetView('DetailView', {
     *     style: { width: '100%', height: '200px' }
     * });
     *
     * return <div>{subView}</div>;
     * ```
     */
    getWidgetView?: (viewName: string, options?: { style?: React.CSSProperties }) => React.ReactElement;
}

// ============================================================================
// Widget-Specific Context Types
// ============================================================================

/**
 * React Context props for Template Collection Widget.
 *
 * @remarks
 * Template widget is the base widget with minimal fields:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 *
 * Total properties: ~45
 * @example
 * ```typescript
 * import React from 'react';
 * import type { TemplateCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const TemplateContext = React.createContext<TemplateCollectionContextProps>(null!);
 *
 * function TemplateWidget() {
 *     const context = React.useContext(TemplateContext);
 *     const { alias1, oid1 } = context.widget.data;
 *     return <div>{alias1}</div>;
 * }
 * ```
 */
export type TemplateCollectionContextProps = CollectionContextProps<WidgetRegistry['tplTemplateCollectionWidget']>;

/**
 * React Context props for State Collection Widget.
 *
 * @remarks
 * State widget displays and monitors state values:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - State-specific fields (onlyStates, showIcon, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~52
 * @example
 * ```typescript
 * import React from 'react';
 * import type { StateCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const StateContext = React.createContext<StateCollectionContextProps>(null!);
 *
 * function StateDisplay() {
 *     const context = React.useContext(StateContext);
 *     const { oid1, onlyStates, delay } = context.widget.data;
 *
 *     const value = context.values[oid1!];
 *     return <div>{value?.val}</div>;
 * }
 * ```
 */
export type StateCollectionContextProps = CollectionContextProps<WidgetRegistry['tplStateCollectionWidget']>;

/**
 * React Context props for Checkbox Collection Widget.
 *
 * @remarks
 * Checkbox widget provides boolean state control:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Checkbox-specific fields (checkedValue, uncheckedValue, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~50
 * @example
 * ```typescript
 * import React from 'react';
 * import type { CheckboxCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const CheckboxContext = React.createContext<CheckboxCollectionContextProps>(null!);
 *
 * function CheckboxControl() {
 *     const context = React.useContext(CheckboxContext);
 *     const { oid1, checkedValue, uncheckedValue } = context.widget.data;
 *
 *     const isChecked = context.values[oid1!]?.val === checkedValue;
 *     return <input type="checkbox" checked={isChecked} />;
 * }
 * ```
 */
export type CheckboxCollectionContextProps = CollectionContextProps<WidgetRegistry['tplCheckboxCollectionWidget']>;

/**
 * React Context props for Switch Collection Widget.
 *
 * @remarks
 * Switch widget provides toggle control for boolean states:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Switch-specific fields (readOnly, switchLabel, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~51
 * @example
 * ```typescript
 * import React from 'react';
 * import type { SwitchCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const SwitchContext = React.createContext<SwitchCollectionContextProps>(null!);
 *
 * function SwitchControl() {
 *     const context = React.useContext(SwitchContext);
 *     const { oid1, readOnly, switchLabel } = context.widget.data;
 *
 *     const value = context.values[oid1!]?.val;
 *     return <label>{switchLabel}: {value}</label>;
 * }
 * ```
 */
export type SwitchCollectionContextProps = CollectionContextProps<WidgetRegistry['tplSwitchCollectionWidget']>;

/**
 * React Context props for Slider Collection Widget.
 *
 * @remarks
 * Slider widget provides numeric value control:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Slider-specific fields (min, max, step, orientation, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~54
 * @example
 * ```typescript
 * import React from 'react';
 * import type { SliderCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const SliderContext = React.createContext<SliderCollectionContextProps>(null!);
 *
 * function SliderControl() {
 *     const context = React.useContext(SliderContext);
 *     const { oid1, min, max, step } = context.widget.data;
 *
 *     const value = context.values[oid1!]?.val as number;
 *     return <input type="range" min={min} max={max} step={step} value={value} />;
 * }
 * ```
 */
export type SliderCollectionContextProps = CollectionContextProps<WidgetRegistry['tplSliderCollectionWidget']>;

/**
 * React Context props for Radio Group Collection Widget.
 *
 * @remarks
 * Radio Group widget provides single selection from options:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Radio Group-specific fields (options, orientation, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~52
 * @example
 * ```typescript
 * import React from 'react';
 * import type { RadioGroupCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const RadioGroupContext = React.createContext<RadioGroupCollectionContextProps>(null!);
 *
 * function RadioGroupControl() {
 *     const context = React.useContext(RadioGroupContext);
 *     const { oid1, options, orientation } = context.widget.data;
 *
 *     const selectedValue = context.values[oid1!]?.val;
 *     return <div>{options}</div>;
 * }
 * ```
 */
export type RadioGroupCollectionContextProps = CollectionContextProps<WidgetRegistry['tplRadioGroupCollectionWidget']>;

/**
 * React Context props for Button Group Collection Widget.
 *
 * @remarks
 * Button Group widget provides multiple action buttons:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Button Group-specific fields (buttons, activeButton, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~53
 * @example
 * ```typescript
 * import React from 'react';
 * import type { ButtonGroupCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const ButtonGroupContext = React.createContext<ButtonGroupCollectionContextProps>(null!);
 *
 * function ButtonGroupControl() {
 *     const context = React.useContext(ButtonGroupContext);
 *     const { oid1, buttons, activeButton } = context.widget.data;
 *
 *     return <div>{buttons}</div>;
 * }
 * ```
 */
export type ButtonGroupCollectionContextProps = CollectionContextProps<
    WidgetRegistry['tplButtonGroupCollectionWidget']
>;

/**
 * React Context props for Select Collection Widget.
 *
 * @remarks
 * Select widget provides dropdown selection control:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Select-specific fields (options, emptyValue, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~51
 * @example
 * ```typescript
 * import React from 'react';
 * import type { SelectCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const SelectContext = React.createContext<SelectCollectionContextProps>(null!);
 *
 * function SelectControl() {
 *     const context = React.useContext(SelectContext);
 *     const { oid1, options, emptyValue } = context.widget.data;
 *
 *     const selectedValue = context.values[oid1!]?.val;
 *     return <select value={selectedValue as string}>{options}</select>;
 * }
 * ```
 */
export type SelectCollectionContextProps = CollectionContextProps<WidgetRegistry['tplSelectCollectionWidget']>;

/**
 * React Context props for Gauge Collection Widget.
 *
 * @remarks
 * Gauge widget provides visual value representation with thresholds:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Gauge-specific fields (gaugeType, min, max, thresholds, etc.)
 *
 * Total properties: ~125
 * @example
 * ```typescript
 * import React from 'react';
 * import type { GaugeCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const GaugeContext = React.createContext<GaugeCollectionContextProps>(null!);
 *
 * function GaugeDisplay() {
 *     const context = React.useContext(GaugeContext);
 *     const { oid1, gaugeType, min, max, thresholds } = context.widget.data;
 *
 *     const value = context.values[oid1!]?.val as number;
 *     return <div>Gauge: {value}</div>;
 * }
 * ```
 */
export type GaugeCollectionContextProps = CollectionContextProps<WidgetRegistry['tplGaugeCollectionWidget']>;

/**
 * React Context props for Dialog Collection Widget.
 *
 * @remarks
 * Dialog widget provides modal/dialog display and interaction:
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Dialog-specific fields (dialogTitle, dialogContent, etc.)
 *
 * Total properties: ~50
 * @example
 * ```typescript
 * import React from 'react';
 * import type { DialogCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const DialogContext = React.createContext<DialogCollectionContextProps>(null!);
 *
 * function DialogControl() {
 *     const context = React.useContext(DialogContext);
 *     const { dialogTitle, dialogContent } = context.widget.data;
 *
 *     return <dialog><h1>{dialogTitle}</h1><p>{dialogContent}</p></dialog>;
 * }
 * ```
 */
export type DialogCollectionContextProps = CollectionContextProps<WidgetRegistry['tplDialogCollectionWidget']>;

/**
 * React Context props for Light2 Collection Widget.
 *
 * @remarks
 * Light2 widget provides advanced light control (brightness, color, effects):
 * - Common fields (alias, style, visibility, etc.)
 * - Common object fields (oid, writeDelay, etc.)
 * - Light2-specific fields (brightness, color, effects, etc.)
 * - Delay fields (delay, delayEnabled)
 *
 * Total properties: ~71
 * @example
 * ```typescript
 * import React from 'react';
 * import type { Light2CollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * const Light2Context = React.createContext<Light2CollectionContextProps>(null!);
 *
 * function Light2Control() {
 *     const context = React.useContext(Light2Context);
 *     const { oid1, brightness, color, effects } = context.widget.data;
 *
 *     return <div>Light Control</div>;
 * }
 * ```
 */
export type Light2CollectionContextProps = CollectionContextProps<WidgetRegistry['tplLight2CollectionWidget']>;

// ============================================================================
// Union & Helper Types
// ============================================================================

/**
 * Union of all widget-specific context types.
 *
 * @remarks
 * Useful for generic handlers that can work with any Collection widget.
 * @example
 * ```typescript
 * import type { AllCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * function handleAnyWidgetContext(context: AllCollectionContextProps) {
 *     // Works with any Collection widget context
 *     console.log(context.id, context.widget.data.alias1);
 * }
 * ```
 */
export type AllCollectionContextProps =
    | TemplateCollectionContextProps
    | StateCollectionContextProps
    | CheckboxCollectionContextProps
    | SwitchCollectionContextProps
    | SliderCollectionContextProps
    | RadioGroupCollectionContextProps
    | ButtonGroupCollectionContextProps
    | SelectCollectionContextProps
    | GaugeCollectionContextProps
    | DialogCollectionContextProps
    | Light2CollectionContextProps;

/**
 * Generate context type for a specific widget ID.
 *
 * @template T - Widget ID (must be a key in {@link WidgetRegistry})
 * @example
 * ```typescript
 * import type { WidgetContextFor } from 'vis-2-widgets-collection/types';
 *
 * // Equivalent to StateCollectionContextProps
 * type StateContext = WidgetContextFor<'tplStateCollectionWidget'>;
 *
 * // Use in generic function
 * function createContext<T extends keyof WidgetRegistry>(
 *     widgetId: T
 * ): React.Context<WidgetContextFor<T>> {
 *     return React.createContext<WidgetContextFor<T>>(null!);
 * }
 * ```
 */
export type WidgetContextFor<T extends keyof WidgetRegistry> = CollectionContextProps<WidgetRegistry[T]>;

/**
 * Extract widget data type from a context type.
 *
 * @template T - Context type (extends {@link CollectionContextProps})
 * @example
 * ```typescript
 * import type { ExtractWidgetData, StateCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * // Extract data type from context
 * type StateData = ExtractWidgetData<StateCollectionContextProps>;
 * // Result: VisRxData & StateFieldsRxData & CommonFieldsRxData & ...
 *
 * // Use in helper function
 * function getWidgetData<T extends CollectionContextProps<any>>(
 *     context: T
 * ): ExtractWidgetData<T> {
 *     return context.widget.data;
 * }
 * ```
 */
export type ExtractWidgetData<T extends CollectionContextProps<any>> =
    T extends CollectionContextProps<infer U> ? U : never;

/**
 * Check if a type is a valid Collection context type.
 *
 * @template T - Type to check
 * @example
 * ```typescript
 * import type { IsCollectionContext, StateCollectionContextProps } from 'vis-2-widgets-collection/types';
 *
 * // Compile-time validation
 * type Valid = IsCollectionContext<StateCollectionContextProps>; // true
 * type Invalid = IsCollectionContext<{ id: string }>; // false
 * ```
 */
export type IsCollectionContext<T> = T extends CollectionContextProps<any> ? true : false;
