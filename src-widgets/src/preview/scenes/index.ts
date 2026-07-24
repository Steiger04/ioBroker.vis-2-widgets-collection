/**
 * Auto-discovers all preview scenes.
 *
 * @module preview/scenes
 * @remarks
 * Drop a `*.tsx` fixture (default-exporting a {@link PreviewScene}) into this
 * folder and `npm run gen-previews` picks it up — no registration needed.
 */

import type { PreviewScene } from '../types';

const modules = import.meta.glob('./*.tsx', { eager: true }) as Record<string, { default: PreviewScene }>;

export const scenes: Record<string, PreviewScene> = Object.fromEntries(
    Object.values(modules).map(mod => [mod.default.slug, mod.default]),
);

export const sceneSlugs: string[] = Object.keys(scenes);
