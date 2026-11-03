/**
 * The series card's capability resolution (ADR-0100 decision 2) — pure: Kartenquelle × family
 * profile × series count → the derived tab set, the header actions and the Basis gates. No
 * variant hand-lists its tabs any more; the card renders exactly what this returns.
 *
 * @module EchartsCollectionWidget/editor/sections/series/cardCapabilities
 * @remarks
 * Two independent axes:
 *  - the **Kartenquelle** (Verlauf · JSON · Tabelle) owns what depends on the data path — the
 *    header actions and whether the Daten tab FETCHES (Verlauf: acquisition overrides) or only
 *    transforms (JSON, Tabelle: the payload needs no fetch, the pipeline still transforms);
 *  - the **family profile** (ADR-0083, `FamilyEditorial.seriesCard`) owns what depends on the
 *    family — the pie rings (ADR-0082 decision 1) carry no type, no colour and three tabs.
 */

/** The three Kartenquellen (ADR-0100 decision 1). */
export type CardSource = 'history' | 'json' | 'table';

/** The card tabs in their fixed order — the labels are uniform across sources (decision 3). */
export type CardTab = 'basis' | 'daten' | 'stil' | 'format' | 'json';

/** The header actions a source offers. `hide` = the serien-förmig deny-list (payload owns the series). */
export type CardAction = 'move' | 'duplicate' | 'remove' | 'hide';

/** The family profile's share of the card (ADR-0083: `FamilyEditorial.seriesCard`). */
export interface SeriesCardTraits {
    /** The tabs the family's bodies make sense on (the order is normalized to {@link CARD_TAB_ORDER}). */
    tabs: readonly CardTab[];
    /** The per-series type override exists in this family. */
    type: boolean;
    /** The per-series colour is applied (pie rings: the category palette paints the slices). */
    color: boolean;
    /** The family has Y-axes to bind. */
    axis: boolean;
    /** The header identity is the ring icon instead of a colour swatch. */
    ring: boolean;
}

/** The resolved capabilities of one card. */
export interface CardCapabilities {
    tabs: CardTab[];
    actions: CardAction[];
    /** The Daten tab body: fetching acquisition overrides or the transforms only. */
    dataTab: 'fetch' | 'transform';
    showType: boolean;
    showColor: boolean;
    showAxis: boolean;
    ring: boolean;
}

/** The fixed tab order of every card. */
export const CARD_TAB_ORDER: readonly CardTab[] = ['basis', 'daten', 'stil', 'format', 'json'];

/** The tab label keys — one set for every source (ADR-0100 decision 3). */
export const CARD_TAB_LABELS: Record<CardTab, string> = {
    basis: 'echarts_card_tab_basis',
    daten: 'echarts_card_tab_data',
    stil: 'echarts_card_tab_style',
    format: 'echarts_card_tab_format',
    json: 'echarts_card_tab_json',
};

/** What each Kartenquelle contributes (data-path share). */
export const SOURCE_CAPS: Record<CardSource, { actions: readonly CardAction[]; dataTab: 'fetch' | 'transform' }> = {
    history: { actions: ['move', 'duplicate', 'remove'], dataTab: 'fetch' },
    // The payload owns identity + count: no move, no duplicate, no real delete — only the
    // restorable hide (jsonHidden deny-list).
    json: { actions: ['hide'], dataTab: 'transform' },
    table: { actions: ['move', 'remove'], dataTab: 'transform' },
};

/**
 * Resolve one card's capabilities.
 *
 * @param source - The Kartenquelle the card list renders.
 * @param traits - The family profile's card traits.
 * @param seriesCount - The number of cards in the list — the type override shows from two on
 *   (a single series IS the chart type; the select would only duplicate the picker).
 */
export function resolveCardCapabilities(
    source: CardSource,
    traits: SeriesCardTraits,
    seriesCount: number,
): CardCapabilities {
    const caps = SOURCE_CAPS[source];
    return {
        tabs: CARD_TAB_ORDER.filter(tab => traits.tabs.includes(tab)),
        actions: [...caps.actions],
        dataTab: caps.dataTab,
        showType: traits.type && seriesCount >= 2,
        showColor: traits.color,
        showAxis: traits.axis,
        ring: traits.ring,
    };
}
