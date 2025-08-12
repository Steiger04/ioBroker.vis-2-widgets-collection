import { useMemo } from 'react';
import type { CollectionContextProps } from '../index.d';

/**
 * Interface für die Daten-Parameter (kompatibel mit useData-Return)
 */
interface UseHtmlValueData {
    alias?: string;
    value?: string | number | boolean;
    // Weitere Properties für Kompatibilität mit StyleData
    [key: string]: any;
}

/**
 * Hook für HTML-Wert-Formatierung mit Unit-Unterstützung
 * Optimiert für Performance mit useMemo
 *
 * @param oidValue Der aktuelle Wert des OID
 * @param widget Das Widget-Objekt mit Daten
 * @param data Die Daten-Map mit alias/value Informationen
 * @returns Formatierter Wert mit Unit oder alias/value
 */
const useHtmlValue = (
    oidValue: string | number | boolean | undefined | null,
    widget: CollectionContextProps['widget'] | undefined,
    data: UseHtmlValueData | undefined,
): string | number | boolean | undefined => {
    // Memoization für bessere Performance
    const contentValue = useMemo(() => {
        // Priorität 1: alias aus data (nur wenn wirklich vorhanden und nicht leer)
        if (data?.alias && data.alias !== '') {
            return data.alias;
        }

        // Priorität 2: value aus data (bereits formatiert mit Unit, nur wenn vorhanden und nicht leer)
        if (data?.value && data.value !== '') {
            return data.value;
        }

        // Priorität 3: oidValue mit Unit-Formatierung
        if (
            oidValue !== undefined &&
            oidValue !== null &&
            (typeof oidValue === 'string' || typeof oidValue === 'number' || typeof oidValue === 'boolean')
        ) {
            const unit = widget?.data?.unit;
            const result = unit && unit !== '' ? `${oidValue}${unit}` : oidValue;

            return result;
        }

        // Fallback: undefined wenn nichts verfügbar

        return undefined;
    }, [oidValue, widget?.data?.unit, data]);

    return contentValue;
};

export default useHtmlValue;
