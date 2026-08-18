/**
 * Client-side `getHistory` wrapper with a timeout guard and Auto-instance resolution.
 *
 * @module EchartsCollectionWidget/historyFetcher
 * @remarks
 * ioBroker's `LegacyConnection.getHistory(id, options)` returns a `Promise` (NOT callback-based)
 * and has no internal timeout, so a non-responding backend hangs the promise — and `loading` —
 * forever (the "eternal spinner"). This races the real promise against a client-side timer.
 *
 * **Auto instance**: without `instance`, the server picks ONE GLOBAL instance
 * (js-controller: `system.config.defaultHistory` → any storage-type adapter → literal
 * `history.0`) — it never looks at the datapoint, so the chosen instance often has no data for
 * the requested OID. "Auto" here therefore resolves the instance the datapoint itself names:
 * the first history adapter configured on it (`common.custom` — the adapters enabled in the
 * admin's OID settings). Only when the datapoint configures none does the `instance` key stay
 * absent and the server decide. Shared by the live widget body and the editor preview.
 */
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

/** Client-side timeout (ioBroker does not reliably honor the `timeout` option). */
const HISTORY_FETCH_TIMEOUT_MS = 12_000;

/**
 * Pick the Auto instance from a datapoint object: the first history adapter configured on the
 * datapoint (`common.custom` keys are instance IDs like `sql.0`), or null when none is.
 *
 * @param obj - The datapoint object as returned by `socket.getObject` (may be null/undefined).
 */
export const pickAutoInstance = (obj: unknown): string | null => {
    const custom = (obj as { common?: { custom?: Record<string, unknown> } } | null | undefined)?.common?.custom;
    const first = custom && Object.keys(custom)[0];
    return first || null;
};

/**
 * Build a timeout-guarded `getHistory` bound to a socket.
 *
 * @param socket - The raw LegacyConnection from the widget context / editor props.
 * @returns `(id, options) => Promise<{ts, val}[]>` that rejects on timeout; resolves the Auto
 * instance per OID (cached for the fetcher's lifetime) before the actual fetch.
 */
export const createHistoryFetcher =
    (socket: LegacyConnection) =>
    (id: string, options: ioBroker.GetHistoryOptions): Promise<{ ts: number; val: ioBroker.StateValue | null }[]> => {
        // Auto resolution cache, per fetcher (= per socket): an OID's configured history
        // adapter rarely changes while a fetcher lives.
        const autoInstances = new Map<string, string | null>();
        const resolveAutoInstance = async (): Promise<string | null> => {
            const cached = autoInstances.get(id);
            if (cached !== undefined) {
                return cached;
            }
            let resolved: string | null = null;
            try {
                resolved = pickAutoInstance(await socket.getObject(id));
            } catch {
                resolved = null; // unreadable object → let the server decide
            }
            autoInstances.set(id, resolved);
            return resolved;
        };

        // ioBroker does not reliably honor a `timeout` option (it is not part of the typed
        // GetHistoryOptions anyway), so the client-side race below is the real guard — it must
        // span the Auto resolution AND the fetch.
        const real = (async (): Promise<{ ts: number; val: ioBroker.StateValue | null }[]> => {
            const opts = { ...options };
            if (!opts.instance) {
                const auto = await resolveAutoInstance();
                if (auto) {
                    opts.instance = auto;
                }
            }
            return socket.getHistory(id, opts) as Promise<
                {
                    ts: number;
                    val: ioBroker.StateValue | null;
                }[]
            >;
        })();

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
