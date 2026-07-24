/**
 * `--new` scaffold helper (runs in-browser).
 *
 * @module preview/scaffold
 * @remarks
 * Reads a widget's declared field defaults from its static `getWidgetInfo()`
 * and emits a starter fixture source with every default pre-filled. The demo
 * story (value/icon/scenario) is left as TODO for the author — that's the only
 * manual part; the boilerplate (all field defaults) is automatic.
 *
 * Widget class modules `extends window.visRxWidget`; preview.html stubs that so
 * importing them here (to read the static method) doesn't crash.
 */

interface FieldLike {
    name?: string;
    default?: unknown;
}
interface VisAttrsGroupLike {
    fields?: FieldLike[];
}
interface WidgetInfoLike {
    visAttrs?: VisAttrsGroupLike[];
}

// All widget class modules, keyed by their path relative to src/preview/.
const widgetClassModules = import.meta.glob('../[A-Z]*/*CollectionWidget.tsx');

/**
 * Derives the fixture/PNG slug from a widget class name.
 * `InputCollectionWidget` → `input`, `ButtonGroupCollectionWidget` → `button-group`.
 */
export function slugFor(widgetName: string): string {
    const base = widgetName.replace(/CollectionWidget$/, '');
    return base.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Builds the starter fixture source for a widget.
 */
export async function buildScaffoldSource(widgetName: string): Promise<string> {
    const key = `../${widgetName}/${widgetName}.tsx`;
    const loader = widgetClassModules[key];
    if (!loader) {
        throw new Error(`No widget class module found for ${widgetName} (looked for ${key})`);
    }
    const mod = (await loader()) as { default: { getWidgetInfo: () => WidgetInfoLike } };
    const info = mod.default.getWidgetInfo();

    const defaults: Record<string, unknown> = {};
    for (const group of info.visAttrs ?? []) {
        for (const field of group.fields ?? []) {
            if (field.name && field.default !== undefined) {
                defaults[field.name] = field.default;
            }
        }
    }

    const slug = slugFor(widgetName);
    const body = widgetName.replace(/Widget$/, ''); // InputCollectionWidget → InputCollection
    // Prettier re-indents on save, so plain JSON is fine here.
    const defaultsLiteral = JSON.stringify(defaults, null, 4);

    return [
        '/**',
        ` * ${widgetName} preview fixture (scaffolded).`,
        ' *',
        ` * @module preview/scenes/${slug}`,
        ' * @remarks',
        ' * TODO: fill the demo story (value/icon/scenario) marked below. Every',
        ' * field default was auto-filled from getWidgetInfo() — adjust as needed.',
        ' */',
        `import ${body} from '../../${widgetName}/${body}';`,
        '',
        "import type { PreviewScene } from '../types';",
        '',
        "const OID = 'demo.0.state'; // TODO: a representative OID",
        '',
        `const ${slug}Scene: PreviewScene = {`,
        `    slug: '${slug}',`,
        `    component: ${body},`,
        '    size: { width: 480, height: 160 }, // TODO: tune',
        '    context: {',
        `        widget: { data: ${defaultsLiteral.replace(/\n/g, '\n        ')}, style: {} },`,
        "        values: { [`${OID}.val`]: 'TODO' }, // TODO: demo value",
        "        mode: 'light',",
        '        wrappedContent: true,',
        '    },',
        '};',
        '',
        `export default ${slug}Scene;`,
        '',
    ].join('\n');
}
