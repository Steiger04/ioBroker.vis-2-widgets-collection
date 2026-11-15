/**
 * The one place where the stored user theme is read (ADR-0020, ADR-0115).
 *
 * @module lib/theme/storedTheme
 * @remarks
 * The theme lives as JSON text in one ioBroker state
 * ({@link module:lib/constants.THEME_STATE_ID}). Whoever holds that state's value — the canvas
 * widgets ({@link module:hooks/useCollectionTheme}), the Studio session
 * ({@link module:ThemeConfigWizard/useStudioSession}) — turns it into a user theme here, and
 * only here, so they never read the same state differently. JSON is touched only at this
 * boundary; what counts as a usable value is decided by
 * {@link module:lib/theme/validateTheme.validateThemeOptions} alone. How they come by the
 * value — once now, and again with every change — is here as well ({@link followThemeState}).
 *
 * Reading follows the Rückfall-Regel (ADR-0115): an unusable value falls away, the rest holds.
 * "One value" is the smallest value the validator names in an error:
 * - a single setting (a number out of range, a wrong type, a value that is not allowed);
 * - a setting with alternative shapes as a whole (`spacing`, `cssVariables`) — the validator
 *   reports the setting, not the part that broke it;
 * - of an accent colour slot (`palette.primary` …) the one colour that is unusable, as long as
 *   the slot holds without it — without its main colour it does not, and falls as a whole;
 * - for an entry of a list, the whole list: positions carry meaning (`shadows` by elevation, the
 *   faces of a Google font), so removing one entry would shift or thin out the others.
 *
 * A branch left empty by this falls away too, as it does when the Studio clears a field.
 * Writing stays strict: the Studio validates a draft before it saves
 * ({@link module:ThemeConfigWizard/studioSessionSteps.validateDraft}).
 */

import { THEME_STATE_ID } from '../constants';
import type { ThemeValueKeys, UserTheme } from './themeTypes';
import { isPlainObject } from './themeUtils';
import { validateThemeOptions } from './validateTheme';

import type { Connection } from '@iobroker/gui-components';

/**
 * Follows the theme state: reads its value now and takes every later one.
 *
 * @param socket - The ioBroker connection.
 * @param onValue - Takes the state's `val` (to be read with {@link parseStoredTheme}): once for
 *   the read, and once per reported change. Never called after following has stopped — also
 *   not for a report that was on its way then.
 * @param onRead - Called once the read has an answer, whether a value or an error.
 * @returns Stops following.
 */
export function followThemeState(
    socket: Pick<Connection, 'getState' | 'subscribeState' | 'unsubscribeState'>,
    onValue: (val: unknown) => void,
    onRead?: () => void,
): () => void {
    let active = true;
    const onChange = (_id: string, state: ioBroker.State | null | undefined): void => {
        if (active) {
            onValue(state?.val);
        }
    };
    socket
        .getState(THEME_STATE_ID)
        .then((state: ioBroker.State | null | undefined) => {
            if (active) {
                onValue(state?.val);
            }
        })
        .catch((e: unknown) => console.error(`Cannot read theme state ${THEME_STATE_ID}: ${e}`))
        .finally(() => {
            if (active) {
                onRead?.();
            }
        });
    socket
        .subscribeState(THEME_STATE_ID, onChange)
        .catch((e: unknown) => console.error(`Cannot subscribe theme state ${THEME_STATE_ID}: ${e}`));
    return () => {
        active = false;
        // Connection.unsubscribeState returns void, not a Promise, so a failure cannot be
        // chained — and must not break an effect cleanup (React StrictMode double-invoke,
        // unmount).
        try {
            socket.unsubscribeState(THEME_STATE_ID, onChange);
        } catch (e) {
            console.error(`Cannot unsubscribe theme state ${THEME_STATE_ID}: ${e}`);
        }
    };
}

/** The state's value as parsed JSON; `undefined` when it is no JSON text. */
function parseJson(raw: unknown): unknown {
    if (typeof raw !== 'string' || !raw) {
        return undefined;
    }
    try {
        return JSON.parse(raw);
    } catch {
        return undefined;
    }
}

/**
 * The keys of the value that falls away for an error at `keys`: the value itself, or the list
 * it sits in (the keys up to the first list position).
 */
function unusableValueKeys(keys: ThemeValueKeys): string[] {
    const own: string[] = [];
    for (const key of keys) {
        if (typeof key === 'number') {
            break;
        }
        own.push(key);
    }
    return own;
}

/**
 * Removes the value at `keys` from `node`, and every branch the removal leaves empty.
 * A value that is already gone (a second error in the same list) is left alone.
 */
function removeValue(node: Record<string, unknown>, keys: string[]): void {
    const [key, ...rest] = keys;
    if (rest.length === 0) {
        delete node[key];
        return;
    }
    const child = node[key];
    if (!isPlainObject(child)) {
        return;
    }
    removeValue(child, rest);
    if (Object.keys(child).length === 0) {
        delete node[key];
    }
}

/**
 * Turns the value of the theme state into a user theme — reading never fails, whatever the
 * state holds.
 *
 * @param raw - The state's `val`.
 * @returns The stored theme without its unusable values. The empty theme when the state is
 *   unset, empty, no JSON, or JSON that is not an object.
 */
export function parseStoredTheme(raw: unknown): UserTheme {
    const stored = parseJson(raw);
    const result = validateThemeOptions(stored);
    if (result.isValid) {
        return result.theme ?? {};
    }
    // `stored` is this call's own parse result, so the unusable values are removed in place.
    for (const issue of result.issues) {
        if (issue.severity !== 'error') {
            continue;
        }
        const keys = unusableValueKeys(issue.keys ?? []);
        if (keys.length === 0 || !isPlainObject(stored)) {
            // The theme as a whole is unusable (not an object).
            return {};
        }
        removeValue(stored, keys);
    }
    // Nothing the validator rejects ever leaves this function: what is left is checked again
    // (an error that names no removable value would otherwise slip through).
    return validateThemeOptions(stored).theme ?? {};
}
