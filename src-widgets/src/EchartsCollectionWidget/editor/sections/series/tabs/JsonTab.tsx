/**
 * The JSON tab of the series card (ADR-0100; formerly „Erweitert") — the per-series raw echarts
 * JSON with its template activations (ADR-0037/0042). The slot resolves the catalog (cartesian
 * type override or the pie ring catalog, `seriesSlotOf`).
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/JsonTab
 */
import type { FC } from 'react';

import type { EchartsSeriesMeta } from '../../../../../types/field-definitions/echarts-fields';
import type { SeriesTemplateSlot } from '../../../seriesTemplates';
import { snippetPatch } from '../../../snippetComposition';
import { SeriesRawOverride } from '../shared';

export const JsonTab: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    slot: SeriesTemplateSlot;
    /** An authoring hint under the editor (the bar card's stackStrategy condition, ADR-0084). */
    hint?: string;
}> = ({ meta, onPatch, slot, hint }) => (
    <SeriesRawOverride
        slot={slot}
        raw={meta.raw}
        // An emptied editor clears the key (sparse meta) — one rule for every source.
        onChange={v => onPatch({ raw: v || undefined })}
        snippets={meta.snippets}
        onCommit={r => onPatch(snippetPatch(r))}
        hint={hint}
    />
);
