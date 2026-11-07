/**
 * Parity test: every contract colour field declares a terminal (ADR-0004, Chrome-Slots addendum
 * and addendum 2026-11-04).
 *
 * @module lib/colorFieldTerminals.parity.test
 * @remarks
 * A colour field without a terminal is a field whose editor swatch stays empty or shows a
 * different colour than the widget renders (kern-chrome-review K1: Button-Group separator,
 * table lines, Radio "unchecked"). This invariant makes that loud, without exception: every
 * contract colour field of every registered widget declares a `terminal`, so a new colour
 * field without one fails here and no empty swatch can return.
 *
 * Scope — the "contract colour fields": every attribute field whose editor is the
 * `ContractColorField`, i.e. every product of `createColorField` (and of
 * `createColorFields`, which delegates to it). They are recognised
 * by what their `component` renders, NOT by their contract properties: `fallbackFields`,
 * `noGradient`, `terminal` and `inheritTextStyle` are all optional, and a bare
 * `createColorField({ name, label })` — the very case this test exists for — carries none.
 *
 * Deliberately NOT in scope: the Schlichte Farbfelder (`createPlainColorField`, ADR-0102 —
 * Gauge class C, `dialogCloseButtonColor`, `colorLightBorderColor`, `markerIconColor`). They
 * have no cascade — their swatch shows exactly the stored value — so there is no swatch that
 * could disagree with the runtime. Their editor is a module of its own (`PlainColorField`,
 * mocked separately below), so the scan does not recognise them. Configurator-internal pickers
 * (the ECharts editor) are not attribute fields either.
 *
 * Second invariant, same scan: the per-state colour fields (`iconColor{n}`, `textColor{n}`,
 * `background{n}`, `frameBackground{n}` — the per-state field list the Zustandseditor of the
 * values group edits each row with, ADR-0104) declare their base field as fallback field, so a
 * state row without a value shows the base colour the widget paints for it (ADR-0004,
 * per-state variants; slider marks: Marker-Ebene first). The list is read from the group's
 * detail fields: each renders its per-state definition (`definition` of the element its
 * component returns); its colour fields count as contract colour fields for the first invariant
 * too.
 *
 * The roster is `widgetsRegistry.widgets`, introspected through each widget's
 * `getWidgetInfo()` like `allowedOidTypes.parity.test.ts` does, and like it runs isolated
 * (`DOM_TS_TESTS` in vitest.config.ts) for its own module registry. Mocked are the vis-2
 * runtime base (`Generic` extends `window.visRxWidget`, absent outside vis-2), the widget
 * bodies and the heavy custom editors — none of them contributes a field; the field lists
 * and `getWidgetInfo()` run for real.
 */
import { beforeAll, describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import { widgets } from '../widgetsRegistry';

type WidgetName = (typeof widgets)[number];

// The picker identity the scan recognises: createColorField's component renders this element.
const { PickerSentinel } = vi.hoisted(() => ({ PickerSentinel: (): null => null }));

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('../components/ContractColorField', () => ({ default: PickerSentinel }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
// Custom editors referenced directly as field components: heavy module chains (TanStack,
// ECharts editor), and called like vis-2 calls a field component they would run hooks.
vi.mock('../JsonTableCollectionWidget/JsonTableColumnEditor', () => ({ default: () => null }));
vi.mock('../EchartsCollectionWidget/EchartsConfigEditor', () => ({ default: () => null }));

/**
 * The render body each widget module imports. Mocked because the bodies contribute no field
 * but pull the whole render chain (MUI, canvas-gauges needs `window`, TanStack, ECharts).
 * Keyed by the registry roster, so a new widget does not compile until it is listed here.
 */
const WIDGET_BODIES: Record<WidgetName, string> = {
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
};
for (const name of widgets) {
    vi.doMock(`../${name}/${WIDGET_BODIES[name]}`, () => ({ default: () => null }));
}

interface FieldLike {
    name?: string;
    type?: string;
    terminal?: string;
    component?: (...args: unknown[]) => unknown;
}

interface ColorField {
    key: string;
    widget: WidgetName;
    terminal: string | undefined;
}

/** Calls a custom field's component the way vis-2 does and checks for the picker element. */
const isPickerField = (field: FieldLike): boolean => {
    if (field.type !== 'custom' || typeof field.component !== 'function') {
        return false;
    }
    const element = field.component(field, {}, () => undefined, {}) as { type?: unknown } | null;
    return element?.type === PickerSentinel;
};

/**
 * The per-state field list of the widget's Zustandseditor: the definition each detail field
 * (`stateEditor:<name>`) renders, read from the element its component returns.
 */
const perStateFieldsOf = (info: RxWidgetInfo): (FieldLike & { fallbackFields?: string[] })[] =>
    (info.visAttrs ?? []).flatMap(group =>
        ((group.fields ?? []) as FieldLike[]).flatMap(field => {
            const definition =
                field.name?.startsWith('stateEditor:') && typeof field.component === 'function'
                    ? (field.component(field, {}, () => undefined, {}) as { props?: { definition?: FieldLike } } | null)
                          ?.props?.definition
                    : undefined;
            return definition ? [definition] : [];
        }),
    );

const colorFieldsOf = (widget: WidgetName, info: RxWidgetInfo): ColorField[] => {
    const byKey = new Map<string, ColorField>();
    // A field list can appear in more than one group (e.g. common + per-state); one entry per name.
    const fieldLists = [...(info.visAttrs ?? []).map(group => group.fields ?? []), perStateFieldsOf(info)];
    for (const fields of fieldLists) {
        for (const field of fields as FieldLike[]) {
            if (isPickerField(field)) {
                const key = `${widget}.${field.name}`;
                byKey.set(key, { key, widget, terminal: field.terminal });
            }
        }
    }
    return [...byKey.values()];
};

/** A per-state colour field of the Zustandseditor, with its declared fallback fields. */
interface StateColorField {
    widget: WidgetName;
    name: string;
    fallbackFields: string[] | undefined;
}

/** The colour fields of the per-state field list the Zustandseditor edits each row with. */
const stateColorFieldsOf = (widget: WidgetName, info: RxWidgetInfo): StateColorField[] =>
    perStateFieldsOf(info)
        .filter(isPickerField)
        .map(field => ({ widget, name: field.name ?? '', fallbackFields: field.fallbackFields }));

let scanned: ColorField[] = [];
let stateScanned: StateColorField[] = [];

beforeAll(async () => {
    const perWidget = await Promise.all(
        widgets.map(async name => {
            const mod = (await import(`../${name}/${name}.tsx`)) as {
                default: { getWidgetInfo: () => RxWidgetInfo };
            };
            const info = mod.default.getWidgetInfo();
            return { fields: colorFieldsOf(name, info), stateFields: stateColorFieldsOf(name, info) };
        }),
    );
    scanned = perWidget.flatMap(entry => entry.fields);
    stateScanned = perWidget.flatMap(entry => entry.stateFields);
    // The first run pays the cold Vite transform of every field module.
}, 60_000);

describe('colour field terminals (every contract colour field declares a terminal)', () => {
    it('recognises the factory colour fields (commonFields on the State widget)', () => {
        const stateFields = scanned.filter(field => field.widget === 'StateCollectionWidget').map(field => field.key);
        expect(stateFields).toEqual(
            expect.arrayContaining([
                'StateCollectionWidget.iconColor',
                'StateCollectionWidget.textColor',
                'StateCollectionWidget.background',
                'StateCollectionWidget.frameBackground',
            ]),
        );
    });

    it('leaves the Schlichte Farbfelder out (no cascade, so no terminal to declare)', () => {
        const keys = new Set(scanned.map(field => field.key));
        for (const key of [
            'GaugeCollectionWidget.gaugeColorBar',
            'DialogCollectionWidget.dialogCloseButtonColor',
            'Light2CollectionWidget.colorLightBorderColor',
            'SliderCollectionWidget.markerIconColor',
        ]) {
            expect(keys.has(key), key).toBe(false);
        }
        // … while the Gauge's contract colour fields are still scanned.
        expect(keys.has('GaugeCollectionWidget.gaugeColorBarProgress')).toBe(true);
    });

    it.each(widgets)('%s: every colour field declares a terminal', name => {
        const missing = scanned
            .filter(field => field.widget === name && field.terminal === undefined)
            .map(field => field.key);
        expect(missing, 'declare a terminal in the field contract').toEqual([]);
    });
});

/** The shared state colour fields (`commonFields`) every per-state row carries. */
const STATE_COLOR_NAMES = ['iconColor', 'textColor', 'background', 'frameBackground'];

describe('per-state colour fields inherit the base field (ADR-0004, per-state variants)', () => {
    it('finds the per-state rows of the ten state widgets', () => {
        const withStates = new Set(
            stateScanned.filter(field => STATE_COLOR_NAMES.includes(field.name)).map(field => field.widget),
        );
        expect([...withStates].sort()).toEqual(
            [
                'ButtonGroupCollectionWidget',
                'CheckboxCollectionWidget',
                'GaugeCollectionWidget',
                'InputCollectionWidget',
                'Light2CollectionWidget',
                'RadioGroupCollectionWidget',
                'SelectCollectionWidget',
                'SliderCollectionWidget',
                'StateCollectionWidget',
                'SwitchCollectionWidget',
            ].sort(),
        );
    });

    it.each(widgets)('%s: every per-state colour field x{n} falls back to its base field x', name => {
        const orphans = stateScanned
            .filter(field => field.widget === name && STATE_COLOR_NAMES.includes(field.name))
            .filter(field => !(field.fallbackFields ?? []).includes(field.name))
            .map(field => field.name);
        expect(orphans, 'declare the base field as fallback (commonFields perState)').toEqual([]);
    });

    it('the slider marks put the Marker-Ebene before the base field', () => {
        const slider = stateScanned.filter(field => field.widget === 'SliderCollectionWidget');
        const fallbacksOf = (name: string): string[] | undefined =>
            slider.find(field => field.name === name)?.fallbackFields;

        expect(fallbacksOf('iconColor')).toEqual(['markerIconColor', 'iconColor']);
        expect(fallbacksOf('textColor')).toEqual(['markerTextColor', 'textColor']);
        expect(fallbacksOf('background')).toEqual(['background']);
        expect(fallbacksOf('frameBackground')).toEqual(['frameBackground']);
    });

    it('only the slider passes a Marker-Ebene', () => {
        const withMarker = stateScanned
            .filter(field => (field.fallbackFields ?? []).some(fallback => fallback.startsWith('marker')))
            .map(field => field.widget);
        expect([...new Set(withMarker)]).toEqual(['SliderCollectionWidget']);
    });
});
