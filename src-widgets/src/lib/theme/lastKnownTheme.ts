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
 * keeps it on the stored theme ({@link module:ThemeConfigWizard/ThemeWizardButton}), and so does every
 * collection widget on the canvas once it has read the theme ({@link module:hooks/useCollectionTheme}).
 *
 * The attribute panel's visibility predicates read it too (ADR-0117): vis-2 calls them with the
 * stored widget data alone, synchronously, with no hook — {@link knownUserTheme} is the theme the
 * canvas shows as far as the page knows it then.
 */

import { getDraftTheme } from './draftThemeStore';
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

/**
 * The user theme the canvas shows right now as far as this page knows it, read synchronously: the
 * Studio draft while the Studio has one, else the last known stored theme — the precedence the
 * canvas widgets take ({@link module:hooks/useCollectionTheme}). `null` before either is known: a
 * canvas widget that has not read the theme yet renders the empty theme as well.
 */
export function knownUserTheme(): UserTheme | null {
    return getDraftTheme() ?? lastKnown;
}
