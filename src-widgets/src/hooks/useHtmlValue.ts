/**
 * Hook that formats an OID value for display, preferring configured alias/value and optionally appending a unit.
 *
 * @module hooks/useHtmlValue
 * @remarks
 * Precedence order:
 * 1) `data.alias` (non-empty)
 * 2) `data.value` (non-empty and truthy; 0/false are skipped)
 * 3) `oidValue` (with `widget.data.unit` appended when available)
 */

import { useMemo } from 'react';
import type { CollectionContextProps, UseHtmlValueWidgetData } from '../types';

/**
 * Subset of `useData()` output consumed by {@link module:hooks/useHtmlValue.default}.
 */
interface UseHtmlValueData {
    /** Optional alias text that replaces the raw value. */
    alias?: string;
    /** Optional pre-formatted value (may already include units). */
    value?: string | number | boolean;
}

/**
 * Formats a value for HTML/text rendering.
 *
 * @param oidValue - Current raw value for the selected OID.
 * @param widget - Widget reference (used for reading the configured unit).
 * @param data - Optional alias/value data from {@link module:hooks/useData}.
 * @returns The preferred display value, or `undefined` when nothing is available.
 * @example
 * ```tsx
 * const displayValue = useHtmlValue(oidValue, widget, data);
 * return <span>{String(displayValue ?? '')}</span>;
 * ```
 */
const useHtmlValue = (
    oidValue: string | number | boolean | undefined | null,
    widget: CollectionContextProps<UseHtmlValueWidgetData>['widget'] | undefined,
    data: UseHtmlValueData | undefined,
): string | number | boolean | undefined => {
    const contentValue = useMemo(() => {
        if (data?.alias && data.alias !== '') {
            return data.alias;
        }

        if (data?.value && data.value !== '') {
            return data.value;
        }

        if (
            oidValue !== undefined &&
            oidValue !== null &&
            (typeof oidValue === 'string' || typeof oidValue === 'number' || typeof oidValue === 'boolean')
        ) {
            const unit = widget?.data.unit;
            const result = unit && unit !== '' ? `${oidValue}${unit}` : oidValue;

            return result;
        }

        return undefined;
    }, [oidValue, widget, data]);

    return contentValue;
};

export default useHtmlValue;
