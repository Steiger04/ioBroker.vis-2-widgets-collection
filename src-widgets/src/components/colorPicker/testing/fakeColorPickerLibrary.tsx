/**
 * Test fake for the picker library `react-best-gradient-color-picker` (happy-dom has no canvas).
 *
 * @module components/colorPicker/testing/fakeColorPickerLibrary
 * @remarks
 * Swap it in with
 *
 * ```ts
 * vi.mock('react-best-gradient-color-picker', async () =>
 *     (await import('./testing/fakeColorPickerLibrary')).fakeColorPickerLibrary);
 * ```
 *
 * The fake renders one button per entry of {@link FAKE_PICKS} (`button[data-pick="<name>"]`);
 * a click calls the received `onChange` with that fixed value, as a drag in the real picker
 * would. Unless `hidePresets` is set, it also renders the received presets (at most 18) as
 * `button[data-preset="<value>"]`; a click emits the preset unchanged. Every render records the
 * received props in {@link libraryRenders}; read the latest with {@link lastLibraryProps}. The
 * hook export (`useColorPicker`) is the library's real one (it is pure state logic without
 * canvas), so the Farbwähler's input row works against the fake.
 */
import type React from 'react';
import type * as ColorPickerLibrary from 'react-best-gradient-color-picker';
import { vi } from 'vitest';

type ColorPickerProps = ColorPickerLibrary.ColorPickerProps;

/** The real library module — only its canvas-free hook is passed on. */
const actualLibrary = await vi.importActual<typeof ColorPickerLibrary>('react-best-gradient-color-picker');

/** Fixed values the fake's buttons emit — the library's own output notation. */
export const FAKE_PICKS = {
    /** Opaque solid colour → stored as `#ff0000`. */
    solid: 'rgba(255, 0, 0, 1)',
    /** Translucent solid colour → stored as `#0080ff66`. */
    translucent: 'rgba(0, 128, 255, 0.4)',
    /** Gradient with the selected stop in upper case, as the library writes it → stored unchanged. */
    gradient: 'linear-gradient(90deg, RGBA(255, 0, 0, 1) 0%, rgba(0, 0, 255, 1) 100%)',
} as const;

/** Props of every fake render, oldest first. */
export const libraryRenders: ColorPickerProps[] = [];

/** Props of the latest fake render (throws when the fake never rendered). */
export function lastLibraryProps(): ColorPickerProps {
    const last = libraryRenders[libraryRenders.length - 1];
    if (!last) {
        throw new Error('the picker library was never rendered');
    }
    return last;
}

/** Forgets the recorded renders — call in `beforeEach`. */
export function resetFakeLibrary(): void {
    libraryRenders.length = 0;
}

/**
 * Fake picker: shows its value and one button per fixed pick.
 *
 * @param props - The props the Farbwähler passes to the library.
 * @returns The fake's DOM.
 */
function FakeColorPicker(props: ColorPickerProps): React.JSX.Element {
    libraryRenders.push(props);
    return (
        <div
            data-fake-library
            data-value={props.value}
        >
            {Object.entries(FAKE_PICKS).map(([name, value]) => (
                <button
                    key={name}
                    type="button"
                    data-pick={name}
                    onClick={(): void => props.onChange(value)}
                >
                    {name}
                </button>
            ))}
            {/* Preset row as the library shows it: only without hidePresets, at most 18. */}
            {!props.hidePresets &&
                (props.presets ?? []).slice(0, 18).map((preset, index) => (
                    <button
                        key={`preset-${index}`}
                        type="button"
                        data-preset={preset}
                        onClick={(): void => props.onChange(preset)}
                    >
                        {preset}
                    </button>
                ))}
        </div>
    );
}

/** Module shape for `vi.mock('react-best-gradient-color-picker', …)`. */
export const fakeColorPickerLibrary = { default: FakeColorPicker, useColorPicker: actualLibrary.useColorPicker };
