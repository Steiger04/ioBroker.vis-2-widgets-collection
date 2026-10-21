/**
 * Family-profile interfaces (ADR-0083) — the vocabulary of the family registry.
 *
 * @module EchartsCollectionWidget/families/types
 * @remarks
 * A family profile comes in two records: a runtime core (`FamilyCore`, consumed by the option
 * builder, the echarts registration and the pipeline) and an editorial half (rail slots,
 * picker, validation — ticket 02). The core interface GROWS per ticket: ticket 01 delivers
 * the data-path slice, ticket 02 adds `buildOption`/`echartsUse`, ticket 03 the presentation
 * fragment. Everything here is RUNTIME vocabulary — the modules below `families/` import no
 * editor modules, so the editor→runtime import direction (and with it the node/dom test
 * split) stays intact.
 */
import type { EChartsOption } from 'echarts';

import type {
    EchartsChartFamily,
    EchartsAxisConfig,
    EchartsMarkLine,
} from '../../types/field-definitions/echarts-fields';
import type { ChartConfigBlob } from '../presentation';
import type { FragmentOf, GeneratedInput } from '../optionBuilders/types';

/** The families the registry knows — re-exported so record consumers name one source. */
export type { EchartsChartFamily };

/**
 * What a boundary crossing deletes — the numbers of the warning chip (ADR-0067 + F10: the
 * reset wipes more than series and axes, and the chip must say so — markings and a set JSON
 * data point fall with it too).
 */
export interface FamilyBoundaryLoss {
    series: number;
    axes: number;
    /** Cartesian markings (markLines) the reset wipes — markings are cartesian-only (F10). */
    marks: number;
    /** The JSON data point (`jsonOid`) falls with the crossing when one is set (F10). */
    dataPoint: boolean;
}

/**
 * The data-path slice of the working state the family profiles read: a STRUCTURAL view — the
 * editor's `EditorState` satisfies it without the profiles importing the editor. The data
 * path is family-agnostic in its fields (every family carries series/axes/…), so one narrow
 * sight serves both profiles.
 */
export interface DataPathState {
    series: readonly unknown[];
    yAxes: readonly unknown[];
    markLines: readonly unknown[];
    jsonOid: string;
}

/**
 * The reset patch a structural boundary applies — the emptied data path itself (ADR-0067:
 * series/OIDs, Y-axes, markings, the JSON overlay + deny-list + jsonOid + the Zuordnung
 * scalars). Structurally an `EditorPatch` subset; typed with its exact empties so a foreign
 * key cannot sneak in.
 */
export interface DataPathResetPatch {
    series: never[];
    yAxes: never[];
    markLines: never[];
    jsonSeriesStyle: Record<string, never>;
    jsonHidden: never[];
    jsonOid: '';
    jsonKind: 'series';
    jsonRowPath: '';
    jsonXPath: '';
}

/**
 * The data-path share of a family profile: what a family-boundary crossing deletes
 * (`loss`), the marks count the family-orthogonal boundary functions pull (`marksOf`), and
 * the reset patch (`reset`). Ticket 01's slice of the core — see {@link FamilyCore}.
 */
export interface FamilyDataPath {
    /** The family-boundary loss (ADR-0067) — the type-picker chip's numbers. */
    loss: (state: DataPathState) => FamilyBoundaryLoss;
    /** The cartesian-only marks share of the shared boundary functions (F10). */
    marksOf: (state: DataPathState) => number;
    /** The structural-reset patch (ADR-0067) — the whole data path, both families identical today. */
    reset: () => DataPathResetPatch;
}

/**
 * The decoded companions a family profile assembles its presentation fragment from
 * (ADR-0083 ticket 03): the raw field map, the decoded `chartConfig` blob and the decoded (and
 * for cartesian already resolved) markings + Y-axes. Decoding stays BODY-side
 * (`presentation.ts`); only the family-varied assembly lives in the profiles.
 */
export interface PresentationCompanions {
    src: Record<string, unknown>;
    chartConfig: ChartConfigBlob;
    markLines: EchartsMarkLine[];
    /** Decoded per-axis config (ADR-0012); absent/empty synthesises the legacy axis 0. */
    yAxes?: EchartsAxisConfig[];
}

/**
 * Runtime core of a family profile (ADR-0083). Tickets 01/02 delivered the data-path slice,
 * the G-side option build (replacing the orchestrator switch) and the family's echarts
 * registration; ticket 03 adds the presentation fragment. No editor imports — the cores are
 * consumed by runtime modules.
 */
export interface FamilyCore {
    dataPath: FamilyDataPath;
    /** The G-side family builder — the generated option's family dispatch (ADR-0083 ticket 02). */
    buildOption: (input: GeneratedInput) => EChartsOption;
    /** Registers the family's echarts charts/components (the basis set stays outside, ADR-0083). */
    echartsUse: () => void;
    /**
     * Assembles the family's presentation fragment (ADR-0083 ticket 03) from the decoded
     * companions — the family-varied share only; the chart-wide base stays body-side.
     */
    presentationFragment: (companions: PresentationCompanions) => FragmentOf<EchartsChartFamily>;
}

/** A family core whose fragment seam returns exactly family K's fragment type. */
export interface FamilyCoreOf<K extends EchartsChartFamily> extends FamilyCore {
    presentationFragment: (companions: PresentationCompanions) => FragmentOf<K>;
}
