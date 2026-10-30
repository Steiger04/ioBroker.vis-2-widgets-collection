/**
 * Effect key for syncing foreign backend changes into the iro pickers.
 *
 * @module Light2CollectionWidget/backendSyncKey
 * @remarks
 * `hasBackendChange` (useValueState) is a state, not an event: it stays `true`
 * across consecutive foreign changes, so an effect keyed on the flag alone
 * misses every change after the first. The key carries the value of each
 * FLAGGED channel only — it changes on every foreign change of a flagged
 * channel, but not on an own write to an unflagged one (which would re-init
 * the picker mid-drag).
 */

/** One bound OID channel as seen by a picker sync effect. */
export interface SyncChannel {
    /** `hasBackendChange` of the channel. */
    changed: boolean;
    /** Current value of the channel. */
    value: unknown;
}

/**
 * Builds the sync effect key for the given channels.
 *
 * @param channels - The channels the effect syncs, in a fixed order.
 * @returns A key that changes with every foreign change of a flagged channel,
 *   or `null` when no channel is flagged (nothing to sync).
 */
export function backendSyncKey(channels: SyncChannel[]): string | null {
    const flagged = channels.flatMap((channel, index) => (channel.changed ? [[index, channel.value ?? null]] : []));

    return flagged.length ? JSON.stringify(flagged) : null;
}
