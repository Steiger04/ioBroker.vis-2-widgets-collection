/**
 * The area the size-stage module hands a type's tile (ADR-0122 Nr. 5, Nachtrag K3).
 *
 * @module lib/heating/SizeStages.tileArea.test
 * @remarks
 * The tile hull keeps its own measures: a type fills its tile in the box below the hull's head row
 * and the gap under it, computed (no second measurement), and learns the gaps the hull sets between
 * its parts. The hull's drawn sizes follow the theme it draws in: the head row is a `body2` line
 * (at least the 16 px open symbol), the gaps are 0.5 and 0.75 spacing units — in the standard theme
 * 20 px, 4 px between the rows and 6 px between a control and the main value. With CSS variables on
 * (Theme Studio), the spacing is the variable's value in the theme.
 */
import { describe, expect, it } from 'vitest';

import { createTheme, ThemeProvider, type ThemeOptions } from '@mui/material';
import type { FC, ReactElement } from 'react';

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

/** A stand-in type that is always Mini and records the area its tile gets, in a theme when given. */
const standIn = (areas: TileArea[], themeOptions?: ThemeOptions, inset: unknown = 0): FC =>
    function StandInBody() {
        const { data } = useData('');
        const themed = (node: ReactElement): ReactElement =>
            themeOptions ? <ThemeProvider theme={createTheme(themeOptions)}>{node}</ThemeProvider> : node;
        return (
            <CollectionBase
                data={data}
                cornerIcon={false}
            >
                {themed(
                    <SizeStages
                        rule={() => 'mini'}
                        data={{}}
                        ansicht="voll"
                        inset={inset}
                        renderStage={() => null}
                        renderTile={area => {
                            areas.push(area);
                            return { main: <span data-stand-in="main">21°</span> };
                        }}
                        name="Bad"
                        typeName="Raumthermostat"
                        status={{ tone: 'neutral' }}
                        fullSize={{ width: 420, height: 700 }}
                    />,
                )}
            </CollectionBase>
        );
    };

/** The area the tile got for a Content-Box. */
const areaFor = (box: MeasuredBox, themeOptions?: ThemeOptions, inset: unknown = 0): TileArea | undefined => {
    const areas: TileArea[] = [];
    mountBody(
        standIn(areas, themeOptions, inset),
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
        expect(areaFor(box)).toEqual({ ...rest, head: 20, rowGap: 4, controlGap: 6 });
    });

    it('takes the measures of the standard theme: head row 20 px, gaps 4 and 6 px', () => {
        expect(areaFor({ width: 260, height: 140 }, {})).toEqual({
            width: 260,
            height: 116,
            head: 20,
            rowGap: 4,
            controlGap: 6,
        });
    });

    it("follows the theme's spacing: 16 px doubles both gaps", () => {
        // 140 − 20 − 8 = 112.
        expect(areaFor({ width: 260, height: 140 }, { spacing: 16 })).toEqual({
            width: 260,
            height: 112,
            head: 20,
            rowGap: 8,
            controlGap: 12,
        });
    });

    it("follows the theme's spacing with CSS variables on (Theme Studio's switch)", () => {
        // The provider's theme answers `calc(0.5 * var(--vis2c-spacing))`; 140 − 20 − 8 = 112.
        expect(areaFor({ width: 260, height: 140 }, { spacing: 16, cssVariables: { cssVarPrefix: 'vis2c' } })).toEqual({
            width: 260,
            height: 112,
            head: 20,
            rowGap: 8,
            controlGap: 12,
        });
    });

    it('reads a spacing in rem with CSS variables on', () => {
        // 0.75 rem = 12 px: gaps 6 and 9 px; 140 − 20 − 6 = 114.
        expect(areaFor({ width: 260, height: 140 }, { spacing: '0.75rem', cssVariables: true })).toEqual({
            width: 260,
            height: 114,
            head: 20,
            rowGap: 6,
            controlGap: 9,
        });
    });

    it("follows the theme's type size: the head row is one body2 line", () => {
        // body2 at a base size of 21 px: 21 px × 1.43 ≈ 30 px; 140 − 30 − 4 = 106.
        expect(areaFor({ width: 260, height: 140 }, { typography: { fontSize: 21 } })).toEqual({
            width: 260,
            height: 106,
            head: 30,
            rowGap: 4,
            controlGap: 6,
        });
    });

    it('never goes below nothing in a box lower than the head', () => {
        expect(areaFor({ width: 100, height: 10 })).toMatchObject({ width: 100, height: 0 });
    });
});

describe('SizeStages: the tile area inside half the Inhaltsabstand (ADR-0122 Nachtrag 2026-11-27)', () => {
    it('takes half the Inhaltsabstand off every side before the head row: 2 units = 8 px a side', () => {
        // 260 − 2 × 8 = 244; 140 − 2 × 8 − 20 − 4 = 100.
        expect(areaFor({ width: 260, height: 140 }, undefined, 2)).toEqual({
            width: 244,
            height: 100,
            head: 20,
            rowGap: 4,
            controlGap: 6,
        });
    });

    it("follows the theme's spacing: 1 unit of 16 px is 8 px a side", () => {
        // 260 − 16 = 244; 140 − 16 − 20 − 8 = 96 (the row gap doubles as well).
        expect(areaFor({ width: 260, height: 140 }, { spacing: 16 }, 1)).toEqual({
            width: 244,
            height: 96,
            head: 20,
            rowGap: 8,
            controlGap: 12,
        });
    });
});
