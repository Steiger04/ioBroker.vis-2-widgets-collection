/**
 * A stand-in for the vis-2 editor around a mounted widget, and a state server that answers when
 * the test says so — the environment of the seam „Theme-Auftrag“ (ADR-0115).
 *
 * @module lib/testing/editorStandIn
 * @remarks
 * A Theme-Auftrag acts on what the host hands a mounted widget: the project, the function that
 * changes it, the socket. The stand-in rebuilds that part of the host (vis-2 2.20):
 * - {@link installHostWidgetClass} sets a `window.visRxWidget` that is a real React component
 *   with the host's lifecycle and render shape (`Vis/visBaseWidget.tsx` render: the widget's
 *   entry in the project, then `renderWidgetBody`);
 * - {@link mountEditor} holds a project, mounts the widgets of the open view by their type and
 *   hands each the context the engine builds (`Vis/visEngine.tsx`): `views` is the whole
 *   project, frozen as the host's store freezes it; `changeProject` replaces the whole project
 *   and stamps it (`Editor.tsx` changeProject). In the runtime there is no edit mode and no
 *   `changeProject` (`Runtime.tsx`);
 * - {@link stateServer} answers a read or a write only when the test triggers it. A socket
 *   that answers at once hides every race between two orders, a re-mount and the project.
 *
 * The module must not import a widget: `Generic` reads `window.visRxWidget` when it is loaded,
 * so a test installs the host class in a `vi.hoisted` block before its imports.
 */
import { act, Component, type ComponentType, type ReactNode } from 'react';

import type { Connection } from '@iobroker/gui-components';
import type { Project } from '@iobroker/types-vis-2';

import { createTestRoot } from './testRoots';

// React requires the act-environment flag when updates are driven outside react-dom/test-utils.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

/** The props the host's view hands a widget, as far as the stand-in fills them. */
interface HostWidgetProps {
    id: string;
    view: string;
    tpl: string;
    editMode: boolean;
    runtime: boolean;
    context: {
        views: Project;
        socket: Connection;
        runtime: boolean;
        changeProject: ((project: Project, ignoreHistory?: boolean) => Promise<void>) | undefined;
    };
}

/**
 * Sets the host's widget base class: a React component that renders `renderWidgetBody` for the
 * widget's entry in the project and nothing once the entry is gone. Its `t` reads `this` like
 * the host's (see {@link module:lib/testing/visRxWidgetStub}).
 */
export function installHostWidgetClass(): void {
    class HostWidget extends Component<HostWidgetProps> {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string): string {
            void this.getI18nPrefix;
            return key;
        }

        state = {};

        // The host's lifecycle hooks: a widget overrides them and calls `super`.
        // eslint-disable-next-line class-methods-use-this
        componentDidMount(): void {}

        // eslint-disable-next-line class-methods-use-this
        componentDidUpdate(): void {}

        // eslint-disable-next-line class-methods-use-this
        componentWillUnmount(): void {}

        // eslint-disable-next-line class-methods-use-this
        renderWidgetBody(_props: unknown): ReactNode {
            return null;
        }

        render(): ReactNode {
            const { context, view, id } = this.props;
            const widget = (context.views[view]?.widgets as Record<string, unknown> | undefined)?.[id];
            if (!widget || typeof widget !== 'object') {
                return null;
            }
            return (
                <div data-widget={id}>
                    {this.renderWidgetBody({
                        id: `rx_${id}`,
                        widget,
                        style: {},
                        className: '',
                        overlayClassNames: [],
                        refService: { current: null },
                    })}
                </div>
            );
        }
    }
    (window as unknown as { visRxWidget: unknown }).visRxWidget = HostWidget;
}

/** A copy that shares nothing with its source (a project is plain JSON). */
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/** Freezes an object and everything in it, as the host's store hands out the project. */
const deepFreeze = <T,>(value: T): T => {
    if (value !== null && typeof value === 'object' && !Object.isFrozen(value)) {
        Object.freeze(value);
        Object.values(value).forEach(deepFreeze);
    }
    return value;
};

/** A project change a widget asked the editor for. */
export interface ProjectChange {
    /** The project as it was handed over. */
    project: Project;
    /** Whether the change asked for no history entry of its own. */
    ignoreHistory: boolean;
}

/** What {@link mountEditor} takes. */
export interface EditorOptions {
    /**
     * The widget classes by type id, as the host's catalog resolves a widget's `tpl`. Typed
     * loosely: a widget class declares the host's full props, the stand-in fills a part.
     */
    types: Record<string, unknown>;
    /** The project the editor starts with. */
    project: Project;
    /** The view the editor shows; only its widgets are mounted. */
    view: string;
    /** The socket the widgets are handed. */
    socket: Connection;
    /** `true` for the runtime: no edit mode, and the host hands no `changeProject`. */
    runtime?: boolean;
    /** Whether the editor edits (`true`) or previews (`false`, its „Toggle runtime“); the runtime never edits. */
    editMode?: boolean;
}

/** The mounted editor stand-in. */
export interface EditorStandIn {
    /** The element the widgets are rendered into. */
    container: HTMLElement;
    /** The project the editor holds now. */
    project: () => Project;
    /** The project changes the widgets asked for, oldest first. */
    changes: readonly ProjectChange[];
    /** Switches between editing and the editor's preview. */
    setEditMode: (editMode: boolean) => void;
}

/**
 * Mounts the widgets of one view the way the editor does.
 *
 * @param options - The project, the open view, the widget types and the socket.
 * @returns The stand-in; its root is unmounted after the test ({@link module:lib/testing/testRoots}).
 */
export function mountEditor(options: EditorOptions): EditorStandIn {
    const { types, view, socket } = options;
    const runtime = options.runtime === true;
    let editMode = !runtime && options.editMode !== false;
    let project = deepFreeze(clone(options.project));
    let stamp = 0;
    const changes: ProjectChange[] = [];

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);

    const render = (): void => {
        const widgets = (project[view]?.widgets ?? {}) as Record<string, { tpl: string }>;
        // The engine builds the context anew with every render.
        const context: HostWidgetProps['context'] = {
            views: project,
            socket,
            runtime,
            changeProject: runtime ? undefined : changeProject,
        };
        root.render(
            <>
                {Object.keys(widgets).map(id => {
                    const Widget = types[widgets[id].tpl] as ComponentType<HostWidgetProps> | undefined;
                    return Widget ? (
                        <Widget
                            key={id}
                            id={id}
                            view={view}
                            tpl={widgets[id].tpl}
                            editMode={editMode}
                            runtime={runtime}
                            context={context}
                        />
                    ) : null;
                })}
            </>,
        );
    };

    // `Editor.tsx` changeProject: the project handed over is stamped in place, replaces the
    // whole project in the store and reaches the widgets with the next render.
    function changeProject(next: Project, ignoreHistory = false): Promise<void> {
        changes.push({ project: clone(next), ignoreHistory });
        (next.___settings as unknown as { ts: string }).ts = `stamp-${++stamp}`;
        project = deepFreeze(next);
        render();
        return Promise.resolve();
    }

    act(render);

    return {
        container,
        project: () => project,
        changes,
        setEditMode: next => {
            editMode = !runtime && next;
            act(render);
        },
    };
}

/** Lets the continuations of an answered request run: a widget's own steps between two requests. */
const flush = async (): Promise<void> => {
    for (let round = 0; round < 10; round++) {
        await Promise.resolve();
    }
};

/** A request that waits for its answer. */
interface Waiting {
    answer: () => void;
}

/** A server holding states that answers a request only when the test triggers it. */
export interface StateServer {
    /** The socket to hand to the editor. */
    socket: Connection;
    /** The value a state holds now. */
    valueOf: (id: string) => unknown;
    /** The reads that wait for their answer. */
    pendingReads: () => number;
    /** The writes that wait for their answer. */
    pendingWrites: () => number;
    /** The requests the server has received at all. */
    received: () => { reads: number; writes: number };
    /** Answers the oldest waiting read with the value the state held when the read arrived. */
    answerRead: () => Promise<void>;
    /** Stores the value of the oldest waiting write and confirms it. */
    answerWrite: () => Promise<void>;
}

/**
 * A state server whose answers the test triggers.
 *
 * @param states - The states and their values at the start; a state without a value reads as
 *   not existing (`null`).
 * @returns The server and its socket.
 */
export function stateServer(states: Readonly<Record<string, unknown>>): StateServer {
    const values = new Map<string, unknown>(Object.entries(states));
    const reads: Waiting[] = [];
    const writes: Waiting[] = [];
    const received = { reads: 0, writes: 0 };

    const socket = {
        getState: (id: string): Promise<ioBroker.State | null> => {
            received.reads++;
            // A read sees the state as it is when it arrives, however late its answer comes.
            const value = values.get(id);
            return new Promise(resolve => {
                reads.push({ answer: () => resolve(value === undefined ? null : ({ val: value } as ioBroker.State)) });
            });
        },
        setState: (id: string, value: unknown): Promise<void> => {
            received.writes++;
            return new Promise(resolve => {
                writes.push({
                    answer: () => {
                        values.set(id, value);
                        resolve();
                    },
                });
            });
        },
        subscribeState: (): Promise<void> => Promise.resolve(),
        unsubscribeState: (): void => undefined,
    } as unknown as Connection;

    const answerOldest = async (waiting: Waiting[], what: string): Promise<void> => {
        const request = waiting.shift();
        if (!request) {
            throw new Error(`No ${what} waits for an answer`);
        }
        await act(async () => {
            request.answer();
            await flush();
        });
    };

    return {
        socket,
        valueOf: id => values.get(id),
        pendingReads: () => reads.length,
        pendingWrites: () => writes.length,
        received: () => ({ ...received }),
        answerRead: () => answerOldest(reads, 'read'),
        answerWrite: () => answerOldest(writes, 'write'),
    };
}
