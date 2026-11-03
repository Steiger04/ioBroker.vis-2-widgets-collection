/**
 * The series card (ADR-0100) — ONE card anatomy for the three Kartenquellen (Verlauf, JSON,
 * Tabelle): header (identity + actions) and the Karten-Tabs Basis · Daten · Stil · Format · JSON
 * (ADR-0073). The tab set, the header actions and the Basis gates come from the resolved
 * {@link CardCapabilities}; the source supplies identity, the source row, the Daten inputs and
 * the patch routing. Nothing here branches on the data path or the family.
 *
 * @module EchartsCollectionWidget/editor/sections/series/SeriesCard
 * @remarks
 * Tabs are view-only — the card identity stays id-/name-keyed at the list. Switching tabs
 * unmounts the inactive body; every field writes into the WORKING COPY on change, so nothing
 * but DOM focus resets. An axis change is a structure event (ADR-0099): it routes through
 * `onRebindAxis`, every other Basis field patches in place.
 */
import { Fragment, type ComponentProps, type FC, type ReactElement, type ReactNode } from 'react';
import { Box, IconButton } from '@mui/material';
import {
    ContentCopy as DuplicateIcon,
    DeleteOutline as DeleteIcon,
    DonutLarge as DonutIcon,
    KeyboardArrowDown as DownIcon,
    KeyboardArrowUp as UpIcon,
} from '@mui/icons-material';

import Generic from '../../../../Generic';
import type {
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsSeriesMeta,
    EchartsStackMode,
} from '../../../../types/field-definitions/echarts-fields';
import { EditorCard, SectionTabs } from '../../../../components/controls';
import type { OidPickerCtx } from '../../OidPicker';
import type { SeriesTemplateSlot } from '../../seriesTemplates';
import type { EditorState } from '../../editorState';
import { CARD_TAB_LABELS, type CardCapabilities, type CardTab } from './cardCapabilities';
import { BasisTab } from './tabs/BasisTab';
import { SeriesDataFields, SeriesTransformFields } from './tabs/DatenTab';
import { StilTab } from './tabs/StilTab';
import { FormatTab } from './tabs/FormatTab';
import { JsonTab } from './tabs/JsonTab';
import { Swatch } from './shared';

/**
 * Ring card identity (ADR-0082 decision 1): a ring authors no colour — the category-stable
 * palette paints its slices — so the header shows the ring, not a swatch whose colour the
 * chart never applies.
 */
const RingSwatch: FC = () => (
    <Box
        data-testid="ring-swatch"
        sx={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
    >
        <DonutIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
    </Box>
);

/** The chart-level settings the cards read (inherit targets + the shared axis sight). */
export interface SeriesCardContext {
    pickerCtx: OidPickerCtx;
    /** The chart type every non-overridden series inherits. */
    defaultType: EchartsCartesianType;
    yAxes: EchartsAxisConfig[];
    /** Effective axis option labels (ADR-0025, B1 numbering) — resolved once per list. */
    axisDisplayNames: string[];
    /** Theme text-primary — the bar label colour's inherit preview. */
    labelColorFallback: string;
    /** The Stapelmodus — the bar stack-group select's inherit target (ADR-0084). */
    stackMode: EchartsStackMode;
    /** The chart-level data settings — the Daten tab's Erben-Override targets (ADR-0072). */
    chart: Pick<
        EditorState,
        'aggregate' | 'percentileValue' | 'integralUnit' | 'integralInterpolation' | 'ignoreNull' | 'chartType'
    >;
}

/** The Basis-tab share the source supplies (source row, Verlauf instance, JSON name semantics). */
export type SeriesCardBasisSource = Pick<
    ComponentProps<typeof BasisTab>,
    | 'oid'
    | 'sourceRow'
    | 'showInstance'
    | 'historyInstances'
    | 'instancesLoaded'
    | 'nameClearsToUndefined'
    | 'namePlaceholder'
>;

export interface SeriesCardProps {
    caps: CardCapabilities;
    ctx: SeriesCardContext;
    meta: EchartsSeriesMeta;
    title: string;
    subtitle: ReactNode;
    /** The palette slot of this series — the colour inherit preview and the swatch fallback. */
    colorFallback: string;
    /** Position in the list (the move buttons' bounds). */
    index: number;
    count: number;
    open: boolean;
    onToggle: () => void;
    /** In-place patch of every non-structural field. */
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    /** The axis rebind — a structure event (ADR-0099). */
    onRebindAxis: (yAxisIndex: number) => void;
    onMove?: (dir: -1 | 1) => void;
    onDuplicate?: () => void;
    onRemove?: () => void;
    basis?: SeriesCardBasisSource;
    /** The catalog slot of the JSON tab (ADR-0042). */
    rawSlot: SeriesTemplateSlot;
    rawHint?: string;
}

const SeriesCard: FC<SeriesCardProps> = ({
    caps,
    ctx,
    meta,
    title,
    subtitle,
    colorFallback,
    index,
    count,
    open,
    onToggle,
    onPatch,
    onRebindAxis,
    onMove,
    onDuplicate,
    onRemove,
    basis,
    rawSlot,
    rawHint,
}) => {
    const has = (action: CardCapabilities['actions'][number]): boolean => caps.actions.includes(action);
    const body: Record<CardTab, () => ReactElement> = {
        basis: () => (
            <BasisTab
                meta={meta}
                defaultType={ctx.defaultType}
                // A yAxisIndex change rebinds (the vacated axis may die, ADR-0069); every other
                // field updates in place.
                onPatch={p => (p.yAxisIndex !== undefined ? onRebindAxis(p.yAxisIndex) : onPatch(p))}
                pickerCtx={ctx.pickerCtx}
                colorFallback={colorFallback}
                showType={caps.showType}
                showColor={caps.showColor}
                showAxis={caps.showAxis}
                yAxes={ctx.yAxes}
                axisDisplayNames={ctx.axisDisplayNames}
                {...basis}
            />
        ),
        daten: () =>
            caps.dataTab === 'fetch' ? (
                <SeriesDataFields
                    meta={meta}
                    onPatch={onPatch}
                    chartAggregate={ctx.chart.aggregate}
                    chartPercentile={ctx.chart.percentileValue}
                    chartIntegralUnit={ctx.chart.integralUnit}
                    chartIntegralInterpolation={ctx.chart.integralInterpolation}
                    chartNullMode={ctx.chart.ignoreNull}
                    isBarChart={ctx.chart.chartType === 'bar'}
                />
            ) : (
                <SeriesTransformFields
                    meta={meta}
                    onPatch={onPatch}
                    chartNullMode={ctx.chart.ignoreNull}
                />
            ),
        stil: () => (
            <StilTab
                meta={meta}
                defaultType={ctx.defaultType}
                onPatch={onPatch}
                pickerCtx={ctx.pickerCtx}
                colorFallback={colorFallback}
                labelColorFallback={ctx.labelColorFallback}
                stackMode={ctx.stackMode}
            />
        ),
        format: () => (
            <FormatTab
                meta={meta}
                onPatch={onPatch}
            />
        ),
        json: () => (
            <JsonTab
                meta={meta}
                onPatch={onPatch}
                slot={rawSlot}
                hint={rawHint}
            />
        ),
    };
    return (
        <EditorCard
            open={open}
            onToggle={onToggle}
            swatch={caps.ring ? <RingSwatch /> : <Swatch color={meta.color ?? colorFallback} />}
            title={title}
            subtitle={subtitle}
            actions={
                <>
                    {has('move') && onMove && (
                        <>
                            <IconButton
                                size="small"
                                disabled={index === 0}
                                onClick={() => onMove(-1)}
                                aria-label={Generic.t('echarts_editor_series_move_up')}
                                sx={{ p: 0.25 }}
                            >
                                <UpIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                disabled={index === count - 1}
                                onClick={() => onMove(1)}
                                aria-label={Generic.t('echarts_editor_series_move_down')}
                                sx={{ p: 0.25 }}
                            >
                                <DownIcon fontSize="small" />
                            </IconButton>
                        </>
                    )}
                    {has('duplicate') && onDuplicate && (
                        <IconButton
                            size="small"
                            onClick={onDuplicate}
                            aria-label={Generic.t('echarts_editor_series_duplicate')}
                            sx={{ p: 0.25 }}
                        >
                            <DuplicateIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    )}
                    {has('remove') && onRemove && (
                        <IconButton
                            size="small"
                            onClick={onRemove}
                            aria-label={Generic.t('echarts_editor_series_remove')}
                            sx={{ p: 0.25 }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    )}
                </>
            }
        >
            {/* Karten-Tabs (ADR-0073): the derived tab set — children follow the same list, so
                the positional children↔tabs contract can no longer drift. */}
            <SectionTabs
                dense
                tabs={caps.tabs.map(tab => ({ key: tab, label: Generic.t(CARD_TAB_LABELS[tab]) }))}
            >
                {caps.tabs.map(tab => (
                    <Fragment key={tab}>{body[tab]()}</Fragment>
                ))}
            </SectionTabs>
        </EditorCard>
    );
};

export default SeriesCard;
