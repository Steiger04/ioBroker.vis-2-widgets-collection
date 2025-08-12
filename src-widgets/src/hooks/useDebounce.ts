import { useContext, useEffect, useRef, useMemo } from 'react';
import { Subject, debounceTime, throttleTime, type Subscription } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import type { DelayFieldsRxData } from '../lib/delayFields';

/**
 * Interface für Observable-Eintrag
 */
interface ObservableEntry {
    subject: Subject<string | number | boolean>;
    subscription: Subscription | null;
    lastValue: string | number | boolean | null;
}

/**
 * Globaler Store für persistente Debounce-Observables
 * Diese überleben den Komponenten-Lebenszyklus
 */
class GlobalDebounceStore {
    private static instance: GlobalDebounceStore;
    private observables: Map<string, ObservableEntry> = new Map();

    static getInstance(): GlobalDebounceStore {
        if (!GlobalDebounceStore.instance) {
            GlobalDebounceStore.instance = new GlobalDebounceStore();
        }
        return GlobalDebounceStore.instance;
    }

    getOrCreateObservable(
        oid: string,
        setValue: (id: string, value: string | number | boolean) => void,
        sampleInterval: boolean,
        delay: number,
    ): ObservableEntry {
        if (!this.observables.has(oid)) {
            const subject = new Subject<string | number | boolean>();
            this.observables.set(oid, {
                subject,
                subscription: null,
                lastValue: null,
            });
        }

        const observable = this.observables.get(oid)!;

        // Erstelle neue Subscription falls noch keine existiert oder Parameter geändert wurden
        if (!observable.subscription) {
            observable.subscription = observable.subject
                .pipe(
                    sampleInterval
                        ? throttleTime(delay, undefined, { leading: false, trailing: true })
                        : debounceTime(delay),
                )
                .subscribe((value: string | number | boolean) => {
                    console.log(`GlobalDebounce -> Writing value ${value} to ${oid} after ${delay}ms delay`);
                    setValue(oid, value);
                    observable.lastValue = null; // Reset nach erfolgreichem Schreibvorgang
                });
        }

        return observable;
    }

    cleanup(oid: string): void {
        const observable = this.observables.get(oid);
        if (observable?.subscription) {
            observable.subscription.unsubscribe();
            observable.subscription = null;
        }
        // Wichtig: Observable nicht löschen, damit Timer weiterlaufen können
    }

    next(oid: string, value: string | number | boolean): void {
        const observable = this.observables.get(oid);
        if (observable) {
            observable.lastValue = value;
            observable.subject.next(value);
        }
    }
}

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
 * Nutzt globalen Store für persistente Observables, die den Komponenten-Lebenszyklus überleben
 */
function useDebounce({
    oidObject,
    data: { sampleInterval, sampleIntervalValue, delay },
}: UseDebounceParams): UseDebounceReturn | null {
    const { setValue } = useContext(CollectionContext);
    const storeRef = useRef(GlobalDebounceStore.getInstance());

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

        // Erstelle oder hole persistentes Observable aus dem globalen Store
        storeRef.current.getOrCreateObservable(oid, setValue, Boolean(sampleInterval), _delay);

        // Cleanup: Observable läuft weiter - kein Cleanup nötig
        return () => {
            // Bewusst leer - Observable soll weiterlaufen für persistente Debounce-Timer
        };
    }, [oid, setValue, sampleInterval, _delay]);

    // Next-Funktion nutzt globalen Store
    const next = useMemo(() => {
        return (value: string | number | boolean) => {
            if (oid) {
                storeRef.current.next(oid, value);
            }
        };
    }, [oid]);

    // Memoization des Return-Werts
    return useMemo(() => {
        return oid ? { next } : null;
    }, [oid, next]);
}

export default useDebounce;
