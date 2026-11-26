import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import { buildExposes, collectionWidgets, HEATING_SET, heatingWidgets, helpers, widgets } from './widgetsRegistry';

// vitest is launched with cwd = src-widgets (npm scripts and CI all cd here
// first), so repo root is one level up and widget sources live under ./src.
const repoRoot = resolve(process.cwd(), '..');
const widgetSrc = (name: string): string => resolve(process.cwd(), 'src', name, `${name}.tsx`);

/** One entry of `common.visWidgets`: a collection of components out of one remote bundle. */
interface VisWidgetsEntry {
    i18n?: unknown;
    name: string;
    url: string;
    bundlerType?: string;
    components: string[];
}

// io-package.json cannot import TypeScript, so it stays hand-written — this test
// is the gate that keeps its `components` arrays in sync with the canonical roster.
const ioPackage = JSON.parse(readFileSync(resolve(repoRoot, 'io-package.json'), 'utf8')) as {
    common: { visWidgets: Record<string, VisWidgetsEntry> };
};
const { visWidgets } = ioPackage.common;
const collectionEntry = visWidgets.vis2CollectionWidget;
const components = collectionEntry.components;
const heatingEntry = visWidgets[HEATING_SET.visSet];

describe('widgetsRegistry', () => {
    it('buildExposes follows the structural contract (keys + paths)', () => {
        const exposes = buildExposes();

        // Every widget maps to ./${name} → ./src/${name}/${name}
        for (const name of widgets) {
            expect(exposes[`./${name}`]).toBe(`./src/${name}/${name}`);
        }
        // Every helper maps to ./${name} → its explicit path
        for (const helper of helpers) {
            expect(exposes[`./${helper.name}`]).toBe(helper.path);
        }
        // No stray or duplicate entries
        expect(Object.keys(exposes)).toHaveLength(widgets.length + helpers.length);
    });

    it('the module roster is the collection widgets, then the heating widgets', () => {
        expect(widgets).toEqual([...collectionWidgets, ...heatingWidgets]);
    });

    it('io-package components equal the registry collection widgets (order-independent)', () => {
        expect(new Set(components)).toEqual(new Set(collectionWidgets));
    });

    it('every widget source file exists at the conventional path', () => {
        for (const name of widgets) {
            expect(existsSync(widgetSrc(name)), `missing src/${name}/${name}.tsx`).toBe(true);
        }
    });

    it('helpers are not registered as io-package components', () => {
        for (const helper of helpers) {
            expect(components).not.toContain(helper.name);
            expect(heatingEntry?.components ?? []).not.toContain(helper.name);
        }
    });
});

// Set-Kopplung (ADR-0118 addendum): the runtime loads a set by adapter name, entry key or entry
// `name` (vis-2 ≥ 2.20.5), so a heating type's `visSet` without an entry keyed by it would show as
// unknown in a project with only heating widgets.
describe('the heating set: one source, coupled to io-package.json and to every heating type', () => {
    it('keys a second visWidgets entry by the set id, out of the same remote as the collection', () => {
        expect(Object.keys(visWidgets)).toEqual(['vis2CollectionWidget', HEATING_SET.visSet]);
        expect(heatingEntry).toEqual({
            // Translations come out of the remote too: a project with only heating widgets loads this entry alone.
            i18n: collectionEntry.i18n,
            name: collectionEntry.name,
            url: collectionEntry.url,
            bundlerType: collectionEntry.bundlerType,
            components: heatingEntry.components,
        });
    });

    it('lists exactly the heating types of the registry in the heating entry', () => {
        expect(new Set(heatingEntry.components)).toEqual(new Set(heatingWidgets));
        expect(heatingEntry.components.filter(name => components.includes(name))).toEqual([]);
    });

    it('names the set id, label key and colour once', () => {
        expect(HEATING_SET).toEqual({
            visSet: 'vis-2-widgets-collection-heating',
            visSetLabel: 'widgets_collection_heating',
            visSetColor: '#0C0A43',
        });
    });

    it.each(heatingWidgets)('%s takes set id, label key and colour from it, and no set icon', async name => {
        const { default: widget } = (await import(`./${name}/${name}.tsx`)) as {
            default: { getWidgetInfo: () => RxWidgetInfo };
        };
        const info = widget.getWidgetInfo();

        expect(info).toMatchObject(HEATING_SET);
        expect(info.visSetIcon).toBeUndefined();
    });

    it('requires the vis-2 version that loads a set by its entry key', () => {
        const dependencies = (
            JSON.parse(readFileSync(resolve(repoRoot, 'io-package.json'), 'utf8')) as {
                common: { dependencies: Record<string, string>[] };
            }
        ).common.dependencies;

        expect(dependencies).toContainEqual({ 'vis-2': '>=2.20.5' });
    });
});
