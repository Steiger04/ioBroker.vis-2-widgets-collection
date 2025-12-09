import { Box, CssBaseline } from '@mui/material';

import type { VisRxWidgetState } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';

/* type ExtendedObject = ioBroker.Object & {
    noObject: boolean;
};

export interface CollectionGenericState extends VisRxWidgetState {
    [key: `${string}Object`]: ExtendedObject | null;
} */

class Generic<
    RxData extends Record<string, any>,
    State extends Partial<VisRxWidgetState> = VisRxWidgetState,
> extends (window.visRxWidget as typeof VisRxWidget)<RxData, State> {
    protected wrappedCollectionContent = true;

    static getI18nPrefix(): string {
        return 'vis_2_widgets_collection_';
    }

    getPropertyValue = (stateName: string): ioBroker.StateValue =>
        this.state.values[`${this.state.rxData[stateName]}.val`];

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
