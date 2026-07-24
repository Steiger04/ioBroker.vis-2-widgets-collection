/**
 * Single source of truth for the Module-Federation widget roster.
 *
 * Two consumers read this module:
 *  - vite.config.ts imports {@link buildExposes} to derive the MF `exposes` map.
 *  - widgetsRegistry.test.ts asserts io-package.json `components` stays in sync.
 *
 * io-package.json cannot `require` TypeScript, so it remains hand-written and is
 * validated against `widgets` by the test (the one unavoidable manual copy).
 *
 * Membership note: this is the *module* roster, not the `tpl…` type-id roster in
 * types/widget-registry.d.ts — those are different sets (e.g. Template is a tpl
 * type but not shipped; ThemeConfigWizard ships but is not a tpl widget) and are
 * deliberately kept separate.
 */

// Modules exposed as vis-2 components. Each follows the path convention
// `./src/${name}/${name}` (see widgetPath). Order mirrors io-package.json.
export const widgets = [
    'StateCollectionWidget',
    'SliderCollectionWidget',
    'InputCollectionWidget',
    'ButtonGroupCollectionWidget',
    'SwitchCollectionWidget',
    'CheckboxCollectionWidget',
    'DialogCollectionWidget',
    'SelectCollectionWidget',
    'RadioGroupCollectionWidget',
    'GaugeCollectionWidget',
    'Light2CollectionWidget',
    'JsonTableCollectionWidget',
    'ThemeConfigWizard',
] as const;

// Modules exposed via MF but NOT registered as vis-2 components. These don't
// follow the widget path convention, so each carries an explicit path.
export const helpers = [{ name: 'translations', path: './src/translations' }] as const;

const widgetPath = (name: string): string => `./src/${name}/${name}`;

// Builds the Module-Federation `exposes` map from the roster. Lives here (not in
// vite.config.ts) so the test can exercise it without importing vite.config,
// which pulls in the federation plugin and crashes the node test env.
export const buildExposes = (): Record<string, string> => {
    const exposes: Record<string, string> = {};
    for (const name of widgets) {
        exposes[`./${name}`] = widgetPath(name);
    }
    for (const helper of helpers) {
        exposes[`./${helper.name}`] = helper.path;
    }
    return exposes;
};
