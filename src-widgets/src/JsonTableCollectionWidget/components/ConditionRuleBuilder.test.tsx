/**
 * ConditionRuleBuilder — the builder follows the rule it is given.
 *
 * @module widgets/JsonTableCollectionWidget/components/ConditionRuleBuilder.test
 * @remarks
 * Switching to another style rule hands the builder another json-logic rule: the conditions and
 * the value field show that rule, not the edits of the previous one.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act } from 'react';

import ConditionRuleBuilder from './ConditionRuleBuilder';
import { buildFromState, type JsonLogicRule } from '../utils/jsonLogicEngine';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';

type Props = Parameters<typeof ConditionRuleBuilder>[0];

const mounted: RenderComponentHandle<Props>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

/** A number rule `value > operand`. */
const greaterThan = (operand: string): JsonLogicRule | undefined =>
    buildFromState({ mode: 'and', conditions: [{ operator: 'gt', operand }] }, 'number');

const mount = (logic: JsonLogicRule | undefined): RenderComponentHandle<Props> => {
    const handle = renderComponent(ConditionRuleBuilder, { logic, columnType: 'number', onChange: vi.fn() });
    mounted.push(handle);
    return handle;
};

const valueField = (handle: RenderComponentHandle<Props>): HTMLInputElement | null =>
    handle.container.querySelector('input[type="number"]');

/** Types into the value field without leaving it (the field reports on blur only). */
const typeInto = (input: HTMLInputElement, text: string): void => {
    act(() => {
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        setter?.call(input, text);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

describe('ConditionRuleBuilder', () => {
    it('shows the operand of the rule in the value field', () => {
        expect(valueField(mount(greaterThan('5')))?.value).toBe('5');
    });

    it('shows the next rule after a switch, not the previous one', () => {
        const handle = mount(greaterThan('5'));
        handle.rerender({ logic: greaterThan('7'), columnType: 'number', onChange: vi.fn() });
        expect(valueField(handle)?.value).toBe('7');
    });

    it('drops an unsent edit of the value field when the rule switches', () => {
        const handle = mount(greaterThan('5'));
        const input = valueField(handle);
        expect(input).not.toBeNull();
        typeInto(input!, '6');
        expect(valueField(handle)?.value).toBe('6');

        handle.rerender({ logic: greaterThan('7'), columnType: 'number', onChange: vi.fn() });
        expect(valueField(handle)?.value).toBe('7');
    });
});
