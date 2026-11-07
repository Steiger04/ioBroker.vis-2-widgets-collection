/**
 * useOidValue — the subscribed value of an OID field, in the render that brings it.
 *
 * @module hooks/useOidValue.test
 * @remarks
 * The hook reads the value through the context's `getPropertyValue`. A render after a value
 * change must already see the new value: a body that builds from it (the gauge's canvas options)
 * would otherwise build twice per change — once with the old value next to the new context data,
 * once more with the new value.
 */
import { afterEach, describe, expect, it } from 'vitest';
import { act, createElement, type FC } from 'react';
import { createRoot, type Root } from 'react-dom/client';

import useOidValue from './useOidValue';
import { CollectionContext } from '../components/CollectionProvider';
import type { AllCollectionContextProps } from '../types';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

/** Every value the probe saw, one entry per render. */
let seen: unknown[] = [];

const Probe: FC<{ oid: string }> = ({ oid }) => {
    seen.push(useOidValue(oid));
    return null;
};

/** A context whose `getPropertyValue` answers from the given values — fresh per render, like Generic's. */
const contextFor = (values: Record<string, unknown>): AllCollectionContextProps =>
    ({ getPropertyValue: (name: string) => values[name] }) as unknown as AllCollectionContextProps;

let root: Root | undefined;

const render = (values: Record<string, unknown>, oid = 'oid'): void => {
    act(() => {
        if (!root) {
            root = createRoot(document.createElement('div'));
        }
        root.render(
            createElement(CollectionContext.Provider, { value: contextFor(values) }, createElement(Probe, { oid })),
        );
    });
};

afterEach(() => {
    act(() => root?.unmount());
    root = undefined;
    seen = [];
});

describe('useOidValue', () => {
    it('returns the new value in the render that brings it — no render with the old one', () => {
        render({ oid: 1 });
        seen = [];

        render({ oid: 2 });

        expect(seen).toStrictEqual([2]);
    });

    it('returns undefined for an unset or unselected OID field', () => {
        render({ oid: 1, nothing_selected: 5 }, '');
        render({ oid: 1, nothing_selected: 5 }, 'nothing_selected');

        expect(seen).toStrictEqual([undefined, undefined]);
    });
});
