/**
 * CheckboxCollection — the label DOM contract, rendered.
 *
 * @module widgets/CheckboxCollection.test
 * @remarks
 * Regression net for the CollectionValueText extraction: MUI's FormControlLabel
 * wraps non-Typography label elements in an extra body1 span
 * (`label.type !== Typography && !disableTypography`) — that span has no
 * flexGrow, squeezes the label out of the root's flex row and shifts the
 * labelPlacement arrangements. disableTypography keeps the label element as
 * the DIRECT flex child; these tests pin that structure (proven equivalent to
 * the pre-extraction DOM by an A/B mount diff, 2026-10-29). The Sperre cases pin
 * the checkbox's `disabled` against the OID binding's `locked`. The icon size
 * cases pin the box-relative width/height, including the base size a matching
 * Zustandszeile inherits. The checked cases pin the boolean pair's rule (`sameStateValue`
 * against `true`, ADR-0105), the toggle cases its write through the Schreibkette.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { act } from 'react';

import {
    installInertResizeObserver,
    mountCollectionBody,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import checkboxFields from '../lib/checkboxFields';
import { readWidgetData } from '../lib/testing/widgetReading';
import CheckboxCollection from './CheckboxCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.switch';

const mountCheckboxBody = (
    values: Record<string, unknown>,
    data: Record<string, unknown> = {},
): MountedCollectionBody => {
    const scene = {
        slug: 'checkbox-test',
        size: { width: 480, height: 160 },
        context: {
            widget: {
                data: {
                    oid: OID,
                    oidObject: { _id: OID, type: 'boolean' },
                    withoutLabel: false,
                    checkboxLabelPlacement: 'end',
                    valueSize: '2rem',
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    values_count: 2,
                    value1: 'true',
                    alias1: '<b>AN</b>',
                    value2: 'false',
                    alias2: '<b>AUS</b>',
                    ...data,
                },
                style: {},
            },
            values,
            mode: 'light',
            wrappedContent: true,
        },
    } as unknown as PreviewScene;

    return mountCollectionBody(CheckboxCollection, scene);
};

const mountCheckbox = (values: Record<string, unknown>, data: Record<string, unknown> = {}): HTMLDivElement =>
    mountCheckboxBody(values, data).container;

describe('CheckboxCollection label DOM contract', () => {
    it('renders the label as the DIRECT flex child of the FormControlLabel root (no MUI body1 wrapper)', () => {
        const container = mountCheckbox({ [`${OID}.val`]: false });

        const root = container.querySelector('.MuiFormControlLabel-root');
        expect(root).not.toBeNull();
        // The extra span MUI would add around a non-Typography label must not exist.
        expect(root?.querySelector('.MuiFormControlLabel-label')).toBeNull();
        // Our value-text div sits directly in the root's flex row.
        const labelDiv = root?.querySelector(':scope > div.MuiTypography-root');
        expect(labelDiv).not.toBeNull();
    });

    it('passes alias HTML through the full-width wrapper (Wert[2] matching false)', () => {
        const container = mountCheckbox({ [`${OID}.val`]: false });

        const wrapper = container.querySelector('.MuiFormControlLabel-root > div > div');
        expect(wrapper?.getAttribute('style')).toBe('text-align: left; display: inline-block; width: 100%;');
        expect(wrapper?.innerHTML).toContain('<b>AUS</b>');
    });

    it('keeps the arrangement for the checked state (Wert[1] alias)', () => {
        const container = mountCheckbox({ [`${OID}.val`]: true });

        const root = container.querySelector('.MuiFormControlLabel-root');
        expect(root?.querySelector('.MuiFormControlLabel-label')).toBeNull();
        expect(root?.querySelector(':scope > div > div')?.innerHTML).toContain('<b>AN</b>');
    });
});

describe('CheckboxCollection icon size', () => {
    const iconBox = (container: HTMLElement): { width: string; height: string } => {
        const img = container.querySelector<HTMLImageElement>('.MuiCheckbox-root img');
        expect(img).not.toBeNull();
        return { width: img!.style.width, height: img!.style.height };
    };

    // The fixture's value `false` matches Zustandszeile 2, so `data` resolves on that row.
    it.each([
        ['no size anywhere: the full box', {}, '100%'],
        ['the base size, inherited by the matching row', { iconSize: 50 }, '50%'],
        ["the matching row's own size before the base", { iconSize: 50, iconSize2: 30 }, '30%'],
        ['the active size before the row and the base', { iconSizeActive: 70, iconSize: 50, iconSize2: 30 }, '70%'],
        ['a size of 0 stays 0', { iconSize: 0 }, '0%'],
    ])('sizes the icon box-relative for %s', (_case, data, expected) => {
        const container = mountCheckbox({ [`${OID}.val`]: false }, data);

        expect(iconBox(container)).toEqual({ width: expected, height: expected });
    });

    it('sizes the icon from the base without a matching row', () => {
        const container = mountCheckbox({ [`${OID}.val`]: false }, { values_count: 0, iconSize: 40 });

        expect(iconBox(container)).toEqual({ width: '40%', height: '40%' });
    });
});

describe('CheckboxCollection checked state (sameStateValue against true)', () => {
    const checkbox = (container: HTMLElement): HTMLInputElement =>
        container.querySelector<HTMLInputElement>('input[type="checkbox"]') as HTMLInputElement;

    it.each([
        ['the boolean true', true, true],
        ['the string "true"', 'true', true],
        ['the boolean false', false, false],
        // Truthy, but not the `true` state: the label resolves the `false` row's alias.
        ['the string "false"', 'false', false],
        ['the number 1', 1, false],
        ['the number 0', 0, false],
    ])('decides checked for %s', (_case, backend, expected) => {
        const container = mountCheckbox({ [`${OID}.val`]: backend });

        expect(checkbox(container).checked).toBe(expected);
    });
});

describe('CheckboxCollection toggle (Schreibkette)', () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it.each([
        ['true', true, false],
        ['false', false, true],
        // The non-boolean "false" shows unchecked, so the toggle turns it on.
        ['the string "false"', 'false', true],
    ])(
        'writes the inverse of checked for the backend value %s (optimistic patch, then the backend write)',
        async (_case, backend, written) => {
            const { container, setState, setValue } = mountCheckboxBody({ [`${OID}.val`]: backend }, { delay: 0 });
            vi.useFakeTimers();

            act(() => {
                container.querySelector<HTMLInputElement>('input[type="checkbox"]')?.click();
            });

            // Optimistic patch: the inverted value plus the own-write sentinel.
            expect(setState).toHaveBeenCalledTimes(1);
            const updater = setState.mock.calls[0][0] as (prev: { values: Record<string, unknown> }) => {
                values: Record<string, unknown>;
            };
            expect(updater({ values: {} }).values).toEqual({
                [`${OID}.val`]: written,
                [`${OID}.lc`]: VALUE_NOT_CHANGED_TIMESTAMP,
            });

            await act(async () => {
                await vi.advanceTimersByTimeAsync(1);
            });
            expect(setValue.mock.calls).toEqual([[OID, written]]);
        },
    );
});

describe('CheckboxCollection Sperre', () => {
    it('leaves the checkbox enabled for a writable bound object', () => {
        const container = mountCheckbox({ [`${OID}.val`]: false });

        expect(container.querySelector<HTMLInputElement>('input[type="checkbox"]')?.disabled).toBe(false);
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: { _id: OID, type: 'boolean', write: false } }],
    ])('disables the checkbox for %s', (_case, data) => {
        const container = mountCheckbox({ [`${OID}.val`]: false }, data);

        expect(container.querySelector<HTMLInputElement>('input[type="checkbox"]')?.disabled).toBe(true);
    });
});

describe('CheckboxCollection value text (Ticket 12)', () => {
    /** The label's text for the value `true`. */
    const labelOf = (data: Record<string, unknown>): string | null | undefined =>
        mountCheckbox({ [`${OID}.val`]: true }, data).querySelector('.MuiFormControlLabel-root > div')?.textContent;

    it('appends the object unit when no row matches', () => {
        const label = labelOf({
            oidObject: { _id: OID, type: 'boolean', unit: 'x' },
            values_count: 0,
            value1: undefined,
            alias1: undefined,
            value2: undefined,
            alias2: undefined,
        });

        expect(label).toBe('truex');
    });

    it('lets the alias of a matching row win over the object unit', () => {
        expect(labelOf({ oidObject: { _id: OID, type: 'boolean', unit: 'x' } })).toBe('AN');
    });

    it('shows the value for an alias of only spaces', () => {
        expect(labelOf({ alias1: '   ' })).toBe('true');
    });

    it('leaves the label empty for a false', () => {
        const container = mountCheckbox({ [`${OID}.val`]: false }, { values_count: 0 });

        expect(container.querySelector('.MuiFormControlLabel-root > div')?.textContent).toBe('');
    });
});

describe('CheckboxCollection label placement', () => {
    // The vis-2 select offers only the four placements: null and '' come from raw data (the
    // assistant) or a binding. The widget reads both like the unset field, its default end
    // (lib/checkboxFields: emptiedReadsUnset); the body is mounted over the data as the widget reads it.
    it.each([
        ['stored as null', null, undefined],
        ['stored empty', '', undefined],
        ['bound to an empty text', '', '{0_userdata.0.placement}'],
    ])('reads a label placement %s like the unset field', (_case, value, binding) => {
        const read = (checkboxLabelPlacement: unknown, stored?: unknown): Record<string, unknown> =>
            readWidgetData(
                checkboxFields(),
                { checkboxLabelPlacement },
                stored === undefined ? undefined : { checkboxLabelPlacement: stored },
            );
        const unset = mountCheckbox({ [`${OID}.val`]: true }, read(undefined)).innerHTML;

        expect(mountCheckbox({ [`${OID}.val`]: true }, read(value, binding)).innerHTML).toBe(unset);
    });
});
