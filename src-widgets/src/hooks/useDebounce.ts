import { useContext, useEffect, useRef, useMemo } from 'react';
import { Subject, debounceTime, throttleTime } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import type { DelayFieldsRxData } from '../lib/delayFields';

/**
 * Interface für OID-Objekt Parameter
 */
interface OidObject {
    _id: string;
    name: string;
    type: string;
}

/**
 * Interface für useDebounce Parameter
 */
interface UseDebounceParams {
    oidObject: OidObject | undefined;
    data: DelayFieldsRxData;
}

/**
 * Interface für den Return-Typ des useDebounce Hooks
 */
interface UseDebounceReturn {
    next: (value: string | number | boolean) => void;
}

/**
 * Hook für verzögerte Wert-Übertragung mit Debounce/Throttle
 * Unterstützt sowohl Debouncing als auch Throttling basierend auf Konfiguration
 */
function useDebounce({
    oidObject,
    data: { sampleInterval, sampleIntervalValue, delay },
}: UseDebounceParams): UseDebounceReturn | null {
    const { setValue } = useContext(CollectionContext);
    const delayDurationRef = useRef(new Subject<string | number | boolean>());

    // Memoization der Delay-Berechnung für bessere Performance
    const _delay = useMemo(() => {
        const intervalValue = Number(sampleIntervalValue);
        const delayValue = Number(delay);
        return sampleInterval ? intervalValue : delayValue;
    }, [sampleInterval, sampleIntervalValue, delay]);

    const oid = oidObject?._id;

    useEffect(() => {
        if (!oid) {
            return;
        }

        const delayDurationSubscription = delayDurationRef.current
            .pipe(
                sampleInterval
                    ? throttleTime(_delay, undefined, { leading: false, trailing: true })
                    : debounceTime(_delay),
            )
            .subscribe((value: string | number | boolean) => {
                /* console.log(
					`useDebounce -> delayDuration -> oid, value: ${oid}. ${value}`,
				); */
                setValue(oid, value);
            });

        return () => {
            delayDurationSubscription.unsubscribe();
        };
    }, [oid, setValue, sampleInterval, _delay]);

    // Memoization des Return-Werts
    return useMemo(() => {
        return oid ? delayDurationRef.current : null;
    }, [oid]);
}

export default useDebounce;
