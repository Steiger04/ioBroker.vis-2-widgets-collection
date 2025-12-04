import { useCallback, useContext } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import isNumber from '../lib/helper/isNumber';
import useDebounce, { type OidObject, type OidType } from './useDebounce';
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
 * Interface für den Return-Typ des useValueState Hooks
 */
interface UseValueStateReturn {
    value: string | number | boolean | undefined | null;
    hasValueChanged: boolean;
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
 * Hook für Wert-State Management mit Typkonvertierung und Debouncing
 *
 * @param idName Der Name der OID-Property
 * @returns Objekt mit value und updateValue
 */
const useValueState = (idName: string): UseValueStateReturn => {
    const { setState, widget, getPropertyValue, hasPropertyValueChanged } = useContext(CollectionContext);

    // Direkter Zugriff auf widget.data um Stale-Referenzen bei möglicher in-place Mutation zu vermeiden
    const oidObject = widget.data[`${idName}Object`] as OidObject | undefined;

    const value = getPropertyValue(idName);
    const hasValueChanged = hasPropertyValueChanged(idName);

    const debounce = useDebounce({
        oidObject,
        data: widget.data,
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

            // Bei skipBackendWrite wird nur der lokale State aktualisiert
            if (skipBackendWrite) {
                return;
            }

            // Backend-Schreibvorgang via Debounce
            if (debounce) {
                debounce.next(processedValue);
            }
        },
        [oidObject, setState, debounce],
    );

    return {
        value,
        hasValueChanged,
        updateValue,
    };
};

export default useValueState;
