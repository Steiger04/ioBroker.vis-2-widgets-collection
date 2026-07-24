/**
 * Types for the preview-image generator.
 *
 * @module preview/types
 */

import type { FC } from 'react';

/**
 * The per-scene demo data a fixture supplies. {@link module:preview/mockContext.buildPreviewContext}
 * fills in the rest of the {@link AllCollectionContextProps} (host theme, socket
 * stub, noop mutators, …) so fixtures stay small.
 */
export interface PreviewSceneContext {
    /** Demo widget config (oid, oidObject, unit, icon, sizes, flags, …). */
    widget: { data: Record<string, unknown>; style?: Record<string, unknown> };
    /** Demo state values, keyed `${oid}.val` / `${oid}.lc`. */
    values: Record<string, unknown>;
    /** Theme mode passed to the host `Theme()`. */
    mode?: 'light' | 'dark';
    /** Whether CollectionBase renders the framed card (matches the runtime default). */
    wrappedContent?: boolean;
}

/**
 * A declarative preview scene: which component to render, at what size, with
 * which demo context.
 */
export interface PreviewScene {
    /** URL/fixture slug; also the `<slug>` in the PNG filenames. */
    slug: string;
    /** Widget body component to render (e.g. InputCollection). */
    component: FC;
    /** Screenshot size in CSS pixels (rendered at deviceScaleFactor 2). */
    size: { width: number; height: number };
    /** Demo context (partial; host completes it). */
    context: PreviewSceneContext;
}
