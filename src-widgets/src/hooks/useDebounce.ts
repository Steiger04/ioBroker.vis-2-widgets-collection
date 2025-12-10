import { useContext, useEffect, useMemo, useRef } from 'react';
import { Subject, debounceTime, throttleTime, type Subscription } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import type { DelayFieldsRxData } from '../lib/delayFields';

/**
 * Unterstützte OID-Typen für die Wertkonvertierung
 */
export type OidType = 'string' | 'number' | 'boolean' | 'mixed';

/**
 * Interface für OID-Objekt Parameter
 */
export interface OidObject {
    _id: string;
    name: string;
    type: OidType;
}

/**
 * Interface für useDebounce Parameter
 */
interface UseDebounceParams {
    /** Das OID-Objekt mit State-Informationen */
    oidObject: OidObject | undefined;
    /** Die Delay-Konfiguration aus den Widget-Daten */
    data: DelayFieldsRxData;
}

/**
 * Interface für den Return-Typ des useDebounce Hooks
 */
export interface UseDebounceReturn {
    /** Funktion zum Senden eines neuen Werts an das Debounce-Observable */
    next: (value: string | number | boolean) => void;
}

/**
 * Hook für verzögerte Wert-Übertragung mit Debounce/Throttle.
 */
function useDebounce({
    oidObject,
    data: { sampleInterval, sampleIntervalValue, delay },
}: UseDebounceParams): UseDebounceReturn | null {
    const { setValue } = useContext(CollectionContext);

    // Stabile Referenzen für RxJS-Objekte und setValue
    const subjectRef = useRef<Subject<string | number | boolean>>();
    const subscriptionRef = useRef<Subscription | null>(null);
    const setValueRef = useRef(setValue);
    setValueRef.current = setValue;
    const oid = oidObject?._id;

    // Memoization der Delay-Berechnung für bessere Performance
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
