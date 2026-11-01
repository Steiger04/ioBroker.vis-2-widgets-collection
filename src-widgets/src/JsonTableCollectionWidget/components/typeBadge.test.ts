/**
 * The type badge of the column editor shows the Effektiver Typ (CONTEXT „Effektiver Typ").
 *
 * @module widgets/JsonTableCollectionWidget/components/typeBadge.test
 */
import { describe, expect, it } from 'vitest';

import type { DetectedType } from '../../hooks/useJsonTableAnalysis/types';
import type { ColumnFormatType } from '../types';
import { typeBadgeOf, typeBadgeText } from './typeBadge';

/** A translation that shows the key's English text. */
const t = (key: string): string =>
    ({ json_table_type_label: 'Type', json_table_detected_type_hint: 'Detected: {type}' })[key] ?? key;

describe('typeBadgeOf — the badge shows the Effektiver Typ, naming the Detected type where it differs', () => {
    it.each<[string, ColumnFormatType | undefined, DetectedType | undefined, string, string | null]>([
        // case, Format type, Detected type, badge type, Detected type named
        ['no Format type → the Detected type', undefined, 'number', 'number', null],
        ['Format type as detected → no hint', 'string', 'string', 'string', null],
        ['Format type number on a detected string', 'number', 'string', 'number', 'string'],
        ['Format type string on a detected date', 'string', 'date', 'string', 'date'],
        ['Format type without detection → no hint', 'date', undefined, 'date', null],
        ['neither → string', undefined, undefined, 'string', null],
    ])('%s', (_case, formatType, detectedType, type, detected) => {
        expect(typeBadgeOf(formatType, detectedType)).toEqual({ type, detected });
    });
});

describe('typeBadgeText — tooltip and accessible label', () => {
    it('names only the Effektiver Typ when it is the Detected type', () => {
        expect(typeBadgeText(typeBadgeOf(undefined, 'number'), t)).toEqual({
            tooltip: null,
            ariaLabel: 'Type: number',
        });
    });

    it('also names the Detected type when it differs', () => {
        expect(typeBadgeText(typeBadgeOf('number', 'string'), t)).toEqual({
            tooltip: 'Detected: string',
            ariaLabel: 'Type: number, Detected: string',
        });
    });
});
