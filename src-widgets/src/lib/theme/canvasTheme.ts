/**
 * Leinwand-Theme — the user theme the canvas shows right now (ADR-0117 addendum 2026-11-17).
 *
 * @module lib/theme/canvasTheme
 * @remarks
 * The draft of an open Studio session, else the stored theme as last known on this page. This
 * module owns that precedence and the last known stored theme, and it is the only writer of the
 * latter — on its occasions:
 * - a reading instance reads the stored theme: a widget or an editor field through
 *   {@link useCanvasTheme}, the palette button and the Studio session through
 *   {@link followStoredTheme} — never the empty theme of one whose read has no answer yet, which
 *   would hide what an earlier one read;
 * - the Studio session saves ({@link noteSavedTheme}).
 *
 * Two readings: {@link canvasUserTheme} synchronously, for readers that get no hook — the attribute
 * panel's visibility predicates, which vis-2 calls with the stored widget data alone —, and
 * {@link useCanvasTheme} for widgets and editor fields. The Rahmenvorgaben a widget or an editor
 * field reads come from here, not from the resolved MUI theme, so the host theme can carry none in
 * (ADR-0078).
 *
 * Each reading instance keeps its own subscription of the theme state (ADR-0020: the subscription
 * is not centralised), and each widget its own save handoff
 * ({@link module:hooks/useCollectionTheme.useCollectionTheme}). The last known theme also seeds the
 * next Studio open at once (ADR-0020, instant open). Before the page knows any theme both readings
 * are empty, and every frame setting reads its standard.
 */

import { useEffect, useMemo, useState } from 'react';
import type { Connection } from '@iobroker/gui-components';

import useDraftTheme from '../../hooks/useDraftTheme';
import { getDraftTheme } from './draftThemeStore';
import { followThemeState, parseStoredTheme } from './storedTheme';
import type { UserTheme } from './themeTypes';

/** The stored theme as it was known last on this page (null before the first read). */
let lastKnown: UserTheme | null = null;

/** The theme the canvas shows: the Studio draft while there is one, else the stored theme. */
function shown<T extends UserTheme | null>(draft: UserTheme | null, stored: T): UserTheme | T {
    return draft ?? stored;
}

/**
 * The user theme the canvas shows right now as far as this page knows it, read synchronously:
 * the Studio draft while there is one, else the stored theme as last known.
 *
 * @returns The theme; `null` before either is known — a widget that has not read the theme yet
 *   renders the empty theme as well.
 */
export function canvasUserTheme(): UserTheme | null {
    return shown(getDraftTheme(), lastKnown);
}

/**
 * The stored theme as last known on this page, without a draft — what the next Studio session
 * opens with at once.
 *
 * @returns The theme; `null` before the page has read or saved one.
 */
export function lastStoredTheme(): UserTheme | null {
    return lastKnown;
}

/**
 * Follows the stored theme for a reader that keeps no render state of it (the palette button, the
 * Studio session): reads it now and with every change, notes each read as the last known theme and
 * passes it on.
 *
 * @param socket - The ioBroker connection.
 * @param onStored - Takes each read stored theme, after it was noted.
 * @param onRead - Called once the first read has an answer, whether a value or an error.
 * @returns Stops following.
 */
export function followStoredTheme(
    socket: Pick<Connection, 'getState' | 'subscribeState' | 'unsubscribeState'>,
    onStored?: (stored: UserTheme) => void,
    onRead?: () => void,
): () => void {
    return followThemeState(
        socket,
        val => {
            const stored = parseStoredTheme(val);
            lastKnown = stored;
            onStored?.(stored);
        },
        onRead,
    );
}

/**
 * The Studio session saved `theme`: the page knows it as the stored theme before the state echoes it.
 *
 * @param theme - The saved theme.
 */
export function noteSavedTheme(theme: UserTheme): void {
    lastKnown = theme;
}

/** The hook reading of the Leinwand-Theme. */
export interface CanvasTheme {
    /** The theme the canvas shows: the Studio draft, else the stored theme. */
    theme: UserTheme;
    /**
     * The stored theme as this instance read it (the empty theme before its read answers). Its
     * identity changes only when the state reports another value.
     */
    stored: UserTheme;
    /** The Studio draft on the canvas, or null. */
    draft: UserTheme | null;
}

/**
 * Reads the Leinwand-Theme for a widget or an editor field: subscribes this instance to the theme
 * state, notes what it reads as the last known theme, and re-renders on a change of the stored
 * theme or the Studio draft.
 *
 * @param socket - ioBroker connection for reading and subscribing the theme state.
 * @returns The theme the canvas shows, the stored theme and the draft.
 */
export function useCanvasTheme(socket: Connection): CanvasTheme {
    // The theme state's value as it arrived (JSON text; '' when not text; undefined while unread).
    const [themeJson, setThemeJson] = useState<string>();

    useEffect(() => followThemeState(socket, val => setThemeJson(typeof val === 'string' ? val : '')), [socket]);

    // Read by the one reader (never throws; the empty theme when the state holds none or is still
    // unread). Keyed by the text: a state that reports the same value again keeps the identity.
    const stored = useMemo(() => parseStoredTheme(themeJson ?? ''), [themeJson]);

    useEffect(() => {
        if (themeJson !== undefined) {
            lastKnown = stored;
        }
    }, [themeJson, stored]);

    const draft = useDraftTheme();
    return useMemo(() => ({ theme: shown(draft, stored), stored, draft }), [draft, stored]);
}
