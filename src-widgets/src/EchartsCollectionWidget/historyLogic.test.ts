/**
 * Unit tests for the pure history logic (null/gap handling, range→options math,
 * multi-series fetch with per-series error isolation).
 *
 * @module EchartsCollectionWidget/historyLogic.test
 */
import { describe, expect, it } from 'vitest';
import {
    asNullableIntake,
    entryRequestOptions,
    fetchMultiSeries,
    intakeValue,
    MAPPED_GAP,
    sanitizeStep,
    shiftByOffset,
    toPlottableNumber,
    toSeriesData,
    windowToOptions,
    type Point,
} from './historyLogic';

/** A getHistory mock that records the options of every call, returning one null + one value. */
const recording =
    (calls: { id: string; options: ioBroker.GetHistoryOptions }[]) =>
    (id: string, options: ioBroker.GetHistoryOptions): Promise<Point[]> => {
        calls.push({ id, options });
        return Promise.resolve([
            { ts: 1, val: 5 },
            { ts: 2, val: null },
        ]);
    };

describe('toPlottableNumber — the string intake (ADR-0077)', () => {
    it('parses numeric strings verbatim — trimmed, exponent and sign forms', () => {
        expect(toPlottableNumber('23.5')).toBe(23.5);
        expect(toPlottableNumber(' 1e3 ')).toBe(1000);
        expect(toPlottableNumber('-0.5')).toBe(-0.5);
    });

    it('parses the parseFloat PREFIX — unit suffixes drop ("23.5 °C" → 23.5, "12 Watt" → 12)', () => {
        expect(toPlottableNumber('23.5 °C')).toBe(23.5);
        expect(toPlottableNumber('12 Watt')).toBe(12);
    });

    it('a comma WITHOUT a dot is the decimal separator ("23,5" → 23.5)', () => {
        expect(toPlottableNumber('23,5')).toBe(23.5);
    });

    it("a dot means dot-decimal — '1.234,5' parses as 1.234 (thousands separators unsupported, pinned)", () => {
        expect(toPlottableNumber('1.234,5')).toBe(1.234);
    });

    it("'0x1F' parses as 0 (parseFloat stops at 'x' — adapter-equal edge, pinned)", () => {
        expect(toPlottableNumber('0x1F')).toBe(0);
    });

    it("bool texts parse BEFORE parseFloat — 'true'/'false' → 1/0 (adapter parity)", () => {
        expect(toPlottableNumber('true')).toBe(1);
        expect(toPlottableNumber('false')).toBe(0);
    });

    it('unconvertible input → null — a gap, NEVER 0 (ADR-0077 adapter deviation)', () => {
        expect(toPlottableNumber('abc')).toBeNull();
        expect(toPlottableNumber('')).toBeNull();
        expect(toPlottableNumber(null)).toBeNull();
        expect(toPlottableNumber(undefined)).toBeNull();
    });

    it('numbers keep their finite-only passthrough (existing)', () => {
        expect(toPlottableNumber(7)).toBe(7);
        expect(toPlottableNumber(NaN)).toBeNull();
        expect(toPlottableNumber(Infinity)).toBeNull();
    });
});

describe('toSeriesData', () => {
    it('maps {ts,val} to [ts, number]', () => {
        const pts: Point[] = [
            { ts: 1000, val: 5 },
            { ts: 2000, val: 6.5 },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1000, 5],
            [2000, 6.5],
        ]);
    });

    it('coerces booleans to 1/0 (bool OIDs plot, ADR-0058); unconvertible strings/null stay null', () => {
        const pts: Point[] = [
            { ts: 1, val: 'x' },
            { ts: 2, val: true },
            { ts: 3, val: null },
            { ts: 4, val: false },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1, null],
            [2, 1],
            [3, null],
            [4, 0],
        ]);
    });

    it('keeps gaps as null by default (ignoreNull = keep)', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: null },
            { ts: 3, val: 30 },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1, 10],
            [2, null],
            [3, 30],
        ]);
    });

    it('forward-fills gaps from the last known value', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: null },
            { ts: 3, val: null },
            { ts: 4, val: 40 },
        ];
        expect(toSeriesData(pts, 'forward')).toEqual([
            [1, 10],
            [2, 10],
            [3, 10],
            [4, 40],
        ]);
    });

    it('forward-fill leaves leading nulls as null (no prior value)', () => {
        const pts: Point[] = [
            { ts: 1, val: null },
            { ts: 2, val: 20 },
        ];
        expect(toSeriesData(pts, 'forward')).toEqual([
            [1, null],
            [2, 20],
        ]);
    });

    it('zero-fills gaps', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: null },
        ];
        expect(toSeriesData(pts, 'zero')).toEqual([
            [1, 10],
            [2, 0],
        ]);
    });

    it('passes ts through unchanged (already ms epoch — no ×1000)', () => {
        expect(toSeriesData([{ ts: 1700000000000, val: 1 }])).toEqual([[1700000000000, 1]]);
    });

    it('string state values plot through the intake — "23.5 °C" → 23.5, "23,5" → 23.5', () => {
        const pts: Point[] = [
            { ts: 1, val: '23.5 °C' },
            { ts: 2, val: '23,5' },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1, 23.5],
            [2, 23.5],
        ]);
    });

    it('nullMode fills the NEW string-gaps exactly like legacy nulls (forward carries across an unconvertible string)', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: 'n/a' },
            { ts: 3, val: 30 },
        ];
        expect(toSeriesData(pts, 'forward')).toEqual([
            [1, 10],
            [2, 10],
            [3, 30],
        ]);
    });
});

describe('intakeValue — the shared intake helper (ticket 02)', () => {
    it('a map hit adopts the number or the MAPPED_GAP sentinel; a miss/the map-less call degrades to toPlottableNumber', () => {
        expect(intakeValue('Sonne', { Sonne: 3 })).toBe(3);
        expect(intakeValue(9999, { 9999: null })).toBe(MAPPED_GAP);
        expect(intakeValue('23,5', { x: 1 })).toBe(23.5); // miss → normal coercion
        expect(intakeValue('23,5')).toBe(23.5); // no map → the map-less special case
        expect(asNullableIntake(MAPPED_GAP)).toBeNull();
        expect(asNullableIntake(7)).toBe(7);
    });
});

describe('toSeriesData — value mapping (ticket 02, the ADR-0077 chain: mapping → plottable → NULL)', () => {
    it('"Sonne" → 3 with the map; without it the string stays a gap', () => {
        const pts: Point[] = [{ ts: 1, val: 'Sonne' }];
        expect(toSeriesData(pts, 'keep', { Sonne: 3 })).toEqual([[1, 3]]);
        expect(toSeriesData(pts)).toEqual([[1, null]]);
    });

    it('a NUMBER raw maps too — 9999 with an authored empty target is a gap nullMode NEVER fills', () => {
        const pts: Point[] = [
            { ts: 1, val: 50 },
            { ts: 2, val: 9999 },
        ];
        expect(toSeriesData(pts, 'forward', { 9999: null })).toEqual([
            [1, 50],
            [2, null], // deliberately discarded — forward does NOT carry 50 into it
        ]);
    });

    it('the counter-check: an INTAKE null still fills (forward) — only mapped gaps are immune', () => {
        const pts: Point[] = [
            { ts: 1, val: 50 },
            { ts: 2, val: null },
        ];
        expect(toSeriesData(pts, 'forward', { 9999: null })).toEqual([
            [1, 50],
            [2, 50],
        ]);
    });

    it('a miss passes the raw value through the normal coercion (key "x", raw "23,5" → 23.5)', () => {
        expect(toSeriesData([{ ts: 1, val: '23,5' }], 'keep', { x: 9 })).toEqual([[1, 23.5]]);
    });

    it('a mapped number feeds the forward-fill `last` like any value', () => {
        const pts: Point[] = [
            { ts: 1, val: 'Sonne' },
            { ts: 2, val: 'abc' },
        ];
        expect(toSeriesData(pts, 'forward', { Sonne: 3 })).toEqual([
            [1, 3],
            [2, 3], // the unconvertible miss fills from the MAPPED 3
        ]);
    });

    it('fetchMultiSeries rides the entry valueMap (the Verlauf plumb)', async () => {
        const gh = (): Promise<Point[]> => Promise.resolve([{ ts: 1, val: 'Sonne' }]);
        const out = await fetchMultiSeries(gh, [{ oid: 'a', valueMap: { Sonne: 3 } }], { start: 0, end: 1 });
        expect(out[0].data).toEqual([[1, 3]]);
    });
});

describe('windowToOptions (ADR-0063: the window arrives RESOLVED)', () => {
    it('passes the resolved start/end through, with defaults', () => {
        const o = windowToOptions({ start: 40000, end: 100000 });
        expect(o.start).toBe(40000);
        expect(o.end).toBe(100000);
        expect(o.aggregate).toBe('average');
        expect(o.count).toBe(500);
        expect(o).not.toHaveProperty('step');
        expect(o).not.toHaveProperty('instance');
    });

    it('passes aggregate/count and omits step unless provided', () => {
        const o = windowToOptions({ start: 0, end: 1000 }, { aggregate: 'minmax', count: 250 });
        expect(o.aggregate).toBe('minmax');
        expect(o.count).toBe(250);
        expect(o).not.toHaveProperty('step');
    });

    it('includes step and instance when provided', () => {
        const o = windowToOptions({ start: 0, end: 1000 }, { step: 60000, instance: 'sql.0' });
        expect(o.step).toBe(60000);
        expect(o.instance).toBe('sql.0');
    });
});

describe('fetchMultiSeries', () => {
    it('fetches each OID in parallel and transforms to series', async () => {
        const gh = (id: string): Promise<Point[]> =>
            Promise.resolve(id === 'a' ? [{ ts: 1, val: 1 }] : [{ ts: 2, val: 2 }]);
        const out = await fetchMultiSeries(
            gh,
            [
                { oid: 'a', name: 'A' },
                { oid: 'b', name: 'B' },
            ],
            {
                start: 0,
                end: 10,
            },
        );
        expect(out).toEqual([
            { name: 'A', data: [[1, 1]] },
            { name: 'B', data: [[2, 2]] },
        ]);
    });

    it('isolates a failing OID (Promise.allSettled) — the other series survives', async () => {
        const gh = async (id: string): Promise<Point[]> =>
            id === 'a' ? [{ ts: 1, val: 1 }] : Promise.reject(new Error('boom'));
        const out = await fetchMultiSeries(gh, [{ oid: 'a' }, { oid: 'b' }], { start: 0, end: 10 });
        expect(out[0].data).toEqual([[1, 1]]);
        expect(out[1].data).toEqual([]);
        expect(out[1].error).toBeTruthy();
    });

    it('defaults a series name to its OID', async () => {
        const gh = (): Promise<Point[]> => Promise.resolve([]);
        const out = await fetchMultiSeries(gh, [{ oid: 'demo.0.x' }], { start: 0, end: 10 });
        expect(out[0].name).toBe('demo.0.x');
    });

    it("overrides the instance per entry (ADR-0039) — a pinned series routes, an Auto series doesn't", async () => {
        const seen: Record<string, ioBroker.GetHistoryOptions> = {};
        const gh = (id: string, options: ioBroker.GetHistoryOptions): Promise<Point[]> => {
            seen[id] = options;
            return Promise.resolve([]);
        };
        await fetchMultiSeries(gh, [{ oid: 'a', instance: 'sql.0' }, { oid: 'b' }], { start: 0, end: 10 });
        expect(seen.a.instance).toBe('sql.0');
        expect(seen.b).not.toHaveProperty('instance');
    });
});

// ── per-series request overrides (ADR-0059, parity Build B issue 07) ──

describe('fetchMultiSeries — per-entry request overrides (ADR-0059)', () => {
    it("an entry's numeric xOffset (SECONDS, ADR-0059 semantics unchanged) shifts THAT OID's start/end into the past (adapter addTime subtracts); the shared window stays for the others", async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        await fetchMultiSeries(recording(calls), [{ oid: 'a', xOffset: 90 }, { oid: 'b' }], {
            start: 1000,
            end: 2000,
            aggregate: 'average',
            count: 10,
        });
        expect(calls[0]?.options.start).toBe(1000 - 90_000); // −offset·1000, the adapter's addTime
        expect(calls[0]?.options.end).toBe(2000 - 90_000);
        expect(calls[1]?.options.start).toBe(1000);
        expect(calls[1]?.options.end).toBe(2000);
    });

    it("an entry's ignoreNull overrides the chart-level gap handling for its data only", async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        const out = await fetchMultiSeries(
            recording(calls),
            [{ oid: 'a', ignoreNull: 'zero' }, { oid: 'b' }, { oid: 'c', ignoreNull: 'keep' }],
            { start: 0, end: 10, aggregate: 'none', count: 10 },
            'forward',
        );
        // a: per-series zero → the null becomes 0
        expect(out[0]?.data).toEqual([
            [1, 5],
            [2, 0],
        ]);
        // b: inherits the chart-level forward → the null carries the last value
        expect(out[1]?.data).toEqual([
            [1, 5],
            [2, 5],
        ]);
        // c: per-series keep → the null stays a gap
        expect(out[2]?.data).toEqual([
            [1, 5],
            [2, null],
        ]);
    });
});

// ── per-series aggregate overrides (ADR-0072, Erben-Override over the chart default) ──

describe('fetchMultiSeries — per-entry aggregate overrides (ADR-0072)', () => {
    it('entries diverge per series: A inherits average, B overrides percentile with its own level, C inherits verbatim', async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        await fetchMultiSeries(
            recording(calls),
            [{ oid: 'a' }, { oid: 'b', aggregate: 'percentile', percentile: 90 }, { oid: 'c' }],
            { start: 0, end: 10, aggregate: 'average', count: 500 },
        );
        expect(calls[0]?.options.aggregate).toBe('average'); // inherits the shared request
        expect(calls[1]?.options.aggregate).toBe('percentile');
        expect(calls[1]?.options.percentile).toBe(90); // its OWN level, not the server default
        expect(calls[2]?.options.aggregate).toBe('average');
    });

    it('an override AWAY from the base aggregate drops the base params (sparse: a percentile key on an average request is a lie)', async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        await fetchMultiSeries(recording(calls), [{ oid: 'a', aggregate: 'max' }], {
            start: 0,
            end: 10,
            aggregate: 'percentile',
            percentile: 75,
            count: 500,
        });
        expect(calls[0]?.options.aggregate).toBe('max');
        expect(calls[0]?.options).not.toHaveProperty('percentile');
    });

    it('an inheriting entry keeps the base aggregate params untouched (they already match)', async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        await fetchMultiSeries(
            recording(calls),
            [{ oid: 'a', percentile: 42 }], // param authored but aggregate INHERITS percentile
            { start: 0, end: 10, aggregate: 'percentile', percentile: 75, count: 500 },
        );
        expect(calls[0]?.options.aggregate).toBe('percentile');
        expect(calls[0]?.options.percentile).toBe(42); // the entry's own level wins under the matching aggregate
    });

    it('an entry switching to percentile WITHOUT its own level gets no percentile key (server default 50)', async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        await fetchMultiSeries(recording(calls), [{ oid: 'a', aggregate: 'percentile' }], {
            start: 0,
            end: 10,
            aggregate: 'average',
            count: 500,
        });
        expect(calls[0]?.options).not.toHaveProperty('percentile');
    });

    it('integral unit + interpolation ride only under the entry effective integral aggregate', async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        await fetchMultiSeries(
            recording(calls),
            [
                { oid: 'a', aggregate: 'integral', integralUnit: 3600, integralInterpolation: 'linear' },
                { oid: 'b', aggregate: 'total' },
                { oid: 'c' },
            ],
            { start: 0, end: 10, aggregate: 'integral', integralUnit: 60, integralInterpolation: 'none', count: 500 },
        );
        expect(calls[0]?.options.integralUnit).toBe(3600); // its own unit + interpolation
        expect(calls[0]?.options.integralInterpolation).toBe('linear');
        expect(calls[1]?.options.aggregate).toBe('total');
        expect(calls[1]?.options).not.toHaveProperty('integralUnit'); // override drops the base params
        expect(calls[1]?.options).not.toHaveProperty('integralInterpolation');
        expect(calls[2]?.options.integralUnit).toBe(60); // inheriting entry keeps the base params
        expect(calls[2]?.options.integralInterpolation).toBe('none');
    });
});

// ── calendar offset keys (ADR-0072, adapter addTime parity: setMonth/setFullYear) ──

describe('shiftByOffset — calendar keys resolve per fetch against the window (addTime parity, ADR-0072)', () => {
    /** [y, m(0-based), d, h, min] of the shifted local time — TZ-robust wall-clock assertions. */
    const ymdh = (ts: number): [number, number, number, number, number] => {
        const d = new Date(ts);
        return [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()];
    };

    it('numeric offsets stay SECONDS subtracted (the ADR-0059 contract, byte-identical)', () => {
        expect(shiftByOffset(2000, 90)).toBe(2000 - 90_000);
        expect(shiftByOffset(2000, -3600)).toBe(2000 + 3_600_000);
        expect(shiftByOffset(2000, 0)).toBe(2000);
    });

    it("'1y' over a leap day overflows like JS/adapter: 2024-02-29 → 2023-03-01 (no clamp)", () => {
        const start = new Date(2024, 1, 29, 12, 0).getTime();
        expect(ymdh(shiftByOffset(start, '1y'))).toEqual([2023, 2, 1, 12, 0]); // Feb 29 − 1y rolls to Mar 1
    });

    it("'-1m' over the month end overflows forward: 2026-03-31 → 2026-05-01 (Apr has 30 days)", () => {
        const start = new Date(2026, 2, 31, 8, 30).getTime();
        expect(ymdh(shiftByOffset(start, '-1m'))).toEqual([2026, 4, 1, 8, 30]);
    });

    it("'1m' shifts INTO THE PAST, '-1m' into the future (the adapter's subtracting setMonth)", () => {
        const start = new Date(2026, 3, 15, 0, 0).getTime(); // Apr 15
        expect(ymdh(shiftByOffset(start, '1m'))).toEqual([2026, 2, 15, 0, 0]); // Mar 15
        expect(ymdh(shiftByOffset(start, '-1m'))).toEqual([2026, 4, 15, 0, 0]); // May 15
    });

    it("'2y' and '-6m' compose the same arithmetic (year/month magnitudes from the key)", () => {
        const start = new Date(2026, 0, 10, 6, 0).getTime();
        expect(ymdh(shiftByOffset(start, '2y'))).toEqual([2024, 0, 10, 6, 0]);
        expect(ymdh(shiftByOffset(start, '-6m'))).toEqual([2026, 6, 10, 6, 0]);
    });

    it('the DST day keeps the LOCAL wall clock (2025-10-26 12:00 → 2024-10-26 12:00; in DST zones the epoch delta is 365d ± 1h — never a fixed-ms shortcut)', () => {
        // 2025-10-26 is Berlin's fall-back Sunday (03:00→02:00): 12:00 local is post-switch.
        // One year back lands on a PRE-switch 2024-10-26 — the wall clock is preserved while
        // the UTC offset differs. The pin is TZ-agnostic (12:00 exists everywhere); on DST
        // runners it is exactly the case a `start − 365d·ms` shortcut would get wrong by 1h.
        const start = new Date(2025, 9, 26, 12, 0).getTime();
        expect(ymdh(shiftByOffset(start, '1y'))).toEqual([2024, 9, 26, 12, 0]);
    });

    it('a calendar key shifts BOTH window ends through the fetch seam (entryRequestOptions)', () => {
        const win = { start: new Date(2026, 5, 15, 0, 0).getTime(), end: new Date(2026, 8, 15, 0, 0).getTime() };
        const req = entryRequestOptions({ ...win, aggregate: 'average' }, { oid: 'a', xOffset: '-3m' });
        expect(ymdh(req.start ?? 0)).toEqual([2026, 8, 15, 0, 0]); // Jun 15 + 3m = Sep 15
        expect(ymdh(req.end ?? 0)).toEqual([2026, 11, 15, 0, 0]); // Sep 15 + 3m = Dec 15
    });
});

describe('windowToOptions — resolution + aggregate params (parity Build A, ADR-0064)', () => {
    const win = { start: 0, end: 1000 };

    it('a step (ms) REPLACES count in the request (ioBroker: count ignored when step set)', () => {
        const o = windowToOptions(win, { step: 60_000 });
        expect(o.step).toBe(60_000);
        expect(o).not.toHaveProperty('count');
    });

    it('no step ⇒ count as before', () => {
        const o = windowToOptions(win, { count: 250 });
        expect(o.count).toBe(250);
        expect(o).not.toHaveProperty('step');
    });

    it('percentile rides ONLY under the percentile aggregate (sparse elsewhere)', () => {
        const on = windowToOptions(win, { aggregate: 'percentile', percentile: 75 });
        expect(on.aggregate).toBe('percentile');
        expect(on.percentile).toBe(75);
        const off = windowToOptions(win, { aggregate: 'average', percentile: 75 });
        expect(off).not.toHaveProperty('percentile');
    });

    it('integral rides unit + interpolation ONLY under the integral aggregate', () => {
        const on = windowToOptions(win, { aggregate: 'integral', integralUnit: 3600, integralInterpolation: 'linear' });
        expect(on.integralUnit).toBe(3600);
        expect(on.integralInterpolation).toBe('linear');
        const off = windowToOptions(win, { aggregate: 'total', integralUnit: 3600, integralInterpolation: 'linear' });
        expect(off).not.toHaveProperty('integralUnit');
        expect(off).not.toHaveProperty('integralInterpolation');
    });
});

describe('sanitizeStep — the point ceiling on the step path (K3, ADR-0046 addendum)', () => {
    it('raises a too-fine step to span/maxPoints (1 s over 30 d at 5000 points)', () => {
        const monthMs = 30 * 86_400_000;
        expect(sanitizeStep(1000, monthMs, 5000)).toBe(Math.ceil(monthMs / 5000)); // ≈ 8.6 min
    });

    it('keeps a step that already fits the ceiling untouched', () => {
        expect(sanitizeStep(3600_000, 86_400_000, 5000)).toBe(3600_000); // 1 h over 1 d fits
    });

    it('rounds UP so the ceiling is never exceeded (span not divisible)', () => {
        // 1000 ms span, 3 points allowed → 333.33… → ceil 334 ms (334·3 = 1002 ≥ span — never under).
        expect(sanitizeStep(1, 1000, 3)).toBe(334);
    });

    it('degrades safely on a zero/negative ceiling (no division blow-up)', () => {
        expect(sanitizeStep(500, 1000, 0)).toBe(1000); // max(500, ceil(1000/1)) — guard, not a crash
    });
});
