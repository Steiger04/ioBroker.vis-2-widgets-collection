/**
 * The configurator's one notice model (ADR-0067 addendum 2026-11-03, ADR-0099): every
 * structure-event advisory — axis death, unit mismatch, data-path loss — resolves to ONE
 * snackbar notice the modal-level host renders. Pure (the host owns state + undo).
 *
 * @module EchartsCollectionWidget/editor/editorNotice
 */
import type { StructureAdvisory, StructureLoss } from './structureEvents';
import type { TFunc } from './summaries';

/** One resolved snackbar notice. */
export interface EditorNotice {
    message: string;
    severity: 'info' | 'warning';
    /** Offers „Rückgängig" — undo reverts the editor's last step (the triggering one). */
    undoable: boolean;
}

/** `n` items under a singular/plural key pair (`key_one` carries no parameter). */
const counted = (t: TFunc, key: string, n: number): string => (n === 1 ? t(`${key}_one`) : t(key, String(n)));

/**
 * The loss sentence of a boundary crossing („3 Serien, 3 Achsen, JSON-Datenpunkt gelöscht") —
 * segments in the fixed order series · axes · markings · data point · templates; zero segments
 * are omitted. Nothing lost → `null` (no notice at all).
 */
export function lossText(loss: StructureLoss, t: TFunc): string | null {
    const parts: string[] = [];
    if (loss.series > 0) {
        parts.push(counted(t, 'echarts_loss_series', loss.series));
    }
    if (loss.axes > 0) {
        parts.push(counted(t, 'echarts_loss_axes', loss.axes));
    }
    if (loss.marks > 0) {
        parts.push(counted(t, 'echarts_loss_marks', loss.marks));
    }
    if (loss.dataPoint) {
        parts.push(t('echarts_loss_datapoint'));
    }
    if (loss.templates > 0) {
        parts.push(counted(t, 'echarts_loss_templates', loss.templates));
    }
    return parts.length ? t('echarts_loss_deleted', parts.join(', ')) : null;
}

/**
 * Resolves an advisory to its notice. The payload-vanish axis death stays info-only (undo is
 * futile — the next reconcile over the same payload re-kills the axis, ADR-0069); every other
 * advisory follows a user step and offers undo. `null` = nothing worth a notice.
 */
export function noticeOf(advisory: StructureAdvisory, t: TFunc): EditorNotice | null {
    switch (advisory.kind) {
        case 'axisDeath':
            return advisory.undoable
                ? { message: t('echarts_axis_died', advisory.names.join(', ')), severity: 'warning', undoable: true }
                : {
                      message: t('echarts_axis_died_info', advisory.names.join(', ')),
                      severity: 'info',
                      undoable: false,
                  };
        case 'unitMismatch':
            return { message: t('echarts_axis_rebind_unit_mismatch'), severity: 'warning', undoable: true };
        case 'dataPathReset': {
            const message = lossText(advisory.loss, t);
            return message ? { message, severity: 'info', undoable: true } : null;
        }
    }
}
