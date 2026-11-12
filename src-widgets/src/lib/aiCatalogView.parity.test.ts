/**
 * Naht 1 — what the vis-2 assistant (Bauzeit-KI) learns about each widget from `getWidgetInfo()`.
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
 * Roster and open list: `lib/testing/aiSeams`. Like the other introspection tests it runs
 * isolated (`DOM_TS_TESTS`): it mocks `Generic`, the widget bodies and the heavy editors, none of
 * which contributes a field.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import en from '../i18n/en.json';
import { decodeBlob } from './encoding';
import {
    isUiOnlyCustomField,
    PLACEABLE_WIDGETS,
    SHARED_FIELD_NAMES,
    UI_ONLY_CUSTOM_FIELDS,
    type WidgetName,
} from './testing/aiSeams';
import { I18N_PREFIX } from './translate';
import { fieldRulesOf, usableWidgetData, type FieldRule } from './usableWidgetData';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../JsonTableCollectionWidget/JsonTableColumnEditor', () => ({ default: () => null }));
vi.mock('../EchartsCollectionWidget/EchartsConfigEditor', () => ({ default: () => null }));

/** The render body each placeable widget module imports (mocked: it contributes no field). */
const WIDGET_BODIES: Record<string, string> = {
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
};
for (const name of PLACEABLE_WIDGETS) {
    vi.doMock(`../${name}/${WIDGET_BODIES[name]}`, () => ({ default: () => null }));
}

/** The prefix vis-2 takes from the translations module (`translations.default.prefix`). */
const REGISTERED_PREFIX = /prefix:\s*'([^']+)'/.exec(
    readFileSync(resolve(process.cwd(), 'src', 'translations.js'), 'utf8'),
)?.[1];

/** `I18n.t` over the words as `I18n.extendTranslations` stores them: every key prefixed once. */
const words: Record<string, string> = Object.fromEntries(
    Object.entries(en as Record<string, string>).map(([key, text]) => [
        key.startsWith(I18N_PREFIX) ? key : `${I18N_PREFIX}${key}`,
        text,
    ]),
);
const t = (key: string): string => words[key] ?? key;

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
const listEntry = (type: CatalogType): { tpl: string; label: string; help: string | undefined } => ({
    tpl: type.name,
    label: type.label ? t(type.label) : type.title,
    help: type.help ? t(type.help) : undefined,
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
const describedFields = (info: RxWidgetInfo, i18nPrefix: string): DescribedField[] =>
    (info.visAttrs ?? []).flatMap(group =>
        ((group.fields ?? []) as unknown as Record<string, unknown>[]).map(field => ({
            name: field.name as string | undefined,
            type: (field.type as string | undefined) || 'text',
            label: field.label ? t(i18nPrefix + (field.label as string)) : undefined,
            options: Array.isArray(field.options)
                ? field.options.map(option =>
                      typeof option === 'string' ? option : (option as { value: unknown }).value,
                  )
                : undefined,
            default: field.default,
        })),
    );

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

/** Sentences of a help text: split after `.`, `!` or `?` followed by a space or the end. */
const sentencesOf = (text: string): string[] =>
    text
        .trim()
        .split(/(?<=[.!?])\s+/)
        .filter(sentence => sentence !== '');

const infos = new Map<WidgetName, RxWidgetInfo>();

beforeAll(async () => {
    for (const name of PLACEABLE_WIDGETS) {
        const mod = (await import(`../${name}/${name}.tsx`)) as { default: { getWidgetInfo: () => RxWidgetInfo } };
        infos.set(name, mod.default.getWidgetInfo());
    }
    // The first run pays the cold Vite transform of every field module.
}, 60_000);

describe('Naht 1: the assistant’s view of the widget catalog', () => {
    it('reads the prefix the translations module registers', () => {
        expect(REGISTERED_PREFIX).toBe(I18N_PREFIX);
    });

    it('checks every placeable widget of the registry', () => {
        expect(PLACEABLE_WIDGETS).toHaveLength(13);
    });

    describe.each(PLACEABLE_WIDGETS)('%s', name => {
        const entry = (): ReturnType<typeof listEntry> => listEntry(catalogType(infos.get(name)!, I18N_PREFIX));

        it('lists a translated label (the resolution visHelp has to follow)', () => {
            const info = infos.get(name)!;
            expect(entry().label).toBe((en as Record<string, string>)[info.visWidgetLabel!]);
        });

        it('lists a translated help of 3 to 5 sentences, resolved like the label', () => {
            const info = infos.get(name)!;
            const help = entry().help;

            expect(info.visHelp, 'visHelp').toBeTruthy();
            // Translated: the text of en.json, not the key the host would show for a miss.
            expect(help).toBe((en as Record<string, string>)[info.visHelp!]);
            expect(sentencesOf(help!).length).toBeGreaterThanOrEqual(3);
            expect(sentencesOf(help!).length).toBeLessThanOrEqual(5);
        });

        it('shows a strukturiert-leerer default for every data-bearing custom field and configuration blob, or lists it as UI only', () => {
            const info = infos.get(name)!;
            const rules = fieldRulesOf(info.visAttrs ?? []);
            const missing = describedFields(info, I18N_PREFIX)
                .filter(
                    field =>
                        field.name &&
                        (field.type === 'custom' || isJsonRule(rules.named.get(field.name))) &&
                        !isUiOnlyCustomField(field.name),
                )
                .filter(field => !isShapedDefault(rules.named.get(field.name!), field.default))
                .map(field => `${field.name} (default ${JSON.stringify(field.default)})`);

            expect(missing).toEqual([]);
        });

        it('shows only defaults the Rückfall-Regel keeps (a default is a valid start value)', () => {
            const info = infos.get(name)!;
            const rules = fieldRulesOf(info.visAttrs ?? []);
            const dropped = describedFields(info, I18N_PREFIX)
                .filter(field => field.name && field.default !== undefined && rules.named.has(field.name))
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
                .filter(field => field.type === 'custom' && !isUiOnlyCustomField(field.name!))
                .filter(field => !isShapedDefault(rules.named.get(field.name!), field.default))
                .map(field => `${field.name} (default ${JSON.stringify(field.default)})`);

            expect(missing).toEqual([]);
        });

        it('shows only defaults the Rückfall-Regel keeps (a default is a valid start value)', () => {
            const rules = fieldRulesOf(infos.get(name)!.visAttrs ?? []);
            const dropped = sharedFields()
                .filter(field => field.default !== undefined && rules.named.has(field.name!))
                .filter(field => !(field.name! in usableWidgetData({ [field.name!]: field.default }, rules)))
                .map(field => `${field.name}: ${JSON.stringify(field.default)}`);

            expect(sharedFields().length).toBeGreaterThan(0);
            expect(dropped).toEqual([]);
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

/** The default of a field of a widget, read from its definition. */
const defaultOf = (info: RxWidgetInfo, name: string): unknown =>
    (info.visAttrs ?? [])
        .flatMap(group => (group.fields ?? []) as unknown as Record<string, unknown>[])
        .find(field => field.name === name)?.default;

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
    (defaultOf(info, 'noCard') ? 0 : 8) +
    (defaultOf(info, 'noHeader') ? 0 : BODY2_LINE) +
    (defaultOf(info, 'noFooter') ? 0 : BODY2_LINE) +
    2 * 8 * Number(defaultOf(info, 'basePadding') ?? 0);

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
