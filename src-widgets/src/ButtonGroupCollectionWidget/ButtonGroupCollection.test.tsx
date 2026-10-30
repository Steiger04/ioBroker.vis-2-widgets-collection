/**
 * ButtonGroupCollection — the wiring, rendered.
 *
 * @module widgets/ButtonGroupCollection.test
 * @remarks
 * DOM contract of the renderer on the preview context (the Checkbox pattern):
 * one toggle button per resolved state, the state matching the OID value
 * selected (and given the active treatment — also across a blank state row,
 * where a state's Feldnummer and its list position diverge), a click writing
 * the optimistic patch through setState, and the read-only guard disabling the
 * group. The presentation chrome itself is pinned in chrome.test.ts as pure
 * data — these tests only cover the wiring.
 */
import { describe, expect, it } from 'vitest';
import { act } from 'react';

import { collectionScene, mountCollectionBody, type MountedCollectionBody } from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import ButtonGroupCollection from './ButtonGroupCollection';
import type { PreviewScene } from '../preview/types';

const OID = 'demo.0.mode';

const scene = (data: Record<string, unknown> = {}, status: unknown = 1): PreviewScene =>
    collectionScene(
        'button-group-test',
        {
            oid: OID,
            oidObject: { _id: OID, type: 'number' },
            values_count: 2,
            value1: '0',
            alias1: 'OFF',
            value2: '1',
            alias2: 'ON',
            ...data,
        },
        status,
    );

const mountGroup = (currentScene: PreviewScene): MountedCollectionBody =>
    mountCollectionBody(ButtonGroupCollection, currentScene);

describe('ButtonGroupCollection wiring', () => {
    it('renders one toggle button per state, labelled by the alias', () => {
        const { container } = mountGroup(scene());

        const buttons = container.querySelectorAll('.MuiToggleButton-root');
        expect(buttons.length).toBe(2);
        expect(container.textContent).toContain('OFF');
        expect(container.textContent).toContain('ON');
    });

    it('selects the state matching the OID value', () => {
        const { container } = mountGroup(scene());

        const selected = container.querySelector('.MuiToggleButton-root.Mui-selected');
        expect(selected?.textContent).toContain('ON');
    });

    it('gives the active treatment to the button of the matching state across a blank state row', () => {
        // value2 blank: the buttons are OFF (field 1) and BOOST (field 3) — BOOST sits at
        // list position 1. Value 2 matches BOOST.
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const { container } = mountGroup(
            scene(
                {
                    values_count: 3,
                    value2: '',
                    value3: '2',
                    alias3: 'BOOST',
                    background1: gradient,
                    background3: gradient,
                },
                2,
            ),
        );

        // A gradient button's active treatment is the opacity dim (Button-Group-Chrome).
        const dimmed = Array.from(container.querySelectorAll<HTMLElement>('.MuiToggleButton-root'))
            .filter(button => getComputedStyle(button).filter === 'opacity(80%)')
            .map(button => button.textContent);
        expect(dimmed).toEqual(['BOOST']);
    });

    it('writes the clicked state value as the optimistic patch (val + lc sentinel)', () => {
        const { container, setState } = mountGroup(scene());

        const [offButton] = container.querySelectorAll('.MuiToggleButton-root');
        act(() => {
            offButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(setState).toHaveBeenCalledTimes(1);
        const updater = setState.mock.calls[0][0] as (prev: { values: Record<string, unknown> }) => {
            values: Record<string, unknown>;
        };
        const next = updater({ values: {} });
        expect(next.values[`${OID}.val`]).toBe(0);
        expect(next.values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);
    });

    it('disables the buttons for a read-only state (write === false)', () => {
        const { container } = mountGroup(scene({ write: false }));

        // MUI disables the toggle buttons via context; the group root div carries no class.
        expect(container.querySelector('.MuiToggleButton-root.Mui-disabled')).not.toBeNull();
    });
});
