/**
 * The reading of the selected widgets for custom fields: what vis-2 hands a custom field under a
 * selection, read as stored data and style per selected widget.
 *
 * @module components/selectedWidgets.test
 * @remarks
 * Props in (the vis-2 custom-field contract: field data and editor props), selected widgets out.
 */
import { describe, expect, it } from 'vitest';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { readSelectedWidgetDatas, readSelectedWidgets } from './selectedWidgets';

/** A widget as the project holds it. */
type StoredWidget = { data?: WidgetData; style?: { color?: string } };

/**
 * vis-2 editor props over a project with one view `v`.
 *
 * @param widgets - The widgets of view `v`.
 * @param selection - `selectedWidgets` and `selectedWidget` as vis-2 hands them.
 * @param selection.selectedWidgets - The selected widgets.
 * @param selection.selectedWidget - The single selected widget.
 * @returns The props.
 */
const editorProps = (
    widgets: Record<string, StoredWidget>,
    selection: { selectedWidgets?: string[]; selectedWidget?: string },
): RxWidgetInfoCustomComponentProperties =>
    ({
        context: { views: { v: { widgets } } },
        selectedView: 'v',
        ...selection,
    }) as unknown as RxWidgetInfoCustomComponentProperties;

/** What vis-2 hands the field: under a multi-selection its `commonValues` (differing keys `null`). */
const FIELD_DATA = { noCard: null, text: 'common' } as unknown as WidgetData;

describe('readSelectedWidgets', () => {
    it('reads every selected widget from the project, in selection order', () => {
        const props = editorProps(
            {
                w1: { data: { noCard: true }, style: { color: 'red' } },
                w2: { data: { noCard: false }, style: { color: 'blue' } },
            },
            { selectedWidgets: ['w2', 'w1'] },
        );

        expect(readSelectedWidgets(FIELD_DATA, props)).toEqual([
            { data: { noCard: false }, style: { color: 'blue' } },
            { data: { noCard: true }, style: { color: 'red' } },
        ]);
    });

    it('reads the single selected widget where the selection list is empty', () => {
        const props = editorProps(
            { w1: { data: { noCard: true }, style: { color: 'red' } } },
            { selectedWidgets: [], selectedWidget: 'w1' },
        );

        expect(readSelectedWidgets(FIELD_DATA, props)).toEqual([{ data: { noCard: true }, style: { color: 'red' } }]);
    });

    it('reads the field data where the project holds no data, with the first widget style', () => {
        const props = editorProps({ w1: { style: { color: 'red' } } }, { selectedWidgets: ['w1'] });

        expect(readSelectedWidgets(FIELD_DATA, props)).toEqual([{ data: FIELD_DATA, style: { color: 'red' } }]);
    });

    it('reads the field data alone where the project misses one selected widget', () => {
        const props = editorProps(
            { w1: { data: { noCard: true }, style: { color: 'red' } } },
            { selectedWidgets: ['w1', 'w2'] },
        );

        expect(readSelectedWidgets(FIELD_DATA, props)).toEqual([{ data: FIELD_DATA, style: { color: 'red' } }]);
    });

    it('reads the field data without style where nothing is selected', () => {
        const props = editorProps({}, { selectedWidgets: [] });

        expect(readSelectedWidgets(FIELD_DATA, props)).toEqual([{ data: FIELD_DATA, style: undefined }]);
    });
});

describe('readSelectedWidgetDatas', () => {
    it('reads the stored data of every selected widget', () => {
        const props = editorProps(
            { w1: { data: { noCard: true }, style: { color: 'red' } }, w2: { data: { noCard: false } } },
            { selectedWidgets: ['w1', 'w2'] },
        );

        expect(readSelectedWidgetDatas(FIELD_DATA, props)).toEqual([{ noCard: true }, { noCard: false }]);
    });

    it('reads the field data where the project holds no data', () => {
        const props = editorProps({ w1: { style: { color: 'red' } } }, { selectedWidgets: ['w1'] });

        expect(readSelectedWidgetDatas(FIELD_DATA, props)).toEqual([FIELD_DATA]);
    });
});
