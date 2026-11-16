/**
 * The widget fixtures the render seams share: per placeable widget its React body and minimal
 * stored data under which it shows its content (KI-Integration Naht 2, Widget-Render-Naht).
 *
 * @module lib/testing/widgetFixtures
 * @remarks
 * Naht 2 (`lib/aiRawDataRender.test.tsx`) renders every placeable widget from raw assistant data,
 * the Widget-Render-Naht (`lib/widgetFrameRender.test.tsx`) from stored data under a stored
 * theme. Both render an instance of the widget's class over the same fixture, so a widget shows
 * its header, content and footer in both. A test that renders a body or a widget class with the
 * fixtures mocks what needs a real canvas itself (the gauge, the chart).
 */
import type { FC } from 'react';

import { encodeBlob } from '../encoding';
import ButtonGroupCollection from '../../ButtonGroupCollectionWidget/ButtonGroupCollection';
import CheckboxCollection from '../../CheckboxCollectionWidget/CheckboxCollection';
import DialogCollection from '../../DialogCollectionWidget/DialogCollection';
import EchartsCollection from '../../EchartsCollectionWidget/EchartsCollection';
import GaugeCollection from '../../GaugeCollectionWidget/GaugeCollection';
import InputCollection from '../../InputCollectionWidget/InputCollection';
import JsonTableCollection from '../../JsonTableCollectionWidget/JsonTableCollection';
import Light2Collection from '../../Light2CollectionWidget/Light2Collection';
import RadioGroupCollection from '../../RadioGroupCollectionWidget/RadioGroupCollection';
import SelectCollection from '../../SelectCollectionWidget/SelectCollection';
import SliderCollection from '../../SliderCollectionWidget/SliderCollection';
import StateCollection from '../../StateCollectionWidget/StateCollection';
import SwitchCollection from '../../SwitchCollectionWidget/SwitchCollection';

import type { WidgetName } from './aiSeams';

/** What a widget needs to show its content: the reference body and minimal valid data. */
export interface WidgetFixture {
    /** The widget's React body, rendered over the raw data as the reference. */
    body: FC;
    /** Minimal stored data under which the widget shows its content. */
    data: Record<string, unknown>;
    /** The state values the widget subscribes to. */
    values: Record<string, unknown>;
    /** Context entries the widget class adds in `renderWithProvider` (the Dialog's view renderer). */
    extraContext?: Record<string, unknown>;
}

/** What every fixture shows of the common block: a header and a footer the size fields act on. */
export const CHROME = { header: 'Head', footer: 'Foot' };

/**
 * Two authored Zustandszeilen of a number OID, the first active; the OID declares a third state,
 * whose row is filled but beyond `values_count` — it shows only while the states govern.
 */
export const numberRows = (oid: string): Record<string, unknown> => ({
    oid,
    oidObject: { _id: oid, type: 'number', write: true, commonStates: { 0: 'OFF', 1: 'ON', 2: 'AUTO' } },
    ignoreCommonStates: false,
    values_count: 2,
    value1: '1',
    alias1: 'ON',
    value2: '0',
    alias2: 'OFF',
    value3: '2',
    alias3: 'AUTO',
});

/** The two fixed Zustandszeilen of a boolean OID, the first active. */
export const booleanRows = (property: string, oid: string): Record<string, unknown> => ({
    [property]: oid,
    [`${property}Object`]: { _id: oid, type: 'boolean', write: true },
    ignoreCommonStates: false,
    values_count: 2,
    value1: true,
    alias1: 'ON',
    value2: false,
    alias2: 'OFF',
});

export const NUMBER_OID = 'demo.0.level';
export const SWITCH_OID = 'demo.0.power';
export const DIALOG_OID = 'demo.0.dialog';
export const TABLE_OID = 'demo.0.table';
export const CHART_OID = 'demo.0.chart';

/** One entry per placeable widget. */
export const FIXTURES: Partial<Record<WidgetName, WidgetFixture>> = {
    StateCollectionWidget: {
        body: StateCollection,
        data: { ...CHROME, ...numberRows(NUMBER_OID) },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    SliderCollectionWidget: {
        body: SliderCollection,
        data: { ...CHROME, ...numberRows(NUMBER_OID), minValue: 0, maxValue: 2, marks: true },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    InputCollectionWidget: {
        body: InputCollection,
        data: { ...CHROME, ...numberRows(NUMBER_OID) },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    ButtonGroupCollectionWidget: {
        body: ButtonGroupCollection,
        data: { ...CHROME, ...numberRows(NUMBER_OID) },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    SwitchCollectionWidget: {
        body: SwitchCollection,
        data: { ...CHROME, ...booleanRows('oid', SWITCH_OID) },
        values: { [`${SWITCH_OID}.val`]: true },
    },
    CheckboxCollectionWidget: {
        body: CheckboxCollection,
        data: { ...CHROME, ...booleanRows('oid', SWITCH_OID) },
        values: { [`${SWITCH_OID}.val`]: true },
    },
    DialogCollectionWidget: {
        body: DialogCollection,
        data: { ...CHROME, dialogId: DIALOG_OID, dialogIdObject: { _id: DIALOG_OID, type: 'boolean', write: true } },
        values: { [`${DIALOG_OID}.val`]: false },
        extraContext: { getWidgetView: (): null => null },
    },
    SelectCollectionWidget: {
        body: SelectCollection,
        data: { ...CHROME, ...numberRows(NUMBER_OID) },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    RadioGroupCollectionWidget: {
        body: RadioGroupCollection,
        data: { ...CHROME, ...numberRows(NUMBER_OID) },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    GaugeCollectionWidget: {
        body: GaugeCollection,
        // The object range the OID picker stores: an unset gaugeMinValue/gaugeMaxValue falls back to it.
        data: { ...CHROME, ...numberRows(NUMBER_OID), minValue: -10, maxValue: 50 },
        values: { [`${NUMBER_OID}.val`]: 1 },
    },
    Light2CollectionWidget: {
        body: Light2Collection,
        data: { ...CHROME, ...booleanRows('colorLightSwitchOid', SWITCH_OID), colorLightType: 'rgb' },
        values: { [`${SWITCH_OID}.val`]: true },
    },
    JsonTableCollectionWidget: {
        body: JsonTableCollection,
        data: { ...CHROME, oid: TABLE_OID, oidObject: { _id: TABLE_OID, type: 'string' } },
        values: { [`${TABLE_OID}.val`]: '[{"name":"a","value":1}]' },
    },
    EchartsCollectionWidget: {
        body: EchartsCollection,
        // The JSON table family: rows from the payload state, one series bound by the series configuration.
        data: {
            ...CHROME,
            mode: 'json',
            jsonKind: 'table',
            jsonOid: CHART_OID,
            jsonXPath: 'x',
            series_count: 1,
            seriesConfig: encodeBlob(JSON.stringify([{ name: 'A', yPath: 'a' }])),
        },
        values: {
            [`${CHART_OID}.val`]: JSON.stringify([
                { x: 1, a: 2 },
                { x: 2, a: 3 },
            ]),
        },
    },
};
