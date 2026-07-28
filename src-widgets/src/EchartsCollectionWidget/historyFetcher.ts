/**
 * Client-side `getHistory` wrapper with a timeout guard.
 *
 * @module EchartsCollectionWidget/historyFetcher
 * @remarks
 * ioBroker's `LegacyConnection.getHistory(id, options)` returns a `Promise` (NOT callback-based)
 * and has no internal timeout, so a non-responding backend hangs the promise — and `loading` —
 * forever (the "eternal spinner"). This races the real promise against a client-side timer.
 * Shared by the live widget body and the editor preview.
 */
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

/** Client-side timeout (ioBroker does not reliably honor the `timeout` option). */
const HISTORY_FETCH_TIMEOUT_MS = 12_000;

/**
 * Build a timeout-guarded `getHistory` bound to a socket.
 *
 * @param socket - The raw LegacyConnection from the widget context / editor props.
 * @returns `(id, options) => Promise<{ts, val}[]>` that rejects on timeout.
 */
export const createHistoryFetcher =
    (socket: LegacyConnection) =>
    (id: string, options: ioBroker.GetHistoryOptions): Promise<{ ts: number; val: ioBroker.StateValue | null }[]> => {
        // ioBroker does not reliably honor a `timeout` option (it is not part of the typed
        // GetHistoryOptions anyway), so the client-side race below is the real guard.
        const real = socket.getHistory(id, options) as Promise<{ ts: number; val: ioBroker.StateValue | null }[]>;
        let timer: ReturnType<typeof setTimeout> | undefined;
        const timeout = new Promise<never>((_, reject) => {
            timer = setTimeout(
                () => reject(new Error(`History fetch for "${id}" timed out`)),
                HISTORY_FETCH_TIMEOUT_MS,
            );
        });
        return Promise.race([real, timeout])
            .catch(err => {
                console.error('[echarts] getHistory failed:', { id, options, error: err });
                throw err;
            })
            .finally(() => timer && clearTimeout(timer));
    };
