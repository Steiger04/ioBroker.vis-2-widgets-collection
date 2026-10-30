/**
 * useData — the Feldnummer behind each resolved state.
 *
 * @module hooks/useData/useData.hook.test
 * @remarks
 * Pins the state identity across a blank value row (CONTEXT.md "Feldnummer"): useData
 * skips blank `value{i}` rows, so a state's Feldnummer (the suffix of its field row,
 * which keys its style resolution) and its position in `states` diverge after a gap.
 * Mounted on the real CollectionProvider over a preview scene (the Select/ButtonGroup
 * DOM-test pattern), so the style resolution runs exactly as inside a widget.
 */
import type { FC } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { collectionScene, mountCollectionBody, type MountedCollectionBody } from '../../lib/testing/collectionScene';
import useData from './useData';
import type { UseDataResult } from './types';
import type { PreviewScene } from '../../preview/types';

const OID = 'demo.0.mode';

/** Text colour configured on the blank row — it must never reach a state. */
const BLANK_ROW_COLOR = '#00aa00';
/** Text colour of the row the status matches. */
const MATCHED_ROW_COLOR = '#0000aa';

/** Three authored rows, the middle one blank: field 1 'a', field 2 '' (styled, no value), field 3 'c'. */
const gapRows = {
    values_count: 3,
    value1: 'a',
    value2: '',
    textColor2: BLANK_ROW_COLOR,
    value3: 'c',
    textColor3: MATCHED_ROW_COLOR,
};

const scene = (data: Record<string, unknown>, status: unknown): PreviewScene =>
    collectionScene('use-data-test', { oid: OID, oidObject: { _id: OID, type: 'string' }, ...data }, status);

const mounted: MountedCollectionBody[] = [];

/** Mounts `useData('oid')` inside the real provider and returns its result. */
const resolve = (data: Record<string, unknown>, status: unknown): UseDataResult => {
    const captured: { current?: UseDataResult } = {};

    const Probe: FC = () => {
        captured.current = useData('oid');
        return null;
    };

    mounted.push(mountCollectionBody(Probe, scene(data, status)));

    if (!captured.current) {
        throw new Error('useData did not render');
    }
    return captured.current;
};

describe('useData — Feldnummer across a blank value row', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    it('numbers each resolved state by its field row — the blank row leaves a gap', () => {
        const { states } = resolve(gapRows, 'c');

        expect(states.map(state => [state.value, state.fieldNumber])).toEqual([
            ['a', 1],
            ['c', 3],
        ]);
    });

    it('resolves the active state by its Feldnummer, not by its list position', () => {
        const { activeFieldNumber, data } = resolve(gapRows, 'c');

        expect({ activeFieldNumber, textColor: data.textColor }).toEqual({
            activeFieldNumber: 3,
            textColor: MATCHED_ROW_COLOR,
        });
    });

    it('reports the active list position for consumers that index the state list', () => {
        const { activePosition } = resolve(gapRows, 'c');

        expect(activePosition).toBe(1);
    });

    it('reports neither number while no state matches the status', () => {
        const { activeFieldNumber, activePosition } = resolve(gapRows, 'x');

        expect([activeFieldNumber, activePosition]).toEqual([undefined, undefined]);
    });
});
