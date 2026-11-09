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
 */
import type { JSX } from 'react';
import { Box } from '@mui/material';

import type { VisRxWidgetState, RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';
import withCollectionProvider from './components/withCollectionProvider';
import { I18N_PREFIX } from './lib/translate';

import type { CollectionContextProps } from './types';

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
        if (props.widget.data.noCard || props.widget.usedInWidget) {
            this.wrappedCollectionContent = false;
        } else {
            this.wrappedCollectionContent = true;
        }

        const collectionContext = {
            id: props.id,
            refService: props.refService,
            style: props.style,
            widget: {
                data: this.state.rxData,
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

        return withCollectionProvider(this.wrapContent(component), collectionContext);
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
