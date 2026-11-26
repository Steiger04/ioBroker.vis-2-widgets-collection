/**
 * Single source of truth for the Module-Federation widget roster.
 *
 * Two consumers read this module:
 *  - vite.config.ts imports {@link buildExposes} to derive the MF `exposes` map.
 *  - widgetsRegistry.test.ts asserts io-package.json `components` stays in sync.
 *
 * io-package.json cannot `require` TypeScript, so it remains hand-written and is
 * validated against the rosters by the test (the one unavoidable manual copy).
 *
 * One remote bundle, two palette sets (ADR-0118 addendum): the collection widgets
 * are the components of the `vis2CollectionWidget` entry, the heating widgets those
 * of a second entry keyed by {@link HEATING_SET}'s set id, with the same remote
 * `name` and URL. Both rosters are exposed alike.
 *
 * Membership note: this is the *module* roster, not the `tpl…` type-id roster in
 * types/widget-registry.d.ts — those are different sets (e.g. Template is a tpl
 * type but not shipped; ThemeConfigWizard ships but is not a tpl widget) and are
 * deliberately kept separate.
 */

// Modules exposed as vis-2 components of the collection set. Each follows the path
// convention `./src/${name}/${name}` (see widgetPath). Order mirrors io-package.json.
export const collectionWidgets = [
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
    'EchartsCollectionWidget',
    'ThemeConfigWizard',
] as const;

// Modules exposed as vis-2 components of the heating set, same path convention.
export const heatingWidgets = ['HeatingThermostatCollectionWidget'] as const;

// Every module exposed as a vis-2 component: the collection set, then the heating set.
export const widgets = [...collectionWidgets, ...heatingWidgets] as const;

/**
 * The palette set of the heating types, in one place (ADR-0118 addendum): every heating type spreads
 * it into its `getWidgetInfo()`. The set id is stored as `widgetSet` of every placed widget and keys
 * the second `common.visWidgets` entry, so it never changes after the first release; the colour and
 * the adapter icon (no `visSetIcon`) are the collection set's.
 */
export const HEATING_SET = {
    visSet: 'vis-2-widgets-collection-heating',
    visSetLabel: 'widgets_collection_heating',
    visSetColor: '#0C0A43',
} as const;

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
