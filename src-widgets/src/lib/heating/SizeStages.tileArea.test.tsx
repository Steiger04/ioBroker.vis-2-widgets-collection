/**
 * The area the size-stage module hands a type's tile (ADR-0122 Nr. 5, Nachtrag K3).
 *
 * @module lib/heating/SizeStages.tileArea.test
 * @remarks
 * The tile hull keeps its own measures: a type fills its tile in the box below the hull's head row
 * and the gap under it, computed (no second measurement), and learns the gaps the hull sets between
 * its parts. The hull's drawn sizes at the standard spacing: the head row 20 px, 4 px between the
 * rows, 6 px between a control and the main value.
 */
import { describe, expect, it } from 'vitest';

import type { FC } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
} from '../testing/collectionScene';
import CollectionBase from '../../components/CollectionBase';
import useData from '../../hooks/useData';
import SizeStages, { type TileArea } from './SizeStages';
import type { MeasuredBox } from './stageRule';

installInertResizeObserver();

const mountBody = testScopedMount();

/** A stand-in type that is always Mini and records the area its tile gets. */
const standIn = (areas: TileArea[]): FC =>
    function StandInBody() {
        const { data } = useData('');
        return (
            <CollectionBase
                data={data}
                cornerIcon={false}
            >
                <SizeStages
                    rule={() => 'mini'}
                    data={{}}
                    ansicht="voll"
                    renderStage={() => null}
                    renderTile={area => {
                        areas.push(area);
                        return { main: <span data-stand-in="main">21°</span> };
                    }}
                    name="Bad"
                    typeName="Raumthermostat"
                    status={{ tone: 'neutral' }}
                    fullSize={{ width: 420, height: 700 }}
                />
            </CollectionBase>
        );
    };

/** The area the tile got for a Content-Box. */
const areaFor = (box: MeasuredBox): TileArea | undefined => {
    const areas: TileArea[] = [];
    mountBody(
        standIn(areas),
        withContentBox(collectionScene('tile-area-test', { noHeader: true, noFooter: true }, undefined), box),
    );
    return areas.at(-1);
};

describe('SizeStages: the area of the tile content', () => {
    it.each([
        // 66 − 20 − 4 = 42.
        ['a tile-sized box', { width: 156, height: 66 }, { width: 156, height: 42 }],
        ['a large tile', { width: 260, height: 140 }, { width: 260, height: 116 }],
    ])('is the box minus the head row and its gap for %s', (_case, box, rest) => {
        expect(areaFor(box)).toEqual({ ...rest, rowGap: 4, controlGap: 6 });
    });

    it('never goes below nothing in a box lower than the head', () => {
        expect(areaFor({ width: 100, height: 10 })).toMatchObject({ width: 100, height: 0 });
    });
});
