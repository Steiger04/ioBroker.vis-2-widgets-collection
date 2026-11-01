/**
 * StateCollection — the wiring, rendered.
 *
 * @module widgets/StateCollectionWidget/StateCollection.test
 * @remarks
 * DOM contract of the body on the preview context (the Checkbox/ButtonGroup pattern):
 * a click toggling/writing through the optimistic setState patch, the dialog mounting
 * for more than two states, the read-only guard disabling the button, and the
 * push-button contract of ADR-0089 — press/release write SYNCHRONOUSLY while the
 * trailing click writes nothing ("release wins" by construction, not by timer race).
 * The decision matrix itself is pinned in stateTrigger.test.ts as pure data.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // The body imports Generic for the dialog title fallback (Generic.t extends
    // window.visRxWidget, undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { act } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    mountCollectionBody,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import StateCollection from './StateCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.state';

const scene = (data: Record<string, unknown> = {}, value: unknown = 0): PreviewScene =>
    collectionScene(
        'state-collection-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'number' },
            onlyStates: true,
            values_count: 2,
            value1: '0',
            alias1: 'OFF',
            value2: '1',
            alias2: 'ON',
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        value,
    );

const mountState = (currentScene: PreviewScene): MountedCollectionBody =>
    mountCollectionBody(StateCollection, currentScene);

/** Applies the nth optimistic updater to an empty state and returns the written OID value. */
const writtenValue = (setState: ReturnType<typeof vi.fn>, call: number): unknown =>
    (
        setState.mock.calls[call][0] as (prev: { values: Record<string, unknown> }) => {
            values: Record<string, unknown>;
        }
    )({ values: {} }).values[`${OID}.val`];

describe('StateCollection wiring', () => {
    it('toggles on click: current Wert[1] writes Wert[2] as the optimistic patch', () => {
        const { container, setState } = mountState(scene());

        act(() => {
            container.querySelector('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(setState).toHaveBeenCalledTimes(1);
        expect(writtenValue(setState, 0)).toBe(1);
        const next = setState.mock.calls[0][0] as (prev: { values: Record<string, unknown> }) => {
            values: Record<string, unknown>;
        };
        expect(next({ values: {} }).values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);
    });

    it('opens the change dialog for more than two states instead of writing', () => {
        const { container, setState } = mountState(scene({ values_count: 3, value3: '2', alias3: 'AUTO' }));

        act(() => {
            container.querySelector('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(setState).not.toHaveBeenCalled();
        // The dialog portals into document.body.
        expect(document.querySelector('.MuiDialog-root')).not.toBeNull();
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: { _id: OID, type: 'number', write: false } }],
    ])('disables the button for %s (Sperre)', (_case, data) => {
        const { container } = mountState(scene(data));

        expect(container.querySelector('button.MuiButton-root.Mui-disabled')).not.toBeNull();
    });

    it('push-button: press/release write synchronously and the trailing click writes nothing', () => {
        const { container, setState } = mountState(scene({ statePushButton: true }));

        const button = container.querySelector('button');
        act(() => {
            button?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
        expect(setState).toHaveBeenCalledTimes(1);
        expect(writtenValue(setState, 0)).toBe(0); // press → Wert[1]

        act(() => {
            button?.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        });
        expect(setState).toHaveBeenCalledTimes(2);
        expect(writtenValue(setState, 1)).toBe(1); // release → Wert[2]

        // The browser fires click after mouseup — it must not write (release wins).
        act(() => {
            button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(setState).toHaveBeenCalledTimes(2);
    });

    it('push-button: a keyboard click (no press/release) is an honest no-op', () => {
        const { container, setState } = mountState(scene({ statePushButton: true }));

        act(() => {
            container.querySelector('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(setState).not.toHaveBeenCalled();
    });
});
