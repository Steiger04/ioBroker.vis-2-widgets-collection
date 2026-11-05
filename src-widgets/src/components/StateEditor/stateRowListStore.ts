/**
 * What the Zustandseditor's list shares with its toolbar: the search, the list's focus and
 * the list height.
 *
 * @module components/StateEditor/stateRowListStore
 * @remarks
 * List and toolbar are separate vis-2 custom fields (own React subtrees), so — like the row
 * selection (`stateRowSelection`) — they share through module state keyed by view + selected
 * widgets (`stateRowSelectionKey`, `keyedStore`):
 * - **Search** (Spec, search): typed in the toolbar, filters the list; while it is active,
 *   reordering is locked in both.
 * - **Focus**: every row action hands the focus to the list. vis-2 deletes the selected widget
 *   on Delete while the focus is on `<body>` (vis-2 `Editor.tsx` `onKeyDown`) — e.g. after a
 *   focused toolbar button turns disabled — so the focus must never fall there.
 * - **Height**: the visible row count, global and kept in `localStorage`.
 */
import { useCallback } from 'react';

import { createKeyedStore } from './keyedStore';

const searches = createKeyedStore<string>();
const lists = new Map<string, HTMLElement>();
const pendingFocus = new Set<string>();

/**
 * Sets the search of a key; list and toolbar follow.
 *
 * @param key See `stateRowSelectionKey`.
 * @param text The search text as typed.
 */
export const setStateRowSearch = (key: string, text: string): void => searches.set(key, text || undefined);

/**
 * The search of one Zustandseditor and the function that changes it.
 *
 * @param key See `stateRowSelectionKey`.
 * @returns `[text, setText]` — the text as typed.
 */
export const useStateRowSearch = (key: string): [string, (text: string) => void] => {
    const text = searches.use(key) ?? '';
    const set = useCallback((next: string) => setStateRowSearch(key, next), [key]);
    return [text, set];
};

/**
 * Whether a search filters the rows (and so locks reordering).
 *
 * @param text The search text as typed.
 * @returns `true` unless it is empty or blank.
 */
export const isStateRowSearchActive = (text: string): boolean => text.trim() !== '';

/**
 * The rows a search keeps: no., value or alias contains it (case-insensitive substring).
 *
 * @param rows The rows.
 * @param text The search text as typed (blank keeps every row).
 * @returns The matching rows, in their order.
 */
export const filterStateRows = <R extends { n: number; value: string; alias: string }>(
    rows: readonly R[],
    text: string,
): readonly R[] => {
    const query = text.trim().toLowerCase();
    if (!query) {
        return rows;
    }
    return rows.filter(
        row =>
            String(row.n).includes(query) ||
            row.value.toLowerCase().includes(query) ||
            row.alias.toLowerCase().includes(query),
    );
};

/**
 * Registers the list element of a key; a focus requested before it existed is handed over.
 *
 * @param key See `stateRowSelectionKey`.
 * @param element The focusable list.
 * @returns The function that unregisters it.
 */
export const registerStateRowList = (key: string, element: HTMLElement): (() => void) => {
    lists.set(key, element);
    if (pendingFocus.delete(key)) {
        element.focus({ preventScroll: true });
    }
    return () => {
        if (lists.get(key) === element) {
            lists.delete(key);
        }
    };
};

/**
 * Hands the focus to the list of a key — at once, or as soon as the list (re)mounts.
 *
 * @param key See `stateRowSelectionKey`.
 */
export const focusStateRowList = (key: string): void => {
    const element = lists.get(key);
    if (element?.isConnected) {
        element.focus({ preventScroll: true });
    } else {
        pendingFocus.add(key);
    }
};

/** Forgets every search and focus request — for tests (the editor keeps them until reload). */
export const resetStateRowListStore = (): void => {
    pendingFocus.clear();
    lists.clear();
    searches.clear();
};

/** The `localStorage` key of the list height (visible rows), in the project's namespace. */
export const STATE_ROW_LIST_STORAGE_KEY = 'vis-2-widgets-collection:state-editor:list-rows';
/** Rows the list shows before it scrolls, until the user drags the height grip. */
export const STATE_ROW_LIST_DEFAULT_ROWS = 8;
/** Fewest rows the height grip allows. */
export const STATE_ROW_LIST_MIN_ROWS = 3;
/** Most rows the height grip allows. */
export const STATE_ROW_LIST_MAX_ROWS = 40;

/**
 * Clamps a visible row count to the grip's range.
 *
 * @param rows The requested row count.
 * @returns A whole row count within `MIN..MAX`.
 */
export const clampStateRowListRows = (rows: number): number =>
    Math.min(Math.max(Math.round(rows), STATE_ROW_LIST_MIN_ROWS), STATE_ROW_LIST_MAX_ROWS);

/**
 * The stored list height.
 *
 * @returns The visible row count, or the default when absent, invalid or unreadable.
 */
export const readStateRowListRows = (): number => {
    try {
        const n = Number(window.localStorage.getItem(STATE_ROW_LIST_STORAGE_KEY));
        return Number.isFinite(n) && n > 0 ? clampStateRowListRows(n) : STATE_ROW_LIST_DEFAULT_ROWS;
    } catch {
        return STATE_ROW_LIST_DEFAULT_ROWS;
    }
};

/**
 * Stores the list height (best-effort; storage may be unavailable).
 *
 * @param rows The visible row count.
 */
export const storeStateRowListRows = (rows: number): void => {
    try {
        window.localStorage.setItem(STATE_ROW_LIST_STORAGE_KEY, String(rows));
    } catch {
        /* storage unavailable — the height lasts for the session */
    }
};
