/**
 * The Zustandseditor's shared row selection: which Zustandszeile the list, the Kopfzeile, the
 * toolbar and the detail fields of one „Werte" group are showing.
 *
 * @module components/StateEditor/stateRowSelection
 * @remarks
 * Module state of the widget bundle (Spec „Gemeinsame Zeilenauswahl"), keyed by view +
 * selected widgets. A selection change writes no project data, so it triggers no vis-2
 * recalculation; it is remembered per key until the page reloads. Each field of the group is
 * its own vis-2 custom field (its own React subtree), so they share the selection through this
 * store, not through a React context.
 */
import { useCallback, useSyncExternalStore } from 'react';

const selections = new Map<string, number>();
const listeners = new Set<() => void>();

/**
 * The key a selection is remembered under: the view and the selected widgets (order-free).
 *
 * @param view The selected view.
 * @param widgets The selected widgets.
 * @returns The selection key.
 */
export const stateRowSelectionKey = (view: string, widgets: readonly string[]): string =>
    `${view}\n${[...widgets].map(String).sort().join('\n')}`;

/**
 * The stored Feldnummer for a key — 1 until a row was chosen.
 *
 * @param key See {@link stateRowSelectionKey}.
 * @returns The stored Feldnummer (not yet clamped to the rows).
 */
export const storedStateRow = (key: string): number => selections.get(key) ?? 1;

/**
 * Chooses the row of a key; every subscribed field follows.
 *
 * @param key See {@link stateRowSelectionKey}.
 * @param row The Feldnummer (1-based).
 */
export const selectStateRow = (key: string, row: number): void => {
    if (selections.get(key) === row) {
        return;
    }
    selections.set(key, row);
    listeners.forEach(listener => listener());
};

const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
};

/**
 * Clamps a stored Feldnummer to the rows that exist.
 *
 * @param stored The stored Feldnummer.
 * @param count The number of rows.
 * @returns The row shown: `0` without rows, else `stored` within `1..count` — a row gone by a
 *   delete falls back to the last one, without writing anything.
 */
export const clampStateRow = (stored: number, count: number): number =>
    count < 1 ? 0 : Math.min(Math.max(stored, 1), count);

/**
 * The selected row of one Zustandseditor and the function that changes it.
 *
 * @param key See {@link stateRowSelectionKey}.
 * @param count The number of rows.
 * @returns `[row, select]` — `row` is `0` without rows.
 */
export const useStateRowSelection = (key: string, count: number): [number, (row: number) => void] => {
    const stored = useSyncExternalStore(subscribe, () => storedStateRow(key));
    const select = useCallback((row: number) => selectStateRow(key, row), [key]);
    return [clampStateRow(stored, count), select];
};

/** Forgets every selection — for tests (the editor keeps them until the page reloads). */
export const resetStateRowSelection = (): void => {
    selections.clear();
    listeners.forEach(listener => listener());
};
