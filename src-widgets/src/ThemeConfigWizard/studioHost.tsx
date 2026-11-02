/**
 * Studio host — runs the Theme Studio in its own React root outside the widget palette.
 *
 * @module ThemeConfigWizard/studioHost
 * @remarks
 * ADR-0020 addendum 2026-11-02 (A2). vis-2 renders the palette button inside the palette
 * tree, which unmounts on a group collapse, a palette filter, hiding the palette, a view
 * switch and the run mode — and every inherited palette style (e.g. a centring `text-align`)
 * leaks into whatever renders there. A React portal does not help: it unmounts together with
 * the button. So the studio lives in a root of its OWN under `document.body`: created on
 * open, unmounted on close (fresh state per Studio session).
 *
 * One studio per page: a second open re-renders the existing root and brings its container
 * to the front instead of adding another. The root is attached to its container (found by
 * id), not held in module scope, so a module reload (HMR) adopts the open studio or reuses a
 * leftover container instead of orphaning it.
 *
 * The palette button only triggers: while mounted it forwards the latest `socket` and
 * `themeType` through {@link updateStudio}; once the palette is gone the last values apply.
 * The panel provides its own chrome theme; portals (dialogs, tooltips) keep working because
 * they render through this root's React tree.
 */

import { createRoot, type Root } from 'react-dom/client';
import type { Connection } from '@iobroker/adapter-react-v5';

import ThemeStudioPanel from './ThemeStudioPanel';

/** DOM id of the studio's container under `document.body`. */
export const STUDIO_CONTAINER_ID = 'vis-2-widgets-collection-theme-studio';

/** Host props the studio needs from the palette context. */
export interface StudioHostProps {
    /** ioBroker socket connection for reading/writing the theme state. */
    socket: Connection;
    /** vis-2 host dark/light mode used to theme the panel chrome. */
    themeType: 'dark' | 'light';
}

/** Property under which the studio's React root is attached to its container. */
const ROOT_KEY = '__vis2CollectionStudioRoot';

/** The studio container with its attached React root (absent while closed). */
type StudioContainer = HTMLElement & { [ROOT_KEY]?: Root };

/** The container of the open studio, or `null` when no studio is open. */
function openContainer(): StudioContainer | null {
    const container = document.getElementById(STUDIO_CONTAINER_ID) as StudioContainer | null;
    return container?.[ROOT_KEY] ? container : null;
}

/** Renders the panel with the given host props into the studio's root. */
function renderInto(container: StudioContainer, props: StudioHostProps): void {
    container[ROOT_KEY]?.render(
        <ThemeStudioPanel
            socket={props.socket}
            themeType={props.themeType}
            onClose={closeStudio}
        />,
    );
}

/**
 * Opens the studio, or brings the open one to the front.
 *
 * @param props - The current host props from the palette button.
 */
export function openStudio(props: StudioHostProps): void {
    let container = openContainer();
    if (container) {
        // Later siblings with the same z-index would cover the panel.
        if (document.body.lastElementChild !== container) {
            document.body.appendChild(container);
        }
    } else {
        // Reuse a leftover container (e.g. after a module reload) instead of adding another.
        container =
            (document.getElementById(STUDIO_CONTAINER_ID) as StudioContainer | null) ?? document.createElement('div');
        container.id = STUDIO_CONTAINER_ID;
        container.replaceChildren();
        document.body.appendChild(container);
        container[ROOT_KEY] = createRoot(container);
    }
    renderInto(container, props);
}

/**
 * Forwards the latest host props to the open studio (no-op while closed). Once the palette
 * is gone, the open studio keeps the props it was last rendered with.
 *
 * @param props - The current host props from the palette button.
 */
export function updateStudio(props: StudioHostProps): void {
    const container = openContainer();
    if (container) {
        renderInto(container, props);
    }
}

/** Closes the studio: unmounts its root and removes the container. */
export function closeStudio(): void {
    const container = document.getElementById(STUDIO_CONTAINER_ID) as StudioContainer | null;
    if (!container) {
        return;
    }
    const root = container[ROOT_KEY];
    delete container[ROOT_KEY];
    root?.unmount();
    container.remove();
}
