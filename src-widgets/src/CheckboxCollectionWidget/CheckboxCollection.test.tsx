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
 * the pre-extraction DOM by an A/B mount diff, 2026-10-29).
 */
import { describe, expect, it } from 'vitest';
import { createElement, act } from 'react';
import { createRoot } from 'react-dom/client';

import '../lib/testing/testHarness'; // sets IS_REACT_ACT_ENVIRONMENT
import CollectionProvider from '../components/CollectionProvider';
import { buildPreviewContext } from '../preview/mockContext';
import CheckboxCollection from './CheckboxCollection';
import type { PreviewScene } from '../preview/types';

if (typeof (globalThis as { ResizeObserver?: unknown }).ResizeObserver === 'undefined') {
    /* eslint-disable class-methods-use-this -- inert stub, nothing to use `this` for */
    (globalThis as { ResizeObserver?: unknown }).ResizeObserver = class {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
    };
    /* eslint-enable class-methods-use-this */
}

const OID = 'demo.0.switch';

const mountCheckbox = (values: Record<string, unknown>): HTMLDivElement => {
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
                },
                style: {},
            },
            values,
            mode: 'light',
            wrappedContent: true,
        },
    } as unknown as PreviewScene;

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
        root.render(
            createElement(
                CollectionProvider,
                { context: buildPreviewContext(scene) } as never,
                createElement(CheckboxCollection),
            ),
        );
    });
    return container;
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
