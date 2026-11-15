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
 * (the Studio session rebases only while the user has not touched the seeded draft yet).
 *
 * The seed is shown — and mirrored onto the canvas — until that background read answers, so it
 * has to follow a change made while no session is open as well: the studio's palette entry
 * keeps it on the stored theme ({@link module:ThemeConfigWizard/ThemeWizardButton}).
 */

import type { UserTheme } from './themeTypes';

/** The stored theme as it was known last on this page (null before the first load). */
let lastKnown: UserTheme | null = null;

/** Returns the session's last known theme, or null when never loaded. */
export function getLastKnownTheme(): UserTheme | null {
    return lastKnown;
}

/** Seeds the session cache (on a load, a save and a change of the stored theme); `null` forgets it. */
export function setLastKnownTheme(theme: UserTheme | null): void {
    lastKnown = theme;
}
