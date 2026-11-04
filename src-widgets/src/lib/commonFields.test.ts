/**
 * Shared editor fields: the content background swatch shows what the card paints (ADR-0004).
 *
 * @module lib/commonFields.test
 * @remarks
 * Without a value the card's inner paper (CollectionBase, BASE-PAPER-1) paints MUI's Paper
 * default `palette.background.paper`, so the `background` contract — and with it the per-state
 * `background{n}` (the same field in the `values` group) and `backgroundActive` — names
 * `paper`. Under `noCard` / embedded the runtime paints `transparent` instead: a documented
 * divergence (ADR-0004, ticket 12), pinned in `components/CollectionBase.test.tsx`.
 * Expected colours are the stock MUI light and dark paper: `#fff` / `#121212`.
 */
import { describe, expect, it, vi } from 'vitest';

import { createTheme } from '@mui/material/styles';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { resolveEffectiveColor } from './helper/resolveEffectiveColor';

// The field list renders CollectionDivider / ContractColorField, which pull Generic (extends
// window.visRxWidget, absent outside vis-2). The tests read only the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import commonFields from './commonFields';

const LIGHT = createTheme({ palette: { mode: 'light' } });
const DARK = createTheme({ palette: { mode: 'dark' } });

/** The field `name` of the shared list built for `groupName`. */
const fieldOf = (groupName: string, name: string): ExtendedField =>
    commonFields({ groupName, allFields: false }).find(
        field => (field as { name?: string }).name === name,
    ) as ExtendedField;

describe('commonFields — the content background swatch shows the card paper', () => {
    it.each([
        ['background', ''],
        ['backgroundActive', 'Active'],
    ])('%s without a value shows the theme paper, light and dark', (name, groupName) => {
        const field = fieldOf(groupName, name);

        expect(resolveEffectiveColor(field, {}, LIGHT)).toBe('#fff');
        expect(resolveEffectiveColor(field, {}, DARK)).toBe('#121212');
    });

    it('an explicit background stays as set', () => {
        expect(resolveEffectiveColor(fieldOf('', 'background'), { background: '#336699' }, LIGHT)).toBe('#336699');
    });
});
