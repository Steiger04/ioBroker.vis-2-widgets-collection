/**
 * The collection's CSS variables next to the vis-2 editor's own (spec B17).
 *
 * @module lib/theme/cssVariablesCollision.test
 * @remarks
 * The vis-2 editor defines `--mui-palette-*` on `:root`. A collection theme with `cssVariables`
 * goes through the same `ThemeProvider` the canvas widgets use (CollectionProvider), whose
 * stylesheet also targets `:root` — measured before the fix: `:root{color-scheme:light;
 * --mui-palette-primary-main:#ff0000;…}`, inserted after the host rule, so the user theme
 * recoloured the whole editor. The collection therefore emits its own prefix and leaves the
 * host's `color-scheme` alone.
 */
import type React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { afterEach, describe, expect, it } from 'vitest';

import { renderComponent } from '../testing/testHarness';
import { resolveCollectionTheme } from './resolveCollectionTheme';
import type { UserTheme } from './themeTypes';

const HOST_PRIMARY = '#137BF8';
const USER_PRIMARY = '#ff0000';

/** Every `selector { … }` rule of the document's style elements, as `[selector, body]`. */
function cssRules(): Array<[string, string]> {
    const text = Array.from(document.head.querySelectorAll('style'))
        .map(style => style.textContent ?? '')
        .join('\n');
    return text
        .split('}')
        .map(rule => rule.split('{'))
        .filter((parts): parts is [string, string] => parts.length === 2)
        .map(([selector, body]) => [selector.trim(), body.trim()]);
}

/** The value of a custom property / declaration inside a rule body. */
const declared = (body: string, property: string): string | undefined =>
    new RegExp(`(?:^|;)\\s*${property}:\\s*([^;]+)`).exec(body)?.[1]?.trim();

/** `[selector, value]` of every rule declaring `property`. */
const declarations = (property: string): Array<[string, string]> =>
    cssRules().flatMap(([selector, body]): Array<[string, string]> => {
        const value = declared(body, property);
        return value === undefined ? [] : [[selector, value]];
    });

/** Mounts a canvas-like `ThemeProvider` for the user theme next to the host's `:root` variables. */
function mountWithHostVariables(userTheme: UserTheme): void {
    const host = document.createElement('style');
    host.textContent = `:root { --mui-palette-primary-main: ${HOST_PRIMARY}; color-scheme: dark; }`;
    document.head.appendChild(host);
    const theme = resolveCollectionTheme(createTheme(), undefined, {
        palette: { primary: { main: USER_PRIMARY } },
        ...userTheme,
    });
    const Canvas = (): React.JSX.Element => (
        <ThemeProvider theme={theme}>
            <div />
        </ThemeProvider>
    );
    renderComponent(Canvas, {});
}

afterEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
});

describe.each<[string, UserTheme]>([
    ['cssVariables: true', { cssVariables: true }],
    ['an object without prefix', { cssVariables: {} }],
    ['the reserved prefix mui', { cssVariables: { cssVarPrefix: 'mui' } }],
])('collection CSS variables with %s', (_label, userTheme) => {
    it('leave the host --mui-palette-* variables as the only ones', () => {
        mountWithHostVariables(userTheme);
        expect(declarations('--mui-palette-primary-main')).toEqual([[':root', HOST_PRIMARY]]);
    });

    it('expose the theme under the vis2c prefix', () => {
        mountWithHostVariables(userTheme);
        expect(declarations('--vis2c-palette-primary-main')).toEqual([[':root', USER_PRIMARY]]);
    });

    it("leave the host's color-scheme alone", () => {
        mountWithHostVariables(userTheme);
        expect(declarations('color-scheme')).toEqual([[':root', 'dark']]);
    });
});

describe('collection CSS variables with an own prefix', () => {
    it('use that prefix', () => {
        mountWithHostVariables({ cssVariables: { cssVarPrefix: 'my' } });
        expect(declarations('--my-palette-primary-main')).toEqual([[':root', USER_PRIMARY]]);
    });
});
