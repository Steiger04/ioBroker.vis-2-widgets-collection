/**
 * Studio colour-field registry — consistency with the theme schema and the error routing.
 *
 * @module ThemeConfigWizard/studioColorFields.test
 * @remarks
 * The registry is the one place that declares the studio's 11 colour fields (spec A4). These
 * tests pin it against the validation schema (every registered path is a colour node; every
 * schema colour path is registered or explicitly left out) and pin where a validation issue
 * lands: the field it belongs to and the section that renders that field.
 */
import { describe, expect, it } from 'vitest';

import { THEME_OPTIONS_SCHEMA, type SchemaNode } from '../lib/theme/themeSchema';
import { STUDIO_COLOR_FIELDS, colorFieldForIssuePath, colorSectionForPath } from './studioColorFields';

/** Every colour leaf path of a schema tree; record keys appear as `*`. */
function schemaColorPaths(node: SchemaNode, path: string, out: Set<string>): Set<string> {
    const child = (key: string): string => (path ? `${path}.${key}` : key);
    switch (node.kind) {
        case 'color':
            out.add(path);
            break;
        case 'object':
            for (const [key, value] of Object.entries(node.properties)) {
                schemaColorPaths(value, child(key), out);
            }
            break;
        case 'union':
            for (const option of node.options) {
                schemaColorPaths(option, path, out);
            }
            break;
        case 'record':
            schemaColorPaths(node.values, child('*'), out);
            break;
        case 'array':
            schemaColorPaths(node.items, child('*'), out);
            break;
        default:
            break;
    }
    return out;
}

const AUGMENTED_SLOTS = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];

/**
 * Schema colour paths the studio deliberately offers no field for: MUI computes the slot
 * variants and shade scales from `main`, and the remaining colours are MUI internals.
 */
const EXCLUDED_COLOR_PATHS: ReadonlySet<string> = new Set([
    ...AUGMENTED_SLOTS.flatMap(slot => [
        `palette.${slot}.light`,
        `palette.${slot}.dark`,
        `palette.${slot}.contrastText`,
        `palette.${slot}.*`,
    ]),
    'palette.text.disabled',
    'palette.common.black',
    'palette.common.white',
    'palette.grey.*',
    'palette.action.active',
    'palette.action.hover',
    'palette.action.selected',
    'palette.action.disabled',
    'palette.action.disabledBackground',
    'palette.action.focus',
]);

describe('studio colour fields ⇔ theme schema', () => {
    const schemaPaths = schemaColorPaths(THEME_OPTIONS_SCHEMA, '', new Set());

    it('declares the 11 colour fields once each', () => {
        const paths = STUDIO_COLOR_FIELDS.map(field => field.path);
        expect(paths).toHaveLength(11);
        expect(new Set(paths).size).toBe(11);
    });

    it.each(STUDIO_COLOR_FIELDS.map(field => [field.path]))('%s is a colour node of the schema', path => {
        expect(schemaPaths.has(path)).toBe(true);
    });

    it('registers every schema colour path or leaves it out explicitly', () => {
        const registered = new Set(STUDIO_COLOR_FIELDS.map(field => field.path));
        const homeless = [...schemaPaths].filter(path => !registered.has(path) && !EXCLUDED_COLOR_PATHS.has(path));
        expect(homeless).toEqual([]);
    });

    it('excludes only paths the schema knows (no stale exclusions)', () => {
        const stale = [...EXCLUDED_COLOR_PATHS].filter(path => !schemaPaths.has(path));
        expect(stale).toEqual([]);
    });
});

describe('error path → section', () => {
    it.each([
        ['palette.primary.main', 'palette'],
        ['palette.secondary.main', 'palette'],
        ['palette.background.default', 'palette'],
        ['palette.background.paper', 'palette'],
        ['palette.divider', 'palette'],
        ['palette.error.main', 'statusText'],
        ['palette.warning.main', 'statusText'],
        ['palette.info.main', 'statusText'],
        ['palette.success.main', 'statusText'],
        ['palette.text.primary', 'statusText'],
        ['palette.text.secondary', 'statusText'],
    ])('%s → %s', (path, section) => {
        expect(colorSectionForPath(path)).toBe(section);
    });

    it.each([
        // A broken slot is reported at the slot (union type error), not at its `main`.
        ['palette.primary', 'palette'],
        ['palette.success', 'statusText'],
        ['palette.text', 'statusText'],
        // Slot variants without a field of their own belong to the slot's section.
        ['palette.error.dark', 'statusText'],
        ['palette.secondary.light', 'palette'],
    ])('%s (no field of its own) → %s', (path, section) => {
        expect(colorSectionForPath(path)).toBe(section);
    });

    it.each(['palette.mode', 'palette.action.hover', 'typography.fontSize', 'corners.topLeft', ''])(
        '%s is not a colour-field path',
        path => {
            expect(colorSectionForPath(path)).toBeUndefined();
        },
    );
});

describe('error path → field', () => {
    it('maps a field path to its field', () => {
        expect(colorFieldForIssuePath('palette.divider')?.path).toBe('palette.divider');
        expect(colorFieldForIssuePath('palette.text.secondary')?.path).toBe('palette.text.secondary');
    });

    it("maps a slot's own error to the slot's only field", () => {
        // A broken `palette.<slot>.main` is reported at `palette.<slot>` (union type error).
        expect(colorFieldForIssuePath('palette.primary')?.path).toBe('palette.primary.main');
        expect(colorFieldForIssuePath('palette.info')?.path).toBe('palette.info.main');
    });

    it('keeps errors without a single field home unmapped', () => {
        // Two fields share the parent — the error belongs to neither alone.
        expect(colorFieldForIssuePath('palette.text')).toBeUndefined();
        expect(colorFieldForIssuePath('palette.background')).toBeUndefined();
        expect(colorFieldForIssuePath('palette')).toBeUndefined();
        expect(colorFieldForIssuePath('palette.primary.light')).toBeUndefined();
        expect(colorFieldForIssuePath('corners.topLeft')).toBeUndefined();
    });
});
