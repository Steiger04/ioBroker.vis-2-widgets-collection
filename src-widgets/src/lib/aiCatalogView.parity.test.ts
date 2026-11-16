/**
 * Naht 1 — what the vis-2 assistant (Bauzeit-KI) learns about each type from `getWidgetInfo()`.
 *
 * @module lib/aiCatalogView.parity.test
 * @remarks
 * The test rebuilds the host's projection of a widget type and asserts on it, not on the
 * declaration: the catalog entry (`label` and `help` carry the set's i18n prefix,
 * vis-2 `Vis/visWidgetsCatalog.tsx` getWidgetTypes), the set listing of `list_widget_types`
 * (`{ tpl, label: I18n.t(label), help: I18n.t(help) }`) and the field list of
 * `describe_widget_type` (`name`, `type` with `'text'` as default, translated `label`, the option
 * values, the raw `default`; `AiChat/aiTools.ts`). The palette tooltip shows the same
 * `I18n.t(help)` (`Palette/Widget.tsx`). `I18n.t` is emulated over `en.json` with the prefix the
 * translations module registers, as `I18n.extendTranslations` stores it. The catalog's `style`
 * (`visDefaultStyle`) and `grid` (`visDefaultGrid`) decide the rows a widget starts with in the
 * host's grid layout; the last block checks that its standard configuration fits them.
 *
 * The KI-Leitfaden reaches the assistant as the label of a help-text field: the field list hides
 * nothing, while the attribute panel drops a hidden field before it renders anything of it
 * (`Attributes/Widget/index.tsx` renderFieldRow) and the palette stores only fields with a default.
 * The block over the language files projects the same view with the words of each language.
 *
 * A type placed as an order (`ORDER_TYPES`: the Theme-Auftrag, ADR-0115) is listed and described
 * like a widget. Its block checks what sets it apart: the attribute panel shows nothing of it,
 * whatever its data, and no field has a default — only what the assistant sets counts.
 *
 * Roster: `lib/testing/aiSeams`. Like the other introspection tests it runs
 * isolated (`DOM_TS_TESTS`): it mocks `Generic`, the widget bodies and the heavy editors, none of
 * which contributes a field.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import en from '../i18n/en.json';
import { STUDIO_COLOR_FIELDS } from '../ThemeConfigWizard/studioColorFields';
import { FONT_CATALOGUE } from './theme/fontCatalogue';
import { THEME_PRESETS } from './theme/presets';
import { decodeBlob } from './encoding';
import {
    isUiOnlyCustomField,
    ORDER_TYPES,
    paletteInsertData,
    PLACEABLE_TYPES,
    PLACEABLE_WIDGETS,
    SHARED_FIELD_NAMES,
    UI_ONLY_CUSTOM_FIELDS,
    type WidgetName,
} from './testing/aiSeams';
import { fieldDefaultOf } from './testing/widgetReading';
import { I18N_PREFIX } from './translate';
import { fieldRulesOf, usableWidgetData, type FieldRule } from './usableWidgetData';
import { isWidgetFrameKey, WIDGET_FRAME_SETTINGS, widgetFrameKeysOf } from './widgetFrame';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../JsonTableCollectionWidget/JsonTableColumnEditor', () => ({ default: () => null }));
vi.mock('../EchartsCollectionWidget/EchartsConfigEditor', () => ({ default: () => null }));

/** The render body each placeable type's module imports (mocked: it contributes no field). */
const WIDGET_BODIES: Record<WidgetName, string> = {
    StateCollectionWidget: 'StateCollection',
    SliderCollectionWidget: 'SliderCollection',
    InputCollectionWidget: 'InputCollection',
    ButtonGroupCollectionWidget: 'ButtonGroupCollection',
    SwitchCollectionWidget: 'SwitchCollection',
    CheckboxCollectionWidget: 'CheckboxCollection',
    DialogCollectionWidget: 'DialogCollection',
    SelectCollectionWidget: 'SelectCollection',
    RadioGroupCollectionWidget: 'RadioGroupCollection',
    GaugeCollectionWidget: 'GaugeCollection',
    Light2CollectionWidget: 'Light2Collection',
    JsonTableCollectionWidget: 'JsonTableCollection',
    EchartsCollectionWidget: 'EchartsCollection',
    ThemeConfigWizard: 'ThemeWizardButton',
};
for (const name of PLACEABLE_TYPES) {
    vi.doMock(`../${name}/${WIDGET_BODIES[name]}`, () => ({ default: () => null }));
}

/** The prefix vis-2 takes from the translations module (`translations.default.prefix`). */
const REGISTERED_PREFIX = /prefix:\s*'([^']+)'/.exec(
    readFileSync(resolve(process.cwd(), 'src', 'translations.js'), 'utf8'),
)?.[1];

/** `I18n.t` of one language. */
type Translate = (key: string) => string;

/** `I18n.t` over the words of a language as `I18n.extendTranslations` stores them: every key prefixed once. */
const translatorOf = (texts: Record<string, string>): Translate => {
    const words: Record<string, string> = Object.fromEntries(
        Object.entries(texts).map(([key, text]) => [key.startsWith(I18N_PREFIX) ? key : `${I18N_PREFIX}${key}`, text]),
    );
    return key => words[key] ?? key;
};
const t = translatorOf(en);

/** The language files, as the translations module loads them: one per interface language. */
const I18N_DIR = resolve(process.cwd(), 'src', 'i18n');
const LANGUAGE_FILES = readdirSync(I18N_DIR).filter(file => file.endsWith('.json'));
const readLanguage = (file: string): Record<string, string> =>
    JSON.parse(readFileSync(resolve(I18N_DIR, file), 'utf8')) as Record<string, string>;

/** The host's catalog entry of an RX widget (getWidgetTypes), as far as the assistant reads it. */
interface CatalogType {
    name: string;
    title: string;
    label: string | undefined;
    help: string | undefined;
    set: string;
}

const catalogType = (info: RxWidgetInfo, i18nPrefix: string): CatalogType => ({
    name: info.id,
    title: info.visName,
    label: info.visWidgetLabel ? i18nPrefix + info.visWidgetLabel : undefined,
    help: info.visHelp ? i18nPrefix + info.visHelp : undefined,
    set: info.visSet,
});

/** One entry of `list_widget_types` with a set. */
const listEntry = (
    type: CatalogType,
    translate: Translate = t,
): { tpl: string; label: string; help: string | undefined } => ({
    tpl: type.name,
    label: type.label ? translate(type.label) : type.title,
    help: type.help ? translate(type.help) : undefined,
});

/** One field of `describe_widget_type`. */
interface DescribedField {
    name: string | undefined;
    type: string;
    label: string | undefined;
    options: unknown[] | undefined;
    default: unknown;
}

/** The field list of `describe_widget_type`: the groups flattened, nothing else of a field. */
const describedFields = (info: RxWidgetInfo, i18nPrefix: string, translate: Translate = t): DescribedField[] =>
    (info.visAttrs ?? []).flatMap(group =>
        ((group.fields ?? []) as unknown as Record<string, unknown>[]).map(field => ({
            name: field.name as string | undefined,
            type: (field.type as string | undefined) || 'text',
            label: field.label ? translate(i18nPrefix + (field.label as string)) : undefined,
            options: Array.isArray(field.options)
                ? field.options.map(option =>
                      typeof option === 'string' ? option : (option as { value: unknown }).value,
                  )
                : undefined,
            default: field.default,
        })),
    );

/** The KI-Leitfaden fields of a field list: the assistant tells them by the help-text type. */
const guideFieldsOf = (fields: readonly DescribedField[]): DescribedField[] =>
    fields.filter(field => field.type === 'help');

/** A field as the widget declares it, as far as the checks read past the type description. */
interface DeclaredField {
    name?: string;
    label?: string;
    hidden?: unknown;
}

/** The declaration behind a described field, with whether its group is a vis-2 indexed group. */
const declarationOf = (info: RxWidgetInfo, name: string): { field: DeclaredField; indexed: boolean } => {
    for (const group of info.visAttrs ?? []) {
        const field = (group.fields as readonly DeclaredField[] | undefined)?.find(one => one.name === name);
        if (field) {
            return { field, indexed: group.indexFrom !== undefined };
        }
    }
    throw new Error(`no field "${name}"`);
};

/**
 * Whether the attribute panel drops a field for a widget's data (`Attributes/Widget/index.tsx`
 * renderFieldRow with `Widget.checkFunction`): `true`, a predicate, or the source of an expression.
 * A group is dropped by the same rule before any of its fields (the panel's `render`).
 */
const isHiddenFor = (field: { hidden?: unknown }, data: Record<string, unknown>): boolean => {
    const { hidden } = field;
    if (typeof hidden === 'function') {
        return Boolean((hidden as (data: Record<string, unknown>) => unknown)(data));
    }
    return typeof hidden === 'string' ? Boolean(new Function('data', `return ${hidden};`)(data)) : hidden === true;
};

/** Whether a parsed value is empty but shaped: an empty list, or an object whose values are all empty. */
const isStructurallyEmpty = (value: unknown): boolean => {
    if (value === '' || value === 0 || value === false || value === null) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return typeof value === 'object' && value !== undefined && Object.values(value).every(isStructurallyEmpty);
};

/**
 * Whether a data-bearing custom field shows its shape through its default: declared at all
 * (`storedValue`), with a default; a JSON field with JSON text that is strukturiert-leer (every
 * JSON default is new, so it carries no example content), a scalar field with any default.
 */
const isShapedDefault = (rule: FieldRule | undefined, value: unknown): boolean => {
    if (rule === undefined || value === undefined) {
        return false;
    }
    if (typeof rule !== 'object' || !('json' in rule)) {
        return true;
    }
    try {
        return typeof value === 'string' && isStructurallyEmpty(JSON.parse(decodeBlob(value)));
    } catch {
        return false;
    }
};

/** Whether a field stores JSON: a declared JSON rule, on a custom field or on a text field's configuration blob. */
const isJsonRule = (rule: FieldRule | undefined): boolean => typeof rule === 'object' && 'json' in rule;

/**
 * Sentences of a help text: split after `.`, `!` or `?` followed by a space or the end, and after
 * the full-width marks of Chinese (`。`, `！`, `？`), which no space follows.
 */
const sentencesOf = (text: string): string[] =>
    text
        .trim()
        .split(/(?<=[.!?])\s+|(?<=[。！？])/)
        .filter(sentence => sentence !== '');

/** The most characters a help text has in any language: the palette tooltip stays one short sentence. */
const HELP_MAX_LENGTH = 120;

/** The characters of a text, a surrogate pair counted once. */
const lengthOf = (text: string): number => Array.from(text).length;

const infos = new Map<WidgetName, RxWidgetInfo>();

beforeAll(async () => {
    for (const name of PLACEABLE_TYPES) {
        const mod = (await import(`../${name}/${name}.tsx`)) as { default: { getWidgetInfo: () => RxWidgetInfo } };
        infos.set(name, mod.default.getWidgetInfo());
    }
    // The first run pays the cold Vite transform of every field module.
}, 60_000);

describe('Naht 1: the assistant’s view of the widget catalog', () => {
    it('reads the prefix the translations module registers', () => {
        expect(REGISTERED_PREFIX).toBe(I18N_PREFIX);
    });

    it('checks every type of the registry: the placeable widgets and the order', () => {
        expect(PLACEABLE_TYPES).toHaveLength(14);
        expect(PLACEABLE_WIDGETS).toHaveLength(13);
        expect(Object.keys(ORDER_TYPES)).toEqual(['ThemeConfigWizard']);
    });

    describe.each(PLACEABLE_TYPES)('%s', name => {
        const entry = (): ReturnType<typeof listEntry> => listEntry(catalogType(infos.get(name)!, I18N_PREFIX));

        it('lists a translated label (the resolution visHelp has to follow)', () => {
            const info = infos.get(name)!;
            expect(entry().label).toBe((en as Record<string, string>)[info.visWidgetLabel!]);
        });

        it('lists a translated help of one sentence and at most 120 characters, resolved like the label', () => {
            const info = infos.get(name)!;
            const help = entry().help;

            expect(info.visHelp, 'visHelp').toBeTruthy();
            // Translated: the text of en.json, not the key the host would show for a miss.
            expect(help).toBe((en as Record<string, string>)[info.visHelp!]);
            expect(sentencesOf(help!)).toHaveLength(1);
            expect(lengthOf(help!)).toBeLessThanOrEqual(HELP_MAX_LENGTH);
        });

        it('describes exactly one KI-Leitfaden field: the first field, a help text with a translated label and no default', () => {
            const info = infos.get(name)!;
            const fields = describedFields(info, I18N_PREFIX);
            const guides = guideFieldsOf(fields);

            expect(guides).toHaveLength(1);
            const [guide] = guides;
            expect(guide.name).toBeTruthy();
            const { field, indexed } = declarationOf(info, guide.name!);
            expect(fields[0]).toBe(guide);
            expect(indexed, 'in an indexed group').toBe(false);
            // Translated: the text of en.json, not the key the host would show for a miss.
            expect(guide.label).toBeTruthy();
            expect(guide.label).toBe((en as Record<string, string>)[field.label!]);
            expect(guide.default).toBeUndefined();
        });

        it('keeps the KI-Leitfaden field hidden for any data, and out of the data a palette insert stores', () => {
            const info = infos.get(name)!;
            const guide = guideFieldsOf(describedFields(info, I18N_PREFIX))[0]?.name;
            expect(guide, 'the name of the KI-Leitfaden field').toBeTruthy();
            const { field } = declarationOf(info, guide!);
            const inserted = paletteInsertData(info.visAttrs ?? []);

            for (const data of [{}, inserted, { ...inserted, [guide!]: 'set by the assistant' }]) {
                expect(isHiddenFor(field, data)).toBe(true);
            }
            expect(Object.keys(inserted)).not.toContain(guide);
        });

        it('shows a strukturiert-leerer default for every data-bearing custom field and configuration blob, or lists it as UI only', () => {
            const info = infos.get(name)!;
            const rules = fieldRulesOf(info.visAttrs ?? []);
            const missing = describedFields(info, I18N_PREFIX)
                .filter(
                    field =>
                        field.name &&
                        (field.type === 'custom' || isJsonRule(rules.named.get(field.name))) &&
                        !isUiOnlyCustomField(field.name) &&
                        // A frame setting has no default on purpose (ADR-0117); see its own block.
                        !isWidgetFrameKey(field.name),
                )
                .filter(field => !isShapedDefault(rules.named.get(field.name!), field.default))
                .map(field => `${field.name} (default ${JSON.stringify(field.default)})`);

            expect(missing).toEqual([]);
        });

        // An emptied field that reads as unset (`emptiedReadsUnset`) is checked too: its default is no ''.
        it('shows only defaults the Rückfall-Regel keeps (a default is a valid start value)', () => {
            const info = infos.get(name)!;
            const rules = fieldRulesOf(info.visAttrs ?? []);
            const dropped = describedFields(info, I18N_PREFIX)
                .filter(
                    field =>
                        field.name &&
                        field.default !== undefined &&
                        (rules.named.has(field.name) || rules.emptiedReadsUnset.has(field.name)),
                )
                .filter(field => !(field.name! in usableWidgetData({ [field.name!]: field.default }, rules)))
                .map(field => `${field.name}: ${JSON.stringify(field.default)}`);

            expect(dropped).toEqual([]);
        });
    });

    describe.each(PLACEABLE_WIDGETS)('%s: the fields of the shared modules', name => {
        /** The described fields this widget takes from the shared modules. */
        const sharedFields = (): DescribedField[] =>
            describedFields(infos.get(name)!, I18N_PREFIX).filter(
                field => field.name !== undefined && SHARED_FIELD_NAMES.has(field.name),
            );

        it('shows a strukturiert-leerer default for every data-bearing custom field, or lists it as UI only', () => {
            const rules = fieldRulesOf(infos.get(name)!.visAttrs ?? []);
            const missing = sharedFields()
                .filter(
                    field =>
                        field.type === 'custom' && !isUiOnlyCustomField(field.name!) && !isWidgetFrameKey(field.name!),
                )
                .filter(field => !isShapedDefault(rules.named.get(field.name!), field.default))
                .map(field => `${field.name} (default ${JSON.stringify(field.default)})`);

            expect(missing).toEqual([]);
        });

        it('shows only defaults the Rückfall-Regel keeps (a default is a valid start value)', () => {
            const rules = fieldRulesOf(infos.get(name)!.visAttrs ?? []);
            const dropped = sharedFields()
                .filter(
                    field =>
                        field.default !== undefined &&
                        (rules.named.has(field.name!) || rules.emptiedReadsUnset.has(field.name!)),
                )
                .filter(field => !(field.name! in usableWidgetData({ [field.name!]: field.default }, rules)))
                .map(field => `${field.name}: ${JSON.stringify(field.default)}`);

            expect(sharedFields().length).toBeGreaterThan(0);
            expect(dropped).toEqual([]);
        });
    });

    describe.each(PLACEABLE_WIDGETS)('ticket 05: %s — the frame settings as the assistant reads them', name => {
        /** The label each frame setting carried as a vis-2 checkbox or slider, before its Erb-Adapter. */
        const LABELS: Record<string, string> = {
            noHeader: 'no_header',
            noHeaderIcon: 'no_header_icon',
            noFooter: 'no_footer',
            noCard: 'without_card',
            outlined: 'outlined',
            outlinedFrame: 'outlined_frame',
            basePadding: 'base_padding',
            baseElevation: 'base_elevation',
        };

        it('describes all eight under their name and translated label, without a default', () => {
            const info = infos.get(name)!;
            const offered = widgetFrameKeysOf(info.visAttrs ?? []);
            const described = describedFields(info, I18N_PREFIX).filter(
                field => field.name !== undefined && isWidgetFrameKey(field.name),
            );

            expect(offered).toHaveLength(8);
            expect(described.map(field => [field.name, field.label, field.default])).toEqual(
                offered.map(key => [key, (en as Record<string, string>)[LABELS[key]], undefined]),
            );
        });

        it('keeps the rule of the former field: a boolean like a checkbox, a number like a slider', () => {
            const rules = fieldRulesOf(infos.get(name)!.visAttrs ?? []);

            for (const key of widgetFrameKeysOf(infos.get(name)!.visAttrs ?? [])) {
                expect(rules.named.get(key), key).toBe(
                    WIDGET_FRAME_SETTINGS[key].kind === 'boolean' ? 'boolean' : 'number',
                );
            }
        });
    });

    it('gives every type a help and a KI-Leitfaden of its own', () => {
        const helps = PLACEABLE_TYPES.map(name => listEntry(catalogType(infos.get(name)!, I18N_PREFIX)).help);
        const guides = PLACEABLE_TYPES.map(
            name => guideFieldsOf(describedFields(infos.get(name)!, I18N_PREFIX))[0]?.label,
        );

        expect(new Set(helps).size).toBe(PLACEABLE_TYPES.length);
        expect(new Set(guides).size).toBe(PLACEABLE_TYPES.length);
    });

    describe.each(Object.keys(ORDER_TYPES) as WidgetName[])('%s: an order, not a widget a person edits', name => {
        /** The described fields that store a value. */
        const namedFields = (): DescribedField[] =>
            describedFields(infos.get(name)!, I18N_PREFIX).filter(field => field.name !== undefined);

        /** Data an order may hold: none, what the assistant sets, and anything under every field name. */
        const dataSets = (): Record<string, unknown>[] => {
            const withEvery = (valueOf: (field: DescribedField) => unknown): Record<string, unknown> =>
                Object.fromEntries(namedFields().map(field => [field.name!, valueOf(field)]));
            return [
                {},
                // What the host stores for an insert without data (`AiChat/aiTools.ts` add_widget).
                { bindings: [] },
                withEvery(field => field.options?.[0] ?? 'set by the assistant'),
                ...[true, false, 0, 1, '', 'anything', null, [], {}].map(value => ({
                    ...withEvery(() => value),
                    notAField: value,
                    bindings: [],
                })),
            ];
        };

        it('shows nothing in the attribute panel: every group and every field is hidden for empty, set and any data', () => {
            const info = infos.get(name)!;
            const shown = dataSets().flatMap(data => [
                ...(info.visAttrs ?? [])
                    .filter(group => !isHiddenFor(group, data))
                    .map(group => `group ${group.name} for ${JSON.stringify(data)}`),
                ...namedFields()
                    .filter(field => !isHiddenFor(declarationOf(info, field.name!).field, data))
                    .map(field => `${field.name} for ${JSON.stringify(data)}`),
            ]);

            expect(namedFields().length).toBeGreaterThan(1);
            expect(shown).toEqual([]);
        });

        it('has no default: only what the assistant sets changes something', () => {
            const info = infos.get(name)!;
            const defaults = describedFields(info, I18N_PREFIX)
                .filter(field => field.default !== undefined)
                .map(field => `${field.name}: ${JSON.stringify(field.default)}`);

            expect(defaults).toEqual([]);
            expect(paletteInsertData(info.visAttrs ?? [])).toEqual({});
        });
    });

    describe('the settings of a Theme-Auftrag, as the type description shows them', () => {
        /** The described fields of the order without its KI-Leitfaden. */
        const settings = (): DescribedField[] =>
            describedFields(infos.get('ThemeConfigWizard')!, I18N_PREFIX).filter(field => field.type !== 'help');
        const setting = (fieldName: string): DescribedField | undefined =>
            settings().find(field => field.name === fieldName);
        const text = (key: string): string => (en as Record<string, string>)[key];

        it('describes the colour mode as a selection of light and dark', () => {
            expect(setting('mode')).toEqual({
                name: 'mode',
                type: 'select',
                label: 'Color mode',
                options: ['light', 'dark'],
                default: undefined,
            });
        });

        it('describes one colour field for every colour of the studio’s register, under the studio’s label', () => {
            const colours = settings().filter(field => field.type === 'color');

            // A colour added to the register without a field of its own breaks the equality.
            expect(STUDIO_COLOR_FIELDS).toHaveLength(11);
            expect(colours.map(field => field.label)).toEqual(STUDIO_COLOR_FIELDS.map(field => text(field.labelKey)));
            expect(new Set(colours.map(field => field.name)).size).toBe(STUDIO_COLOR_FIELDS.length);
            expect(colours.every(field => field.options === undefined)).toBe(true);
        });

        it('offers exactly the presets of the studio to pick from', () => {
            expect(THEME_PRESETS).toHaveLength(9);
            expect(setting('preset')).toEqual({
                name: 'preset',
                type: 'select',
                label: 'Presets',
                options: THEME_PRESETS.map(preset => preset.id),
                default: undefined,
            });
        });

        it('offers exactly the entries of the studio’s font catalogue to pick from, by their names', () => {
            expect(setting('fontFamily')).toEqual({
                name: 'fontFamily',
                type: 'select',
                label: 'Font family',
                options: FONT_CATALOGUE.map(font => font.label),
                default: undefined,
            });
            expect(new Set(FONT_CATALOGUE.map(font => font.label)).size).toBe(FONT_CATALOGUE.length);
        });

        it('describes the reset as a switch, and font size, corner radius and spacing as numbers in px', () => {
            expect(setting('reset')).toEqual({
                name: 'reset',
                type: 'checkbox',
                label: 'Reset all to default',
                options: undefined,
                default: undefined,
            });
            expect(
                ['fontSize', 'cornerRadius', 'spacing'].map(fieldName => {
                    const field = setting(fieldName);
                    return [field?.name, field?.type, field?.label];
                }),
            ).toEqual([
                ['fontSize', 'number', 'Base font size (px)'],
                ['cornerRadius', 'number', 'Border radius (px)'],
                ['spacing', 'number', 'Spacing unit (px)'],
            ]);
        });

        it('describes nothing else: reset, preset, mode, eleven colours, font, size, radius, spacing', () => {
            const names = settings().map(field => field.name);

            // The names are what an order's data is keyed by: the wiki and every stored example use them.
            expect(names).toEqual([
                'reset',
                'preset',
                'mode',
                'primary',
                'secondary',
                'error',
                'warning',
                'info',
                'success',
                'textPrimary',
                'textSecondary',
                'backgroundDefault',
                'backgroundPaper',
                'divider',
                'fontFamily',
                'fontSize',
                'cornerRadius',
                'spacing',
            ]);
            expect(names).toHaveLength(3 + STUDIO_COLOR_FIELDS.length + 4);
        });
    });

    it('lists only UI-only exceptions that some widget still has', () => {
        const names = [...infos.values()].flatMap(info =>
            describedFields(info, I18N_PREFIX).flatMap(field =>
                field.type === 'custom' && field.name ? [field.name] : [],
            ),
        );
        const stale = UI_ONLY_CUSTOM_FIELDS.filter(entry =>
            entry.name.endsWith(':') ? !names.some(n => n.startsWith(entry.name)) : !names.includes(entry.name),
        ).map(entry => entry.name);

        expect(stale).toEqual([]);
    });
});

describe('Every language file: what the assistant and the palette read in each interface language', () => {
    describe.each(LANGUAGE_FILES)('%s', file => {
        const translate = translatorOf(readLanguage(file));

        it.each(PLACEABLE_TYPES)('%s: lists a translated help of one sentence and at most 120 characters', name => {
            const type = catalogType(infos.get(name)!, I18N_PREFIX);
            const help = listEntry(type, translate).help;

            // Translated: a text of the file, not the key the host would show for a miss.
            expect(help).toBeTruthy();
            expect(help).not.toBe(type.help);
            expect(sentencesOf(help!)).toHaveLength(1);
            expect(lengthOf(help!)).toBeLessThanOrEqual(HELP_MAX_LENGTH);
        });

        it.each(PLACEABLE_TYPES)('%s: describes the KI-Leitfaden with the English text', name => {
            const guideIn = (language: Translate): string | undefined =>
                guideFieldsOf(describedFields(infos.get(name)!, I18N_PREFIX, language))[0]?.label;

            expect(guideIn(t)).toBeTruthy();
            expect(guideIn(translate)).toBe(guideIn(t));
        });

        // The label is all the assistant reads of a field no person ever sees.
        it.each(Object.keys(ORDER_TYPES) as WidgetName[])('%s: describes every field with a translated label', name => {
            const info = infos.get(name)!;
            const untranslated = describedFields(info, I18N_PREFIX, translate)
                .filter(
                    field =>
                        !field.label || field.label === I18N_PREFIX + declarationOf(info, field.name!).field.label!,
                )
                .map(field => field.name);

            expect(untranslated).toEqual([]);
        });
    });
});

/**
 * The host's grid layout with its default cells (vis-2 `Vis/visGridLayout.ts` GRID_LAYOUT_DEFAULTS:
 * `rowHeight: 56`, `gridGap: 8`).
 */
const GRID_ROW_HEIGHT = 56;
const GRID_GAP = 8;

/**
 * The rows the host gives a widget type's style (`Vis/visGridLayout.ts` getRowSpan): `gridRows`,
 * else a px `height` rounded to cells, else `auto`. The assistant inserts with this style
 * (`AiChat/aiTools.ts` newWidgetStyle, no `visDefaultGrid`).
 */
const rowsOfStyle = (style: Record<string, unknown> | undefined): number | 'auto' => {
    if (style?.gridRows === 'auto') {
        return 'auto';
    }
    if (typeof style?.gridRows === 'number' && style.gridRows >= 1) {
        return Math.round(style.gridRows);
    }
    const raw = style?.height;
    const height = /^(\d+(?:\.\d+)?)(px)?$/.exec(
        typeof raw === 'number' || typeof raw === 'string' ? `${raw}`.trim() : '',
    );
    if (height && Number(height[1]) > 0) {
        return Math.max(1, Math.round((Number(height[1]) + GRID_GAP) / (GRID_ROW_HEIGHT + GRID_GAP)));
    }
    return 'auto';
};

/**
 * The rows a palette drop into a section gets (`Vis/visGridLayout.ts` getDefaultGridSpan):
 * `visDefaultGrid.rows`, else the rows of `visDefaultStyle`, kept within `minRows`/`maxRows`.
 */
const rowsOfPaletteDrop = (info: RxWidgetInfo): number | 'auto' => {
    const grid = info.visDefaultGrid;
    const rows = grid?.rows ?? rowsOfStyle(info.visDefaultStyle as Record<string, unknown>);
    if (rows === 'auto') {
        return 'auto';
    }
    return Math.max(Math.min(rows, grid?.maxRows ?? Infinity), grid?.minRows ?? 1);
};

/** The height of `n` grid rows: n cells and the gaps between them. */
const heightOfRows = (rows: number): number => rows * GRID_ROW_HEIGHT + (rows - 1) * GRID_GAP;

/** One line of MUI `body2` (0.875rem × 1.43): the header and the footer line of the frame. */
const BODY2_LINE = 20;

/**
 * The frame around the control in the standard configuration (the defaults of the definition,
 * as a palette insert sets them; with an OID its name heads the frame and its value foots it):
 * the card's inset (`Generic.wrapContent`, `calc(100% - 8px)`), the header and the footer line
 * (`CollectionBase`; their ± half padding margins cancel out) and the base padding on both sides
 * (MUI spacing: 8 px per unit).
 */
const frameHeightOf = (info: RxWidgetInfo): number =>
    (fieldDefaultOf(info, 'noCard') ? 0 : 8) +
    (fieldDefaultOf(info, 'noHeader') ? 0 : BODY2_LINE) +
    (fieldDefaultOf(info, 'noFooter') ? 0 : BODY2_LINE) +
    2 * 8 * Number(fieldDefaultOf(info, 'basePadding') ?? 0);

/**
 * The least height the control of each widget needs in its standard configuration, in px, with
 * the reason (MUI minimum heights; controls that scale with the Content-Box get the size at
 * which MUI draws them).
 */
const CONTROL_MIN_HEIGHT: Partial<Record<WidgetName, { px: number; reason: string }>> = {
    StateCollectionWidget: { px: 37, reason: 'MUI Button: 2 × 6 px padding + 24.5 px line' },
    SliderCollectionWidget: { px: 30, reason: 'MUI Slider: 4 px rail + 2 × 13 px padding' },
    InputCollectionWidget: {
        px: 29,
        reason: 'editing: TextField small standard, 1 px + 1.4375em (23 px) + 5 px; at rest a value line',
    },
    ButtonGroupCollectionWidget: { px: 37, reason: 'MUI Button: 2 × 6 px padding + 24.5 px line' },
    SwitchCollectionWidget: { px: 38, reason: 'MUI Switch (medium): 38 px root' },
    CheckboxCollectionWidget: { px: 42, reason: 'MUI Checkbox: 24 px icon + 2 × 9 px padding' },
    DialogCollectionWidget: { px: 37, reason: 'the opening card: one value line and its icon, button-sized' },
    SelectCollectionWidget: { px: 32, reason: 'MUI Select standard: 4 px + 1.4375em (23 px) + 5 px' },
    RadioGroupCollectionWidget: { px: 42, reason: 'MUI Radio: 24 px icon + 2 × 9 px padding' },
    GaugeCollectionWidget: { px: 42, reason: 'the canvas scales with the box; legible from a radio-sized dial' },
    Light2CollectionWidget: { px: 42, reason: 'the power IconButton: 26 px icon + 2 × 8 px padding' },
    JsonTableCollectionWidget: {
        px: 212,
        reason: 'standard density: 56 px header row + 3 data rows of 52 px, the rest scrolls',
    },
    EchartsCollectionWidget: {
        px: 220,
        reason: 'ECharts grid default margins (60 px above and below the plot) + a 100 px plot',
    },
};

/** The least rows that hold a height. */
const rowsFor = (height: number): number => {
    let rows = 1;
    while (heightOfRows(rows) < height) {
        rows++;
    }
    return rows;
};

describe('Startspanne im Raster: each widget fits its rows in the standard configuration', () => {
    it('names the control height of every placeable widget', () => {
        expect(Object.keys(CONTROL_MIN_HEIGHT).sort()).toEqual([...PLACEABLE_WIDGETS].sort());
    });

    describe.each(PLACEABLE_WIDGETS)('%s', name => {
        const needed = (): number => rowsFor(frameHeightOf(infos.get(name)!) + CONTROL_MIN_HEIGHT[name]!.px);

        it('gets enough rows from its default style where the assistant inserts it', () => {
            const rows = rowsOfStyle(infos.get(name)!.visDefaultStyle as Record<string, unknown>);

            expect(rows === 'auto' || rows >= needed(), `${rows} rows, ${needed()} needed`).toBe(true);
        });

        it('gets enough rows where the palette drops it into a section (visDefaultGrid consistent)', () => {
            const info = infos.get(name)!;
            const rows = rowsOfPaletteDrop(info);

            expect(rows === 'auto' || rows >= needed(), `${rows} rows, ${needed()} needed`).toBe(true);
            // A declared minimum for resizing stays within the start rows of both ways in.
            if (info.visDefaultGrid?.minRows !== undefined && rows !== 'auto') {
                expect(info.visDefaultGrid.minRows).toBeLessThanOrEqual(rows);
            }
        });
    });
});
