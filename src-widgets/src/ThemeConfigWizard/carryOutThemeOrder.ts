/**
 * The course of a Theme-Auftrag: read the stored theme, write the next one, leave the project
 * (ADR-0115).
 *
 * @module ThemeConfigWizard/carryOutThemeOrder
 * @remarks
 * A Theme-Auftrag is a one-time order: once its settings are in the stored theme it is gone
 * from the view. This module owns the steps, their sequence and what holds over time; what an
 * order sets is the reckoning of {@link module:lib/theme/themeOrder}, and when an order is taken
 * up is decided by the widget ({@link module:ThemeConfigWizard}).
 *
 * - **Answers, not times.** The order reads, then writes, then leaves, each step after the
 *   server's answer to the one before. It leaves only after the write is confirmed.
 * - **One after the other.** All orders of the page stand in one line: an order reads the theme
 *   only once the one before it has written. Read side by side, the later write would undo the
 *   earlier one. The line does not pass an order that waits for an answer — a write that arrives
 *   late after all must not land on top of a later order's.
 * - **Never beside itself.** A course belongs to the order (project, view, widget), not to the
 *   mounted widget. The host mounts a widget anew when one before it leaves the view; the new
 *   widget takes the seat in the running course instead of starting a second one.
 * - **Repeatable.** A course that ends frees its order. An order that shows up again — a redo,
 *   the host's delayed write-back of a moved widget, a new mount after a failure — runs again:
 *   it finds its settings in the theme, writes nothing and leaves.
 * - **The project as it is now.** Whether the order is still in the project, its data and its
 *   way out are asked of the widget mounted at that moment: from the project the host handed it
 *   last. The data is read once the theme is read, right before the write; the way out is taken
 *   right after the write is confirmed.
 * - **Gone is gone.** An order without a mounted widget, or one the project no longer holds,
 *   neither reads nor writes — also when the answer to its read comes late and the person has
 *   deleted it meanwhile. Nor does it leave; an order whose view is merely not shown runs when
 *   it is mounted again. A write that is under way cannot be taken back.
 * - **No silent wait.** A failed step ends the course, and the order stays in the project. An
 *   answer that takes longer than {@link THEME_ORDER_PATIENCE_MS} is told to the widget the same
 *   way, and the course keeps waiting: a late answer still counts. The time is for the hint
 *   alone, no step is tied to it.
 * - The theme is read at the one place the canvas and the Theme Studio read it
 *   ({@link module:lib/theme/storedTheme}) and written in the format the studio writes
 *   (ADR-0020): the theme as JSON text.
 * - An order that changes nothing writes nothing: the stored value stays as it is, text and all.
 */
import type { Connection } from '@iobroker/gui-components';
import type { AnyWidgetId, Project, ViewSettings } from '@iobroker/types-vis-2';

import { THEME_STATE_ID } from '../lib/constants';
import { parseStoredTheme } from '../lib/theme/storedTheme';
import { applyThemeOrder } from '../lib/theme/themeOrder';
import type { UserTheme } from '../lib/theme/themeTypes';

/**
 * How long an order waits for its course before it tells that it is not confirmed. The socket
 * itself sets no time for a read or a write of a state; an answer takes milliseconds.
 */
export const THEME_ORDER_PATIENCE_MS = 10_000;

/** Content equality of two themes (themes are plain JSON objects). */
const sameTheme = (a: UserTheme, b: UserTheme): boolean => JSON.stringify(a) === JSON.stringify(b);

/** The socket the theme state is read and written with. */
export type ThemeOrderSocket = Pick<Connection, 'getState' | 'setState'>;

/** The mounted widget of an order: what the course asks of it, answered from its latest props. */
export interface ThemeOrderSeat {
    /**
     * The order's data as the assistant wrote it, from the project the host handed last;
     * `undefined` when that project does not hold the order any more.
     */
    order: () => Readonly<Record<string, unknown>> | undefined;
    /** Takes the order out of the project the host handed last. */
    leave: () => Promise<void>;
    /** The course failed or is overdue: the order is still in the project. */
    notConfirmed: () => void;
}

/** The course of one order. */
interface Course {
    /** The widget the order is mounted as now, if any. */
    seat: ThemeOrderSeat | null;
    /** Whether the course has taken longer than {@link THEME_ORDER_PATIENCE_MS}. */
    overdue: boolean;
}

/** The courses that have not ended, by their order. */
const courses = new Map<string, Course>();

/** The end of the course that was lined up last; never rejects. Settled when {@link courses} is empty. */
let line: Promise<void> = Promise.resolve();

/**
 * One course: read, write, leave.
 *
 * @param course - The course; its seat may change or go while a step waits.
 * @param socket - The socket to the theme state.
 */
async function carryOut(course: Course, socket: ThemeOrderSocket): Promise<void> {
    if (!course.seat?.order()) {
        // Unmounted while it stood in line: nothing says the order is still in the project.
        return;
    }
    const state = await socket.getState(THEME_STATE_ID);
    // Asked anew: the answer may come long after the person has deleted the order.
    const order = course.seat?.order();
    if (!order) {
        return;
    }
    const stored = parseStoredTheme(state?.val);
    const next = applyThemeOrder(stored, order);
    if (!sameTheme(next, stored)) {
        await socket.setState(THEME_STATE_ID, JSON.stringify(next));
    }
    // No step between the confirmed write and the way out: the seat reads the project now.
    await course.seat?.leave();
}

/**
 * Takes up a Theme-Auftrag for a mounted widget: lines up its course, or joins the course the
 * order already runs.
 *
 * @param key - The order: the same for every widget the host mounts for it.
 * @param socket - The socket to the theme state.
 * @param seat - The mounted widget.
 * @returns Releases the seat; to be called when the widget is unmounted.
 */
export function takeUpThemeOrder(key: string, socket: ThemeOrderSocket, seat: ThemeOrderSeat): () => void {
    let course = courses.get(key);
    if (course) {
        course.seat = seat;
        if (course.overdue) {
            seat.notConfirmed();
        }
    } else {
        const lined: Course = { seat, overdue: false };
        course = lined;
        // With no course left, the line is free: the order starts with this call.
        const turn = courses.size === 0 ? carryOut(lined, socket) : line.then(() => carryOut(lined, socket));
        courses.set(key, lined);
        const patience = setTimeout(() => {
            lined.overdue = true;
            lined.seat?.notConfirmed();
        }, THEME_ORDER_PATIENCE_MS);
        line = turn
            .catch((e: unknown) => {
                console.error(`Cannot carry out the theme order ${key}: ${String(e)}`);
                lined.seat?.notConfirmed();
            })
            .finally(() => {
                clearTimeout(patience);
                courses.delete(key);
            });
    }
    const joined = course;
    return () => {
        if (joined.seat === seat) {
            joined.seat = null;
        }
    };
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
