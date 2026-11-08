/**
 * Delay and sample interval in the widgets' field lists (ADR-0110, decision 6).
 *
 * @module lib/delayFields.parity.test
 * @remarks
 * Introspects `getWidgetInfo()` like `stateEditorFields.parity.test.ts` (same mocks: the vis-2
 * runtime base, the widget bodies and the color fields contribute no field) and runs isolated for
 * its own module registry (`DOM_TS_TESTS`). The fields are judged as vis-2 judges them
 * (`Widget.checkFunction`): a predicate or the source of an expression over the raw widget data.
 */
import { beforeAll, describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

/** Every widget using `delayFields`, with the render body it imports (mocked). */
const BODIES: Record<string, string> = {
    StateCollectionWidget: 'StateCollection',
    SliderCollectionWidget: 'SliderCollection',
    SelectCollectionWidget: 'SelectCollection',
    CheckboxCollectionWidget: 'CheckboxCollection',
    RadioGroupCollectionWidget: 'RadioGroupCollection',
    ButtonGroupCollectionWidget: 'ButtonGroupCollection',
    Light2CollectionWidget: 'Light2Collection',
    SwitchCollectionWidget: 'SwitchCollection',
    InputCollectionWidget: 'InputCollection',
};
for (const [name, body] of Object.entries(BODIES)) {
    vi.doMock(`../${name}/${body}`, () => ({ default: () => null }));
}

type Data = Record<string, unknown>;

interface FieldLike {
    name?: string;
    type?: string;
    hidden?: unknown;
}

const infos = new Map<string, RxWidgetInfo>();

beforeAll(async () => {
    for (const name of Object.keys(BODIES)) {
        const mod = (await import(`../${name}/${name}.tsx`)) as { default: { getWidgetInfo: () => RxWidgetInfo } };
        infos.set(name, mod.default.getWidgetInfo());
    }
}, 60_000);

/** The widget's block of `delayFields`: the divider directly above `sampleInterval` belongs to it. */
const delayBlockOf = (
    name: string,
): Record<'divider' | 'sampleInterval' | 'sampleIntervalValue' | 'delay', FieldLike> => {
    const fields = (infos.get(name)?.visAttrs ?? []).flatMap(group => group.fields as FieldLike[]);
    const start = fields.findIndex(field => field.name === 'sampleInterval');
    return {
        divider: fields[start - 1],
        sampleInterval: fields[start],
        sampleIntervalValue: fields.find(field => field.name === 'sampleIntervalValue')!,
        delay: fields.find(field => field.name === 'delay')!,
    };
};

const hiddenOf = (field: FieldLike, data: Data): boolean => {
    const { hidden } = field;
    if (typeof hidden === 'function') {
        return Boolean((hidden as (data: Data) => unknown)(data));
    }
    return typeof hidden === 'string' ? Boolean(new Function('data', `return ${hidden};`)(data)) : Boolean(hidden);
};

const PUSH_BUTTON: Data = {
    oidObject: { type: 'string' },
    values_count: 2,
    value1: 'a',
    value2: 'b',
    onlyStates: true,
    statePushButton: true,
};

const NOT_ACTIVE: [string, Data][] = [
    ['no states, no option set', {}],
    ['the switch off', { ...PUSH_BUTTON, statePushButton: false }],
    ['onlyStates off, the switch left on', { ...PUSH_BUTTON, onlyStates: false }],
    ['a second row without a value, the switch left on', { ...PUSH_BUTTON, value2: ' ' }],
    ['a third row with a value, the switch left on', { ...PUSH_BUTTON, values_count: 3, value3: 'c' }],
];

describe('delayFields in the State widget — ticket 10', () => {
    const block = (): ReturnType<typeof delayBlockOf> => delayBlockOf('StateCollectionWidget');

    it.each<[string, Data]>([
        ['sampling off', PUSH_BUTTON],
        ['sampling on', { ...PUSH_BUTTON, sampleInterval: true }],
        ['stored delay and interval', { ...PUSH_BUTTON, sampleInterval: true, sampleIntervalValue: 500, delay: 900 }],
    ])('hides the whole block in push-button mode: %s', (_label, data) => {
        const { divider, sampleInterval, sampleIntervalValue, delay } = block();

        expect(hiddenOf(sampleInterval, data)).toBe(true);
        expect(hiddenOf(sampleIntervalValue, data)).toBe(true);
        expect(hiddenOf(delay, data)).toBe(true);
        expect(hiddenOf(divider, data)).toBe(true);
    });

    it.each(NOT_ACTIVE)('keeps the rules of the block with %s, sampling off', (_label, data) => {
        const { divider, sampleInterval, sampleIntervalValue, delay } = block();

        expect(hiddenOf(divider, data)).toBe(false);
        expect(hiddenOf(sampleInterval, data)).toBe(false);
        expect(hiddenOf(sampleIntervalValue, data)).toBe(true);
        expect(hiddenOf(delay, data)).toBe(false);
    });

    it.each(NOT_ACTIVE)('keeps the rules of the block with %s, sampling on', (_label, data) => {
        const { divider, sampleInterval, sampleIntervalValue, delay } = block();
        const sampling = { ...data, sampleInterval: true };

        expect(hiddenOf(divider, sampling)).toBe(false);
        expect(hiddenOf(sampleInterval, sampling)).toBe(false);
        expect(hiddenOf(sampleIntervalValue, sampling)).toBe(false);
        expect(hiddenOf(delay, sampling)).toBe(true);
    });
});

describe('delayFields in the other widgets — ticket 10', () => {
    const OTHERS = Object.keys(BODIES).filter(name => name !== 'StateCollectionWidget');

    it.each(OTHERS)('%s keeps the string conditions, whatever the data says', name => {
        const { divider, sampleInterval, sampleIntervalValue, delay } = delayBlockOf(name);

        expect(divider.type).toBe('custom');
        expect(divider.hidden).toBeUndefined();
        expect(sampleInterval.hidden).toBeUndefined();
        expect(sampleIntervalValue.hidden).toBe('!data.sampleInterval');
        expect(delay.hidden).toBe('data.sampleInterval');
    });
});
