/**
 * The panel InfoBox that names the candidates the prefill left open (ADR-0119 Nachtrag „Spec
 * Stufe 1 schreiben“: two candidates of the same role leave the field empty, an InfoBox names them).
 *
 * @module lib/heating/prefillNoticeField
 * @remarks
 * Declared by the binding building block right after the main Bedeutung's id field. A custom field
 * that stores nothing: its name `vorfuellen:<field>` is no data key, it reads the editor-session
 * record of the main pick (`lib/heating/prefillCandidates`). It shows a Bedeutung only while its
 * field is still empty and the main field still holds the picked id; hidden when nothing is open.
 */
import { useSyncExternalStore } from 'react';
import type React from 'react';

import { Box } from '@mui/material';

import { InfoBox } from '../../components/controls';
import { guardWidgetData } from '../fieldFactories';
import { translate } from '../translate';
import { MEANINGS, meaningKeys } from './meaningCatalog';
import { boundIdOf } from './meaningReading';
import { openCandidatesOf, subscribeOpenCandidates } from './prefillCandidates';

import type { MeaningField, MeaningSubset } from './meaningCatalog';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/** The name prefix of the prefill notice: no data key starts with it. */
export const PREFILL_NOTICE_PREFIX = 'vorfuellen:';

/** The open Bedeutungen of the widget's last main pick that are still empty, with their candidates. */
const stillOpen = (
    data: WidgetData,
    subset: MeaningSubset,
    entry: number | undefined,
): [MeaningField, readonly string[]][] => {
    const mainField = meaningKeys(subset.main, entry).field;
    const open = openCandidatesOf(mainField, data[mainField]) ?? {};
    return (Object.entries(open) as [MeaningField, readonly string[]][]).filter(
        ([meaning]) => boundIdOf(data, meaningKeys(meaning, entry).field) === undefined,
    );
};

/** The InfoBox: one line per open Bedeutung, its label and its candidates. */
function PrefillNotice({
    data,
    subset,
    entry,
}: {
    data: WidgetData;
    subset: MeaningSubset;
    entry?: number;
}): React.JSX.Element | null {
    // Re-render on a new record: the pick records before it hands the data to vis-2.
    useSyncExternalStore(subscribeOpenCandidates, () =>
        openCandidatesOf(meaningKeys(subset.main, entry).field, data[meaningKeys(subset.main, entry).field]),
    );
    const open = stillOpen(data, subset, entry);
    if (open.length === 0) {
        return null;
    }
    return (
        <InfoBox>
            {translate('heating_vorfuellen_mehrdeutig')}
            {open.map(([meaning, candidates]) => (
                <Box
                    key={meaning}
                    sx={{ mt: 0.5, overflowWrap: 'anywhere' }}
                >
                    {`${translate(MEANINGS[meaning].label)}: ${candidates.join(', ')}`}
                </Box>
            ))}
        </InfoBox>
    );
}

/**
 * The prefill notice of a type's main Bedeutung.
 *
 * @param subset - The type's subset of the catalogue.
 * @param entry - The entry number of a list entry (ADR-0121); none for a single-room type.
 * @returns The custom field.
 */
export function prefillNoticeField(subset: MeaningSubset, entry?: number): RxWidgetInfoAttributesField {
    return {
        name: `${PREFILL_NOTICE_PREFIX}${meaningKeys(subset.main, entry).field}`,
        type: 'custom',
        label: '',
        noBinding: true,
        hidden: (data: WidgetData) => stillOpen(data, subset, entry).length === 0,
        component: guardWidgetData((_field: unknown, data) => (
            <PrefillNotice
                data={data}
                subset={subset}
                entry={entry}
            />
        )),
    };
}
