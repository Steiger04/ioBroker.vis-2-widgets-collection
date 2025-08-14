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
    lastSampleInterval?: boolean;
    lastDelay?: number;
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
        observableKey: string,
        setValue: (id: string, value: string | number | boolean) => void,
        sampleInterval: boolean,
        delay: number,
    ): ObservableEntry {
        if (!this.observables.has(observableKey)) {
            const subject = new Subject<string | number | boolean>();
            this.observables.set(observableKey, {
                subject,
                subscription: null,
                lastValue: null,
                lastSampleInterval: undefined,
                lastDelay: undefined,
            });
        }

        const observable = this.observables.get(observableKey)!;

        // Prüfe ob Parameter geändert wurden und erstelle neue Subscription
        const needsNewSubscription =
            !observable.subscription ||
            observable.lastSampleInterval !== sampleInterval ||
            observable.lastDelay !== delay;

        if (needsNewSubscription) {
            // Alte Subscription entfernen falls vorhanden
            if (observable.subscription) {
                observable.subscription.unsubscribe();
            }

            // Neue Subscription erstellen
            observable.subscription = observable.subject
                .pipe(
                    sampleInterval
                        ? throttleTime(delay, undefined, { leading: false, trailing: true })
                        : debounceTime(delay),
                )
                .subscribe((value: string | number | boolean) => {
                    // Extrahiere OID aus dem observableKey (Format: "oid::widgetId")
                    const oid = observableKey.split('::')[0];

                    setValue(oid, value);
                    observable.lastValue = null; // Reset nach erfolgreichem Schreibvorgang
                });

            // Parameter für nächste Vergleiche speichern
            observable.lastSampleInterval = sampleInterval;
            observable.lastDelay = delay;
        }

        return observable;
    }

    cleanup(observableKey: string): void {
        const observable = this.observables.get(observableKey);
        if (observable?.subscription) {
            observable.subscription.unsubscribe();
            observable.subscription = null;
        }
        // Wichtig: Observable nicht löschen, damit Timer weiterlaufen können
    }

    next(observableKey: string, value: string | number | boolean): void {
        const observable = this.observables.get(observableKey);
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
    const { setValue, id: widgetId } = useContext(CollectionContext);
    const storeRef = useRef(GlobalDebounceStore.getInstance());

    // Memoization der Delay-Berechnung für bessere Performance
    const _delay = useMemo(() => {
        const intervalValue = Number(sampleIntervalValue);
        const delayValue = Number(delay);
        return sampleInterval ? intervalValue : delayValue;
    }, [sampleInterval, sampleIntervalValue, delay]);

    const oid = oidObject?._id;
    // Eindeutiger Schlüssel: oid + widgetId für widget-spezifische Debounce-Settings
    const observableKey = oid ? `${oid}::${widgetId}` : null;

    useEffect(() => {
        if (!observableKey) {
            return;
        }

        // Erstelle oder hole persistentes Observable aus dem globalen Store
        storeRef.current.getOrCreateObservable(observableKey, setValue, Boolean(sampleInterval), _delay);

        // Cleanup: Observable läuft weiter - kein Cleanup nötig
        return () => {
            // Bewusst leer - Observable soll weiterlaufen für persistente Debounce-Timer
        };
    }, [observableKey, setValue, sampleInterval, _delay]);

    // Next-Funktion nutzt globalen Store
    const next = useMemo(() => {
        return (value: string | number | boolean) => {
            if (observableKey) {
                storeRef.current.next(observableKey, value);
            }
        };
    }, [observableKey]);

    // Memoization des Return-Werts
    return useMemo(() => {
        return observableKey ? { next } : null;
    }, [observableKey, next]);
}

export default useDebounce;
