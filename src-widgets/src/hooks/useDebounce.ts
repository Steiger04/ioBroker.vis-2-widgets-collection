/**
 * Hook that creates an RxJS pipeline to debounce or throttle outgoing value writes.
 *
 * @module hooks/useDebounce
 * @remarks
 * This hook provides a stable `next()` function that schedules backend writes via
 * `CollectionContext.setValue`. It recreates the RxJS subscription when the OID or
 * delay mode changes and cleans up on unmount. If `oid` becomes missing/falsy, no
 * new subscription is created.
 *
 * A value still waiting when the component unmounts is sent then, through the same `setValue`
 * (ADR-0110 Nr. 14). It is tracked here because the operators cannot give it up at once:
 * `debounceTime` flushes when its source completes, but `throttleTime` keeps the trailing value
 * until its window ends. A changed OID or interval still drops the waiting value.
 *
 * The interval falls back to the delay fields' defaults (lib/delayFields) when the configured
 * value is missing, blank or not a number — 300 ms debounce, 200 ms throttle; an explicit `0`
 * stays `0` (the fields allow `min: 0`). Without the fallback, `Number(undefined)` would hand
 * `NaN` to RxJS and the write would fire after about 1 ms.
 *
 * `cancel()` drops the waiting value by replacing the subscription: the value goes down with the old
 * pipeline, and the unmount has nothing left to send. A Taster-Betätigung uses it (ADR-0110 Nr. 5).
 */

import { useContext, useEffect, useInsertionEffect, useMemo, useRef } from 'react';
import { Subject, debounceTime, tap, throttleTime, type Subscription } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import { DEFAULT_SAMPLE_INTERVAL_MS, DEFAULT_WRITE_DELAY_MS } from '../lib/constants';
import optionalNumber from '../lib/helper/optionalNumber';
import type { DelayFieldsRxData, OidObject } from '../types';

/**
 * A configured interval in ms, or the field default when the value is missing, blank or not a
 * finite number. An explicit `0` is kept.
 */
const intervalOr = (value: unknown, fieldDefault: number): number => optionalNumber(value) ?? fieldDefault;

/**
 * Parameters for {@link module:hooks/useDebounce.default}.
 */
interface UseDebounceParams {
    /** Selected OID metadata (including `_id`). */
    oidObject: OidObject | undefined;
    /** Delay configuration read from widget data. */
    data: DelayFieldsRxData;
}

/**
 * Return value for {@link module:hooks/useDebounce.default}.
 */
export interface UseDebounceReturn {
    /** Pushes a new value into the debounce/throttle stream. */
    next: (value: string | number | boolean) => void;
    /** Drops the value waiting in the stream, if any: it is never written. */
    cancel: () => void;
}

/**
 * Creates a debounced/throttled writer for a given OID.
 *
 * @param params - Hook parameters.
 * @param params.oidObject - Selected OID object (must contain `_id`).
 * @param params.data - Delay configuration.
 * @param params.data.sampleInterval - Debounce/throttle mode.
 * @param params.data.sampleIntervalValue - Throttle interval in milliseconds (default 200).
 * @param params.data.delay - Debounce delay before writing in milliseconds (default 300).
 * @returns A writer with `next()` and `cancel()`, or `null` if no OID is selected.
 * @example
 * ```ts
 * const writer = useDebounce({ oidObject, data: widget.data });
 * writer?.next(42);
 * ```
 */
function useDebounce({
    oidObject,
    data: { sampleInterval, sampleIntervalValue, delay },
}: UseDebounceParams): UseDebounceReturn | null {
    const { setValue } = useContext(CollectionContext);

    const subjectRef = useRef<Subject<string | number | boolean> | undefined>(undefined);
    const subscriptionRef = useRef<Subscription | null>(null);
    const connectRef = useRef<(() => void) | null>(null);
    const waitingRef = useRef<{ oid: string; value: string | number | boolean } | null>(null);
    const setValueRef = useRef(setValue);
    useInsertionEffect(() => {
        setValueRef.current = setValue;
    });
    const oid = oidObject?._id;

    const _delay = useMemo(
        () =>
            sampleInterval
                ? intervalOr(sampleIntervalValue, DEFAULT_SAMPLE_INTERVAL_MS)
                : intervalOr(delay, DEFAULT_WRITE_DELAY_MS),
        [sampleInterval, sampleIntervalValue, delay],
    );

    useEffect(() => {
        if (!subjectRef.current) {
            subjectRef.current = new Subject<string | number | boolean>();
        }

        // Only the unmount sends a waiting value: on a changed binding or interval it went down with
        // the old subscription, and its OID may no longer be the bound one.
        waitingRef.current = null;

        if (!oid) {
            return undefined;
        }

        const subject = subjectRef.current;

        const connect = (): void => {
            if (subscriptionRef.current) {
                subscriptionRef.current.unsubscribe();
            }

            subscriptionRef.current = subject
                .pipe(
                    tap((value: string | number | boolean) => {
                        waitingRef.current = { oid, value };
                    }),
                    sampleInterval
                        ? throttleTime(_delay, undefined, { leading: false, trailing: true })
                        : debounceTime(_delay),
                )
                .subscribe((value: string | number | boolean) => {
                    waitingRef.current = null;
                    setValueRef.current(oid, value);
                });
        };

        connect();
        connectRef.current = connect;

        return () => {
            if (subscriptionRef.current) {
                subscriptionRef.current.unsubscribe();
                subscriptionRef.current = null;
            }
        };
    }, [sampleInterval, _delay, oid]);

    useEffect(() => {
        return () => {
            if (subscriptionRef.current) {
                subscriptionRef.current.unsubscribe();
                subscriptionRef.current = null;
            }
            // By now the subscription is gone, in the effect above as well (cleanups run in declaration
            // order), so the operators' own end-of-stream flush cannot send the value a second time.
            if (waitingRef.current) {
                const { oid: waitingOid, value } = waitingRef.current;
                waitingRef.current = null;
                setValueRef.current(waitingOid, value);
            }
            if (subjectRef.current) {
                subjectRef.current.complete();
                // A completed Subject takes no more values: a StrictMode re-mount needs a new one.
                subjectRef.current = undefined;
            }
        };
    }, []);

    if (!oid) {
        return null;
    }

    return {
        next: (value: string | number | boolean): void => {
            subjectRef.current?.next(value);
        },
        cancel: (): void => {
            waitingRef.current = null;
            // Without a live subscription nothing waits, and none may start after the cleanup.
            if (subscriptionRef.current) {
                connectRef.current?.();
            }
        },
    };
}

export default useDebounce;
