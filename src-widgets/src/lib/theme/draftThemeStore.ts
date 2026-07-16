/**
 * Module singleton holding the in-progress theme draft edited in the studio panel.
 *
 * @module lib/theme/draftThemeStore
 * @remarks
 * The studio panel (mounted via vis-2's `customPalette` in the palette pane) and
 * the per-widget {@link module:components/CollectionProvider.CollectionProvider}s
 * (one per canvas widget) live in DIFFERENT React subtrees — vis-2 owns the whole
 * editor tree above both, so there is no shared provider the panel could use to
 * push its in-memory draft to the widgets via React context. This singleton
 * bridges that gap: the panel writes the draft here; the shared
 * {@link module:hooks/useCollectionTheme.useCollectionTheme} hook reads it
 * (merged over the persisted ioBroker state) so every canvas widget re-themes
 * live while the panel is open, and snaps back when it is closed/discarded.
 *
 * `useSyncExternalStore` tearing guard: a component may call `getSnapshot()` at
 * any time (e.g. during a concurrent render). If the value it reads is not the
 * one that was current when the store last notified, React throws a tearing
 * warning. To avoid that, writes go to a `pending` slot and are promoted to the
 * `snapshot` slot — and listeners notified — in ONE atomic step inside a
 * `requestAnimationFrame` callback. `getSnapshot` always returns `snapshot`,
 * never `pending`, so the snapshot only changes in the same tick listeners fire.
 * Rapid writes (slider pointermove) coalesce to a single notify per frame.
 */

import type { UserTheme } from './themeTypes';

/** Last value written (read by nobody directly — only promoted on flush). */
let pending: UserTheme | null = null;

/** The value `getSnapshot` returns; only updated atomically inside a flush. */
let snapshot: UserTheme | null = null;

/** Whether a rAF flush is already queued (coalescing guard). */
let flushScheduled = false;

const listeners = new Set<() => void>();

/** Promotes `pending` → `snapshot` and notifies every subscriber (atomic). */
function flush(): void {
    flushScheduled = false;
    if (Object.is(snapshot, pending)) {
        return;
    }
    snapshot = pending;
    for (const listener of listeners) {
        listener();
    }
}

/** Schedules a rAF flush; flushes synchronously when rAF is unavailable (tests). */
function scheduleFlush(): void {
    if (flushScheduled) {
        return;
    }
    flushScheduled = true;
    if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(flush);
    } else {
        // Non-browser (tests/SSR): no rAF, so promote immediately.
        flush();
    }
}

/**
 * Returns the current draft snapshot — the value React reads through
 * `useSyncExternalStore`. Reference-stable between flushes.
 */
export function getDraftTheme(): UserTheme | null {
    return snapshot;
}

/**
 * Sets the in-progress draft. Coalesces rapid calls into one notify per frame.
 *
 * @param theme - The draft (or `null` to clear). The store keeps the reference.
 */
export function setDraftTheme(theme: UserTheme | null): void {
    pending = theme;
    scheduleFlush();
}

/**
 * Clears the draft so widgets revert to the persisted theme.
 *
 * @remarks
 * Coalesced like {@link setDraftTheme}. Used both to discard panel edits and by
 * the seamless save-handoff in {@link module:hooks/useCollectionTheme}.
 */
export function clearDraftTheme(): void {
    setDraftTheme(null);
}

/**
 * Subscribes to draft changes (the `subscribe` half of `useSyncExternalStore`).
 *
 * @returns An unsubscribe function.
 */
export function subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return (): void => {
        listeners.delete(listener);
    };
}
