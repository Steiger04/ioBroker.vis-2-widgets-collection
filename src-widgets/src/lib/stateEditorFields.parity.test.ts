/**
 * Parity test (T3): the 11 state widgets edit their Zustandszeilen in the values group with the
 * Zustandseditor — no indexed vis-2 group `values` is left (ADR-0104, Ticket 02).
 *
 * @module lib/stateEditorFields.parity.test
 * @remarks
 * Introspects each widget's `getWidgetInfo()` like `colorFieldTerminals.parity.test.ts` (same
 * mocks: the vis-2 runtime base, the widget bodies and the heavy custom editors contribute no
 * field) and runs isolated for its own module registry (`DOM_TS_TESTS`). The roster is the
 * registry plus the Template widget, which carries a `values` group but is not shipped. The
 * parameters per widget are read where vis-2 meets them: the element the `values_count` field's
 * component renders carries the spec, compared with `stateEditorSpec(params)`.
 */
import { beforeAll, describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo, WidgetData } from '@iobroker/types-vis-2';

import { widgets } from '../widgetsRegistry';

import { stateEditorSpec, type StateEditorParams, type StateEditorSpec } from './stateEditorConfig';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../JsonTableCollectionWidget/JsonTableColumnEditor', () => ({ default: () => null }));
vi.mock('../EchartsCollectionWidget/EchartsConfigEditor', () => ({ default: () => null }));

/** Every widget module the test loads, with the render body it imports (mocked). */
const BODIES: Record<string, string> = {
    StateCollectionWidget: 'StateCollection',
    SliderCollectionWidget: 'SliderCollection',
    InputCollectionWidget: 'InputCollection',
    ButtonGroupCollectionWidget: 'ButtonGroupCollection',
    SwitchCollectionWidget: 'SwitchCollection',
    CheckboxCollectionWidget: 'CheckboxCollection',
    DialogCollectionWidget: 'DialogCollection',
    SelectCollectionWidget: 'SelectCollection',
    RadioGroupCollectionWidget: 'RadioGroupCollection',
    GaugeCollectionWidget: 'GaugeCollection',
    Light2CollectionWidget: 'Light2Collection',
    JsonTableCollectionWidget: 'JsonTableCollection',
    EchartsCollectionWidget: 'EchartsCollection',
    ThemeConfigWizard: 'ThemeWizardButton',
    TemplateCollectionWidget: 'TemplateCollection',
};
const ROSTER = [...widgets, 'TemplateCollectionWidget'];
for (const name of ROSTER) {
    vi.doMock(`../${name}/${BODIES[name]}`, () => ({ default: () => null }));
}

/** The parameters each state widget passes to its Zustandseditor (Spec, parameters per widget). */
const STATE_WIDGETS: Record<string, Required<StateEditorParams>> = {
    ButtonGroupCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: false },
    CheckboxCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: true },
    GaugeCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: false },
    InputCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: false },
    Light2CollectionWidget: { oidProperty: 'colorLightSwitchOid', markerLayer: false, fixedRows: true },
    RadioGroupCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: false },
    SelectCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: false },
    SliderCollectionWidget: { oidProperty: 'oid', markerLayer: true, fixedRows: false },
    StateCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: false },
    SwitchCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: true },
    TemplateCollectionWidget: { oidProperty: 'oid', markerLayer: false, fixedRows: true },
};

type Predicate = (data: WidgetData) => boolean;
type FieldLike = {
    name?: string;
    type?: string;
    label?: string;
    hidden?: unknown;
    component?: unknown;
};
type GroupLike = {
    name: string;
    label?: string;
    indexFrom?: unknown;
    indexTo?: unknown;
    hidden?: unknown;
    fields: FieldLike[];
};

const infos = new Map<string, RxWidgetInfo>();

beforeAll(async () => {
    for (const name of ROSTER) {
        const mod = (await import(`../${name}/${name}.tsx`)) as { default: { getWidgetInfo: () => RxWidgetInfo } };
        infos.set(name, mod.default.getWidgetInfo());
    }
}, 60_000);

const groupsOf = (name: string): GroupLike[] => (infos.get(name)?.visAttrs ?? []) as unknown as GroupLike[];
const valuesGroupOf = (name: string): GroupLike | undefined => groupsOf(name).find(group => group.name === 'values');

/** The spec a widget's Zustandseditor renders with — read from the element its `values_count` field renders. */
const specOf = (name: string): StateEditorSpec => {
    const [rows] = (valuesGroupOf(name) as GroupLike).fields;
    const render = rows.component as (
        field: unknown,
        data: WidgetData,
        onDataChange: () => void,
        props: unknown,
    ) => {
        props: { spec: StateEditorSpec };
    };
    return render(rows, {}, () => undefined, {}).props.spec;
};

/** The fallback fields of the per-state fields — where the Marker-Ebene shows. */
const fallbacksOf = (spec: StateEditorSpec): unknown[] =>
    spec.perStateFields.map(field => [field.name, (field as { fallbackFields?: string[] }).fallbackFields]);

describe('the values group replaces the indexed value group', () => {
    it('no widget declares an indexed group over values_count any more', () => {
        const indexed = ROSTER.flatMap(name =>
            groupsOf(name)
                .filter(group => group.indexTo === 'values_count' || group.indexFrom === 'values_count')
                .map(group => `${name}.${group.name}`),
        );
        expect(indexed).toEqual([]);
    });

    it('exactly the 11 state widgets have it', () => {
        expect(ROSTER.filter(name => valuesGroupOf(name)).sort()).toEqual(Object.keys(STATE_WIDGETS).sort());
    });

    it.each(Object.keys(STATE_WIDGETS))('%s: its first field is the Zustandseditor named values_count', name => {
        const group = valuesGroupOf(name) as GroupLike;
        const [rows] = group.fields;

        expect(group.label).toBe('state_editor_group');
        expect(rows).toMatchObject({ name: 'values_count', type: 'custom', label: 'state_editor_rows' });
        // The only field named after a data key: vis-2's hasValues and group checkbox hang on it.
        // The others carry `stateEditor:` names no data key has (see the multi-selection test).
        expect(
            group.fields.filter(field => field.name && !field.name.startsWith('stateEditor:')).map(field => field.name),
        ).toEqual(['values_count']);
    });

    it.each(Object.keys(STATE_WIDGETS))(
        '%s: every Zustandseditor field stays when several widgets are selected',
        name => {
            const group = valuesGroupOf(name) as GroupLike;
            const spec = specOf(name);
            // The section dividers stay as they are (unnamed, like in "Value [n]"); the group carries
            // copies with the "no row" rule, recognised by their component.
            const dividers = new Set<unknown>(
                spec.perStateFields.filter(field => !field.name).map(field => (field as FieldLike).component),
            );

            // vis-2 counts `${group}.${field.name}` once per field of every selected widget
            // (`visWidgetsCatalog.tsx` parseAttributes) and, with several widgets selected, keeps a
            // field only when its count equals the number of widgets (`Attributes/Widget/index.tsx`
            // recalculateFields) — two unnamed fields of one group share the name `undefined` and
            // both vanish.
            const counts = new Map<string, number>();
            for (let widget = 0; widget < 2; widget++) {
                group.fields.forEach(field =>
                    counts.set(String(field.name), (counts.get(String(field.name)) ?? 0) + 1),
                );
            }
            const vanished = group.fields
                .map((field, index) => ({ field, index }))
                .filter(({ field }) => !dividers.has(field.component) && counts.get(String(field.name)) !== 2)
                .map(({ field, index }) => `#${index} ${field.label ?? ''}`);

            expect(vanished).toEqual([]);
        },
    );

    it.each(Object.keys(STATE_WIDGETS))(
        '%s: the detail follows the Gewählte Zeile row — one row per per-state field, label and tooltip kept',
        name => {
            const group = valuesGroupOf(name) as GroupLike;
            const spec = specOf(name);
            const detail = group.fields.slice(3);
            const expected = spec.perStateFields.map(field => {
                const definition = field as FieldLike & { tooltip?: string };
                return definition.name
                    ? {
                          name: `stateEditor:${definition.name}`,
                          type: 'custom',
                          label: definition.label,
                          tooltip: definition.tooltip,
                          noBinding: true,
                      }
                    : { name: undefined, label: '', component: definition.component };
            });

            expect(
                detail.map(field =>
                    field.name
                        ? {
                              name: field.name,
                              type: field.type,
                              label: field.label,
                              tooltip: (field as { tooltip?: string }).tooltip,
                              noBinding: (field as { noBinding?: boolean }).noBinding,
                          }
                        : { name: field.name, label: field.label, component: field.component },
                ),
            ).toEqual(expected);
        },
    );

    it.each(Object.entries(STATE_WIDGETS))('%s: passes its parameters', (name, params) => {
        const spec = specOf(name);
        const expected = stateEditorSpec(params);

        expect(spec.config).toEqual(expected.config);
        expect(fallbacksOf(spec)).toEqual(fallbacksOf(expected));
    });

    it('the Marker-Ebene changes the fallback fields, so the parameter check can tell it apart', () => {
        expect(fallbacksOf(stateEditorSpec({ markerLayer: true }))).not.toEqual(fallbacksOf(stateEditorSpec()));
    });

    it('the panel offers neither ignoreCommonStates nor a second values_count field', () => {
        const offending = ROSTER.flatMap(name =>
            groupsOf(name).flatMap(group =>
                group.fields
                    .filter(
                        field =>
                            field.name === 'ignoreCommonStates' ||
                            (field.name === 'values_count' && group.name !== 'values'),
                    )
                    .map(field => `${name}.${group.name}.${field.name}`),
            ),
        );
        expect(offending).toEqual([]);
    });
});

describe('the parameters at work', () => {
    it('Light2 shows the group only in the button mode ("Switch (UI)")', () => {
        const hidden = valuesGroupOf('Light2CollectionWidget')?.hidden as Predicate;

        expect(hidden({ colorLightButton: false })).toBe(true);
        expect(hidden({})).toBe(true);
        expect(hidden({ colorLightButton: true })).toBe(false);
        expect(
            Object.keys(STATE_WIDGETS).filter(
                name => name !== 'Light2CollectionWidget' && valuesGroupOf(name)?.hidden !== undefined,
            ),
        ).toEqual([]);
    });

    it("the list waits for the OID object of the widget's OID property", () => {
        const listHidden = (name: string): Predicate => valuesGroupOf(name)?.fields[1].hidden as Predicate;

        expect(listHidden('StateCollectionWidget')({})).toBe(true);
        expect(listHidden('StateCollectionWidget')({ oidObject: { type: 'number' } })).toBe(false);
        expect(listHidden('Light2CollectionWidget')({ oidObject: { type: 'boolean' } })).toBe(true);
        expect(listHidden('Light2CollectionWidget')({ colorLightSwitchOidObject: { type: 'boolean' } })).toBe(false);
    });

    it('the Gewählte Zeile row waits for a row', () => {
        const headerHidden = valuesGroupOf('StateCollectionWidget')?.fields[2].hidden as Predicate;

        expect(headerHidden({ oidObject: { type: 'number' }, ignoreCommonStates: false, values_count: 0 })).toBe(true);
        expect(headerHidden({ oidObject: { type: 'number' }, ignoreCommonStates: false, values_count: 1 })).toBe(false);
    });
});
