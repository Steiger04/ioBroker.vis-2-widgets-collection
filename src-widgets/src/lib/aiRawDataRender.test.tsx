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
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { Theme } from '@iobroker/gui-components';
import type { RxWidgetInfo } from '@iobroker/types-vis-2';

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
        data: { ...CHROME, ...numberRows(NUMBER_OID) },
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

const stubSocket = {
    getState: (): Promise<null> => Promise.resolve(null),
    subscribeState: (): Promise<void> => Promise.resolve(),
    unsubscribeState: (): void => undefined,
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
    const html = withoutMountIds(read(container));
    act(() => root.unmount());
    container.remove();
    return html;
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
    const instance = new widget({
        context: { socket: stubSocket, themeType: 'light', lang: 'en', theme: Theme('light') },
    });
    instance.state = { rxData: data, rxStyle: {}, values, editMode: false };
    const element = instance.renderWidgetBody({
        id: `preview-${SLUG}`,
        widget: { data: stored, style: {} },
        style: {},
        refService: { current: null },
    });
    return markupOf(element, container => {
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
    describe.each(['CheckboxCollectionWidget', 'RadioGroupCollectionWidget', 'ButtonGroupCollectionWidget'] as const)(
        '%s: an empty own option field',
        name => {
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
        },
    );

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
});
