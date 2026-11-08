/**
 * useHtmlValue — the value text of Input, State and Checkbox.
 *
 * @module hooks/useHtmlValue.test
 * @remarks
 * The Einheit has one source, the bound object's copy (`oidObject.unit`, ADR-0109 Nr. 12). The root
 * `unit` field only feeds that copy, so it never reaches the text itself. The precedence
 * alias → row value → raw value is the hook's other half.
 */
import { afterEach, describe, expect, it } from 'vitest';
import { act, createElement, type FC } from 'react';
import { createRoot, type Root } from 'react-dom/client';

import useHtmlValue from './useHtmlValue';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

type HookArgs = Parameters<typeof useHtmlValue>;

let root: Root | undefined;

/** Runs the hook once and returns what it answered. */
const htmlValue = (oidValue: HookArgs[0], widgetData?: Record<string, unknown>, data?: HookArgs[2]): unknown => {
    let answer: unknown;
    const widget = widgetData ? ({ data: widgetData } as unknown as HookArgs[1]) : undefined;
    const Probe: FC = () => {
        answer = useHtmlValue(oidValue, widget, data);
        return null;
    };

    act(() => {
        root = createRoot(document.createElement('div'));
        root.render(createElement(Probe));
    });

    return answer;
};

afterEach(() => {
    act(() => root?.unmount());
    root = undefined;
});

const WITH_UNIT = { oidObject: { unit: '°C' } };

describe('useHtmlValue — the Einheit', () => {
    it.each([
        { what: 'a number', value: 21, text: '21°C' },
        { what: 'a zero', value: 0, text: '0°C' },
        { what: 'a string', value: 'warm', text: 'warm°C' },
        { what: 'a false', value: false, text: 'false°C' },
    ])('appends the object unit to $what, with an empty root field', ({ value, text }) => {
        expect(htmlValue(value, { ...WITH_UNIT, unit: '' })).toBe(text);
    });

    it('appends the object unit when the widget has no root field at all (stored widgets)', () => {
        expect(htmlValue(21, WITH_UNIT)).toBe('21°C');
    });

    it('prefers the object copy over a root field that says otherwise', () => {
        expect(htmlValue(21, { oidObject: { unit: '°C' }, unit: 'kWh' })).toBe('21°C');
    });

    it.each([
        { what: 'an emptied copy', widgetData: { oidObject: { unit: '' } } },
        { what: 'a copy without a unit', widgetData: { oidObject: {} } },
        { what: 'no copy', widgetData: {} },
        { what: 'a root field alone', widgetData: { unit: 'kWh' } },
    ])('leaves the raw value for $what', ({ widgetData }) => {
        expect(htmlValue(21, widgetData)).toBe(21);
    });

    it('shows no lone unit for an empty string, like the footer', () => {
        expect(htmlValue('', WITH_UNIT)).toBe('');
    });

    it('leaves the raw value without a widget', () => {
        expect(htmlValue(21)).toBe(21);
    });
});

describe('useHtmlValue — precedence', () => {
    it('lets the alias win, without a unit', () => {
        expect(htmlValue(21, WITH_UNIT, { alias: 'warm', value: '21 °C' })).toBe('warm');
    });

    it('lets the row value win as it is: the row resolver has already added the unit', () => {
        expect(htmlValue(21, WITH_UNIT, { value: '21 kWh' })).toBe('21 kWh');
    });

    it('falls through an empty alias and an empty row value to the raw value', () => {
        expect(htmlValue(21, WITH_UNIT, { alias: '', value: '' })).toBe('21°C');
    });

    it.each([{ value: undefined }, { value: null }])('has nothing to show for $value', ({ value }) => {
        expect(htmlValue(value, WITH_UNIT)).toBeUndefined();
    });
});
