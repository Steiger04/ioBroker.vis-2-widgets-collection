/**
 * Hook that creates an RxJS pipeline to debounce or throttle outgoing value writes.
 *
 * @module hooks/useDebounce
 * @remarks
 * This hook provides a stable `next()` function that schedules backend writes via
 * `CollectionContext.setValue`. It recreates the RxJS subscription when the OID or
 * delay mode changes and cleans up on unmount. If `oid` becomes missing/falsy, no
 * new subscription is created, but an existing subscription is left intact until
 * the component unmounts or you clean it up manually.
 *
 * The interval falls back to the delay fields' defaults (lib/delayFields) when the configured
 * value is missing, blank or not a number — 300 ms debounce, 200 ms throttle; an explicit `0`
 * stays `0` (the fields allow `min: 0`). Without the fallback, `Number(undefined)` would hand
 * `NaN` to RxJS and the write would fire after about 1 ms.
 *
 * `cancel()` drops the waiting value by replacing the subscription: the value goes down with the old
 * pipeline, there is no flag that could let it back. A Taster-Betätigung uses it (ADR-0110 Nr. 5).
 */

import { useContext, useEffect, useMemo, useRef } from 'react';
import { Subject, debounceTime, throttleTime, type Subscription } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import { DEFAULT_SAMPLE_INTERVAL_MS, DEFAULT_WRITE_DELAY_MS } from '../lib/constants';
import isNumber from '../lib/helper/isNumber';
import type { DelayFieldsRxData, OidObject } from '../types';

/**
 * A configured interval in ms, or the field default when the value is missing, blank or not a
 * finite number. An explicit `0` is kept.
 */
const intervalOr = (value: unknown, fieldDefault: number): number => {
    const ms = Number(value);

    return isNumber(value) && Number.isFinite(ms) ? ms : fieldDefault;
};

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
    const setValueRef = useRef(setValue);
    setValueRef.current = setValue;
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
                    sampleInterval
                        ? throttleTime(_delay, undefined, { leading: false, trailing: true })
                        : debounceTime(_delay),
                )
                .subscribe((value: string | number | boolean) => {
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
            // Without a live subscription nothing waits, and none may start after the cleanup.
            if (subscriptionRef.current) {
                connectRef.current?.();
            }
        },
    };
}

export default useDebounce;
