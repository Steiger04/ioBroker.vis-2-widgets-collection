declare module '@iobroker/types-vis-2' {
    interface VisRxWidgetStateValues {
        [key: `${string}.ack`]: boolean;
    }
}
import type { ThemeType } from '@iobroker/adapter-react-v5';
import type { type Theme, LegacyConnection } from '@iobroker/types-vis-2';

import type { StateFieldsRxData } from './lib/stateFields';
import type { CommonObjectFieldsRxData } from './lib/commonObjectFields';
import type { CommonFieldsRxData } from './lib/commonFields';
import type { DelayFieldsRxData } from './lib/delayFields';
import type { CheckboxFieldsRxData } from './lib/checkboxFields';
import type { SwitchFieldsRxData } from './lib/switchFields';
import type { SliderFieldsRxData } from './lib/sliderFields';
import type { CSSProperties } from 'react';

export interface CollectionContextProps<T = CommonFieldsRxData & DelayFieldsRxData> {
    id: string;
    refService: React.RefObject<HTMLElement>;
    style: React.CSSProperties;
    widget: {
        data: T;
        style: CSSProperties;
    };
    setValue: (id: string, value: string | number | boolean | ioBroker.SettableState | null, ack?: boolean) => void;
    setState: React.Component['setState'];
    values: VisRxWidgetStateValues;
    isSignalVisible: (index: number) => boolean;
    getPropertyValue: (stateName: string) => ioBroker.StateValue;
    hasPropertyValueChanged: (stateName: string) => boolean;
    mode: ThemeType;
    socket: LegacyConnection;
    theme: Theme;
    wrappedContent: boolean;
}

// Spezifische Context-Types für einzelne Widgets
export type StateCollectionContextProps = CollectionContextProps<
    StateFieldsRxData & CommonObjectFieldsRxData & CommonFieldsRxData & DelayFieldsRxData
>;
export type CheckboxCollectionContextProps = CollectionContextProps<
    CheckboxFieldsRxData & CommonObjectFieldsRxData & CommonFieldsRxData & DelayFieldsRxData
>;
export type SwitchCollectionContextProps = CollectionContextProps<
    SwitchFieldsRxData & CommonObjectFieldsRxData & CommonFieldsRxData & DelayFieldsRxData
>;
export type SliderCollectionContextProps = CollectionContextProps<
    SliderFieldsRxData & CommonObjectFieldsRxData & CommonFieldsRxData & DelayFieldsRxData
>;
