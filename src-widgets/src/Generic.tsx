/**
 * Shared base class for all widgets in this collection.
 *
 * @module Generic
 * @remarks
 * All widgets extend this class (directly or indirectly). It provides:
 * - the i18n prefix used by vis-2
 * - a convenience `getPropertyValue()` wrapper around the widget runtime state
 * - a safe `setValue()` helper
 * - a common wrapper layout via `wrapContent()`
 */
import { Box, CssBaseline } from '@mui/material';

import type { VisRxWidgetState } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';

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
        return 'vis_2_widgets_collection_';
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

    wrapContent(content: JSX.Element | JSX.Element[]): JSX.Element | JSX.Element[] | null {
        return (
            <>
                <CssBaseline />
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
