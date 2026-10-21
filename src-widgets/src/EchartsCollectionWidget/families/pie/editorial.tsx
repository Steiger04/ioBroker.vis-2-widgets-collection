/**
 * Pie family editorial (ADR-0083 ticket 02) — rail slot, picker.
 *
 * @module EchartsCollectionWidget/families/pie/editorial
 * @remarks
 * The pie profile's editor half: the Torten-Optionen rail slot (key `pieOptions` — the former
 * `family` key, renamed because "family" belongs to the profile concept now) and the pie
 * picker glyph. No validation branch (the cartesian-only checks die with the family) and no
 * chart-type heal ('pie' is never a legacy value) — the optional editorial fields stay away.
 */
import type { FC } from 'react';

import type { FamilyEditorial } from '../editorial';
import { PieOptionsSection } from '../../editor/sections/FamilySections';
import type { EditorState } from '../../editor/editorState';
import type { TFunc } from '../../editor/summaries';

// The pie picker glyph — hand-drawn monochrome SVG at currentColor (the cartesian twins live
// in the cartesian editorial; same quiet signature element).
const Glyph: FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg
        viewBox="0 0 24 24"
        width={22}
        height={22}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
    >
        {children}
    </svg>
);
const PieGlyph: FC = () => (
    <Glyph>
        <circle
            cx="12"
            cy="12"
            r="8"
        />
        <line
            x1="12"
            y1="12"
            x2="12"
            y2="4"
        />
        <line
            x1="12"
            y1="12"
            x2="18.5"
            y2="15"
        />
    </Glyph>
);

/** The pie options summary line (ADR-0010): donut percent, or the rose mode, or nothing. */
const summarizePieOptions = (state: EditorState, t: TFunc): string =>
    state.pie.innerRadius
        ? t('echarts_summary_donut', `${Math.round((state.pie.innerRadius ?? 0) * 100)}%`)
        : state.pie.rose !== 'none'
          ? `rose · ${state.pie.rose}`
          : '';

/** The pie family's editorial half. */
export const PIE_EDITORIAL: FamilyEditorial<'pieOptions'> = {
    railSlots: [
        {
            key: 'pieOptions',
            titleKey: 'echarts_sec_pie_options',
            render: ({ state, set, focusTab, issues }) => (
                <PieOptionsSection
                    state={state}
                    set={set}
                    focusTab={focusTab}
                    issues={issues}
                />
            ),
            summarize: summarizePieOptions,
        },
    ],
    picker: [{ value: 'pie', label: 'echarts_type_pie', icon: <PieGlyph /> }],
};
