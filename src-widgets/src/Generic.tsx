/**
 * Shared base class for all widgets in this collection.
 *
 * @module Generic
 * @remarks
 * All widgets extend this class (directly or indirectly). It provides:
 * - the i18n prefix used by vis-2
 * - the instance `getWidgetInfo()` vis-2 reads, so a widget class declares only the static one
 * - a convenience `getPropertyValue()` wrapper around the widget runtime state
 * - a safe `setValue()` helper
 * - a common wrapper layout via `wrapContent()`
 * - the entry of the widget data into the `CollectionContext`, read through the Rückfall-Regel
 *   (`lib/usableWidgetData`, ADR-0114) with the field rules of the widget's own `getWidgetInfo()`;
 *   an id field without its object reads the editor's OID pick (`lib/pickedWidgetData`), an unset
 *   key the palette's default (`lib/fieldDefaults`)
 */
import type { JSX } from 'react';
import { Box } from '@mui/material';

import type { VisRxWidgetState, RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';
import withCollectionProvider from './components/withCollectionProvider';
import { I18N_PREFIX } from './lib/translate';
import { fieldRulesOf, usableWidgetData } from './lib/usableWidgetData';
import { oidPickFieldsOf } from './lib/pickedWidgetData';
import { fieldDefaultsOf } from './lib/fieldDefaults';

import type { FieldRules } from './lib/usableWidgetData';
import type { WidgetDataReading } from './lib/pickedWidgetData';
import type { CollectionContextProps } from './types';

/** A widget class as far as its field rules are concerned: its static declaration. */
type WidgetClass = { getWidgetInfo(): RxWidgetInfo };

/** What the widget data's entry reads from a widget class's fields. */
interface FieldReading {
    /** The field rules of the Rückfall-Regel (lib/usableWidgetData). */
    rules: FieldRules;
    /** The id fields with the shared pick and the defaults of the unset keys (lib/pickedWidgetData). */
    dataReading: WidgetDataReading;
}

/** The field reading of each widget class, read once from its static `getWidgetInfo()`. */
const fieldReadingByClass = new WeakMap<WidgetClass, FieldReading>();

/** The field reading of a widget class, built on first use. */
const fieldReadingOf = (widgetClass: WidgetClass): FieldReading => {
    let reading = fieldReadingByClass.get(widgetClass);
    if (!reading) {
        const visAttrs = widgetClass.getWidgetInfo().visAttrs ?? [];
        reading = {
            rules: fieldRulesOf(visAttrs),
            dataReading: { oidPickFields: oidPickFieldsOf(visAttrs), defaults: fieldDefaultsOf(visAttrs) },
        };
        fieldReadingByClass.set(widgetClass, reading);
    }
    return reading;
};

/**
 * Base class for all Collection widgets.
 *
 * @template RxData - Widget data type. Use WidgetRegistry types for type-safe implementations:
 * @example
 * ```typescript
 * class MyWidget extends Generic<WidgetRegistry['tplStateCollectionWidget']> {
 *   // Full type safety for widget.data properties
 * }
 * ```
 * @template State - Widget state type (extends VisRxWidgetState)
 */
class Generic<
    RxData extends Record<string, any>,
    State extends Partial<VisRxWidgetState> = VisRxWidgetState,
> extends (window.visRxWidget as typeof VisRxWidget)<RxData, State> {
    protected wrappedCollectionContent = true;

    /** Returns the translation prefix used by this widget set. */
    static getI18nPrefix(): string {
        return I18N_PREFIX;
    }

    /**
     * Answers vis-2 with the static `getWidgetInfo` of the instance's own class.
     *
     * @remarks
     * Do not delete: the host calls `this.getWidgetInfo()` in its constructor to read the widget
     * configuration, and its own method throws. It stays a method because a class property is
     * not set yet at that point.
     */
    getWidgetInfo(): RxWidgetInfo {
        return (this.constructor as unknown as { getWidgetInfo(): RxWidgetInfo }).getWidgetInfo();
    }

    /**
     * Reads the current value for a configured widget property.
     *
     * @param stateName Widget data property name that stores the OID (e.g. `"oid"`, `"colorLightHueOid"`).
     */
    getPropertyValue = (stateName: string): ioBroker.StateValue =>
        this.state.values[`${this.state.rxData[stateName]}.val`];

    /**
     * Writes a value to an ioBroker state.
     *
     * @remarks
     * This is a convenience wrapper around the vis socket connection used by widgets.
     */
    setValue = (id: string, value: string | number | boolean | ioBroker.SettableState | null, ack = false): void => {
        if (!id || id === 'nothing_selected') {
            return;
        }

        this.props.context.socket.setState(id, value, ack).catch(e => console.error(`Cannot set state ${id}: ${e}`));
    };

    /**
     * Builds the collection context, tracks `wrappedCollectionContent` and wraps
     * the widget body in the CollectionProvider — the shared tail of every
     * widget's `renderWidgetBody`.
     *
     * @remarks
     * `wrappedCollectionContent` is assigned BEFORE the context is built so the
     * context carries the current render's value (not the previous one);
     * `wrapContent` reads it at render time too. The internal cast mirrors what
     * every widget class used to spell out as `as XxxCollectionContextProps`.
     * @param component - The widget's React body.
     * @param props - The render props vis-2 passed to `renderWidgetBody`.
     * @param extraContext - Optional per-widget context additions (e.g. Dialog's
     *   `getWidgetView`), merged over the base context.
     * @returns The provider-wrapped content.
     */
    protected renderWithProvider(
        component: JSX.Element | JSX.Element[],
        props: RxRenderWidgetProps,
        extraContext?: Partial<CollectionContextProps<RxData>>,
    ): JSX.Element {
        // The widget reads its data through the Rückfall-Regel (KI-Integration, ADR-0114): an unusable
        // stored value reads as unset. The stored data itself is never written. `props.widget.data` is
        // the project's stored data: an attribute the host substitutes (a binding) stays unchecked.
        const { rules, dataReading } = fieldReadingOf(this.constructor as unknown as WidgetClass);
        const data = usableWidgetData(this.state.rxData, rules, props.widget.data);

        if (data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

        const collectionContext = {
            id: props.id,
            refService: props.refService,
            style: props.style,
            widget: {
                data,
                style: this.state.rxStyle,
            },
            setValue: this.setValue,
            setState: this.setState.bind(this),
            values: this.state.values,
            isSignalVisible: this.isSignalVisible.bind(this),
            getPropertyValue: this.getPropertyValue.bind(this),
            mode: this.props.context.themeType,
            socket: this.props.context.socket,
            lang: this.props.context.lang,
            theme: this.props.context.theme,
            wrappedContent: this.wrappedCollectionContent,
            ...extraContext,
        } as CollectionContextProps<RxData>;

        // Inside the provider an id without its object reads the editor's pick, an unset key the
        // palette's default (lib/pickedWidgetData): an assistant-inserted widget reads like the palette's.
        return withCollectionProvider(this.wrapContent(component), collectionContext, dataReading);
    }

    /**
     * Whether the widget is a cell of the host's grid layout with a fixed number of rows.
     *
     * @remarks
     * The rows of a grid section grow with their content (`minmax(<rowHeight>px, auto)`, vis-2
     * Vis/visView.tsx:2961), and the service div of a cell has `height: auto`
     * (Vis/visBaseWidget.tsx:1901-1915), so the widget's `height: 100%` resolves only after the
     * rows are sized: until then its content's own height sizes them. A cell of `span N` rows
     * must keep the height of its rows instead, as in the absolute layout; a cell of `auto` rows
     * grows with its content, which is what `auto` means there. The cell is read from the host's
     * own `VisBaseWidget.getGridCellStyle` with the arguments its render passes
     * (Vis/visBaseWidget.tsx:2090-2100), a running grid resize included. It came with the grid
     * layout and `gridCell`; a host without it has no grid cells.
     */
    protected occupiesFixedGridRows(): boolean {
        if (!this.props.gridCell) {
            return false;
        }
        const host = Generic as unknown as {
            getGridCellStyle?: (
                style: unknown,
                settings: unknown,
                order: number,
                span?: unknown,
            ) => { gridRow?: unknown } | undefined;
        };
        if (typeof host.getGridCellStyle !== 'function') {
            return false;
        }
        const state = this.state as VisRxWidgetState & { gridGesture?: { span?: unknown } | null };
        const cell = host.getGridCellStyle(
            state.rxStyle || state.style,
            this.props.context?.views?.[this.props.view]?.settings,
            0,
            state.gridGesture?.span,
        );
        return typeof cell?.gridRow === 'string' && cell.gridRow.startsWith('span');
    }

    wrapContent(content: JSX.Element | JSX.Element[]): JSX.Element | JSX.Element[] | null {
        return (
            <>
                <Box
                    className="GENERIC-0"
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',

                        width: '100%',
                        height: '100%',

                        // In a grid cell of fixed rows the content takes no part in sizing the rows:
                        // the widget gets their height and clips inside (see occupiesFixedGridRows).
                        contain: this.occupiesFixedGridRows() ? 'size' : undefined,

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        className="GENERIC-1"
                        sx={{
                            width: this.wrappedCollectionContent ? 'calc(100% - 8px)' : '100%',
                            height: this.wrappedCollectionContent ? 'calc(100% - 8px)' : '100%',
                        }}
                    >
                        {content}
                    </Box>
                </Box>
            </>
        );
    }
}

export default Generic;
