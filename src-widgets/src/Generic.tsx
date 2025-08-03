import { Box, CssBaseline } from '@mui/material';

const VALUE_NOT_CHANGED_TIMESTAMP = 1111111111111;

import type { VisRxWidgetState } from '@iobroker/types-vis-2';
import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';

type ExtendedObject = ioBroker.Object & {
    noObject?: boolean;
    // wrappedContent?: boolean;
};

export interface CollectionGenericState extends VisRxWidgetState {
    [key: `${string}Object`]: ExtendedObject | null;
}

class Generic<
    RxData extends Record<string, any>,
    State extends Partial<CollectionGenericState> = CollectionGenericState,
> extends (window.visRxWidget as typeof VisRxWidget)<RxData, State> {
    protected wrappedCollectionContent = true;

    static getI18nPrefix(): string {
        return 'vis_2_widgets_collection_';
    }

    getPropertyValue = (stateName: string): ioBroker.StateValue =>
        this.state.values[`${this.state.rxData[stateName]}.val`];

    hasPropertyValueChanged = (stateName: string): boolean => {
        const lastChange = this.state.values[`${this.state.rxData[stateName]}.lc`];
        const timestamp = this.state.values[`${this.state.rxData[stateName]}.ts`];
        const ack = this.state.values[`${this.state.rxData[stateName]}.ack`];

        if (lastChange === VALUE_NOT_CHANGED_TIMESTAMP) {
            return false;
        }

        return timestamp === lastChange && ack === false;
    };

    setValue = (id: string, value: string | number | boolean | ioBroker.SettableState | null, ack = false): void => {
        if (!id || id === 'nothing_selected') {
            return;
        }

        this.props.context.socket.setState(id, value, ack).catch(e => console.error(`Cannot set state ${id}: ${e}`));
    };

    /* async getParentObject(id: string): Promise<ioBroker.Object | null> {
        const parts = id.split('.');
        parts.pop();
        const parentOID = parts.join('.');
        return this.props.context.socket.getObject(parentOID);
    } */

    /* static getObjectIcon(obj, id, imagePrefix) {
        imagePrefix = imagePrefix || '../..'; // http://localhost:8081';
        let src = '';
        const common = obj && obj.common;

        if (common) {
            const cIcon = common.icon;
            if (cIcon) {
                if (!cIcon.startsWith('data:image/')) {
                    if (cIcon.includes('.')) {
                        let instance;
                        if (obj.type === 'instance' || obj.type === 'adapter') {
                            src = `${imagePrefix}/adapter/${common.name}/${cIcon}`;
                        } else if (id && id.startsWith('system.adapter.')) {
                            instance = id.split('.', 3);
                            if (cIcon[0] === '/') {
                                instance[2] += cIcon;
                            } else {
                                instance[2] += `/${cIcon}`;
                            }
                            src = `${imagePrefix}/adapter/${instance[2]}`;
                        } else {
                            instance = id.split('.', 2);
                            if (cIcon[0] === '/') {
                                instance[0] += cIcon;
                            } else {
                                instance[0] += `/${cIcon}`;
                            }
                            src = `${imagePrefix}/adapter/${instance[0]}`;
                        }
                    } else {
                        return null;
                    }
                } else {
                    src = cIcon;
                }
            }
        }

        return src || null;
    } */

    async createStateObjectAsync(stateName: string): Promise<void> {
        if (!this.state.rxData[stateName] || this.state.rxData[stateName] === 'nothing_selected') {
            this.setState({
                [`${stateName}Object`]: {
                    _id: '',
                    type: 'state',
                    common: {} as ioBroker.StateCommon,
                    native: {},
                    noObject: true,
                },
            } as any);

            if (this.state.rxData.icon) {
                this.setState({
                    [`${stateName}Object`]: {
                        _id: '',
                        type: 'state',
                        common: {
                            icon: this.state.rxData.icon,
                        },
                        native: {},
                        noObject: true,
                    },
                } as any);
            }

            return;
        }
        // read object itself
        let object: ExtendedObject = await this.props.context.socket.getObject(this.state.rxData[stateName]);

        if (!object) {
            object = {
                _id: '',
                type: 'state',
                common: {} as ioBroker.StateCommon,
                native: {},
                noObject: true,
            };
        } else {
            object = {
                _id: object._id,
                type: 'state',
                common: object.common as ioBroker.StateCommon,
                native: object.native,
                noObject: false,
            };
        }

        object.common = object.common || {};
        if (object.common.type === 'number') {
            if (object.common.max === undefined) {
                object.common.max = 100;
            }
            if (object.common.min === undefined) {
                object.common.min = 0;
            }
        }

        if (object.common.states && Array.isArray(object.common.states)) {
            // convert to {'state1': 'state1', 'state2': 'state2', ...}
            const states: Record<string, string> = {};
            object.common.states.forEach(state => {
                states[state] = state;
            });
            object.common.states = states;
        }

        if (object.common.name && typeof object.common.name === 'object') {
            object.common.name = object.common.name[Generic.getLanguage()] || object.common.name.en;
        }

        if (JSON.stringify(this.state[`${stateName}Object`]) !== JSON.stringify(object)) {
            this.setState({ [`${stateName}Object`]: object } as any);
        }
    }

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
