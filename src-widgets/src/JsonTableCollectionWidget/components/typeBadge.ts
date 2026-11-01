/**
 * The type badge of the column editor.
 *
 * @module JsonTableCollectionWidget/components/typeBadge
 * @remarks
 * Pure. The badge shows the Effektiver Typ — the type the Column is treated as — and names
 * the Detected type only where the Format type overrides it. The analysis panel keeps
 * showing the Detected type: that is an analysis statement, not the Column's type.
 */

import type { DetectedType } from '../../hooks/useJsonTableAnalysis/types';
import { effectiveType, type EffectiveType } from '../capabilities';
import type { ColumnFormatType } from '../types';

/** What the badge shows. */
export type TypeBadge = Readonly<{
    /** The Effektiver Typ: the badge's label and colour. */
    type: EffectiveType;
    /** The Detected type where it differs from the Effektiver Typ; `null` otherwise. */
    detected: DetectedType | null;
}>;

/**
 * The badge of a Column.
 *
 * @param formatType The Column's Format type (`format.type`), if configured.
 * @param detectedType The analysis engine's Detected type, if known.
 * @returns The Effektiver Typ, and the Detected type where it differs.
 */
export function typeBadgeOf(
    formatType: ColumnFormatType | undefined,
    detectedType: DetectedType | undefined,
): TypeBadge {
    const type = effectiveType(formatType, detectedType);
    return { type, detected: detectedType !== undefined && detectedType !== type ? detectedType : null };
}

/**
 * The badge's texts.
 *
 * @param badge The badge.
 * @param t The translation function (`Generic.t`).
 * @returns The tooltip (`null` without a differing Detected type) and the accessible label,
 *   which names the Detected type too.
 */
export function typeBadgeText(
    badge: TypeBadge,
    t: (key: string) => string,
): Readonly<{ tooltip: string | null; ariaLabel: string }> {
    const tooltip =
        badge.detected === null ? null : t('json_table_detected_type_hint').replace('{type}', badge.detected);
    const label = `${t('json_table_type_label')}: ${badge.type}`;
    return { tooltip, ariaLabel: tooltip === null ? label : `${label}, ${tooltip}` };
}
