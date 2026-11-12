/**
 * Naht 2 — widgets rendered from raw data the vis-2 assistant (Bauzeit-KI) may write.
 *
 * @module lib/aiRawDataRender.test
 * @remarks
 * The assistant inserts widgets without defaults and assigns updates flat, unchecked against
 * `visAttrs` (vis-2 `AiChat/aiTools.ts` add_widget / update_widget). Each widget here is
 * rendered the way vis-2 renders it — an instance of its class, `renderWidgetBody` with the
 * stored data as `rxData` — so the data takes its real way into the Collection-Kontext
 * (`Generic.renderWithProvider`). Per field with a rule (`lib/usableWidgetData`):
 * - a broken value (wrong type, unparsable, wrong shape, outside the options) renders exactly
 *   like the field unset — no crash, no other look;
 * - a stored `null`, which the rule keeps as unset already, renders like the field unset too;
 * - a usable value renders exactly like the widget's body over the raw data, the reading before
 *   the rule existed: valid stored data is untouched;
 * - the default of a data-bearing custom field renders like the field unset (strukturiert-leer
 *   wie leer);
 * and the widget renders with no data at all and with only an OID.
 *
 * The broken and usable values come from the field definitions, not from per-widget lists. The
 * fields of the shared modules (`SHARED_FIELD_NAMES`) and the per-state keys `name{n}` of the
 * Zustandszeilen (tried on row 1) are checked at every widget; a widget's own fields once it has
 * left `STILL_OPEN` (`lib/testing/aiSeams`). The values of all fields go in together, one round
 * per value; only a round that differs is retried field by field to name the culprit. A field the
 * fixture itself sets (the rows' `values_count`) is tried alone, so the others' rounds keep it.
 * What a follow-up ticket adds: widget-specific cases below the generic ones where a field needs
 * them (inner JSON structure, `''`, bindings).
 */
import { act, type FC } from 'react';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { Theme, type Connection } from '@iobroker/gui-components';
import type {
    RxWidgetInfo,
    RxWidgetInfoAttributesField,
    RxWidgetInfoFieldChangeHandler,
    WidgetData,
} from '@iobroker/types-vis-2';

import type { AllowedType } from './allowedOidTypes';
import { oidChangeHandlerAsync } from './commonObjectFields';
import { encodeBlob, utf8ToBase64 } from './encoding';
import { fieldRulesOf, type FieldRule, type FieldRules } from './usableWidgetData';
import { collectionScene, installInertResizeObserver, mountCollectionBody } from './testing/collectionScene';
import { PLACEABLE_WIDGETS, SHARED_FIELD_NAMES, STILL_OPEN, type WidgetName } from './testing/aiSeams';
import { createTestRoot } from './testing/testRoots';
import ButtonGroupCollection from '../ButtonGroupCollectionWidget/ButtonGroupCollection';
import CheckboxCollection from '../CheckboxCollectionWidget/CheckboxCollection';
import DialogCollection from '../DialogCollectionWidget/DialogCollection';
import EchartsCollection from '../EchartsCollectionWidget/EchartsCollection';
import GaugeCollection from '../GaugeCollectionWidget/GaugeCollection';
import InputCollection from '../InputCollectionWidget/InputCollection';
import JsonTableCollection from '../JsonTableCollectionWidget/JsonTableCollection';
import Light2Collection from '../Light2CollectionWidget/Light2Collection';
import RadioGroupCollection from '../RadioGroupCollectionWidget/RadioGroupCollection';
import SelectCollection from '../SelectCollectionWidget/SelectCollection';
import SliderCollection from '../SliderCollectionWidget/SliderCollection';
import StateCollection from '../StateCollectionWidget/StateCollection';
import SwitchCollection from '../SwitchCollectionWidget/SwitchCollection';

// The host base class with what renderWidgetBody reaches: props, state, the signal check. Its `t`
// reads `this` like the host's (see lib/testing/visRxWidgetStub).
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string): string {
            void this.getI18nPrefix;
            return key;
        }

        props: unknown;

        state: unknown = {};

        constructor(props: unknown) {
            this.props = props;
        }

        // eslint-disable-next-line class-methods-use-this
        renderWidgetBody(): null {
            return null;
        }

        // eslint-disable-next-line class-methods-use-this
        isSignalVisible(): boolean {
            return false;
        }

        // eslint-disable-next-line class-methods-use-this
        setState(): void {}

        // The Dialog's view renderer: no view is opened here.
        // eslint-disable-next-line class-methods-use-this
        getWidgetView(): null {
            return null;
        }
    };
});

// canvas-gauges needs a real canvas: the gauge shows the option set it is handed instead.
vi.mock('../GaugeCollectionWidget/Gauge', () => ({
    default: ({ options }: { options: unknown }) => <pre data-gauge-options="">{JSON.stringify(options)}</pre>,
}));

installInertResizeObserver();

/** What a widget needs to show its content: the reference body and minimal valid data. */
interface WidgetFixture {
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
const CHROME = { header: 'Head', footer: 'Foot' };

/**
 * Two authored Zustandszeilen of a number OID, the first active; the OID declares a third state,
 * whose row is filled but beyond `values_count` — it shows only while the states govern.
 */
const numberRows = (oid: string): Record<string, unknown> => ({
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
const booleanRows = (property: string, oid: string): Record<string, unknown> => ({
    [property]: oid,
    [`${property}Object`]: { _id: oid, type: 'boolean', write: true },
    ignoreCommonStates: false,
    values_count: 2,
    value1: true,
    alias1: 'ON',
    value2: false,
    alias2: 'OFF',
});

const NUMBER_OID = 'demo.0.level';
const SWITCH_OID = 'demo.0.power';
const DIALOG_OID = 'demo.0.dialog';
const TABLE_OID = 'demo.0.table';

/** One entry per placeable widget. */
const FIXTURES: Partial<Record<WidgetName, WidgetFixture>> = {
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
        data: { ...CHROME },
        values: {},
    },
};

/** Values the assistant may write that the rule must read as unset. */
const brokenValuesOf = (rule: FieldRule): unknown[] => {
    if (typeof rule === 'object') {
        return 'options' in rule
            ? ['__not_an_option__', { value: rule.options[0] }]
            : ['{"oops', rule.json === 'array' ? '{}' : '[]', 5];
    }
    switch (rule) {
        case 'number':
            return ['abc', true, { value: 5 }];
        case 'boolean':
            return ['true', 1, {}];
        default:
            return [5, { color: '#ff0000' }];
    }
};

/** Stored values a configurator or a binding writes, which the rule must leave as they are. */
const usableValuesOf = (rule: FieldRule): unknown[] => {
    if (typeof rule === 'object') {
        return 'options' in rule ? [...rule.options, null] : [null, ''];
    }
    switch (rule) {
        case 'number':
            return [12, '12', null];
        case 'boolean':
            return [true, false, null];
        default:
            return ['#123456', '', null];
    }
};

/** A state object of the fake object database. */
const stateObject = (id: string, common: Record<string, unknown>): Record<string, unknown> => ({
    _id: id,
    type: 'state',
    common: { name: id, role: 'state', read: true, write: true, ...common },
});

/** Ids the object database does not know, or whose type no widget accepts. */
const MISSING_OID = 'demo.0.missing';
const LIST_OID = 'demo.0.list';
const OTHER_OID = 'demo.0.other';

/** The objects the fixtures' OIDs name, as the OID picker reads them; the instance carries the icon. */
const OBJECTS: Record<string, unknown> = {
    'demo.0': { _id: 'demo.0', type: 'instance', common: { name: 'Demo', icon: 'demo.png' } },
    'demo.0.level': stateObject('demo.0.level', {
        type: 'number',
        min: -10,
        max: 50,
        states: { 0: 'OFF', 1: 'ON', 2: 'AUTO' },
    }),
    'demo.0.power': stateObject('demo.0.power', { type: 'boolean' }),
    'demo.0.dialog': stateObject('demo.0.dialog', { type: 'boolean' }),
    'demo.0.table': stateObject('demo.0.table', { type: 'string' }),
    [LIST_OID]: stateObject(LIST_OID, { type: 'array' }),
};

const stubSocket = {
    getState: (): Promise<null> => Promise.resolve(null),
    subscribeState: (): Promise<void> => Promise.resolve(),
    unsubscribeState: (): void => undefined,
    getObject: vi.fn((id: string): Promise<unknown> => Promise.resolve(OBJECTS[id])),
    // Writes: none of these may run while a widget renders.
    setState: vi.fn((): Promise<void> => Promise.resolve()),
    setObject: vi.fn((): Promise<void> => Promise.resolve()),
};

type WidgetClass = (new (props: unknown) => {
    state: unknown;
    renderWidgetBody: (props: unknown) => React.JSX.Element;
}) & { getWidgetInfo: () => RxWidgetInfo };

const SLUG = 'ai-raw-data';

/**
 * The markup without React's mount ids (`useId`: `_r_1a_`), which count up with every mount and
 * would set two renderings of the same data apart.
 */
const withoutMountIds = (html: string): string => html.replace(/_r_[0-9a-z]+_/g, '_r_');

/** Reads the markup of a mounted tree, then unmounts it (the test roots would only at the test's end). */
async function markupOf(element: React.JSX.Element, read: (container: HTMLElement) => string): Promise<string> {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);
    // Async act: the theme hook's socket read resolves before the markup is read.
    await act(() => {
        root.render(element);
        return Promise.resolve();
    });
    // A macrotask: the object reads of an OID without its object resolve, and their rendering lands.
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 0)));
    const html = withoutMountIds(read(container));
    act(() => root.unmount());
    container.remove();
    return html;
}

/**
 * The element vis-2 renders for the widget: an instance of its class, `renderWidgetBody` with the
 * data as `rxData`.
 *
 * @param widget - The widget class.
 * @param data - The data as vis-2 hands it to the widget (`rxData`: bindings resolved).
 * @param values - The subscribed state values.
 * @param stored - The data as stored in the project (`props.widget.data`); defaults to `data`, i.e.
 *   no attribute bound.
 */
function widgetElement(
    widget: WidgetClass,
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    stored: Record<string, unknown> = data,
): React.JSX.Element {
    const instance = new widget({
        context: { socket: stubSocket, themeType: 'light', lang: 'en', theme: Theme('light') },
    });
    instance.state = { rxData: data, rxStyle: {}, values, editMode: false };
    return instance.renderWidgetBody({
        id: `preview-${SLUG}`,
        widget: { data: stored, style: {} },
        style: {},
        refService: { current: null },
    });
}

/**
 * Renders the widget the way vis-2 does; returns the markup of its body.
 *
 * @param widget - The widget class.
 * @param data - The data as vis-2 hands it to the widget (`rxData`: bindings resolved).
 * @param values - The subscribed state values.
 * @param stored - The data as stored in the project (`props.widget.data`); defaults to `data`, i.e.
 *   no attribute bound.
 * @param interact - What a user does on the mounted widget before its markup is read (a click).
 */
function renderWidget(
    widget: WidgetClass,
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    stored: Record<string, unknown> = data,
    interact?: (container: HTMLElement) => void,
): Promise<string> {
    return markupOf(widgetElement(widget, data, values, stored), container => {
        interact?.(container);
        return container.querySelector('.GENERIC-1')?.innerHTML ?? `<no widget body: ${container.innerHTML}>`;
    });
}

/** Renders the body directly over the raw data (no rule): the reading of stored data before it. */
async function renderBodyRaw(fixture: WidgetFixture, data: Record<string, unknown>): Promise<string> {
    const scene = collectionScene(SLUG, data, undefined);
    const mounted = mountCollectionBody(
        fixture.body,
        { ...scene, context: { ...scene.context, values: fixture.values, wrappedContent: !data.noCard } },
        fixture.extraContext,
    );
    // Flush the theme hook's socket read, as renderWidget does inside its act.
    await act(() => Promise.resolve());
    const html = withoutMountIds(mounted.container.innerHTML);
    mounted.unmount();
    return html;
}

/** The data without some keys. */
const without = (data: Record<string, unknown>, names: readonly string[]): Record<string, unknown> => {
    const rest = { ...data };
    for (const name of names) {
        delete rest[name];
    }
    return rest;
};

/** Renders the markup a check compares for some assigned values: what it gets, what it expects. */
type RenderPair = (assigned: Record<string, unknown>) => Promise<[actual: string, expected: string]>;

/**
 * The values whose two renderings differ: per round every key gets its value of that round at
 * once; a round that differs is retried key by key.
 *
 * @param keys - The keys under test.
 * @param valuesOf - The values a key is tried with, one per round.
 * @param pair - The two renderings to compare.
 * @returns `key = value` per differing value, or the round as a whole when only the combination differs.
 */
async function differingValues(
    keys: readonly string[],
    valuesOf: (key: string) => readonly unknown[],
    pair: RenderPair,
): Promise<string[]> {
    const found: string[] = [];
    const rounds = Math.max(0, ...keys.map(key => valuesOf(key).length));
    for (let round = 0; round < rounds; round++) {
        const assigned = Object.fromEntries(
            keys.flatMap(key => (round < valuesOf(key).length ? [[key, valuesOf(key)[round]]] : [])),
        );
        const [actual, expected] = await pair(assigned);
        if (actual === expected) {
            continue;
        }
        const single: string[] = [];
        for (const [key, value] of Object.entries(assigned)) {
            const [one, oneExpected] = await pair({ [key]: value });
            if (one !== oneExpected) {
                single.push(`${key} = ${JSON.stringify(value)}`);
            }
        }
        found.push(...(single.length ? single : [`together: ${JSON.stringify(assigned)}`]));
    }
    return found;
}

/** The values whose two renderings differ, key by key: no key's value can hide another's. */
async function differingPerKey(
    keys: readonly string[],
    valuesOf: (key: string) => readonly unknown[],
    pair: RenderPair,
): Promise<string[]> {
    const found: string[] = [];
    for (const key of keys) {
        found.push(...(await differingValues([key], valuesOf, pair)));
    }
    return found;
}

describe('Naht 2: widgets rendered from raw assistant data', () => {
    it('has a fixture for every placeable widget', () => {
        expect(PLACEABLE_WIDGETS.filter(name => !FIXTURES[name])).toEqual([]);
    });

    describe.each(PLACEABLE_WIDGETS)('%s', name => {
        const fixture = FIXTURES[name]!;
        let widget: WidgetClass;
        let rules: FieldRules;

        beforeAll(async () => {
            widget = ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;
            rules = fieldRulesOf(widget.getWidgetInfo().visAttrs ?? []);
        }, 60_000);

        /**
         * The keys with a rule this widget is checked on: the shared fields, the per-state keys of
         * row 1 (from `commonFields({ perState: true })`, shared too) and, once the widget has left
         * `STILL_OPEN`, its own fields.
         */
        const keysUnderTest = (): Map<string, FieldRule> =>
            new Map([
                ...[...rules.named].filter(([field]) => SHARED_FIELD_NAMES.has(field) || !STILL_OPEN.includes(name)),
                ...[...rules.perRow].map(([base, rule]): [string, FieldRule] => [`${base}1`, rule]),
            ]);

        /** Runs a check over the keys under test: together, and alone for the keys the fixture sets. */
        const differingUnderTest = async (
            valuesOf: (rule: FieldRule, key: string) => readonly unknown[],
            pair: RenderPair,
        ): Promise<string[]> => {
            const keys = keysUnderTest();
            const values = (key: string): readonly unknown[] => valuesOf(keys.get(key)!, key);
            const set = [...keys.keys()].filter(key => key in fixture.data);
            const found = await differingValues(
                [...keys.keys()].filter(key => !set.includes(key)),
                values,
                pair,
            );
            for (const key of set) {
                found.push(...(await differingValues([key], values, pair)));
            }
            return found;
        };

        /** Assigned values against the same data with those keys unset. */
        const likeUnset: RenderPair = async assigned => [
            await renderWidget(widget, { ...fixture.data, ...assigned }, fixture.values),
            await renderWidget(widget, without(fixture.data, Object.keys(assigned)), fixture.values),
        ];
        it('renders without any data and with only an OID', async () => {
            expect(await renderWidget(widget, {}, {})).not.toContain('<no widget body');
            expect(await renderWidget(widget, { oid: fixture.data.oid }, fixture.values)).not.toContain(
                '<no widget body',
            );
        });

        it('checks the shared fields, and the per-state keys where the widget has Zustandszeilen', () => {
            const keys = [...keysUnderTest().keys()];
            expect(keys).toContain('noCard');
            if ('values_count' in fixture.data) {
                expect(keys).toEqual(expect.arrayContaining(['values_count', 'iconSize1', 'iconColor1']));
            }
        });

        it('reads an ignoreCommonStates that is no false like unset (no field, only false counts)', async () => {
            if (!('ignoreCommonStates' in fixture.data)) {
                return;
            }
            // The fixture's OID declares a third state: unset, the states govern instead of the two rows.
            if (['RadioGroupCollectionWidget', 'ButtonGroupCollectionWidget'].includes(name)) {
                const [authored, unset] = await likeUnset({ ignoreCommonStates: false });
                expect(authored, 'the rows show whether the states govern').not.toBe(unset);
            }
            expect(await differingValues(['ignoreCommonStates'], () => ['false', 0, null, true], likeUnset)).toEqual(
                [],
            );
        });

        // The rule keeps null as unset already, and the assistant's flat update may write it:
        // the widget has to read it like the missing key (MUI applies its defaults to undefined only).
        it('renders a stored null like the unset field', async () => {
            expect(await differingUnderTest(() => [null], likeUnset)).toEqual([]);
        }, 120_000);

        it('renders a broken value like the unset field', async () => {
            expect(await differingUnderTest(brokenValuesOf, likeUnset)).toEqual([]);
        }, 120_000);

        it('renders usable stored values exactly as the body reads them raw', async () => {
            expect(
                await differingUnderTest(usableValuesOf, async assigned => {
                    const data = { ...fixture.data, ...assigned };
                    return [await renderWidget(widget, data, fixture.values), await renderBodyRaw(fixture, data)];
                }),
            ).toEqual([]);
        }, 120_000);

        it('renders the default of a data-bearing custom field like the unset field', async () => {
            const defaults = new Map(
                (widget.getWidgetInfo().visAttrs ?? [])
                    .flatMap(group => group.fields ?? [])
                    .flatMap(field => {
                        const {
                            name: key,
                            type,
                            default: value,
                        } = field as {
                            name?: string;
                            type?: string;
                            default?: unknown;
                        };
                        return type === 'custom' && key && value !== undefined ? [[key, value] as const] : [];
                    }),
            );
            expect(
                await differingUnderTest((_rule, key) => (defaults.has(key) ? [defaults.get(key)] : []), likeUnset),
            ).toEqual([]);
        }, 120_000);
    });

    // The vis-2 select offers only the option values, so an empty string in an option field comes
    // only from raw data. The rule keeps '' everywhere (its meaning stays with the field); in these
    // widgets' own option fields it means nothing and reads like the unset field.
    describe.each([
        'CheckboxCollectionWidget',
        'RadioGroupCollectionWidget',
        'ButtonGroupCollectionWidget',
        'SliderCollectionWidget',
        'GaugeCollectionWidget',
    ] as const)('%s: an empty own option field', name => {
        it('renders an own option field stored as "" like the unset field', async () => {
            const widget = ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;
            const fixture = FIXTURES[name]!;
            const optionFields = [...fieldRulesOf(widget.getWidgetInfo().visAttrs ?? []).named]
                .filter(
                    ([key, rule]) =>
                        !SHARED_FIELD_NAMES.has(key) &&
                        typeof rule === 'object' &&
                        'options' in rule &&
                        !rule.options.includes(''),
                )
                .map(([key]) => key);

            expect(optionFields.length).toBeGreaterThan(0);
            expect(
                await differingValues(
                    optionFields,
                    () => [''],
                    async assigned => [
                        await renderWidget(widget, { ...fixture.data, ...assigned }, fixture.values),
                        await renderWidget(widget, without(fixture.data, Object.keys(assigned)), fixture.values),
                    ],
                ),
            ).toEqual([]);
        });
    });

    // vis-2's number field stores '' once the user empties it, and the assistant may write it: in
    // the Slider's geometry and the Gauge-Optionen it reads like the unset field (the Gauge through
    // the Options-Builder's schema-default coercion, ADR-0107). A field where '' keeps a meaning of
    // its own is listed with it.
    describe.each([
        ['SliderCollectionWidget', { sliderPadding: "'' is no padding (0), unset the field default" }],
        ['GaugeCollectionWidget', {}],
    ] as const)('%s: an emptied own number field', (name, ownMeaning: Readonly<Record<string, string>>) => {
        it('renders an own number field stored as "" like the unset field', async () => {
            const widget = ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;
            const fixture = FIXTURES[name]!;
            const numberFields = [...fieldRulesOf(widget.getWidgetInfo().visAttrs ?? []).named]
                .filter(([key, rule]) => !SHARED_FIELD_NAMES.has(key) && rule === 'number' && !(key in ownMeaning))
                .map(([key]) => key);

            expect(numberFields.length).toBeGreaterThan(0);
            expect(
                await differingValues(
                    numberFields,
                    () => [''],
                    async assigned => [
                        await renderWidget(widget, { ...fixture.data, ...assigned }, fixture.values),
                        await renderWidget(widget, without(fixture.data, Object.keys(assigned)), fixture.values),
                    ],
                ),
            ).toEqual([]);
        });
    });

    // The Input's own fields shape the edit field, which shows only once a click starts the
    // Inline-Edit-Sitzung (ADR-0109): read there, each broken, null or (in an option field) empty
    // value draws the field like the unset one.
    describe('InputCollectionWidget: the edit field', () => {
        const startSession = (container: HTMLElement): void => {
            const display = container.querySelector('.BASE-PAPER-1 .MuiTypography-root');
            if (!display) {
                throw new Error('the widget rendered no display');
            }
            act(() => {
                display.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            });
            if (!container.querySelector('input')) {
                throw new Error('the click started no session');
            }
        };

        it('draws its own fields with broken, null or empty values like the unset ones', async () => {
            const widget = (
                (await import('../InputCollectionWidget/InputCollectionWidget')) as { default: WidgetClass }
            ).default;
            const fixture = FIXTURES.InputCollectionWidget!;
            const ownFields = [...fieldRulesOf(widget.getWidgetInfo().visAttrs ?? []).named].filter(
                ([key]) => !SHARED_FIELD_NAMES.has(key),
            );
            const valuesOf = new Map(
                ownFields.map(([key, rule]) => [
                    key,
                    [
                        ...brokenValuesOf(rule),
                        null,
                        ...(typeof rule === 'object' && 'options' in rule && !rule.options.includes('') ? [''] : []),
                    ],
                ]),
            );
            const editing = (data: Record<string, unknown>): Promise<string> =>
                renderWidget(widget, data, fixture.values, data, startSession);

            expect(ownFields.map(([key]) => key)).toEqual(
                expect.arrayContaining(['showOkButton', 'inputVariant', 'inputPadding', 'step', 'minValue']),
            );
            expect(
                await differingValues(
                    [...valuesOf.keys()],
                    key => valuesOf.get(key)!,
                    async assigned => [
                        await editing({ ...fixture.data, ...assigned }),
                        await editing(without(fixture.data, Object.keys(assigned))),
                    ],
                ),
            ).toEqual([]);
        });
    });

    /**
     * The own fields of a widget with what the assistant may write wrongly into them: the broken
     * values of their rule, `null`, and `''` in a number field, a text-valued custom field (its
     * strukturiert-leerer default) or an option field without that option.
     */
    const ownFieldValues = (widget: WidgetClass): Map<string, unknown[]> =>
        new Map(
            [...fieldRulesOf(widget.getWidgetInfo().visAttrs ?? []).named]
                .filter(([key]) => !SHARED_FIELD_NAMES.has(key))
                .map(([key, rule]) => [
                    key,
                    [
                        ...brokenValuesOf(rule),
                        null,
                        ...(rule === 'number' ||
                        rule === 'string' ||
                        (typeof rule === 'object' && 'options' in rule && !rule.options.includes(''))
                            ? ['']
                            : []),
                    ],
                ]),
        );

    // The Lampen-Bedienelement draws its pickers only into a measured box, and its geometry, Kelvin
    // range and border fields act only there (ADR-0108 Nr. 5). Measured and with real iro pickers,
    // each own field broken, null or emptied draws like the unset one; and none of them adds a write
    // to the lamp — on mount, on the view switch (which writes the stored temperature, then the stored
    // colour, ADR-0108 addendum) and on the power button. Field by field, so that no field's broken
    // value (an unset UI component draws nothing) hides another's.
    describe('Light2CollectionWidget: the measured Lampen-Bedienelement', () => {
        const HEX_OID = 'demo.0.lamp.hex';
        const CT_OID = 'demo.0.lamp.ct';
        const DIM_OID = 'demo.0.lamp.dim';
        const channel = (property: string, oid: string, type: string): Record<string, unknown> => ({
            [property]: oid,
            [`${property}Object`]: { _id: oid, type, write: true },
        });
        const fixture = FIXTURES.Light2CollectionWidget!;
        /** An rgb & cct lamp with its three channels, without delay so that a write lands at once. */
        const data: Record<string, unknown> = {
            ...fixture.data,
            colorLightType: 'rgbcct',
            colorLightUIComponent: 'wheel',
            delay: 0,
            ...channel('colorLightRgbHexOid', HEX_OID, 'string'),
            ...channel('colorLightTemperatureOid', CT_OID, 'number'),
            ...channel('colorLightBrightnessOid', DIM_OID, 'number'),
        };
        const values = {
            ...fixture.values,
            [`${HEX_OID}.val`]: '#ff8800',
            [`${CT_OID}.val`]: 3000,
            [`${DIM_OID}.val`]: 80,
        };
        let widget: WidgetClass;

        beforeAll(async () => {
            widget = ((await import('../Light2CollectionWidget/Light2CollectionWidget')) as { default: WidgetClass })
                .default;
        });

        beforeEach(() => {
            // iro names its gradients after a random id: fixed, two renderings compare.
            vi.spyOn(Math, 'random').mockReturnValue(0.5);
            vi.stubGlobal(
                'ResizeObserver',
                class {
                    private readonly callback: ResizeObserverCallback;

                    constructor(callback: ResizeObserverCallback) {
                        this.callback = callback;
                    }

                    observe(target: Element): void {
                        const contentRect = { width: 300, height: 200 };
                        this.callback([{ target, contentRect } as unknown as ResizeObserverEntry], this);
                    }

                    /* eslint-disable class-methods-use-this -- nothing to release */
                    unobserve(): void {}
                    disconnect(): void {}
                    /* eslint-enable class-methods-use-this */
                },
            );
        });

        afterEach(() => {
            vi.restoreAllMocks();
            vi.unstubAllGlobals();
        });

        /**
         * Mounts the widget over the lamp data with some keys assigned or unset, runs the user's
         * steps — the CCT-Ansicht and back, then the power button — and returns the writes in order.
         */
        const writesOf = async (assigned: Record<string, unknown>, unset: readonly string[]): Promise<string> => {
            const container = document.createElement('div');
            document.body.appendChild(container);
            const root = createTestRoot(container);
            stubSocket.setState.mockClear();
            // Without delay the write debounces for 0 ms (hooks/useDebounce).
            const settle = (): Promise<void> => act(() => new Promise<void>(resolve => setTimeout(resolve, 30)));
            const press = async (button: Element | null | undefined): Promise<void> => {
                if (button instanceof HTMLElement) {
                    act(() => button.click());
                    await settle();
                }
            };

            await act(() => {
                root.render(widgetElement(widget, { ...without(data, unset), ...assigned }, values));
                return Promise.resolve();
            });
            await settle();
            // The view switch shows for an „& cct“ Lichttyp: the colour icon, then the CCT icon.
            const viewButtons = [...container.querySelectorAll('button')].filter(
                button => button.querySelector('[data-testid="PowerSettingsNewIcon"]') === null,
            );
            await press(viewButtons[1]);
            await press(viewButtons[0]);
            await press(container.querySelector('[data-testid="PowerSettingsNewIcon"]')?.closest('button'));
            const writes = JSON.stringify(stubSocket.setState.mock.calls);
            act(() => root.unmount());
            container.remove();
            return writes;
        };

        it('draws its pickers in the measured box (the check has something to compare)', async () => {
            const html = await renderWidget(widget, data, values);
            expect(html).toContain('IroColorPicker');
            expect(html).toContain('IroWheel');
        });

        // The switch pick's own steps (Zustandszeilen, Kanalerkennung, CT range, lib/light2Fields
        // loadStatesAsync) are not derived at runtime (ticket 12): a lamp the assistant writes has
        // only what it sets. Unset, they read like unset — no rows, no channel, the default range.
        it.each([
            ['the colour view', 'rgb'],
            ['the CCT-Ansicht', 'cct'],
        ])('draws a lamp written without the switch pick’s extras in %s', async (_case, colorLightType) => {
            const written = { colorLightSwitchOid: SWITCH_OID, colorLightType };

            const defaults = Object.fromEntries(
                (widget.getWidgetInfo().visAttrs ?? [])
                    .flatMap(group => group.fields ?? [])
                    .flatMap(field => {
                        const { name: key, default: value } = field as { name?: string; default?: unknown };
                        return key === 'colorLightCtMin' || key === 'colorLightCtMax' ? [[key, value]] : [];
                    }),
            );

            const html = await renderWidget(widget, written, values);
            expect(html).toContain('IroColorPicker');
            expect(html).not.toContain('collection_base_select_oid');
            // The Kelvin range the pick would not bring: drawn over the defaults the panel shows.
            expect(Object.keys(defaults)).toHaveLength(2);
            expect(html).toBe(await renderWidget(widget, { ...written, ...defaults }, values));
            expect(await renderWidget(widget, { ...written, colorLightButton: true }, values)).not.toContain(
                '<no widget body',
            );
        });

        it.each([
            ['the colour view', {}],
            ['the CCT-Ansicht', { colorLightType: 'cct' }],
        ])(
            'draws each own field broken, null or emptied like the unset one in %s',
            async (_case, view) => {
                const valuesOf = ownFieldValues(widget);
                const base = { ...data, ...view };
                const keys = [...valuesOf.keys()].filter(key => !(key in view));

                expect(keys).toEqual(
                    expect.arrayContaining(['colorLightCtMin', 'colorLightSliderWidth', 'colorLightUIComponent']),
                );
                expect(
                    await differingPerKey(
                        keys,
                        key => valuesOf.get(key)!,
                        async assigned => [
                            await renderWidget(widget, { ...base, ...assigned }, values),
                            await renderWidget(widget, without(base, Object.keys(assigned)), values),
                        ],
                    ),
                ).toEqual([]);
            },
            120_000,
        );

        it('writes to the lamp what it writes with the field unset, for each own field broken', async () => {
            const valuesOf = ownFieldValues(widget);
            const unsetWrites = await writesOf({}, []);

            // The steps write: the stored temperature, the stored colour, the switch.
            expect(unsetWrites).toContain(CT_OID);
            expect(unsetWrites).toContain(HEX_OID);
            expect(unsetWrites).toContain(SWITCH_OID);
            expect(
                await differingPerKey(
                    [...valuesOf.keys()],
                    key => valuesOf.get(key)!,
                    async assigned => [await writesOf(assigned, []), await writesOf({}, Object.keys(assigned))],
                ),
            ).toEqual([]);
        }, 300_000);
    });

    // The Dialog's own fields shape the open dialog, which the Modal portals into the document body:
    // opened by its Sitzungs-OID (true opens, ADR-0095 Nr. 5) with both close buttons, each own field
    // broken, null or emptied draws the button and the dialog like the unset one. Field by field, so
    // that a close button another field's broken value hides cannot hide its colour.
    describe('DialogCollectionWidget: the open dialog', () => {
        const fixture = FIXTURES.DialogCollectionWidget!;
        const data = { ...fixture.data, view: 'detail', dialogCloseButtonTop: true, dialogCloseButtonBottom: true };
        const values = { [`${DIALOG_OID}.val`]: true };

        /** The widget's body and the open dialog in the document body. */
        const renderOpen = (widget: WidgetClass, rendered: Record<string, unknown>): Promise<string> =>
            markupOf(
                widgetElement(widget, rendered, values),
                container =>
                    `${container.querySelector('.GENERIC-1')?.innerHTML ?? '<no widget body>'}` +
                    `${document.body.querySelector('.MuiModal-root')?.outerHTML ?? '<no dialog>'}`,
            );

        it('draws its own fields broken, null or emptied like the unset ones', async () => {
            const widget = (
                (await import('../DialogCollectionWidget/DialogCollectionWidget')) as { default: WidgetClass }
            ).default;
            const valuesOf = ownFieldValues(widget);

            expect(await renderOpen(widget, data)).toContain('MuiModal-root');
            expect([...valuesOf.keys()]).toEqual(
                expect.arrayContaining(['dialogWidth', 'dialogCloseButtonColor', 'dialogAutoClose']),
            );
            expect(
                await differingPerKey(
                    [...valuesOf.keys()],
                    key => valuesOf.get(key)!,
                    async assigned => [
                        await renderOpen(widget, { ...data, ...assigned }),
                        await renderOpen(widget, without(data, Object.keys(assigned))),
                    ],
                ),
            ).toEqual([]);
        }, 120_000);
    });

    // The JSON table's own fields shape the Tabellen-Chrome and the table's capabilities: each
    // broken, null or emptied draws the table like the unset one. Field by field, so that a field
    // that hides the header cannot hide the header's own fields.
    describe('JsonTableCollectionWidget: its own fields', () => {
        it('draws its own fields broken, null or emptied like the unset ones', async () => {
            const widget = (
                (await import('../JsonTableCollectionWidget/JsonTableCollectionWidget')) as { default: WidgetClass }
            ).default;
            const fixture = FIXTURES.JsonTableCollectionWidget!;
            const valuesOf = ownFieldValues(widget);

            expect([...valuesOf.keys()]).toEqual(
                expect.arrayContaining(['columnConfig', 'tablePageSize', 'tableDensity', 'tableHeaderElevation']),
            );
            expect(
                await differingPerKey(
                    [...valuesOf.keys()],
                    key => valuesOf.get(key)!,
                    async assigned => [
                        await renderWidget(widget, { ...fixture.data, ...assigned }, fixture.values),
                        await renderWidget(widget, without(fixture.data, Object.keys(assigned)), fixture.values),
                    ],
                ),
            ).toEqual([]);
        }, 240_000);
    });

    // The column configuration (`columnConfig`) is a JSON list of Column entries, stored by the
    // column editor as a `b64:` blob; the assistant writes it as plain JSON. The rule reads a value
    // that is no JSON list as unset (automatically found Columns, the Spalten-Merge over an empty
    // configuration); the parse site reads an entry that is no Column as left out and a broken key
    // of an entry like the key left out.
    describe('JsonTableCollectionWidget: the column configuration', () => {
        const fixture = FIXTURES.JsonTableCollectionWidget!;
        const values = {
            [`${TABLE_OID}.val`]: JSON.stringify([
                { name: 'a', value: 1.25 },
                { name: 'b', value: -2 },
            ]),
        };
        const valueColumn: Record<string, unknown> = {
            path: 'value',
            visible: true,
            headerName: 'Weight',
            width: 120,
            align: 'right',
            format: { type: 'number', numberDecimals: 1, numberSuffix: ' kg' },
            cellStyle: [{ logic: { '<': [{ var: 'value' }, 0] }, backgroundColor: '#ff0000' }],
            cellStyleMode: 'all-match',
            sortable: false,
            filterable: false,
            enableHiding: false,
        };
        const nameColumn = { path: 'name', visible: false, headerName: 'Label' };
        const CONFIG = [valueColumn, nameColumn];
        const blob = (config: unknown): string => encodeBlob(JSON.stringify(config));
        let widget: WidgetClass;

        beforeAll(async () => {
            widget = (
                (await import('../JsonTableCollectionWidget/JsonTableCollectionWidget')) as { default: WidgetClass }
            ).default;
        });

        /** The table under a stored column configuration; without one when `undefined`. */
        const table = (columnConfig?: unknown): Promise<string> =>
            renderWidget(widget, columnConfig === undefined ? fixture.data : { ...fixture.data, columnConfig }, values);

        it('reads a configuration written as plain JSON like the same configuration as blob', async () => {
            const configured = await table(blob(CONFIG));

            expect(configured).toContain('Weight');
            expect(configured).toContain('1.3 kg');
            expect(configured, 'the configuration shows').not.toBe(await table());
            expect(await table(JSON.stringify(CONFIG))).toBe(configured);
        });

        it.each([
            ['unparsable JSON', '{"oops'],
            ['a JSON object', '{"path":"value"}'],
            ['JSON null', 'null'],
            ['a JSON text', '"value"'],
            ['plain text instead of a blob', 'name,value'],
            ['a broken blob', 'b64:!!!'],
            ['a blob of unparsable JSON', `b64:${utf8ToBase64('[{"path"')}`],
            ['a blob of a JSON object', blob({ path: 'value' })],
            ['a number', 5],
            ['a list instead of its JSON text', CONFIG],
            ['an object', { path: 'value' }],
        ])('reads %s like the unset configuration', async (_case, columnConfig) => {
            expect(await table(columnConfig)).toBe(await table());
        });

        it('reads an entry that is no Column like the entry left out', async () => {
            const junk = [null, 5, 'value', [], {}, { path: 5 }, { headerName: 'Weight' }];

            expect(await table(JSON.stringify([...junk, ...CONFIG]))).toBe(await table(JSON.stringify(CONFIG)));
            expect(await table(blob(junk))).toBe(await table());
        });

        it('reads a broken key of an entry like the key left out', async () => {
            const broken: Record<string, unknown[]> = {
                visible: ['true', 1, null],
                headerName: [5, { text: 'Weight' }, null],
                width: ['abc', '120', -5, { px: 120 }, null],
                align: ['middle', 5, null],
                format: ['number', 5, [], {}, { type: 'nope' }, null],
                cellStyle: [{}, 'red', 5, null],
                cellStyleMode: ['any', 5, null],
                sortable: ['yes', 1, null],
                filterable: ['yes', 1, null],
                enableHiding: ['yes', 1, null],
            };
            const withColumn = (column: Record<string, unknown>): string => JSON.stringify([column, nameColumn]);

            expect(
                await differingPerKey(
                    Object.keys(broken),
                    key => broken[key],
                    async assigned => [
                        await table(withColumn({ ...valueColumn, ...assigned })),
                        await table(withColumn(without(valueColumn, Object.keys(assigned)))),
                    ],
                ),
            ).toEqual([]);
        }, 120_000);

        it('reads a conditional style that is no rule like the rule left out, a broken key like the key left out', async () => {
            const rule: Record<string, unknown> = {
                logic: { '<': [{ var: 'value' }, 0] },
                backgroundColor: '#ff0000',
                textColor: '#ffffff',
                fontWeight: 'bold',
                fontStyle: 'italic',
            };
            const broken: Record<string, unknown[]> = {
                logic: ['x < 0', 5, null],
                backgroundColor: [5, { color: 'red' }, null],
                textColor: [5, { color: 'red' }, null],
                fontWeight: ['heavy', 700, null],
                fontStyle: ['oblique', 1, null],
            };
            const styled = (cellStyle: unknown[]): string =>
                JSON.stringify([{ ...valueColumn, cellStyle }, nameColumn]);

            expect(await table(styled([rule])), 'the rule paints').not.toBe(await table(styled([])));
            expect(await table(styled([null, 5, 'red', [], rule]))).toBe(await table(styled([rule])));
            expect(
                await differingPerKey(
                    Object.keys(broken),
                    key => broken[key],
                    async assigned => [
                        await table(styled([{ ...rule, ...assigned }])),
                        await table(styled([without(rule, Object.keys(assigned))])),
                    ],
                ),
            ).toEqual([]);
        }, 120_000);
    });

    describe('SwitchCollectionWidget: bound attributes', () => {
        it.each([
            ['locks for a binding resolved to "true"', 'true', true],
            ['stays unlocked for a binding resolved to "false"', 'false', false],
        ])('%s (onlyDisplay as text, lib/helper/isOidReadOnly)', async (_case, resolved, disabled) => {
            const widget = (
                (await import('../SwitchCollectionWidget/SwitchCollectionWidget')) as { default: WidgetClass }
            ).default;
            const fixture = FIXTURES.SwitchCollectionWidget!;
            const html = await renderWidget(widget, { ...fixture.data, onlyDisplay: resolved }, fixture.values, {
                ...fixture.data,
                onlyDisplay: '{0_userdata.0.lock}',
            });

            const body = document.createElement('div');
            body.innerHTML = html;
            expect(body.querySelector<HTMLInputElement>('input.MuiSwitch-input')?.disabled).toBe(disabled);
        });
    });

    // The assistant writes Zustandszeilen without the Zustandseditor, so their shape is not the
    // editor's: a row value that names no state, a row count beyond the authored rows, row keys
    // without a row count. The row derivation (`stateRowSchema`, `effectiveStateCount`, the blank
    // rule) stays the one reading; these cases pin that it reads them like the rows unset.
    describe.each(PLACEABLE_WIDGETS.filter(name => 'values_count' in FIXTURES[name]!.data))(
        '%s: malformed Zustandszeilen',
        name => {
            const fixture = FIXTURES[name]!;
            const load = async (): Promise<WidgetClass> =>
                ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;

            it.each([
                ['an object', { value: 0 }],
                ['a list', [0]],
            ])('renders a row value stored as %s like the row value unset', async (_case, broken) => {
                const widget = await load();

                expect(await renderWidget(widget, { ...fixture.data, value2: broken }, fixture.values)).toBe(
                    await renderWidget(widget, without(fixture.data, ['value2']), fixture.values),
                );
            });

            it('renders a row count beyond the authored rows like the count of those rows', async () => {
                const widget = await load();
                const authored = Object.keys(fixture.data).filter(key => /^value\d+$/.test(key)).length;

                expect(await renderWidget(widget, { ...fixture.data, values_count: 50 }, fixture.values)).toBe(
                    await renderWidget(widget, { ...fixture.data, values_count: authored }, fixture.values),
                );
            });

            it('renders row keys without a row count like no rows', async () => {
                const widget = await load();
                const rowless = without(fixture.data, ['values_count']);
                const rowKeys = { header2: 'Row head', iconColor2: '#ff0000', alias4: 'FOUR', value4: '4' };

                expect(await renderWidget(widget, { ...rowless, ...rowKeys }, fixture.values)).toBe(
                    await renderWidget(widget, rowless, fixture.values),
                );
            });
        },
    );

    // vis-2 resolves a binding in any string attribute to text (Vis/visFormatUtils.tsx formatBinding),
    // also in a checkbox field the assistant wrote one into: the text reads as the boolean it names.
    describe.each(PLACEABLE_WIDGETS)('%s: a bound checkbox field', name => {
        it.each([
            ['false', false],
            ['0', false],
            ['true', true],
        ])('renders noHeader bound and resolved to "%s" like %s', async (resolved, flag) => {
            const widget = ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;
            const fixture = FIXTURES[name]!;
            const bound = await renderWidget(widget, { ...fixture.data, noHeader: resolved }, fixture.values, {
                ...fixture.data,
                noHeader: '{0_userdata.0.hideHeader}',
            });

            expect(bound).toBe(await renderWidget(widget, { ...fixture.data, noHeader: flag }, fixture.values));
        });
    });

    // The assistant sets an OID without running the field's onChange, so the object the editor pick
    // stores (`<id>Object`) and the pick's other keys are missing — or an older object stays with a
    // foreign `_id` after a flat update. The widget reads the object itself and derives with the
    // pick's own derivation what the pick would have written, for keys the data leaves unset.
    describe('an OID without its object (the editor pick read at runtime)', () => {
        /** Per widget with an OID: the id field the fixture binds. */
        const ID_FIELDS = PLACEABLE_WIDGETS.flatMap(name => {
            const data = FIXTURES[name]!.data;
            const idName = Object.keys(data).find(key => `${key}Object` in data);
            return idName ? [[name, idName] as const] : [];
        });

        /** The widgets that show the frame's OID hint; the Dialog's Sitzungs-OID is optional (ADR-0111). */
        const HINTING = ID_FIELDS.filter(([name]) => name !== 'DialogCollectionWidget');

        const HINT = 'collection_base_select_oid';

        const load = async (name: WidgetName): Promise<WidgetClass> =>
            ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;

        /** What the assistant writes: the frame texts and the OID, nothing the pick adds. */
        const assistantData = (
            name: WidgetName,
            idName: string,
            id = FIXTURES[name]!.data[idName],
        ): Record<string, unknown> => {
            const { colorLightType } = FIXTURES[name]!.data;
            return { ...CHROME, [idName]: id, ...(colorLightType ? { colorLightType } : {}) };
        };

        /**
         * The data the editor stores when the user picks the id in the panel: the id field's own
         * onChange. Light2's switch field adds its own steps around the shared pick (switch rows,
         * channel detection, ADR-0096) — for it the shared pick alone, which is what it runs.
         */
        const pickedInEditor = async (
            widget: WidgetClass,
            idName: string,
            data: Record<string, unknown>,
        ): Promise<Record<string, unknown>> => {
            const field = (widget.getWidgetInfo().visAttrs ?? [])
                .flatMap(group => group.fields ?? [])
                .find(candidate => candidate.name === idName) as RxWidgetInfoAttributesField & {
                onChange?: RxWidgetInfoFieldChangeHandler;
                allowedTypes: readonly AllowedType[];
            };
            const onChange =
                idName === 'colorLightSwitchOid' ? oidChangeHandlerAsync(field.allowedTypes, idName) : field.onChange!;
            let stored: Record<string, unknown> | undefined;
            await onChange(
                field,
                structuredClone(data),
                (changed: WidgetData) => {
                    stored = changed;
                },
                stubSocket as unknown as Connection,
            );
            // The handler hands its result to vis-2 after 100 ms.
            await new Promise(resolve => setTimeout(resolve, 150));
            return stored!;
        };

        /** Freezes the data deeply: a write into the widget data throws. */
        const frozen = <T,>(value: T): T => {
            if (value && typeof value === 'object') {
                Object.values(value).forEach(frozen);
                Object.freeze(value);
            }
            return value;
        };

        it.each(ID_FIELDS)(
            '%s renders an OID without its object like the editor pick, once the object is loaded',
            async (name, idName) => {
                const widget = await load(name);
                const data = assistantData(name, idName);
                const picked = await pickedInEditor(widget, idName, data);

                const html = await renderWidget(widget, data, FIXTURES[name]!.values);

                expect(picked[`${idName}Object`]).toMatchObject({ _id: data[idName] });
                expect(html).not.toContain(HINT);
                expect(html).toBe(await renderWidget(widget, picked, FIXTURES[name]!.values));
            },
        );

        it.each(ID_FIELDS)('%s reads an object with a foreign _id like a missing one', async (name, idName) => {
            const widget = await load(name);
            const data = assistantData(name, idName);
            const stale = { ...(FIXTURES[name]!.data[`${idName}Object`] as object), _id: OTHER_OID };

            expect(await renderWidget(widget, { ...data, [`${idName}Object`]: stale }, FIXTURES[name]!.values)).toBe(
                await renderWidget(widget, data, FIXTURES[name]!.values),
            );
        });

        it.each(HINTING)(
            '%s keeps the OID hint for an object that does not exist or whose type it does not take',
            async (name, idName) => {
                const widget = await load(name);
                const stale = { ...(FIXTURES[name]!.data[`${idName}Object`] as object), _id: OTHER_OID };

                for (const id of [MISSING_OID, LIST_OID]) {
                    expect(await renderWidget(widget, assistantData(name, idName, id), {})).toContain(HINT);
                    expect(
                        await renderWidget(
                            widget,
                            { ...assistantData(name, idName, id), [`${idName}Object`]: stale },
                            {},
                        ),
                    ).toContain(HINT);
                }
            },
        );

        it.each(ID_FIELDS)(
            '%s writes neither the widget data nor a state, and reads each object once',
            async (name, idName) => {
                const widget = await load(name);
                const data = frozen(assistantData(name, idName));
                stubSocket.getObject.mockClear();
                stubSocket.setState.mockClear();
                stubSocket.setObject.mockClear();

                await renderWidget(widget, data, frozen({ ...FIXTURES[name]!.values }));

                // The object, then the icon walk up to the instance that carries one.
                expect(stubSocket.getObject.mock.calls.map(([id]) => id)).toEqual([
                    data[idName],
                    data[idName],
                    'demo.0',
                ]);
                expect(stubSocket.setState).not.toHaveBeenCalled();
                expect(stubSocket.setObject).not.toHaveBeenCalled();
            },
        );

        it.each(ID_FIELDS)('%s with its object reads no object and renders as before', async (name, idName) => {
            const widget = await load(name);
            const fixture = FIXTURES[name]!;
            stubSocket.getObject.mockClear();

            const html = await renderWidget(widget, fixture.data, fixture.values);

            expect(stubSocket.getObject).not.toHaveBeenCalled();
            expect(fixture.data[`${idName}Object`]).toBeDefined();
            expect(html).toBe(await renderBodyRaw(fixture, fixture.data));
        });

        describe('GaugeCollectionWidget: the object range', () => {
            const gaugeRange = (html: string): { minValue: number; maxValue: number } => {
                const body = document.createElement('div');
                body.innerHTML = html;
                const options = JSON.parse(body.querySelector('[data-gauge-options]')!.textContent) as {
                    minValue: number;
                    maxValue: number;
                };
                return { minValue: options.minValue, maxValue: options.maxValue };
            };

            it('draws its scale over the object range, and a bound the data sets wins', async () => {
                const widget = await load('GaugeCollectionWidget');
                const data = assistantData('GaugeCollectionWidget', 'oid');
                const { values } = FIXTURES.GaugeCollectionWidget!;

                expect(gaugeRange(await renderWidget(widget, data, values))).toEqual({ minValue: -10, maxValue: 50 });
                expect(gaugeRange(await renderWidget(widget, { ...data, minValue: 5 }, values))).toEqual({
                    minValue: 5,
                    maxValue: 50,
                });
            });
        });
    });
});
