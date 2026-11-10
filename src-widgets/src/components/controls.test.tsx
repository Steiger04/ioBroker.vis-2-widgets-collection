/**
 * controls — the shared caption idiom (ADR-0019) reads quiet in the theme's secondary text colour.
 *
 * @module components/controls.test
 * @remarks
 * The captions set their colour as a palette path on Typography. MUI 9 no longer resolves
 * palette paths in Typography's `color` prop (the system props are gone), so this pins the
 * rendered colour, not the prop.
 */
import { afterEach, describe, expect, it } from 'vitest';
import type { FC, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import { FieldLabel, SectionLabel } from './controls';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';

const SECONDARY = '#123456';
const theme = createTheme({ palette: { text: { secondary: SECONDARY } } });

const Themed: FC<{ children: ReactNode }> = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

let handle: RenderComponentHandle<{ children: ReactNode }> | undefined;
afterEach(() => handle?.unmount());

const colourOf = (text: string): string => {
    const el = Array.from(handle?.container.querySelectorAll<HTMLElement>('.MuiTypography-root') ?? []).find(
        node => node.textContent === text,
    );
    return el ? getComputedStyle(el).color : 'not rendered';
};

describe('controls captions', () => {
    it('renders the field caption in the theme secondary text colour', () => {
        handle = renderComponent<{ children: ReactNode }>(Themed, { children: <FieldLabel>Caption</FieldLabel> });
        expect(colourOf('Caption')).toBe(SECONDARY);
    });

    it('renders the section hint in the theme secondary text colour', () => {
        handle = renderComponent<{ children: ReactNode }>(Themed, {
            children: <SectionLabel hint="Hint">Title</SectionLabel>,
        });
        expect(colourOf('Hint')).toBe(SECONDARY);
    });
});
