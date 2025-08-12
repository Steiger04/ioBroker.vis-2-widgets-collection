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
import type { CSSProperties } from 'react';

export interface CollectionContextProps {
    id: string;
    refService: React.RefObject<HTMLElement>;
    style: React.CSSProperties;
    widget: {
        data: StateFieldsRxData & CommonObjectFieldsRxData & CommonFieldsRxData & DelayFieldsRxData;
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
