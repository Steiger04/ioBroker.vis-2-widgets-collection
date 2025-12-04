import { useContext, useEffect, useMemo, useRef } from 'react';
import { Subject, debounceTime, throttleTime, type Subscription } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';
import type { DelayFieldsRxData } from '../lib/delayFields';

/**
 * Unterstützte OID-Typen für die Wertkonvertierung
 */
export type OidType = 'string' | 'number' | 'boolean' | 'mixed';

/**
 * Type-safe Key-Format für Observable-Identifikation.
 * Format: "oid::widgetId"
 */
type ObservableKey = `${string}::${string}`;

/**
 * Erstellt einen typsicheren Observable-Key aus OID und Widget-ID.
 *
 * @param oid - Die Object-ID des ioBroker-States
 * @param widgetId - Die eindeutige Widget-ID
 * @returns Ein typsicherer ObservableKey im Format "oid::widgetId"
 * @example createObservableKey('javascript.0.myState', 'w00001') // Returns: 'javascript.0.myState::w00001'
 */
function createObservableKey(oid: string, widgetId: string): ObservableKey {
    return `${oid}::${widgetId}`;
}

/**
 * Parsed einen ObservableKey zurück in seine Bestandteile.
 *
 * @param key - Der zu parsende ObservableKey
 * @returns Ein Objekt mit oid und widgetId
 * @throws Error wenn das Key-Format ungültig ist
 * @example parseObservableKey('javascript.0.myState::w00001') // Returns: { oid: 'javascript.0.myState', widgetId: 'w00001' }
 */
function parseObservableKey(key: ObservableKey): { oid: string; widgetId: string } {
    const separatorIndex = key.lastIndexOf('::');
    if (separatorIndex === -1) {
        throw new Error(`Invalid ObservableKey format: "${key}". Expected format: "oid::widgetId"`);
    }
    return {
        oid: key.substring(0, separatorIndex),
        widgetId: key.substring(separatorIndex + 2),
    };
}

/**
 * Callback-Typ für setValue-Funktion
 */
type SetValueCallback = (id: string, value: string | number | boolean) => void;

/**
 * Interface für Observable-Eintrag im GlobalDebounceStore.
 * Speichert alle notwendigen Daten für ein persistentes Debounce-Observable.
 */
interface ObservableEntry {
    /** Das RxJS Subject für Wert-Emissions */
    subject: Subject<string | number | boolean>;
    /** Die aktive Subscription auf das Subject */
    subscription: Subscription | null;
    /** Die OID, die diesem Observable zugeordnet ist (für effiziente Lookups) */
    oid: string;
    /** Referenz auf die aktuelle setValue-Funktion (wird bei Updates aktualisiert) */
    setValueRef: { current: SetValueCallback };
    /** Letzter sampleInterval-Wert für Änderungserkennung */
    lastSampleInterval?: boolean;
    /** Letzter delay-Wert für Änderungserkennung */
    lastDelay?: number;
}

/**
 * Globaler Store für persistente Debounce-Observables.
 * Diese überleben den Komponenten-Lebenszyklus.
 *
 * HINWEIS: Observables werden standardmäßig nicht automatisch entfernt, um persistente
 * Debounce-Timer zu ermöglichen. Bei Anwendungen mit sehr vielen dynamischen Widgets
 * könnte dies zu erhöhtem Speicherverbrauch führen. Verwenden Sie den Parameter
 * `persistOnUnmount: false` oder die `destroy()`-Methode, um Observables explizit zu entfernen.
 *
 * @example
 * // Observable wird bei Unmount automatisch entfernt:
 * useDebounce({ oidObject, data, persistOnUnmount: false });
 *
 * // Observable bleibt persistent (Standard):
 * useDebounce({ oidObject, data });
 */
class GlobalDebounceStore {
    private static instance: GlobalDebounceStore;
    private observables: Map<ObservableKey, ObservableEntry> = new Map();

    static getInstance(): GlobalDebounceStore {
        if (!GlobalDebounceStore.instance) {
            GlobalDebounceStore.instance = new GlobalDebounceStore();
        }
        return GlobalDebounceStore.instance;
    }

    /**
     * Erstellt oder holt ein bestehendes Observable aus dem Store.
     * Bei Änderungen von sampleInterval oder delay wird eine neue Subscription erstellt.
     * setValue-Änderungen aktualisieren nur die Referenz ohne neue Subscription.
     */
    getOrCreateObservable(
        observableKey: ObservableKey,
        setValueRef: { current: SetValueCallback },
        sampleInterval: boolean,
        delay: number,
        onError?: (error: unknown) => void,
    ): ObservableEntry {
        if (!this.observables.has(observableKey)) {
            // Parse OID einmalig beim Erstellen und speichern
            const { oid } = parseObservableKey(observableKey);
            const subject = new Subject<string | number | boolean>();
            this.observables.set(observableKey, {
                subject,
                subscription: null,
                oid,
                setValueRef,
                lastSampleInterval: undefined,
                lastDelay: undefined,
            });
        }

        const observable = this.observables.get(observableKey)!;

        // Aktualisiere setValue-Referenz (ohne neue Subscription zu erstellen)
        observable.setValueRef = setValueRef;

        // Prüfe ob Timing-Parameter geändert wurden (nur diese erfordern neue Subscription)
        const needsNewSubscription =
            !observable.subscription ||
            observable.lastSampleInterval !== sampleInterval ||
            observable.lastDelay !== delay;

        if (needsNewSubscription) {
            // Alte Subscription entfernen falls vorhanden
            if (observable.subscription) {
                observable.subscription.unsubscribe();
            }

            // Neue Subscription erstellen mit Error Handling
            observable.subscription = observable.subject
                .pipe(
                    sampleInterval
                        ? throttleTime(delay, undefined, { leading: false, trailing: true })
                        : debounceTime(delay),
                )
                .subscribe({
                    next: (value: string | number | boolean) => {
                        // Verwende gespeicherte OID statt String-Split
                        observable.setValueRef.current(observable.oid, value);
                    },
                    error: (error: unknown) => {
                        console.error(`[useDebounce] Subscription error for key "${observableKey}":`, error);
                        onError?.(error);
                    },
                });

            // Parameter für nächste Vergleiche speichern
            observable.lastSampleInterval = sampleInterval;
            observable.lastDelay = delay;
        }

        return observable;
    }

    /**
     * Sendet einen neuen Wert an das Observable.
     * Der Wert wird nach der konfigurierten Debounce/Throttle-Zeit an setValue weitergeleitet.
     *
     * @param observableKey - Der Key des Observables
     * @param value - Der zu sendende Wert
     * @example store.next('myState::w00001', 42)
     */
    next(observableKey: ObservableKey, value: string | number | boolean): void {
        const observable = this.observables.get(observableKey);
        if (observable) {
            observable.subject.next(value);
        }
    }

    /**
     * Entfernt ein Observable vollständig aus dem Store.
     * Sollte aufgerufen werden, wenn ein Widget endgültig zerstört wird
     * und keine weiteren Debounce-Timer benötigt werden.
     *
     * @param observableKey - Der Key des zu entfernenden Observables
     * @example store.destroy('myState::w00001')
     */
    destroy(observableKey: ObservableKey): void {
        const observable = this.observables.get(observableKey);
        if (observable) {
            if (observable.subscription) {
                observable.subscription.unsubscribe();
            }
            observable.subject.complete();
            this.observables.delete(observableKey);
        }
    }
}

// Singleton-Instanz für direkten Zugriff
const debounceStore = GlobalDebounceStore.getInstance();

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
    /**
     * Wenn false, wird das Observable bei Component-Unmount zerstört.
     * Wenn true (Standard), bleibt das Observable für persistente Debounce-Timer erhalten.
     *
     * @default true
     */
    persistOnUnmount?: boolean;
    /**
     * Optionaler Error-Handler für Subscription-Fehler.
     * Wird aufgerufen, wenn ein Fehler in der RxJS-Subscription auftritt.
     */
    onError?: (error: unknown) => void;
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
 *
 * Nutzt globalen Store für persistente Observables, die den Komponenten-Lebenszyklus überleben.
 * Dies ermöglicht es, dass Debounce-Timer auch nach Re-Renders weiterlaufen.
 */
function useDebounce({
    oidObject,
    data: { sampleInterval, sampleIntervalValue, delay },
    persistOnUnmount = true,
    onError,
}: UseDebounceParams): UseDebounceReturn | null {
    const { setValue, id: widgetId } = useContext(CollectionContext);

    // Stabile Referenz für setValue um unnötige Re-Subscriptions zu vermeiden
    const setValueRef = useRef(setValue);
    setValueRef.current = setValue;

    // Memoization der Delay-Berechnung für bessere Performance
    const _delay = useMemo(() => {
        const intervalValue = Number(sampleIntervalValue);
        const delayValue = Number(delay);
        return sampleInterval ? intervalValue : delayValue;
    }, [sampleInterval, sampleIntervalValue, delay]);

    const oid = oidObject?._id;

    // Eindeutiger Schlüssel: oid + widgetId für widget-spezifische Debounce-Settings
    // Typsicher als ObservableKey erstellt
    const observableKey: ObservableKey | null = oid ? createObservableKey(oid, widgetId) : null;

    useEffect(() => {
        if (!observableKey) {
            return;
        }

        // Erstelle oder hole persistentes Observable aus dem globalen Store
        debounceStore.getOrCreateObservable(observableKey, setValueRef, sampleInterval, _delay, onError);

        // Cleanup-Funktion: Zerstört Observable bei Unmount wenn persistOnUnmount === false
        return () => {
            if (!persistOnUnmount) {
                debounceStore.destroy(observableKey);
            }
        };
    }, [observableKey, sampleInterval, _delay, persistOnUnmount, onError]);

    // Kombinierte Memoization für next-Funktion und Return-Objekt
    return useMemo(() => {
        if (!observableKey) {
            return null;
        }

        return {
            next: (value: string | number | boolean): void => {
                debounceStore.next(observableKey, value);
            },
        } as const;
    }, [observableKey]);
}

export default useDebounce;
