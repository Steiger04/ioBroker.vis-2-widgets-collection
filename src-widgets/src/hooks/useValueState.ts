import { useCallback, useContext, useMemo, useRef } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import isNumber from '../lib/helper/isNumber';
import useData from './useData';
import useDebounce from './useDebounce';
import type { OidObject, OidType, CommonObjectFieldsRxData, DelayFieldsRxData } from '../types';
import { type VisRxWidgetState } from '@iobroker/types-vis-2';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';

/**
 * Konvertiert einen Wert basierend auf dem OID-Typ.
 *
 * @param value Der zu konvertierende Wert
 * @param oidType Der Zieltyp ('string' | 'number' | 'boolean' | 'mixed')
 * @returns Der konvertierte Wert oder undefined bei ungültiger Konvertierung
 */
function convertToOidType(
    value: string | number | boolean,
    oidType: OidType | undefined,
): string | number | boolean | undefined {
    switch (oidType) {
        case 'string':
            return String(value);
        case 'number':
            // Bei nicht-numerischen Eingaben wird undefined zurückgegeben
            return isNumber(value) ? Number(value) : undefined;
        /*
         * mixed-Typ: Versucht den Eingabewert intelligent zu konvertieren:
         * - "true"/"false" (case-insensitive) → boolean
         * - Numerische Werte → number
         * - Alles andere → string
         * Hinweis: Numerische Booleans (1/0) werden als Zahlen behandelt, nicht als Booleans.
         */
        case 'mixed':
            return /^true$/i.test(String(value))
                ? true
                : /^false$/i.test(String(value))
                  ? false
                  : isNumber(value)
                    ? Number(value)
                    : String(value);
        /*
         * boolean-Typ: Konvertiert den Eingabewert zu boolean.
         * Nur der String "true" (case-insensitive) ergibt true,
         * alle anderen Werte (inkl. "1", "yes", etc.) ergeben false.
         */
        case 'boolean':
            return /^true$/i.test(String(value));
        default:
            return value;
    }
}

/**
 * Prüft, ob eine Backend-Änderung signifikant ist (Differenz > 1) und daher synchronisiert werden soll.
 * Wird nur aufgerufen, wenn die Last-Change-Timestamps unterschiedlich sind.
 */
function isSignificantBackendChange(
    prevValue: string | number | boolean | undefined | null,
    currentValue: string | number | boolean | undefined | null,
): boolean {
    const prevStr = String(prevValue ?? '');
    const currStr = String(currentValue ?? '');

    if (prevStr === currStr) {
        return false;
    }

    const prevNum = Number(prevValue ?? 0);
    const currNum = Number(currentValue ?? 0);

    return Math.abs(prevNum - currNum) >= 1;
}

/**
 * Interface für den Return-Typ des useValueState Hooks
 */
interface UseValueStateReturn {
    value: string | number | boolean | undefined | null;
    hasBackendChange: boolean;
    /**
     * Aktualisiert den Wert im lokalen State und optional im Backend.
     *
     * @param value Der neue Wert (string, number oder boolean). null-Werte werden nicht unterstützt
     *              und führen zu einem frühen Return ohne State-Änderung.
     * @param skipBackendWrite Wenn true, wird nur der lokale State aktualisiert und der
     *                         Debounce-/Backend-Schreibvorgang übersprungen. Standard: false.
     */
    updateValue: (value: string | number | boolean, skipBackendWrite?: boolean) => void;
}

/**
 * Hook für Wert-State Management mit Typkonvertierung und Debouncing.
 * Verwendet OidObject aus types für präzise OID-Typisierung.
 * Unterstützt DelayFieldsRxData für Delay-Konfiguration.
 * Funktioniert mit allen Widget-Types. Widgets ohne DelayFieldsRxData
 * (Template, Gauge, Dialog) verwenden Default-Delay von 300ms.
 *
 * @param idName Der Name der OID-Property (z.B. 'oid', 'oid1', 'oid2')
 * @returns Objekt mit value, hasBackendChange und updateValue
 */
const useValueState = (idName: string): UseValueStateReturn => {
    const { setState, widget, getPropertyValue, values } = useContext(CollectionContext);
    const { data } = useData('oid');

    // Direkter Zugriff auf widget.data um Stale-Referenzen bei möglicher in-place Mutation zu vermeiden
    const oidObject = widget.data[`${idName}Object` as keyof CommonObjectFieldsRxData] as OidObject | undefined;

    const value = getPropertyValue(idName);
    const prevStateRef = useRef<{
        lc: number | undefined;
        value: string | number | boolean | undefined | null;
    }>({ lc: undefined, value: undefined });
    const ignoreUntilRef = useRef<number>(0);

    const delay =
        Number((data as Partial<DelayFieldsRxData>).delay ?? (widget.data as Partial<DelayFieldsRxData>).delay) || 300;

    const currentLc = oidObject?._id ? values[`${oidObject._id}.lc`] : undefined;
    const currentValue = oidObject?._id ? values[`${oidObject._id}.val`] : undefined;

    const hasBackendChange = useMemo(() => {
        if (!oidObject?._id) {
            return false;
        }

        if (currentLc === VALUE_NOT_CHANGED_TIMESTAMP) {
            prevStateRef.current = { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: currentValue };
            return false;
        }

        if (Date.now() < ignoreUntilRef.current) {
            prevStateRef.current = { lc: currentLc, value: currentValue };
            return false;
        }

        if (prevStateRef.current.lc === undefined) {
            prevStateRef.current = { lc: currentLc, value: currentValue };
            return false;
        }

        const lcChanged = prevStateRef.current.lc !== currentLc;
        const significantChange = isSignificantBackendChange(prevStateRef.current.value, currentValue);

        prevStateRef.current = { lc: currentLc, value: currentValue };

        return lcChanged && significantChange;
    }, [oidObject?._id, currentLc, currentValue]);

    const debounce = useDebounce({
        oidObject,
        data: {
            delay: (widget.data as Partial<DelayFieldsRxData>).delay,
            sampleInterval: (widget.data as Partial<DelayFieldsRxData>).sampleInterval,
            sampleIntervalValue: (widget.data as Partial<DelayFieldsRxData>).sampleIntervalValue,
        },
    });

    /**
     * Aktualisiert den Wert im lokalen State und optional im Backend.
     * null-Werte werden nicht unterstützt und führen zu einem frühen Return.
     */
    const updateValue = useCallback(
        (value: string | number | boolean, skipBackendWrite = false): void => {
            if (!oidObject?._id) {
                return;
            }

            const processedValue = convertToOidType(value, oidObject?.type);

            // Abbruch bei ungültigen Werten (undefined nach fehlgeschlagener Konvertierung)
            if (processedValue === undefined || processedValue === null) {
                return;
            }

            // Zentraler State-Update
            setState((prevState: VisRxWidgetState) => ({
                values: {
                    ...prevState.values,
                    [`${oidObject._id}.val`]: processedValue,
                    [`${oidObject._id}.lc`]: VALUE_NOT_CHANGED_TIMESTAMP,
                },
            }));

            ignoreUntilRef.current = Date.now() + delay + 1500;
            prevStateRef.current = {
                lc: VALUE_NOT_CHANGED_TIMESTAMP,
                value: processedValue,
            };

            // Bei skipBackendWrite wird nur der lokale State aktualisiert
            if (skipBackendWrite) {
                return;
            }

            // Backend-Schreibvorgang via Debounce
            if (debounce) {
                debounce.next(processedValue);
            }
        },
        [delay, debounce, oidObject, setState],
    );

    return {
        value,
        hasBackendChange,
        updateValue,
    };
};

export default useValueState;
