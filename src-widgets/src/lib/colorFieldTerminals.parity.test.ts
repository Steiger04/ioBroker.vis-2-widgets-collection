/**
 * Parity test: every contract colour field declares a terminal (ADR-0004, Chrome-Slots addendum).
 *
 * @module lib/colorFieldTerminals.parity.test
 * @remarks
 * A colour field without a terminal is almost always a field whose editor swatch shows a
 * different colour than the widget renders (kern-chrome-review K1: Button-Group separator,
 * table lines, Radio "unchecked"). This invariant makes that loud: every contract colour
 * field of every registered widget declares a `terminal`, or it is listed in
 * {@link EXCEPTIONS} with the reason why no single terminal describes its runtime.
 *
 * Scope — the "contract colour fields": every attribute field whose editor is the
 * `ContractColorField`, i.e. every product of `createColorField` (and of
 * `createColorFields` / `createSliderColorField`, which delegate to it). They are recognised
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

/**
 * Contract colour fields that legitimately declare no terminal, keyed `Widget.field`.
 * Each reason says why no single terminal describes the runtime when the field is unset.
 * An entry that stops matching a terminal-less colour field fails the stale check below.
 */
const EXCEPTIONS: Record<string, string> = {
    'SwitchCollectionWidget.trackColor':
        'unset means the MUI Switch default; the track colour depends on the switch state, no single terminal',
};

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

const colorFieldsOf = (widget: WidgetName, info: RxWidgetInfo): ColorField[] => {
    const byKey = new Map<string, ColorField>();
    // A field list can appear in more than one group (e.g. common + per-state); one entry per name.
    for (const group of info.visAttrs ?? []) {
        for (const field of (group.fields ?? []) as FieldLike[]) {
            if (isPickerField(field)) {
                const key = `${widget}.${field.name}`;
                byKey.set(key, { key, widget, terminal: field.terminal });
            }
        }
    }
    return [...byKey.values()];
};

let scanned: ColorField[] = [];

beforeAll(async () => {
    const perWidget = await Promise.all(
        widgets.map(async name => {
            const mod = (await import(`../${name}/${name}.tsx`)) as {
                default: { getWidgetInfo: () => RxWidgetInfo };
            };
            return colorFieldsOf(name, mod.default.getWidgetInfo());
        }),
    );
    scanned = perWidget.flat();
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

    it.each(widgets)('%s: every colour field declares a terminal or is a listed exception', name => {
        const missing = scanned
            .filter(field => field.widget === name && field.terminal === undefined && !(field.key in EXCEPTIONS))
            .map(field => field.key);
        expect(missing, 'declare a terminal, or add the field to EXCEPTIONS with a reason').toEqual([]);
    });

    it('every exception still names a colour field without a terminal', () => {
        const terminalLess = new Set(scanned.filter(field => field.terminal === undefined).map(field => field.key));
        const stale = Object.keys(EXCEPTIONS).filter(key => !terminalLess.has(key));
        expect(stale, 'remove the stale EXCEPTIONS entries').toEqual([]);
    });
});
