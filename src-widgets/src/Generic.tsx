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
 * - the entry of the widget data into the `CollectionContext`: the Lese-Naht (ADR-0114, ADR-0117)
 *   reads it in four stages, from the field definitions of the widget's own `getWidgetInfo()`:
 *   1. the Rückfall-Regel (`lib/usableWidgetData`), here;
 *   2. the editor's OID pick for an id field without its object (`lib/pickedWidgetData`);
 *   3. the palette's default for an unset key (`lib/fieldDefaults`);
 *   4. the Rahmenvorgabe of the Leinwand-Theme, else the built-in standard, for an unset frame
 *      setting the widget offers (`lib/widgetFrame`).
 *   Stages 2–4 run inside the provider; stages 3 and 4 share one meaning of unset (`isUnset`).
 */
import { useContext, type JSX } from 'react';
import { Box } from '@mui/material';

import type { VisRxWidgetState, RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';
import withCollectionProvider from './components/withCollectionProvider';
import { CollectionContext } from './components/CollectionProvider';
import { I18N_PREFIX } from './lib/translate';
import { fieldRulesOf, usableWidgetData } from './lib/usableWidgetData';
import { oidPickFieldsOf } from './lib/pickedWidgetData';
import { fieldDefaultsOf } from './lib/fieldDefaults';
import { widgetFrameKeysOf } from './lib/widgetFrame';

import type { FieldRules } from './lib/usableWidgetData';
import type { WidgetDataReading } from './lib/pickedWidgetData';
import type { WidgetFrameKey } from './lib/widgetFrame';
import type { CollectionContextProps } from './types';

/** A widget class as far as its field rules are concerned: its static declaration. */
type WidgetClass = { getWidgetInfo(): RxWidgetInfo };

/** What the widget data's entry reads from a widget class's fields. */
interface FieldReading {
    /** The field rules of the Rückfall-Regel (lib/usableWidgetData). */
    rules: FieldRules;
    /** The id fields with the shared pick and the defaults of the unset keys (lib/pickedWidgetData). */
    dataReading: WidgetDataReading;
    /** The frame settings the widget offers, read by the provider's frame stage (lib/widgetFrame). */
    frameKeys: readonly WidgetFrameKey[];
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
            dataReading: {
                oidPickFields: oidPickFieldsOf(visAttrs),
                defaults: fieldDefaultsOf(visAttrs),
            },
            frameKeys: widgetFrameKeysOf(visAttrs),
        };
        fieldReadingByClass.set(widgetClass, reading);
    }
    return reading;
};

/**
 * The box the widget body sits in: inset by the card's margin while the widget shows its card.
 *
 * @remarks
 * Rendered inside the provider, it reads the provider's card decision (`wrappedContent`), made from
 * the effective `noCard` — an inherited one included — so the outer size follows the same value as
 * the frame (ADR-0117).
 */
function CardInset({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    const { wrappedContent } = useContext(CollectionContext);
    return (
        <Box
            className="GENERIC-1"
            sx={{
                width: wrappedContent ? 'calc(100% - 8px)' : '100%',
                height: wrappedContent ? 'calc(100% - 8px)' : '100%',
            }}
        >
            {children}
        </Box>
    );
}

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
     * Builds the collection context and wraps the widget body in the CollectionProvider — the
     * shared tail of every widget's `renderWidgetBody`.
     *
     * @remarks
     * Whether the widget shows its card falls in the provider, at one place: here only the host's
     * permission is read — an embedded widget (`usedInWidget`) never carries one — and handed to the
     * provider under its own name, not through the context; there the effective `noCard`, which only
     * the provider reads with the Rahmenvorgabe, takes it away. The context's `wrappedContent` means
     * only "the card is shown" (ADR-0117). The internal cast mirrors what every widget class used to
     * spell out as `as XxxCollectionContextProps`.
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
        // Stage 1 of the Lese-Naht, the Rückfall-Regel (KI-Integration, ADR-0114): an unusable
        // stored value reads as unset. The stored data itself is never written. `props.widget.data` is
        // the project's stored data: an attribute the host substitutes (a binding) stays unchecked.
        const { rules, dataReading, frameKeys } = fieldReadingOf(this.constructor as unknown as WidgetClass);
        const data = usableWidgetData(this.state.rxData, rules, props.widget.data);

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
            ...extraContext,
        } as CollectionContextProps<RxData>;
        // The host's permission to carry a card: embedded in another widget, none.
        const hostAllowsCard = !props.widget.usedInWidget;

        // Stages 2 and 3 inside the provider: an id without its object reads the editor's pick, an
        // unset key the palette's default (lib/pickedWidgetData): an assistant-inserted widget reads
        // like the palette's. Stage 4 there, too: an unset frame setting reads the Rahmenvorgabe of the
        // Leinwand-Theme, which only the provider reads, else its standard (lib/widgetFrame, ADR-0117).
        return withCollectionProvider(
            this.wrapContent(component),
            collectionContext,
            dataReading,
            frameKeys,
            hostAllowsCard,
        );
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
                    <CardInset>{content}</CardInset>
                </Box>
            </>
        );
    }
}

export default Generic;
