/**
 * The course of a Theme-Auftrag: read the stored theme, write the next one, leave the project
 * (ADR-0115).
 *
 * @module ThemeConfigWizard/carryOutThemeOrder
 * @remarks
 * A Theme-Auftrag is a one-time order: once its settings are in the stored theme it is gone
 * from the view. This module owns the steps, their sequence and what holds over time; what an
 * order sets is the reckoning of {@link module:ThemeConfigWizard/themeOrder}, and when an order is taken
 * up is decided by the widget ({@link module:ThemeConfigWizard}).
 *
 * - **Answers, not times.** The order reads, then writes, then leaves, each step after the
 *   server's answer to the one before. It leaves only after the write is confirmed.
 * - **One after the other.** All orders of the page stand in one line: an order reads the theme
 *   only once the one before it has written. Read side by side, the later write would undo the
 *   earlier one. The line does not pass a write that waits for its answer — a write that arrives
 *   late after all must not land on top of a later order's.
 * - **Never beside itself.** A course belongs to the order, not to a mounted widget: the widgets
 *   the host mounts for it are its seats. The host mounts a widget anew when one before it
 *   leaves the view; the new widget takes a seat in the running course instead of starting a
 *   second one. Two widgets mounted for the order at once share the course.
 * - **The same order.** An order is its place (project, view, widget) and its data. From the
 *   write on, a course stands for the data it has written: a widget with other data at the same
 *   place — the assistant changed the order, or a new order got the number of a deleted one — is
 *   another order and lines up behind it. Before that, the data is still open: it is read once
 *   the theme is read, right before the write.
 * - **Repeatable.** A course that ends frees its order. An order that shows up again — a redo,
 *   the host's delayed write-back of a moved widget, a new mount after a failure — runs again:
 *   it finds its settings in the theme, writes nothing and leaves. That holds from the moment
 *   the course is on its way out: an order that comes back then gets a course of its own.
 * - **The project as it is now.** Whether the order is still in the project, its data and its
 *   way out are asked of a widget mounted at that moment: from the project the host handed it
 *   last. The way out is taken right after the write is confirmed.
 * - **Gone is gone.** An order without a mounted widget, or one the project no longer holds,
 *   neither reads nor writes: a course that has not written yet ends with its last seat and
 *   frees the line, and the answer to its read counts no more. Nor does it leave; an order whose
 *   view is merely not shown runs when it is mounted again. A write that is under way cannot be
 *   taken back: its course ends with the answer, without a way out, and the line waits for it.
 * - **No silent wait.** A failed step ends the course, and the order stays in the project; its
 *   widget does not try again by itself. An answer that takes longer than
 *   {@link THEME_ORDER_PATIENCE_MS} is told to the widgets the same way, and the course keeps
 *   waiting: a late answer still counts. The time is for the hint alone, no step is tied to it.
 * - The theme is read at the one place the canvas and the Theme Studio read it
 *   ({@link module:lib/theme/storedTheme}) and written in the format the studio writes
 *   (ADR-0020): the theme as JSON text.
 * - An order that changes nothing writes nothing: the stored value stays as it is, text and all.
 */
import type { Connection } from '@iobroker/gui-components';
import type { AnyWidgetId, Project, ViewSettings } from '@iobroker/types-vis-2';

import { THEME_STATE_ID } from '../lib/constants';
import { parseStoredTheme } from '../lib/theme/storedTheme';
import { sameTheme } from '../lib/theme/themeUtils';
import type { ThemeOrderFieldsRxData } from '../types';
import { applyThemeOrder } from './themeOrder';

/**
 * How long an order waits for its course before it tells that it is not confirmed. The socket
 * itself sets no time for a read or a write of a state; an answer takes milliseconds.
 */
export const THEME_ORDER_PATIENCE_MS = 10_000;

/** The socket the theme state is read and written with. */
export type ThemeOrderSocket = Pick<Connection, 'getState' | 'setState'>;

/**
 * The mounted widget of an order: what the course asks of it, answered from its latest props.
 * One object per mounted widget, the same for every call of {@link takeUpThemeOrder}.
 */
export interface ThemeOrderSeat {
    /**
     * The order's data as the assistant wrote it, from the project the host handed last;
     * `undefined` when that project does not hold the order any more. The same object as long
     * as the project is the same.
     */
    order: () => ThemeOrderFieldsRxData | undefined;
    /** Takes the order out of the project the host handed last. */
    leave: () => Promise<void>;
    /** The course failed or is overdue: the order is still in the project. */
    notConfirmed: () => void;
}

/** The course of one order. */
interface Course {
    /** The order's place: the same for every widget the host mounts for it. */
    readonly key: string;
    /** The socket to the theme state. */
    readonly socket: ThemeOrderSocket;
    /** The widgets the order is mounted as now, the latest last. */
    seats: ThemeOrderSeat[];
    /** What the course does: it stands in line, or waits for the answer to one of its steps. */
    step: 'lined' | 'reading' | 'writing' | 'leaving';
    /** The data the course has written, as text; `undefined` until the theme is read. */
    data: string | undefined;
    /** Whether the course has taken longer than {@link THEME_ORDER_PATIENCE_MS}. */
    overdue: boolean;
    /** Whether the course has ended. */
    over: boolean;
    /** The time after which the course is {@link Course.overdue}. */
    readonly patience: ReturnType<typeof setTimeout>;
}

/** How a course ended for a widget that was still mounted then. */
interface Settled {
    /** The data of the order, as text. */
    data: string | undefined;
    /** The data as the widget's project held it then. */
    order: ThemeOrderFieldsRxData | undefined;
    /** Whether the course failed. */
    failed: boolean;
}

/** The courses that have not ended, in their sequence: the first one has its turn. */
const line: Course[] = [];

/** The course a widget of an order joins, by the order's place: the one lined up last. */
const courses = new Map<string, Course>();

/** The course a mounted widget has a seat in. */
const sitting = new WeakMap<ThemeOrderSeat, Course>();

/** The widgets that outlived the course of their order. */
const settled = new WeakMap<ThemeOrderSeat, Settled>();

/** An order's data as text: what tells one order from another at the same place. */
const textOf = (order: ThemeOrderFieldsRxData | undefined): string | undefined => JSON.stringify(order);

/**
 * The seat a course asks: the widget mounted last whose project holds the order — with the data
 * the course has written, once it has.
 */
const seatOf = (course: Course): ThemeOrderSeat | undefined =>
    [...course.seats].reverse().find(seat => {
        const order = seat.order();
        return order && (course.data === undefined || textOf(order) === course.data);
    });

/** Ends a course and gives the turn to the next one in line. */
function end(course: Course): void {
    if (course.over) {
        return;
    }
    course.over = true;
    clearTimeout(course.patience);
    line.splice(line.indexOf(course), 1);
    if (courses.get(course.key) === course) {
        courses.delete(course.key);
    }
    course.seats.forEach(seat => sitting.delete(seat));
    next();
}

/**
 * One course: read, write, leave.
 *
 * @param course - The course; its seats may change or go while a step waits.
 */
async function carryOut(course: Course): Promise<void> {
    if (!seatOf(course)) {
        // Unmounted while it stood in line: nothing says the order is still in the project.
        return;
    }
    const state = await course.socket.getState(THEME_STATE_ID);
    // Asked anew: the answer may come long after the person has deleted the order.
    const order = course.over ? undefined : seatOf(course)?.order();
    if (!order) {
        return;
    }
    course.data = textOf(order);
    const stored = parseStoredTheme(state?.val);
    const next = applyThemeOrder(stored, order);
    if (!sameTheme(next, stored)) {
        course.step = 'writing';
        await course.socket.setState(THEME_STATE_ID, JSON.stringify(next));
    }
    // No step between the confirmed write and the way out: the seat reads the project now. A
    // widget with other data is another order, it does not leave for this one.
    const seat = seatOf(course);
    if (!seat) {
        return;
    }
    course.step = 'leaving';
    const left = new Map(course.seats.map(one => [one, one.order()]));
    await seat.leave();
    // A widget that is still mounted was not taken out with its project: it acts again only
    // when the host hands it another project that holds the order.
    for (const one of course.seats) {
        settled.set(one, { data: course.data, order: left.get(one), failed: false });
    }
}

/**
 * Runs a course to its end, whatever the end is.
 *
 * @param course - The course whose turn it is.
 */
async function run(course: Course): Promise<void> {
    try {
        await carryOut(course);
    } catch (e: unknown) {
        if (!course.over) {
            console.error(`Cannot carry out the theme order ${course.key}: ${String(e)}`);
            for (const seat of course.seats) {
                settled.set(seat, { data: textOf(seat.order()), order: undefined, failed: true });
                seat.notConfirmed();
            }
        }
    }
    const seats = course.seats;
    end(course);
    // An order that is in the project again by now — or still, with other data — is taken up.
    seats.forEach(seat => seatIn(course.key, course.socket, seat));
}

/** Gives the first course in line its turn, unless it has it. */
function next(): void {
    const first = line[0];
    if (first?.step === 'lined') {
        first.step = 'reading';
        void run(first);
    }
}

/**
 * Takes a widget out of the course of its order. A course that has not written yet ends with
 * its last seat — unless the host mounts the order anew in the same pass, which is known once
 * that pass is through.
 *
 * @param seat - The widget.
 */
function vacate(seat: ThemeOrderSeat): void {
    const course = sitting.get(seat);
    if (!course) {
        return;
    }
    sitting.delete(seat);
    course.seats = course.seats.filter(one => one !== seat);
    if (!course.seats.length) {
        void Promise.resolve().then(() => {
            if (!course.seats.length && (course.step === 'lined' || course.step === 'reading')) {
                end(course);
            }
        });
    }
}

/**
 * Gives a widget its seat: in the course its order runs, or in a new one at the end of the line.
 *
 * @param key - The order's place.
 * @param socket - The socket to the theme state.
 * @param seat - The widget.
 */
function seatIn(key: string, socket: ThemeOrderSocket, seat: ThemeOrderSeat): void {
    const order = seat.order();
    if (!order) {
        vacate(seat);
        return;
    }
    const data = textOf(order);
    const own = sitting.get(seat);
    if (own) {
        if (own.data === undefined || own.data === data) {
            return;
        }
        // Other data than the course has written: another order.
        vacate(seat);
    } else {
        const done = settled.get(seat);
        if (done && done.data === data && (done.failed || done.order === order)) {
            return;
        }
    }
    settled.delete(seat);
    let course = courses.get(key);
    if (!course || (course.data !== undefined && (course.data !== data || course.step === 'leaving'))) {
        const lined: Course = {
            key,
            socket,
            seats: [],
            step: 'lined',
            data: undefined,
            overdue: false,
            over: false,
            patience: setTimeout(() => {
                lined.overdue = true;
                lined.seats.forEach(one => one.notConfirmed());
            }, THEME_ORDER_PATIENCE_MS),
        };
        course = lined;
        line.push(lined);
        courses.set(key, lined);
    }
    course.seats.push(seat);
    sitting.set(seat, course);
    if (course.overdue) {
        seat.notConfirmed();
    }
    // With no course before it, the line is free: the order starts with this call.
    next();
}

/**
 * Takes up a Theme-Auftrag for a mounted widget: lines up its course, or joins the course the
 * order already runs. To be called when the widget is mounted and whenever the host hands it new
 * props: a widget that has its seat keeps it.
 *
 * @param key - The order's place: the same for every widget the host mounts for it.
 * @param socket - The socket to the theme state.
 * @param seat - The mounted widget.
 * @returns Releases the seat; to be called when the widget is unmounted.
 */
export function takeUpThemeOrder(key: string, socket: ThemeOrderSocket, seat: ThemeOrderSeat): () => void {
    seatIn(key, socket, seat);
    return () => vacate(seat);
}

/**
 * A project without one widget, as the host removes a widget (vis-2 `AiChat/aiTools.ts`
 * delete_widget): its entry on the view and, on a view with the grid layout, its place in the
 * sections and in the order list. Nothing else differs.
 *
 * @param project - The project as the host hands it to a widget; never changed (the host's
 *   store freezes it).
 * @param view - The view the widget is on.
 * @param id - The widget.
 * @returns A copy the host may take over as the new project.
 */
export function projectWithoutWidget(project: Project, view: string, id: AnyWidgetId): Project {
    const next = JSON.parse(JSON.stringify(project)) as Project;
    const widgets = next[view]?.widgets as Record<string, unknown> | undefined;
    if (widgets) {
        delete widgets[id];
    }
    const settings: ViewSettings | undefined = next[view]?.settings;
    settings?.sections?.forEach(section => {
        section.widgets = section.widgets.filter(one => one !== id);
    });
    if (settings?.order) {
        settings.order = settings.order.filter(one => one !== id);
    }
    return next;
}
