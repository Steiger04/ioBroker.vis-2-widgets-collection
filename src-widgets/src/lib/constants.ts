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
 * Default debounce delay of a write in ms — the `delay` field's default.
 *
 * @remarks
 * One value for the field ({@link module:lib/delayFields}) and the write path: a missing or
 * non-numeric configured delay debounces with it ({@link module:hooks/useDebounce}).
 */
export const DEFAULT_WRITE_DELAY_MS = 300;

/**
 * Default throttle interval of a write in ms — the `sampleIntervalValue` field's default.
 *
 * @remarks
 * One value for the field ({@link module:lib/delayFields}) and the write path: in sampling mode a
 * missing or non-numeric configured interval throttles with it ({@link module:hooks/useDebounce}).
 */
export const DEFAULT_SAMPLE_INTERVAL_MS = 200;

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
