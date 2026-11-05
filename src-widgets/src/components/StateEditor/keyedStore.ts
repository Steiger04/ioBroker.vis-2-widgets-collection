/**
 * The module-state mechanics the Zustandseditor's fields share through: one value per key,
 * subscribable from React.
 *
 * @module components/StateEditor/keyedStore
 * @remarks
 * The fields of one „Werte" group are separate vis-2 custom fields (own React subtrees), so the
 * row selection (`stateRowSelection`) and the search (`stateRowListStore`) live in module state
 * of the widget bundle, keyed by view + selected widgets (`stateRowSelectionKey`). Values last
 * until the page reloads; changing one writes no project data.
 */
import { useSyncExternalStore } from 'react';

/** One value per key, with change notification. */
export type KeyedStore<T> = {
    /** The value of a key; `undefined` while none is set. */
    get: (key: string) => T | undefined;
    /** Sets (or, with `undefined`, removes) the value of a key; subscribers hear of a change only. */
    set: (key: string, value: T | undefined) => void;
    /** The value of a key, re-rendering the calling component when it changes. */
    use: (key: string) => T | undefined;
    /** Forgets every value — for tests (the editor keeps them until the page reloads). */
    clear: () => void;
};

/**
 * Creates an empty keyed store.
 *
 * @returns The store.
 */
export const createKeyedStore = <T>(): KeyedStore<T> => {
    const values = new Map<string, T>();
    const listeners = new Set<() => void>();
    const notify = (): void => listeners.forEach(listener => listener());
    const subscribe = (listener: () => void): (() => void) => {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    };
    const get = (key: string): T | undefined => values.get(key);

    return {
        get,
        set: (key, value) => {
            if (values.get(key) === value) {
                return;
            }
            if (value === undefined) {
                values.delete(key);
            } else {
                values.set(key, value);
            }
            notify();
        },
        use: key => useSyncExternalStore(subscribe, () => get(key)),
        clear: () => {
            values.clear();
            notify();
        },
    };
};
