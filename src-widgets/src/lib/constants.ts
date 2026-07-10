/**
 * Shared constants for the widget collection.
 *
 * @module lib/constants
 */

/**
 * Sentinel value for optimistic updates.
 *
 * @remarks
 * This value is used as an intentionally unrealistic `.lc` (lastChange) timestamp to indicate that a local
 * state update has not been confirmed by the backend yet.
 */
export const VALUE_NOT_CHANGED_TIMESTAMP = 1111111111111;

/**
 * ioBroker state id that stores the user-supplied MUI theme JSON.
 *
 * @remarks
 * The adapter is `singleton: true`, so the instance is always `0`.
 * The state is declared in `io-package.json` under `instanceObjects`
 * and created by the ioBroker controller on instance installation.
 * Written by the {@link module:ThemeConfigWizard} palette wizard and
 * read/subscribed by {@link module:components/CollectionProvider}.
 */
export const THEME_STATE_ID = 'vis-2-widgets-collection.0.theme';
