/**
 * Last-known theme seed for instant studio-panel opens (ADR-0020).
 *
 * @module lib/theme/lastKnownTheme
 * @remarks
 * The studio panel historically spinner-gated on `socket.getState` at every open —
 * a full round-trip of dead time before the first field rendered. The theme almost
 * never changes between opens, so the last loaded/saved value is kept here at
 * module level (survives panel close/open within the session): the next open seeds
 * the form from it INSTANTLY and revalidates against the state in the background
 * (the panel rebases only while the user has not touched the seeded draft yet).
 */

import type { UserTheme } from './themeTypes';

/** The last theme the panel loaded or saved this session (null before the first load). */
let lastKnown: UserTheme | null = null;

/** Returns the session's last known theme, or null when never loaded. */
export function getLastKnownTheme(): UserTheme | null {
    return lastKnown;
}

/** Seeds the session cache (on successful load and on save). */
export function setLastKnownTheme(theme: UserTheme): void {
    lastKnown = theme;
}
