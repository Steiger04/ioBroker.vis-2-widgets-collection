/**
 * Sentinel value for optimistic updates.
 *
 * @module lib/constants
 * @remarks
 * This value is used as an intentionally unrealistic `.lc` (lastChange) timestamp to indicate that a local
 * state update has not been confirmed by the backend yet.
 */
export const VALUE_NOT_CHANGED_TIMESTAMP = 1111111111111;
