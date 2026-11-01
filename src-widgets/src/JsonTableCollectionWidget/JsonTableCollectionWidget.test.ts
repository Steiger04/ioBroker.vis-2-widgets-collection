/**
 * Removing the OID resets every JSON-table setting.
 *
 * @module JsonTableCollectionWidget/JsonTableCollectionWidget.test
 * @remarks
 * Observed through the widget's public seam: the OID field's `onChange` as vis-2 calls it.
 * Mocked are the vis-2 runtime base (`Generic` extends window.visRxWidget, absent outside
 * vis-2) and the rendering components; the field lists and the handler run for real.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('./JsonTableCollection', () => ({ default: () => null }));
vi.mock('./JsonTableColumnEditor', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../components/CollectionGradientColorPicker', () => ({ default: () => null }));

import JsonTableCollectionWidget from './JsonTableCollectionWidget';
import jsonTableFields from '../lib/jsonTableFields';

type OnChange = (
    field: RxWidgetInfoAttributesField,
    data: WidgetData,
    changeData: (newData: WidgetData) => void,
    socket: Connection,
) => Promise<void>;

const oidField = (): RxWidgetInfoAttributesField & { onChange: OnChange } => {
    const group = JsonTableCollectionWidget.getWidgetInfo().visAttrs.find(attr => attr.name === 'jsonTable');
    return group?.fields.find(field => field.name === 'oid') as RxWidgetInfoAttributesField & { onChange: OnChange };
};

const namedJsonTableFields = (): string[] =>
    jsonTableFields()
        .map(field => (field as { name?: string }).name)
        .filter((name): name is string => typeof name === 'string' && name.length > 0);

describe('JsonTableCollectionWidget — removing the OID', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    const removeOid = async (data: WidgetData): Promise<void> => {
        const field = oidField();
        await field.onChange(field, data, () => undefined, {} as Connection);
        await vi.runAllTimersAsync();
    };

    it('clears every named field of the JSON-table field list', async () => {
        const names = namedJsonTableFields();
        const data: WidgetData = { oid: '', ...Object.fromEntries(names.map(name => [name, 'set'])) };

        await removeOid(data);

        expect(names.filter(name => name in data)).toEqual([]);
    });

    it('regression: clears tableShowHeader too', async () => {
        const data: WidgetData = { oid: '', tableShowHeader: false };

        await removeOid(data);

        expect(data).not.toHaveProperty('tableShowHeader');
    });

    it('keeps settings that are not JSON-table settings', async () => {
        const data: WidgetData = { oid: '', tableSorting: false, filterkey: 'kitchen' };

        await removeOid(data);

        expect(data).not.toHaveProperty('tableSorting');
        expect(data.filterkey).toBe('kitchen');
    });
});
