/**
 * ThemeStudioPanel — draft lifetime on the canvas, effective colours and the problem counter.
 *
 * @module ThemeConfigWizard/ThemeStudioPanel.test
 * @remarks
 * The panel's Studio session mirrors its draft into the draft store while open (ADR-0020).
 * When the panel unmounts without a close (e.g. its root is torn down), the draft must leave
 * the canvas; after a save, the per-widget save handoff retires the draft
 * instead, so the panel must not clear it early. This pins the panel wiring end to end; the
 * session's own contract is pinned in useStudioSession.hook.test.ts. The store promotes
 * writes inside a rAF flush, so every assertion on {@link getDraftTheme} waits one frame first.
 * The colour swatches show the effective colour: the shared resolution against the chrome
 * theme, which stands in for the editor theme the canvas widgets receive (glossary
 * "Effektive Farbe").
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub
    // pattern. Arguments are echoed so tests can tell the singular from the plural key.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: unknown[]): string {
            return args.length ? `${key}(${args.join(',')})` : key;
        }
    };
});
import { act, createElement, useState, type FC } from 'react';
import { createTheme } from '@mui/material';
import type { Connection } from '@iobroker/adapter-react-v5';

import { createChromeTheme } from '../lib/theme/chromeTheme';
import { clearDraftTheme, getDraftTheme } from '../lib/theme/draftThemeStore';
import { setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import { resolveCollectionTheme } from '../lib/theme/resolveCollectionTheme';
import { getNestedValue } from '../lib/theme/themeUtils';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import type { UserTheme } from '../lib/theme/themeTypes';
import ThemeStudioPanel from './ThemeStudioPanel';

/** Waits for the draft store's rAF flush. */
const nextFrame = (): Promise<void> =>
    act(
        () =>
            new Promise<void>(resolve => {
                requestAnimationFrame(() => resolve());
            }),
    );

/** Waits until the throttled draft push (100 ms leading + trailing) has landed in the store. */
const settle = async (): Promise<void> => {
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 150)));
    await nextFrame();
};

/** A socket whose state read never answers — the seed stays the draft (no rebase). */
const fakeSocket = (): { socket: Connection; setState: ReturnType<typeof vi.fn> } => {
    const setState = vi.fn(() => Promise.resolve());
    const socket = {
        getState: () => new Promise(() => {}),
        setState,
    } as unknown as Connection;
    return { socket, setState };
};

interface HostProps {
    /** Whether the panel's root is mounted at all. */
    mounted: boolean;
    socket: Connection;
    /** vis-2 host mode (default light). */
    themeType?: 'dark' | 'light';
}

/** Mirrors the studio host: the panel mounts once and unmounts through its own onClose. */
const Host: FC<HostProps> = ({ mounted, socket, themeType = 'light' }) => {
    const [open, setOpen] = useState(true);
    return mounted && open
        ? createElement(ThemeStudioPanel, { onClose: () => setOpen(false), socket, themeType })
        : null;
};

/** Finds a button by its (stubbed, key-valued) label. */
const button = (label: string): HTMLButtonElement => {
    const found = Array.from(document.body.querySelectorAll('button')).find(b => b.textContent === label);
    if (!found) {
        throw new Error(`button "${label}" not found`);
    }
    return found;
};

const SEED: UserTheme = { palette: { primary: { main: '#ff0000' } } };

let handle: RenderComponentHandle<HostProps> | null = null;

/** Mounts the open panel seeded with `seed` (the session's last known theme). */
const mountPanel = async (
    seed: UserTheme,
    themeType: 'dark' | 'light' = 'light',
): Promise<{ setState: ReturnType<typeof vi.fn>; socket: Connection }> => {
    setLastKnownTheme(seed);
    const fake = fakeSocket();
    handle = renderComponent<HostProps>(Host, { mounted: true, socket: fake.socket, themeType });
    await settle();
    return fake;
};

afterEach(async () => {
    handle?.unmount();
    handle = null;
    clearDraftTheme();
    await nextFrame();
});

describe('ThemeStudioPanel draft lifetime', () => {
    it('clears the draft from the canvas when unmounted while open', async () => {
        const { socket } = await mountPanel(SEED);
        expect(getDraftTheme()).toEqual(SEED);

        handle?.rerender({ mounted: false, socket });
        await nextFrame();

        expect(getDraftTheme()).toBeNull();
    });

    it('leaves the saved draft to the save handoff when unmounted after save', async () => {
        const { socket, setState } = await mountPanel(SEED);
        // Reset makes the draft dirty ({} vs. the seed), so Save is allowed.
        act(() => {
            button('theme_wizard_reset').click();
        });
        await settle();
        expect(getDraftTheme()).toEqual({});
        await act(async () => {
            button('save').click();
            await Promise.resolve();
        });
        expect(setState).toHaveBeenCalledTimes(1);

        handle?.rerender({ mounted: false, socket });
        await nextFrame();

        expect(getDraftTheme()).toEqual({});
    });
});

/** Colour field label key per theme path (the stub echoes keys as labels). */
const COLOR_FIELD_LABELS: Record<string, string> = {
    'palette.primary.main': 'theme_wizard_palette_primary',
    'palette.secondary.main': 'theme_wizard_palette_secondary',
    'palette.background.default': 'theme_wizard_palette_background_default',
    'palette.background.paper': 'theme_wizard_palette_background_paper',
    'palette.divider': 'theme_wizard_palette_divider',
    'palette.error.main': 'theme_wizard_palette_error',
    'palette.warning.main': 'theme_wizard_palette_warning',
    'palette.info.main': 'theme_wizard_palette_info',
    'palette.success.main': 'theme_wizard_palette_success',
    'palette.text.primary': 'theme_wizard_palette_text_primary',
    'palette.text.secondary': 'theme_wizard_palette_text_secondary',
};

/** Expands the colour sections (collapsed on open) so their fields mount. */
const expandColorSections = async (): Promise<void> => {
    for (const title of ['theme_wizard_section_palette', 'theme_studio_section_status_text']) {
        const summary = Array.from(document.body.querySelectorAll<HTMLElement>('.MuiAccordionSummary-root')).find(
            element => element.textContent?.startsWith(title),
        );
        if (!summary) {
            throw new Error(`section "${title}" not found`);
        }
        act(() => summary.click());
    }
    await settle();
};

/** The displayed swatch colour per field label key (a marker suffix like "· derived" is cut). */
const displayedSwatches = (): Map<string, string> => {
    const map = new Map<string, string>();
    for (const swatch of Array.from(document.body.querySelectorAll<HTMLElement>('[data-swatch-color]'))) {
        const label = swatch.parentElement?.parentElement?.firstElementChild?.textContent ?? '';
        map.set(label.split(' · ')[0], swatch.dataset.swatchColor ?? '');
    }
    return map;
};

describe('ThemeStudioPanel effective colours', () => {
    const FULL: UserTheme = {
        palette: {
            mode: 'dark',
            primary: { main: '#aa3300' },
            secondary: { main: '#0033aa' },
            background: { default: '#101010', paper: '#202020' },
            divider: '#303030',
            error: { main: '#ee1111' },
            warning: { main: '#ee9911' },
            info: { main: '#1199ee' },
            success: { main: '#11ee55' },
            text: { primary: '#f0f0f0', secondary: '#a0a0a0' },
        },
    };

    it.each<[string, UserTheme]>([
        ['empty', {}],
        ['primary only', { palette: { primary: { main: '#ff0000' } } }],
        ['primary + text', { palette: { primary: { main: '#ff0000' }, text: { primary: '#222222' } } }],
        ['full', FULL],
    ])('shows the resolved colour on every swatch (%s)', async (_name, seed) => {
        await mountPanel(seed);
        await expandColorSections();
        const resolved = resolveCollectionTheme(createChromeTheme('light'), {}, seed);
        const swatches = displayedSwatches();
        for (const [path, labelKey] of Object.entries(COLOR_FIELD_LABELS)) {
            expect({ path, colour: swatches.get(labelKey) }).toEqual({
                path,
                colour: getNestedValue<string>(resolved, path),
            });
        }
    });

    it('shows inherited fields in the editor theme colours, not the MUI defaults', async () => {
        await mountPanel({});
        await expandColorSections();
        const chrome = createChromeTheme('light').palette;
        const muiDefault = createTheme().palette;
        const swatches = displayedSwatches();
        expect(swatches.get('theme_wizard_palette_primary')).toBe(chrome.primary.main);
        expect(chrome.primary.main).not.toBe(muiDefault.primary.main);
        expect(swatches.get('theme_wizard_palette_divider')).toBe(chrome.divider);
        expect(chrome.divider).not.toBe(muiDefault.divider);
        // Text follows the effective primary: the editor primary here.
        expect(swatches.get('theme_wizard_palette_text_primary')).toBe(chrome.primary.main);
    });

    it('reads the automatic mode from the resolved theme (follows the vis-2 mode)', async () => {
        await mountPanel({}, 'dark');
        await expandColorSections();
        expect(document.body.textContent).toContain('theme_studio_mode_follows: theme_wizard_palette_mode_dark');
        expect(displayedSwatches().get('theme_wizard_palette_background_paper')).toBe(
            createChromeTheme('dark').palette.background.paper,
        );
    });

    it('survives a primary MUI cannot compute with: the dependent fields inherit', async () => {
        // createTheme would throw on it ("MUI: Unsupported color"); the field validation reports
        // it (not observable here: happy-dom's CSS.supports accepts every value).
        await mountPanel({ palette: { primary: { main: 'nope' } } });
        await expandColorSections();
        const chrome = createChromeTheme('light').palette;
        const swatches = displayedSwatches();
        expect(swatches.get('theme_wizard_palette_secondary')).toBe(chrome.secondary.main);
        expect(swatches.get('theme_wizard_palette_text_primary')).toBe(chrome.primary.main);
    });
});

describe('ThemeStudioPanel field errors', () => {
    /** Label texts of the fields marked as erroneous. */
    const fieldsWithError = (): string[] =>
        Array.from(document.body.querySelectorAll<HTMLElement>('[data-theme-error]')).map(
            field =>
                field.querySelector('[data-swatch-color]')?.parentElement?.parentElement?.firstElementChild
                    ?.textContent ?? '',
        );

    it("shows a broken slot's error at its colour field, not in the bottom alert", async () => {
        // `dark` is no colour → neither union option fits → one type error at `palette.primary`.
        await mountPanel({ palette: { primary: { main: '#ff0000', dark: 5 as unknown as string } } });
        await expandColorSections();
        expect(fieldsWithError()).toEqual(['theme_wizard_palette_primary']);
        expect(document.body.querySelector('.MuiAlert-standardError')).toBeNull();
    });
});

describe('ThemeStudioPanel problem counter', () => {
    // Out-of-range corner radii are validation errors that MUI's createTheme tolerates.
    /** The footer's scroll-to-error button (the only error-coloured text button). */
    const counter = (): string | null | undefined =>
        document.body.querySelector('button.MuiButton-colorError')?.textContent;

    it('uses the singular for one problem', async () => {
        await mountPanel({ corners: { topLeft: -1 } });
        expect(counter()).toBe('theme_studio_problems_one');
    });

    it('uses the plural with the count for two problems', async () => {
        await mountPanel({ corners: { topLeft: -1, topRight: -1 } });
        expect(counter()).toBe('theme_studio_problems(2)');
    });
});
