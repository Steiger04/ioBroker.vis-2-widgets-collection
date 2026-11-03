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

import type { FamilyEditorial, RailSlotProps } from '../editorial';
import { PieOptionsSection } from '../../editor/sections/FamilySections';
import { useEditorTheme } from '../../editor/useEditorTheme';
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

/**
 * The pie options summary line (ADR-0010): donut percent, or the rose mode by its labels
 * („Rose-Modus · Radius", B8), or nothing.
 */
const summarizePieOptions = (state: EditorState, t: TFunc): string =>
    state.pie.innerRadius
        ? t('echarts_summary_donut', `${Math.round((state.pie.innerRadius ?? 0) * 100)}%`)
        : state.pie.rose !== 'none'
          ? `${t('echarts_pie_rose')} · ${t(`echarts_rose_${state.pie.rose}`)}`
          : '';

/** The pie options rail slot — resolves the label colour's „Erbt" token for the section. */
const PieOptionsSlot: FC<RailSlotProps> = ({ state, set, pickerCtx, focusTab, issues }) => {
    // ADR-0080 addendum: the swatch's „Erbt" fallback must be the SAME token the builder
    // resolves — the slot is the section's token boundary (the MarkCard textSecondary idiom).
    const { themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    return (
        <PieOptionsSection
            state={state}
            set={set}
            focusTab={focusTab}
            issues={issues}
            pickerCtx={pickerCtx}
            textPrimary={themeTokens.textPrimary}
        />
    );
};

/** The pie family's editorial half. */
export const PIE_EDITORIAL: FamilyEditorial<'pieOptions'> = {
    // The ring card (ADR-0082 decision 1, ADR-0100): Basis · Daten · JSON — no type, no colour
    // (the category-stable palette paints the slices), no axis; the ring icon is the identity.
    seriesCard: {
        tabs: ['basis', 'daten', 'json'],
        type: false,
        color: false,
        axis: false,
        ring: true,
    },
    railSlots: [
        {
            key: 'pieOptions',
            titleKey: 'echarts_sec_pie_options',
            render: PieOptionsSlot,
            summarize: summarizePieOptions,
        },
    ],
    picker: [{ value: 'pie', label: 'echarts_type_pie', icon: <PieGlyph /> }],
};
