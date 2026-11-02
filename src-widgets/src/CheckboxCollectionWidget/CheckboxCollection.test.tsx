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
 * the checkbox's `disabled` against the OID binding's `locked`.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // CollectionBase translates its hints through Generic, which extends
    // window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { installInertResizeObserver, mountCollectionBody } from '../lib/testing/collectionScene';
import CheckboxCollection from './CheckboxCollection';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.switch';

const mountCheckbox = (values: Record<string, unknown>, data: Record<string, unknown> = {}): HTMLDivElement => {
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

    return mountCollectionBody(CheckboxCollection, scene).container;
};

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
