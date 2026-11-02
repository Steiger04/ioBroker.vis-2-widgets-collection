/**
 * PresetCards — the card face stays readable on the chrome theme.
 *
 * @module ThemeConfigWizard/PresetCards.test
 * @remarks
 * A card is a native `<button>`: without an explicit colour and font it falls back to the
 * browser's button defaults (black system text), unreadable on the dark chrome theme.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { createElement, type FC } from 'react';
import { ThemeProvider } from '@mui/material';

import { createChromeTheme } from '../lib/theme/chromeTheme';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import PresetCards from './PresetCards';

let handle: RenderComponentHandle<object> | null = null;

afterEach(() => {
    handle?.unmount();
    handle = null;
});

/** The cards on the dark chrome theme. */
const DarkCards: FC = () =>
    createElement(
        ThemeProvider,
        { theme: createChromeTheme('dark') },
        createElement(PresetCards, { theme: {}, onApply: () => {} }),
    );

/** A probe painted in the chrome theme's primary text colour, for comparison. */
const textColourOfTheme = (): string => {
    const probe = document.createElement('span');
    probe.style.color = createChromeTheme('dark').palette.text.primary;
    document.body.appendChild(probe);
    const colour = getComputedStyle(probe).color;
    probe.remove();
    return colour;
};

describe('PresetCards', () => {
    it('paints the card text in the theme text colour and the inherited font, not the button defaults', () => {
        handle = renderComponent<object>(DarkCards, {});
        const card = handle.container.querySelector<HTMLButtonElement>('button[aria-pressed]');
        expect(card).not.toBeNull();
        const style = getComputedStyle(card!);
        expect(style.color).toBe(textColourOfTheme());
        expect(style.font).toBe('inherit');
    });
});
