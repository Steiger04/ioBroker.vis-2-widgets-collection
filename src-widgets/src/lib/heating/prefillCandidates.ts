/**
 * The candidates the prefill left open: an editor-session store, never widget data (ADR-0119
 * Nachtrag „Spec Stufe 1 schreiben“: the field names of the spec are final).
 *
 * @module lib/heating/prefillCandidates
 * @remarks
 * The main pick (`lib/heating/mainPickPrefill`) records, per main field and picked id, the
 * Bedeutungen it left empty because several data points fit, with their candidates. The panel's
 * InfoBox (`lib/heating/prefillNoticeField`) reads them for the widget whose main field holds that
 * id, and only while the Bedeutung is still empty. Keyed by the picked id, not by the widget: vis-2
 * hands a field's `onChange` no widget id (`Attributes/Widget/WidgetField.tsx` `applyValue`). The
 * next pick of the same id replaces the record; nothing survives a reload of the editor.
 */
import type { MeaningField } from './meaningCatalog';

/** The open Bedeutungen of one pick with their candidates' ids. */
export type OpenCandidates = Readonly<Partial<Record<MeaningField, readonly string[]>>>;

/** The records, keyed by main field and picked id. */
const records = new Map<string, OpenCandidates>();

/** Who wants to hear of a new record (the mounted InfoBoxes). */
const listeners = new Set<() => void>();

const keyOf = (mainField: string, mainId: string): string => `${mainField}\n${mainId}`;

/**
 * Records what a main pick left open; a pick without open Bedeutungen removes the record.
 *
 * @param mainField - The main field's stored key (`soll`, `soll3`).
 * @param mainId - The picked id.
 * @param open - The open Bedeutungen with their candidates.
 */
export function recordOpenCandidates(mainField: string, mainId: string, open: OpenCandidates): void {
    if (Object.keys(open).length > 0) {
        records.set(keyOf(mainField, mainId), open);
    } else {
        records.delete(keyOf(mainField, mainId));
    }
    listeners.forEach(listener => listener());
}

/**
 * What the last main pick of `mainId` left open.
 *
 * @param mainField - The main field's stored key.
 * @param mainId - The id the main field holds.
 * @returns The open Bedeutungen; none without a record.
 */
export function openCandidatesOf(mainField: string, mainId: unknown): OpenCandidates | undefined {
    return typeof mainId === 'string' && mainId ? records.get(keyOf(mainField, mainId)) : undefined;
}

/**
 * Subscribes to new records (`useSyncExternalStore`).
 *
 * @param listener - Called after every record.
 * @returns The unsubscribe.
 */
export function subscribeOpenCandidates(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}
