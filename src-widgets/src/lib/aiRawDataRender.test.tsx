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
 * - a usable value renders exactly like the widget's body over the raw data, the reading before
 *   the rule existed: valid stored data is untouched;
 * - the default of a data-bearing custom field renders like the field unset (strukturiert-leer
 *   wie leer);
 * and the widget renders with no data at all and with only an OID.
 *
 * The broken and usable values come from the field definitions, not from per-widget lists.
 * What a follow-up ticket adds: a {@link FIXTURES} entry (body, data, values) when its widget
 * leaves `STILL_OPEN` or `SHARED_FIELDS_STILL_OPEN` (`lib/testing/aiSeams`), and widget-specific
 * cases below the generic ones where a field needs them (inner JSON structure, `''`).
 */
import { act, type FC } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { Theme } from '@iobroker/gui-components';
import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import commonFields from './commonFields';
import commonObjectFields from './commonObjectFields';
import delayFields from './delayFields';
import { createOnlyDisplayField } from './fieldFactories';
import { stateEditorGroup } from './stateEditorFields';
import { fieldRulesOf, type FieldRule, type FieldRules } from './usableWidgetData';
import { collectionScene, installInertResizeObserver, mountCollectionBody } from './testing/collectionScene';
import { PLACEABLE_WIDGETS, SHARED_FIELDS_STILL_OPEN, STILL_OPEN, type WidgetName } from './testing/aiSeams';
import { createTestRoot } from './testing/testRoots';
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
    };
});

installInertResizeObserver();

/** What a widget needs to show its content: the reference body and minimal valid data. */
interface WidgetFixture {
    /** The widget's React body, rendered over the raw data as the reference. */
    body: FC;
    /** Minimal stored data under which the widget shows its content. */
    data: Record<string, unknown>;
    /** The state values the widget subscribes to. */
    values: Record<string, unknown>;
}

const SWITCH_OID = 'demo.0.power';

/** One entry per widget the seam checks (not on both open lists). */
const FIXTURES: Partial<Record<WidgetName, WidgetFixture>> = {
    SwitchCollectionWidget: {
        body: SwitchCollection,
        data: { oid: SWITCH_OID, oidObject: { _id: SWITCH_OID, type: 'boolean' } },
        values: { [`${SWITCH_OID}.val`]: true },
    },
};

/** The names of the fields the shared field modules declare. */
const SHARED_FIELD_NAMES: ReadonlySet<string> = new Set(
    [
        ...commonFields(),
        ...commonFields({ allFields: false }),
        ...commonObjectFields(['mixed']),
        ...delayFields(),
        ...stateEditorGroup().fields,
        createOnlyDisplayField(),
    ].flatMap(field => (field.name ? [field.name] : [])),
);

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
 * Renders the widget the way vis-2 does; returns the markup of its body.
 *
 * @param widget - The widget class.
 * @param data - The data as vis-2 hands it to the widget (`rxData`: bindings resolved).
 * @param values - The subscribed state values.
 * @param stored - The data as stored in the project (`props.widget.data`); defaults to `data`, i.e.
 *   no attribute bound.
 */
async function renderWidget(
    widget: WidgetClass,
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    stored: Record<string, unknown> = data,
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

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);
    // Async act: the theme hook's socket read resolves before the markup is read.
    await act(() => {
        root.render(element);
        return Promise.resolve();
    });
    return container.querySelector('.GENERIC-1')?.innerHTML ?? `<no widget body: ${container.innerHTML}>`;
}

/** Renders the body directly over the raw data (no rule): the reading of stored data before it. */
async function renderBodyRaw(fixture: WidgetFixture, data: Record<string, unknown>): Promise<string> {
    const scene = collectionScene(SLUG, data, undefined);
    const mounted = mountCollectionBody(fixture.body, {
        ...scene,
        context: { ...scene.context, values: fixture.values, wrappedContent: !data.noCard },
    });
    // Flush the theme hook's socket read, as renderWidget does inside its act.
    await act(() => Promise.resolve());
    const html = mounted.container.innerHTML;
    mounted.unmount();
    return html;
}

/** The data without one key. */
const without = (data: Record<string, unknown>, name: string): Record<string, unknown> => {
    const rest = { ...data };
    delete rest[name];
    return rest;
};

const checked = PLACEABLE_WIDGETS.filter(
    name => !STILL_OPEN.includes(name) || !SHARED_FIELDS_STILL_OPEN.includes(name),
);

describe('Naht 2: widgets rendered from raw assistant data', () => {
    it('checks at least the Switch, and every checked widget has a fixture', () => {
        expect(checked).toContain('SwitchCollectionWidget');
        expect(checked.filter(name => !FIXTURES[name])).toEqual([]);
    });

    describe.each(checked)('%s', name => {
        const fixture = FIXTURES[name]!;
        let widget: WidgetClass;
        let rules: FieldRules;

        beforeAll(async () => {
            widget = ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;
            rules = fieldRulesOf(widget.getWidgetInfo().visAttrs ?? []);
        }, 60_000);

        /** The fields with a rule this widget is checked on: own and/or shared, per the open lists. */
        const fieldsUnderTest = (): [string, FieldRule][] =>
            [...rules].filter(([field]) =>
                SHARED_FIELD_NAMES.has(field) ? !SHARED_FIELDS_STILL_OPEN.includes(name) : !STILL_OPEN.includes(name),
            );

        it('renders without any data and with only an OID', async () => {
            expect(await renderWidget(widget, {}, {})).not.toContain('<no widget body');
            expect(await renderWidget(widget, { oid: fixture.data.oid }, fixture.values)).not.toContain(
                '<no widget body',
            );
        });

        it('renders a broken value like the unset field', async () => {
            const differing: string[] = [];
            for (const [field, rule] of fieldsUnderTest()) {
                const unset = await renderWidget(widget, without(fixture.data, field), fixture.values);
                for (const value of brokenValuesOf(rule)) {
                    const html = await renderWidget(widget, { ...fixture.data, [field]: value }, fixture.values);
                    if (html !== unset) {
                        differing.push(`${field} = ${JSON.stringify(value)}`);
                    }
                }
            }
            expect(differing).toEqual([]);
        }, 120_000);

        it('renders usable stored values exactly as the body reads them raw', async () => {
            const differing: string[] = [];
            for (const [field, rule] of fieldsUnderTest()) {
                for (const value of usableValuesOf(rule)) {
                    const data = { ...fixture.data, [field]: value };
                    if ((await renderWidget(widget, data, fixture.values)) !== (await renderBodyRaw(fixture, data))) {
                        differing.push(`${field} = ${JSON.stringify(value)}`);
                    }
                }
            }
            expect(differing).toEqual([]);
        }, 120_000);

        it('renders the default of a data-bearing custom field like the unset field', async () => {
            const differing: string[] = [];
            const fields = (widget.getWidgetInfo().visAttrs ?? []).flatMap(group => group.fields ?? []) as {
                name?: string;
                type?: string;
                default?: unknown;
            }[];
            for (const field of fields) {
                if (
                    field.type !== 'custom' ||
                    !field.name ||
                    field.default === undefined ||
                    !fieldsUnderTest().some(([n]) => n === field.name)
                ) {
                    continue;
                }
                const unset = await renderWidget(widget, without(fixture.data, field.name), fixture.values);
                const html = await renderWidget(
                    widget,
                    { ...fixture.data, [field.name]: field.default },
                    fixture.values,
                );
                if (html !== unset) {
                    differing.push(`${field.name} = ${JSON.stringify(field.default)}`);
                }
            }
            expect(differing).toEqual([]);
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
});
