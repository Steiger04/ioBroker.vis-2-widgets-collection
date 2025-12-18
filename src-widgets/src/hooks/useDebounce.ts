/**
 * Hook that creates an RxJS pipeline to debounce or throttle outgoing value writes.
 *
 * @module hooks/useDebounce
 * @remarks
 * This hook provides a stable `next()` function that schedules backend writes via
 * `CollectionContext.setValue`. It recreates the RxJS subscription when the OID or
 * delay mode changes and ensures proper cleanup on unmount.
 */

import { useContext, useEffect, useMemo, useRef } from 'react';
import { Subject, debounceTime, throttleTime, type Subscription } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import type { DelayFieldsRxData, OidObject } from '../types';

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
}

/**
 * Creates a debounced/throttled writer for a given OID.
 *
 * @param params - Hook parameters.
 * @param params.oidObject - Selected OID object (must contain `_id`).
 * @param params.data - Delay configuration.
 * @returns A writer with `next()`, or `null` if no OID is selected.
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

    const subjectRef = useRef<Subject<string | number | boolean>>();
    const subscriptionRef = useRef<Subscription | null>(null);
    const setValueRef = useRef(setValue);
    setValueRef.current = setValue;
    const oid = oidObject?._id;

    const _delay = useMemo(() => {
        const intervalValue = Number(sampleIntervalValue);
        const delayValue = Number(delay);
        return sampleInterval ? intervalValue : delayValue;
    }, [sampleInterval, sampleIntervalValue, delay]);

    useEffect(() => {
        if (!subjectRef.current) {
            subjectRef.current = new Subject<string | number | boolean>();
        }

        if (!oid) {
            return undefined;
        }

        const subject = subjectRef.current;

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
    };
}

export default useDebounce;
