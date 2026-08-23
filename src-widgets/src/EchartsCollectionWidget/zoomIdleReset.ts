/**
 * The zoom-idle-reset decision core (ADR-0054 parity Build E) — the pure half of the adapter's
 * `resetZoom` option (`ioBroker.echarts` PresetTabs select + ChartView timer).
 *
 * @module EchartsCollectionWidget/zoomIdleReset
 * @remarks
 * The CONFIG decision (parse + what-to-do-with-the-timer) lives here and is tested; the timer
 * and the `dispatchAction({type:'dataZoom', start:0, end:100})` reset stay in the View
 * (`EChart`), per the project rule that View layers go untested. The adapter re-arms the timer
 * on every range change and resets to the full window on fire — `zoomIdleAction` models exactly
 * that: an armed timer while the user is zoomed, cleared when the chart returns to the full
 * window (0–100 %), inert when the feature is off.
 */

/** The adapter select ladder, verbatim (seconds; PresetTabs `resetZoom` options). */
export const ZOOM_IDLE_SECONDS = [10, 15, 30, 60, 90, 120, 180, 300, 600, 1200, 1800] as const;

/**
 * Parse the persisted select value into idle seconds. `''`/absent/garbage/non-positive →
 * `undefined` (feature off). Accepts the rxData string form ('10') and a plain number.
 */
export const parseZoomIdleSeconds = (raw: unknown): number | undefined => {
    const n = typeof raw === 'number' ? raw : typeof raw === 'string' && raw !== '' ? Number(raw) : NaN;
    return Number.isFinite(n) && n > 0 ? n : undefined;
};

/** What the View should do with its idle timer for a given zoom state + config. */
export type ZoomIdleAction =
    /** Feature off — never arm, nothing to clear. */
    | { type: 'none' }
    /** User is zoomed — (re)arm the timer; on fire, reset to the full window. */
    | { type: 'arm'; ms: number }
    /** Chart is at the full window — cancel any running timer. */
    | { type: 'clear' };

/**
 * The decision: off-config → inert regardless of zoom; zoomed → arm for the configured seconds;
 * back at the full window → clear. The armed timer firing resets unconditionally (it only runs
 * while armed, and the reset's own datazoom event lands on the clear branch — no loop).
 *
 * @param idleSec - Parsed config ({@link parseZoomIdleSeconds}); `undefined` = off.
 * @param zoomed - Whether the live zoom window deviates from the full 0–100 % window.
 */
export const zoomIdleAction = (idleSec: number | undefined, zoomed: boolean): ZoomIdleAction => {
    if (idleSec === undefined) {
        return { type: 'none' };
    }
    return zoomed ? { type: 'arm', ms: idleSec * 1000 } : { type: 'clear' };
};
