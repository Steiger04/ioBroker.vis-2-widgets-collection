import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildExposes, helpers, widgets } from './widgetsRegistry';

// vitest is launched with cwd = src-widgets (npm scripts and CI all cd here
// first), so repo root is one level up and widget sources live under ./src.
const repoRoot = resolve(process.cwd(), '..');
const widgetSrc = (name: string): string => resolve(process.cwd(), 'src', name, `${name}.tsx`);

// io-package.json cannot import TypeScript, so it stays hand-written — this test
// is the gate that keeps its `components` array in sync with the canonical roster.
const ioPackage = JSON.parse(readFileSync(resolve(repoRoot, 'io-package.json'), 'utf8')) as {
    common: { visWidgets: { vis2CollectionWidget: { components: string[] } } };
};
const components = ioPackage.common.visWidgets.vis2CollectionWidget.components;

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

    it('io-package components equal the registry widgets (order-independent)', () => {
        expect(new Set(components)).toEqual(new Set(widgets));
    });

    it('every widget source file exists at the conventional path', () => {
        for (const name of widgets) {
            expect(existsSync(widgetSrc(name)), `missing src/${name}/${name}.tsx`).toBe(true);
        }
    });

    it('helpers are not registered as io-package components', () => {
        for (const helper of helpers) {
            expect(components).not.toContain(helper.name);
        }
    });
});
