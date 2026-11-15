/**
 * The course of a Theme-Auftrag: read the stored theme, write the next one, leave the project
 * (ADR-0115).
 *
 * @module ThemeConfigWizard/carryOutThemeOrder
 * @remarks
 * A Theme-Auftrag is a one-time order: once its settings are in the stored theme it is gone
 * from the view. This module owns the steps and their sequence; what an order sets is the
 * reckoning of {@link module:lib/theme/themeOrder}, and when an order starts is decided by the
 * widget ({@link module:ThemeConfigWizard}).
 *
 * - The order waits for the server's answers, never for a time: it reads, then writes, then
 *   leaves, each step after the answer to the one before.
 * - It leaves only after the write is confirmed. A failed read or write rejects, and the order
 *   stays in the project.
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

/** Content equality of two themes (themes are plain JSON objects). */
const sameTheme = (a: UserTheme, b: UserTheme): boolean => JSON.stringify(a) === JSON.stringify(b);

/** What the course of an order needs from the host. */
export interface ThemeOrderHost {
    /** The socket the theme state is read and written with. */
    socket: Pick<Connection, 'getState' | 'setState'>;
    /** The order's data as the assistant wrote it. */
    order: Readonly<Record<string, unknown>>;
    /** Takes the order out of the project; called once the theme is as the order wants it. */
    leave: () => Promise<void>;
}

/**
 * Carries out a Theme-Auftrag.
 *
 * @param host - The socket, the order's data and the way out of the project.
 * @returns Resolves once the order has left the project; rejects when a step fails — the order
 *   is still in the project then.
 */
export async function carryOutThemeOrder(host: ThemeOrderHost): Promise<void> {
    const { socket, order, leave } = host;
    const state = await socket.getState(THEME_STATE_ID);
    const stored = parseStoredTheme(state?.val);
    const next = applyThemeOrder(stored, order);
    if (!sameTheme(next, stored)) {
        await socket.setState(THEME_STATE_ID, JSON.stringify(next));
    }
    await leave();
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
