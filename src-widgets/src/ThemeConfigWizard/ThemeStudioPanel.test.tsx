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
 * "Effektive Farbe"). Font and corner changes run through the real session history, so undo
 * and reset are observed exactly as the user sees them.
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

import type * as GoogleFonts from '../lib/theme/googleFonts';

// Google Fonts load over the network — stand in one face per requested family.
vi.mock('../lib/theme/googleFonts', async importOriginal => ({
    ...(await importOriginal<typeof GoogleFonts>()),
    loadGoogleFont: vi.fn((name: string) => Promise.resolve([{ weight: 400, data: `data:font/woff2;base64,${name}` }])),
}));

import { createChromeTheme } from '../lib/theme/chromeTheme';
import { BUNDLED_FONTS, CUSTOM_FONT_VALUE } from '../lib/theme/fontCatalogue';
import { clearDraftTheme, getDraftTheme } from '../lib/theme/draftThemeStore';
import { setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import { THEME_PRESETS, applyPreset } from '../lib/theme/presets';
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

/** The header (accordion summary) of the section titled `title`. */
const sectionHeader = (title: string): HTMLElement => {
    const header = Array.from(document.body.querySelectorAll<HTMLElement>('.MuiAccordionSummary-root')).find(
        element => element.firstElementChild?.firstElementChild?.textContent === title,
    );
    if (!header) {
        throw new Error(`section "${title}" not found`);
    }
    return header;
};

/** Expands the sections titled `titles` (all collapsed on open) so their fields mount. */
const expandSections = async (...titles: string[]): Promise<void> => {
    for (const title of titles) {
        const header = sectionHeader(title);
        act(() => header.click());
    }
    await settle();
};

/** Expands the colour sections (collapsed on open) so their fields mount. */
const expandColorSections = (): Promise<void> =>
    expandSections('theme_wizard_section_palette', 'theme_studio_section_status_text');

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

describe('ThemeStudioPanel derivation markers and hints', () => {
    /** The full label (with a marker suffix, if any) of the colour field labelled `labelKey`. */
    const labelOf = (labelKey: string): string | undefined =>
        Array.from(document.body.querySelectorAll<HTMLElement>('[data-swatch-color]'))
            .map(swatch => swatch.parentElement?.parentElement?.firstElementChild?.textContent ?? '')
            .find(label => label.split(' · ')[0] === labelKey);

    const SECONDARY = 'theme_wizard_palette_secondary';
    const TEXT = 'theme_wizard_palette_text_primary';

    it('marks the inheriting secondary and primary text, and drops the secondary marker once a preset sets it', async () => {
        await mountPanel({ palette: { primary: { main: '#ff0000' } } });
        await expandColorSections();
        expect(labelOf(SECONDARY)).toBe(`${SECONDARY} · theme_studio_secondary_derived`);
        expect(labelOf(TEXT)).toBe(`${TEXT} · theme_studio_text_follows_primary`);
        expect(labelOf('theme_wizard_palette_primary')).toBe('theme_wizard_palette_primary');

        // Presets set primary + secondary (not the text): an own secondary, no derivation.
        await expandSections('theme_studio_presets');
        const preset = document.body.querySelector<HTMLButtonElement>('button[aria-pressed]');
        act(() => preset?.click());
        await settle();
        expect(labelOf(SECONDARY)).toBe(SECONDARY);
        expect(labelOf(TEXT)).toBe(`${TEXT} · theme_studio_text_follows_primary`);
    });

    it('marks the primary text only while it inherits', async () => {
        await mountPanel({ palette: { text: { primary: '#222222' } } });
        await expandColorSections();
        expect(labelOf(TEXT)).toBe(TEXT);

        const textRow = Array.from(document.body.querySelectorAll<HTMLElement>('[data-swatch-color]')).find(
            swatch => swatch.parentElement?.parentElement?.firstElementChild?.textContent === TEXT,
        )?.parentElement;
        act(() => textRow?.querySelector<HTMLButtonElement>('button[title="theme_studio_reset_color"]')?.click());
        await settle();
        expect(labelOf(TEXT)).toBe(`${TEXT} · theme_studio_text_follows_primary`);
    });

    it('does not mark the secondary as derived without a user primary', async () => {
        await mountPanel({});
        await expandColorSections();
        expect(labelOf(SECONDARY)).toBe(SECONDARY);
        expect(labelOf(TEXT)).toBe(`${TEXT} · theme_studio_text_follows_primary`);
    });

    it('offers a location hint at every colour field', async () => {
        await mountPanel({});
        await expandColorSections();
        const hints = Array.from(
            document.body.querySelectorAll<HTMLButtonElement>('button[aria-label^="theme_studio_hint_"]'),
        );
        expect(hints.map(hint => hint.getAttribute('aria-label')).sort()).toEqual([
            'theme_studio_hint_background_default',
            'theme_studio_hint_background_paper',
            'theme_studio_hint_divider',
            'theme_studio_hint_error',
            'theme_studio_hint_info',
            'theme_studio_hint_primary',
            'theme_studio_hint_secondary',
            'theme_studio_hint_success',
            'theme_studio_hint_text_primary',
            'theme_studio_hint_text_secondary',
            'theme_studio_hint_warning',
        ]);
    });
});

describe('ThemeStudioPanel presets section', () => {
    /** The collapsed presets section's summary line. */
    const presetsSummary = (): string | null | undefined =>
        sectionHeader('theme_studio_presets').querySelector('.MuiTypography-caption')?.textContent;

    const RUBIN = THEME_PRESETS.find(preset => preset.id === 'rubin');

    it('starts collapsed, like every section', async () => {
        await mountPanel({});
        expect(document.body.querySelector('button[aria-pressed]')).toBeNull();
    });

    it('names the active preset in the summary', async () => {
        expect(RUBIN).toBeDefined();
        await mountPanel(applyPreset({}, RUBIN!));
        expect(presetsSummary()).toBe('theme_studio_presets_active(theme_studio_preset_rubin)');
    });

    it('reads "custom colours" once a colour leaves the preset', async () => {
        const seed = applyPreset({}, RUBIN!);
        await mountPanel({ ...seed, palette: { ...seed.palette, primary: { main: '#123456' } } });
        expect(presetsSummary()).toBe('theme_studio_presets_custom');
    });

    it('reads "default" while no colour is set', async () => {
        await mountPanel({ palette: { mode: 'dark' } });
        expect(presetsSummary()).toBe('theme_studio_default_value');
    });

    it('applies a preset from the expanded section', async () => {
        await mountPanel({});
        await expandSections('theme_studio_presets');
        const rubin = Array.from(document.body.querySelectorAll<HTMLButtonElement>('button[aria-pressed]')).find(
            card => card.textContent === 'theme_studio_preset_rubin',
        );
        act(() => rubin?.click());
        await settle();
        expect(getDraftTheme()).toEqual(applyPreset({}, RUBIN!));
        expect(rubin?.getAttribute('aria-pressed')).toBe('true');
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

    it('reports the CSS variables prefix mui, reserved by the vis-2 editor, as a problem', async () => {
        await mountPanel({ cssVariables: { cssVarPrefix: 'mui' } } as UserTheme);
        const alert = document.body.querySelector('.MuiAlert-standardError');
        expect(alert?.textContent).toContain('cssVariables.cssVarPrefix: theme_studio_valid_css_var_prefix');
        expect(document.body.querySelector('button.MuiButton-colorError')?.textContent).toBe(
            'theme_studio_problems_one',
        );
    });
});

describe('ThemeStudioPanel hex input', () => {
    /** The hex input of the colour field labelled `labelKey` (stubbed labels are keys). */
    const hexInputOf = (labelKey: string): HTMLInputElement => {
        const input = document.body.querySelector<HTMLInputElement>(`input[data-hex-input][aria-label="${labelKey}"]`);
        if (!input) {
            throw new Error(`no hex input for "${labelKey}"`);
        }
        return input;
    };

    /** Types `value` into the input and commits it with Enter, like a user would. */
    const enter = async (input: HTMLInputElement, value: string): Promise<void> => {
        act(() => {
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        act(() => {
            input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        });
        await settle();
    };

    /** Label and message of every field marked as erroneous. */
    const fieldErrors = (): Array<[string, string]> =>
        Array.from(document.body.querySelectorAll<HTMLElement>('[data-theme-error]')).map(field => [
            field.querySelector('[data-swatch-color]')?.parentElement?.parentElement?.firstElementChild?.textContent ??
                '',
            field.querySelector('.MuiTypography-caption')?.textContent ?? '',
        ]);

    const saveButton = (): HTMLButtonElement => button('save');

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('shows the effective value at every colour field', async () => {
        await mountPanel({ palette: { divider: '#303030' } });
        await expandColorSections();
        expect(hexInputOf('theme_wizard_palette_divider').value).toBe('#303030');
        expect(hexInputOf('theme_wizard_palette_primary').value).toBe(createChromeTheme('light').palette.primary.main);
        expect(document.body.querySelectorAll('input[data-hex-input]')).toHaveLength(11);
    });

    it('writes a typed colour into the draft', async () => {
        await mountPanel({});
        await expandColorSections();
        await enter(hexInputOf('theme_wizard_palette_primary'), '#123456');
        expect(getNestedValue<string>(getDraftTheme(), 'palette.primary.main')).toBe('#123456');
        expect(fieldErrors()).toEqual([]);
    });

    it('reports a value the browser rejects at its field', async () => {
        // happy-dom's CSS.supports accepts every value (and ignores a spy) — stand in a browser.
        vi.stubGlobal('CSS', { supports: (_property: string, value?: string): boolean => value !== 'nope' });
        await mountPanel({});
        await expandColorSections();
        await enter(hexInputOf('theme_wizard_palette_divider'), 'nope');
        expect(fieldErrors()).toEqual([['theme_wizard_palette_divider', 'theme_studio_valid_color']]);
        expect(saveButton().disabled).toBe(true);
    });

    it('reports an accent colour MUI cannot compute with at its field, as the canvas drops it', async () => {
        // `red` is a valid CSS colour, but MUI's colour maths cannot parse it — the resolution
        // lets the field inherit, so the field must not pass as valid.
        await mountPanel({});
        await expandColorSections();
        await enter(hexInputOf('theme_wizard_palette_primary'), 'red');
        expect(fieldErrors()).toEqual([['theme_wizard_palette_primary', 'theme_studio_valid_color_computable']]);
        expect(saveButton().disabled).toBe(true);
    });

    it('accepts named colours where the resolution keeps them', async () => {
        await mountPanel({});
        await expandColorSections();
        await enter(hexInputOf('theme_wizard_palette_divider'), 'red');
        expect(fieldErrors()).toEqual([]);
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

describe('ThemeStudioPanel fonts and corners follow the draft', () => {
    const INTER = BUNDLED_FONTS[0];
    const LATO_FACES = [{ weight: 400, data: 'data:font/woff2;base64,Lato' }];

    /** Expands the typography section (collapsed on open). */
    const expandTypography = (): Promise<void> => expandSections('theme_studio_section_schrift_form');

    /** The text input captioned `label` (a TextField2: caption box above the MUI field). */
    const textInput = (label: string): HTMLInputElement | undefined =>
        Array.from(document.body.querySelectorAll<HTMLInputElement>('input[type="text"]')).find(
            input => input.closest('.MuiFormControl-root')?.parentElement?.firstElementChild?.textContent === label,
        );

    /** Types a value like a user would: React listens to the native input event. */
    const type = (input: HTMLInputElement, value: string): void => {
        act(() => {
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
    };

    const undo = async (): Promise<void> => {
        const undoButton = document.body.querySelector<HTMLButtonElement>('button[aria-label="theme_studio_undo"]');
        act(() => undoButton?.click());
        await settle();
    };

    /** The closed font-family select's displayed text. */
    const selectedFont = (): string | null | undefined =>
        document.body.querySelector('[data-studio-section="typography"] .MuiSelect-select')?.textContent;

    const loadGoogleFontNamed = async (name: string): Promise<void> => {
        type(textInput('theme_wizard_typography_google_font_hint')!, name);
        await act(async () => {
            button('theme_wizard_typography_google_font_load').click();
            await Promise.resolve();
        });
        await settle();
    };

    it('loads a Google Font as one undo step', async () => {
        const seed: UserTheme = { typography: { fontFamily: INTER.value } };
        await mountPanel(seed);
        await expandTypography();

        await loadGoogleFontNamed('Lato');
        expect(getDraftTheme()).toEqual({
            typography: { fontFamily: "'Lato', sans-serif" },
            googleFonts: { Lato: LATO_FACES },
        });

        await undo();
        expect(getDraftTheme()).toEqual(seed);
        expect(selectedFont()).toBe(INTER.label);
    });

    it('resets the font family together with the deleted Google Font it points to', async () => {
        await mountPanel({ typography: { fontFamily: "'Lato', sans-serif" }, googleFonts: { Lato: LATO_FACES } });
        await expandTypography();

        const chip = Array.from(document.body.querySelectorAll<HTMLElement>('.MuiChip-root')).find(
            element => element.textContent === 'Lato',
        );
        act(() => {
            chip?.querySelector<SVGElement>('.MuiChip-deleteIcon')?.dispatchEvent(
                new MouseEvent('click', { bubbles: true }),
            );
        });
        await settle();
        expect(getDraftTheme()).toEqual({});
        expect(selectedFont()).toBe('theme_wizard_typography_font_family_default');
    });

    it('keeps the font family when the deleted Google Font is another one', async () => {
        await mountPanel({
            typography: { fontFamily: "'Lato', sans-serif" },
            googleFonts: { Lato: LATO_FACES, Oswald: LATO_FACES },
        });
        await expandTypography();

        const chip = Array.from(document.body.querySelectorAll<HTMLElement>('.MuiChip-root')).find(
            element => element.textContent === 'Oswald',
        );
        act(() => {
            chip?.querySelector<SVGElement>('.MuiChip-deleteIcon')?.dispatchEvent(
                new MouseEvent('click', { bubbles: true }),
            );
        });
        await settle();
        expect(getDraftTheme()).toEqual({
            typography: { fontFamily: "'Lato', sans-serif" },
            googleFonts: { Lato: LATO_FACES },
        });
    });

    it('shows the catalogue entry again after undoing a switch to a custom font', async () => {
        await mountPanel({ typography: { fontFamily: INTER.value } });
        await expandTypography();

        const combobox = document.body.querySelector<HTMLElement>(
            '[data-studio-section="typography"] [role="combobox"]',
        );
        act(() => {
            combobox?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
        });
        const customOption = document.body.querySelector<HTMLElement>(`li[data-value="${CUSTOM_FONT_VALUE}"]`);
        act(() => customOption?.click());
        await settle();
        type(textInput('theme_wizard_typography_font_family_custom')!, 'Comic Sans MS, cursive');
        await settle();
        expect(getNestedValue<string>(getDraftTheme(), 'typography.fontFamily')).toBe('Comic Sans MS, cursive');

        await undo();
        expect(getNestedValue<string>(getDraftTheme(), 'typography.fontFamily')).toBe(INTER.value);
        expect(selectedFont()).toBe(INTER.label);
        expect(textInput('theme_wizard_typography_font_family_custom')).toBeUndefined();
    });

    /** The corner link toggle (the button carrying the link / link-off icon). */
    const linkToggle = (): HTMLButtonElement | null | undefined =>
        document.body
            .querySelector('[data-testid="LinkIcon"], [data-testid="LinkOffIcon"]')
            ?.closest<HTMLButtonElement>('button');

    it('never shows unequal corners as linked: linking evens them, undo unlinks again', async () => {
        const corners = { topLeft: 2, topRight: 6, bottomRight: 6, bottomLeft: 6 };
        await mountPanel({ corners });
        await expandTypography();
        expect(linkToggle()?.getAttribute('aria-pressed')).toBe('false');

        act(() => linkToggle()?.click());
        await settle();
        expect(getDraftTheme()).toEqual({ corners: { topLeft: 2, topRight: 2, bottomRight: 2, bottomLeft: 2 } });
        expect(linkToggle()?.getAttribute('aria-pressed')).toBe('true');

        await undo();
        expect(getDraftTheme()).toEqual({ corners });
        expect(linkToggle()?.getAttribute('aria-pressed')).toBe('false');
        expect(document.body.querySelector('[data-corner-grid]')).not.toBeNull();
    });

    it('links the corners again when a reset evens them', async () => {
        await mountPanel({ corners: { topLeft: 2, topRight: 6, bottomRight: 6, bottomLeft: 6 } });
        await expandTypography();
        expect(linkToggle()?.getAttribute('aria-pressed')).toBe('false');

        act(() => button('theme_wizard_reset').click());
        await settle();
        expect(linkToggle()?.getAttribute('aria-pressed')).toBe('true');
    });
});
