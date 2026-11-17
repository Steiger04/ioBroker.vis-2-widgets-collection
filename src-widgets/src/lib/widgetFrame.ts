/**
 * The Widget-Rahmen and its Rahmenvorgaben: what a widget reads for a frame setting its data
 * leaves unset (ADR-0117).
 *
 * @module lib/widgetFrame
 * @remarks
 * The frame settings under Allgemein (`commonFields`) have no field `default`: vis-2 stores a
 * field's default when a widget is dropped, so a widget with a default could never follow the
 * theme. Instead a setting the data leaves unset (`undefined`, or the `null` a cleared value
 * leaves) erbt, in one cascade for every reader:
 *
 *   the widget's own value → the Rahmenvorgabe → the built-in standard
 *
 * The Rahmenvorgaben are a non-MUI key of the user theme (`widgetFrame`, like `corners`), keyed by
 * the widget data's field names. They reach a widget only through the collection theme — a custom
 * theme variable that MUI's `createTheme` carries over — and never from the host theme, whose keys
 * the resolution allowlists (ADR-0078).
 *
 * {@link WIDGET_FRAME_SETTINGS} is the one table: the cascade, the theme schema, the field
 * definitions and their Erb-Adapter in the attribute panel (kind, label, standard, slider range),
 * the Theme Studio section and the Theme-Auftrag read it. A setting joins by its row, and beyond
 * it needs, each held by hand and caught when missing:
 *
 * - its place under Allgemein (`commonFields`, through `createWidgetFrameField`) — the parity test
 *   of the KI catalogue turns red while a placeable widget lacks it;
 * - its control in a sub-group of the Theme Studio section (`WidgetFrameSection`) — a type error;
 * - its old default in the test helpers (`FRAME_DEFAULTS_BEFORE_ADR_0117`) — a type error;
 * - its words in the KI-Leitfaden of every placeable widget (13 hand-kept translations, ADR-0114:
 *   the sentence that names every setting, and the format sentence with the count of on/off fields
 *   and the number ranges) and in the Theme-Auftrag's guide — the guide tests turn red while a
 *   guide does not name it. They compare the ranges of `basePadding` and `baseElevation` with this
 *   table; a new number's range needs its own assertion there.
 *
 * Nothing is written: the cascade fills a copy, and data without an unset frame setting comes
 * back as the same object.
 */
import { isUnset } from './fieldDefaults';
import optionalNumber from './helper/optionalNumber';
import { usableWidgetData, type FieldRules, type StoredValue } from './usableWidgetData';

/** A frame setting with a bounded number (the field's slider). */
export interface NumberFrameSetting {
    readonly kind: 'number';
    /** The translation key of the field's label under Allgemein (also the Theme-Auftrag's name). */
    readonly label: string;
    /** The built-in standard: the field's default before ADR-0117, so stored widgets look the same. */
    readonly standard: number;
    readonly min: number;
    readonly max: number;
    /** The slider's step; a whole step admits whole numbers only ({@link isWholeNumberSetting}). */
    readonly step: number;
}

/** A frame setting that is on or off (the field's checkbox). */
interface BooleanFrameSetting {
    readonly kind: 'boolean';
    /** The translation key of the field's label under Allgemein (also the Theme-Auftrag's name). */
    readonly label: string;
    /** The built-in standard: the field's default before ADR-0117, so stored widgets look the same. */
    readonly standard: boolean;
}

/** A frame setting of the Widget-Rahmen. */
export type WidgetFrameSetting = NumberFrameSetting | BooleanFrameSetting;

/**
 * The frame settings that take a Rahmenvorgabe, by the name of their widget data field.
 *
 * @remarks
 * ADR-0117 names eight ({@link WIDGET_FRAME_SETTING_COUNT}); the table holds all of them, in
 * the order of their fields under Allgemein. A boolean keeps the semantics of its field (`noHeader`:
 * true hides the header), however a control presents it.
 */
export const WIDGET_FRAME_SETTINGS = {
    noHeader: { kind: 'boolean', label: 'no_header', standard: false },
    noHeaderIcon: { kind: 'boolean', label: 'no_header_icon', standard: false },
    noFooter: { kind: 'boolean', label: 'no_footer', standard: false },
    noCard: { kind: 'boolean', label: 'without_card', standard: false },
    outlined: { kind: 'boolean', label: 'outlined', standard: false },
    outlinedFrame: { kind: 'boolean', label: 'outlined_frame', standard: false },
    basePadding: { kind: 'number', label: 'base_padding', standard: 1, min: 0, max: 10, step: 0.1 },
    baseElevation: { kind: 'number', label: 'base_elevation', standard: 4, min: 0, max: 24, step: 1 },
} as const satisfies Record<string, WidgetFrameSetting>;

/** The name of a frame setting: its widget data field and its key in the Rahmenvorgaben. */
export type WidgetFrameKey = keyof typeof WIDGET_FRAME_SETTINGS;

/** The frame settings in table order. */
export const WIDGET_FRAME_KEYS = Object.keys(WIDGET_FRAME_SETTINGS) as readonly WidgetFrameKey[];

/** The number of frame settings the Widget-Rahmen has (ADR-0117: eight), the Studio summary's total. */
export const WIDGET_FRAME_SETTING_COUNT = WIDGET_FRAME_KEYS.length;

/** The value a frame setting of the kind `S` takes: a number or a boolean. */
type FrameValue<S extends WidgetFrameSetting> = S extends BooleanFrameSetting ? boolean : number;

/**
 * A number on the slider of a number setting: within its bounds, on its step from the lower bound
 * (a typed 2.5 stores a shadow of 3 — {@link isWholeNumberSetting}).
 *
 * @param setting - The number setting (its bounds and step).
 * @param value - Any finite number.
 */
export function snapToSetting(setting: NumberFrameSetting, value: number): number {
    const { min, max, step } = setting;
    // The step's decimals, so the float error of `n * 0.1` does not reach the stored value.
    const decimals = String(step).split('.')[1]?.length ?? 0;
    const stepped = min + Math.round((value - min) / step) * step;
    return Number(Math.min(Math.max(stepped, min), max).toFixed(decimals));
}

/** The Rahmenvorgaben of the user theme (`UserTheme.widgetFrame`): a value per frame setting. */
export type WidgetFramePresets = {
    [K in WidgetFrameKey]?: FrameValue<(typeof WIDGET_FRAME_SETTINGS)[K]>;
};

/** The theme path of a frame setting's Rahmenvorgabe (`widgetFrame.<key>`). */
export const widgetFramePath = (key: WidgetFrameKey): string => `widgetFrame.${key}`;

/** Whether `key` names a frame setting. */
export const isWidgetFrameKey = (key: string): key is WidgetFrameKey => Object.hasOwn(WIDGET_FRAME_SETTINGS, key);

/**
 * Whether a number setting takes whole numbers only: its step is whole. The shadow is one — MUI's
 * shadows are a list, a Paper with elevation 2.5 draws none and logs an error.
 */
export const isWholeNumberSetting = (setting: NumberFrameSetting): boolean => Number.isInteger(setting.step);

/**
 * Whether a value is usable as the Rahmenvorgabe of `key`: the setting's kind, a number within its
 * bounds — and a whole one where the setting takes whole numbers only.
 */
export function isUsableFramePreset(key: WidgetFrameKey, value: unknown): boolean {
    const setting: WidgetFrameSetting = WIDGET_FRAME_SETTINGS[key];
    if (setting.kind === 'boolean') {
        return typeof value === 'boolean';
    }
    return (
        typeof value === 'number' &&
        Number.isFinite(value) &&
        value >= setting.min &&
        value <= setting.max &&
        (!isWholeNumberSetting(setting) || Number.isInteger(value))
    );
}

/** No Rahmenvorgaben: every unset setting reads its standard. */
const NO_PRESETS: WidgetFramePresets = {};

/**
 * The usable Rahmenvorgaben a theme carries — the collection theme, a user theme or a draft.
 *
 * @remarks
 * A Studio draft reaches the canvas unvalidated (ADR-0020), and the stored theme is read through
 * the Rückfall-Regel already: an unusable value falls away alone here as well, the rest holds.
 * @param theme - The theme; anything else carries none.
 */
export function widgetFramePresetsOf(theme: unknown): WidgetFramePresets {
    const stored: unknown = (theme as { widgetFrame?: unknown } | null | undefined)?.widgetFrame;
    if (!stored || typeof stored !== 'object') {
        return NO_PRESETS;
    }
    const presets: Record<string, unknown> = {};
    for (const key of WIDGET_FRAME_KEYS) {
        const value: unknown = (stored as Record<string, unknown>)[key];
        if (isUsableFramePreset(key, value)) {
            presets[key] = value;
        }
    }
    return presets;
}

/** The keys of a field definition this module reads. */
interface FrameField {
    name?: string;
}

/** The keys of an attribute group this module reads. */
interface FrameGroup {
    indexFrom?: unknown;
    fields?: readonly FrameField[];
}

/**
 * The frame settings a widget offers: the named fields of its attribute groups that are frame
 * settings. A setting the widget does not declare keeps its unset reading, so a Rahmenvorgabe
 * changes nothing there.
 *
 * @param visAttrs - The widget's `getWidgetInfo().visAttrs`.
 */
export const widgetFrameKeysOf = (visAttrs: readonly FrameGroup[]): readonly WidgetFrameKey[] => {
    const declared = new Set<string>();
    for (const group of visAttrs) {
        if (group.indexFrom !== undefined) {
            continue;
        }
        for (const field of group.fields ?? []) {
            if (field.name) {
                declared.add(field.name);
            }
        }
    }
    return WIDGET_FRAME_KEYS.filter(key => declared.has(key));
};

/**
 * The data with every unset frame setting the widget offers read through the cascade: the
 * Rahmenvorgabe, else the built-in standard.
 *
 * @param data - The widget data as the widget reads it (after the Rückfall-Regel, the pick and
 *   the field defaults); never changed.
 * @param keys - The frame settings the widget offers ({@link widgetFrameKeysOf}).
 * @param presets - The usable Rahmenvorgaben ({@link widgetFramePresetsOf}).
 * @returns `data` itself when no offered setting is unset, else a filled copy.
 */
export function withWidgetFrame<T extends object>(
    data: T,
    keys: readonly WidgetFrameKey[],
    presets: WidgetFramePresets,
): T {
    const values = data as Record<string, unknown>;
    let filled: Record<string, unknown> | undefined;
    for (const key of keys) {
        if (isUnset(values[key])) {
            filled ??= { ...values };
            filled[key] = presets[key] ?? WIDGET_FRAME_SETTINGS[key].standard;
        }
    }
    return (filled as T | undefined) ?? data;
}

/**
 * The stored value a frame setting's field declares (`storedValue`, the Rückfall-Regel of
 * lib/usableWidgetData): a boolean; a number; for a setting of whole numbers (the shadow) a whole
 * number within its bounds — MUI draws a shadow for no other, as for a Rahmenvorgabe
 * ({@link isUsableFramePreset}).
 *
 * @param key - The frame setting.
 */
export function frameStoredValue(key: WidgetFrameKey): StoredValue {
    const setting: WidgetFrameSetting = WIDGET_FRAME_SETTINGS[key];
    return setting.kind === 'number' && isWholeNumberSetting(setting)
        ? { whole: { min: setting.min, max: setting.max } }
        : setting.kind;
}

/**
 * The Rückfall-Regel of every frame setting under its own name, as its field declares it
 * ({@link frameStoredValue}, `createWidgetFrameField`).
 */
const FRAME_RULES: FieldRules = {
    named: new Map(WIDGET_FRAME_KEYS.map(key => [key, frameStoredValue(key)])),
    perRow: new Map(),
    emptiedReadsUnset: new Set(),
};

/** One frame setting read from stored data ({@link storedFrameSetting}). */
export interface StoredFrameSetting<V extends boolean | number> {
    /** The widget's own value after the Rückfall-Regel; `undefined` where it erbt (unset, cleared, unusable). */
    readonly own: V | undefined;
    /** What the widget renders without an own value: the Rahmenvorgabe, else the built-in standard. */
    readonly inherited: V;
    /** What the widget renders: `own ?? inherited`. */
    readonly effective: V;
}

/**
 * One frame setting read from a widget's stored data, as the widget renders it — for a reader that
 * has only the stored data at hand, as vis-2 hands it to an attribute-panel predicate or a custom
 * field (the panel predicate of the header and footer, the Erb-Adapter).
 *
 * @remarks
 * The same reading as the widget's: the Rückfall-Regel of the frame setting first (an unusable
 * stored value reads as unset, ADR-0114; a number stored as text reads as its number), then the
 * cascade of {@link withWidgetFrame}. The widget's pick and field defaults do not apply: a frame
 * setting has neither. The reader needs no field rules: every placeable widget offers all eight
 * settings under their own names (pinned by `aiCatalogView.parity.test`, "offers all eight frame
 * settings").
 * @param stored - The widget data as stored in the project; never changed.
 * @param key - The frame setting.
 * @param presets - The usable Rahmenvorgaben ({@link widgetFramePresetsOf}).
 */
export function storedFrameSetting<K extends WidgetFrameKey>(
    stored: object,
    key: K,
    presets: WidgetFramePresets,
): StoredFrameSetting<FrameValue<(typeof WIDGET_FRAME_SETTINGS)[K]>> {
    type V = FrameValue<(typeof WIDGET_FRAME_SETTINGS)[K]>;
    const read: unknown = (usableWidgetData(stored, FRAME_RULES) as Record<string, unknown>)[key];
    const own = (
        read === undefined || read === null
            ? undefined
            : WIDGET_FRAME_SETTINGS[key].kind === 'number'
              ? optionalNumber(read)
              : read
    ) as V | undefined;
    const inherited = (withWidgetFrame({}, [key], presets) as Record<string, unknown>)[key] as V;
    return { own, inherited, effective: own ?? inherited };
}

/**
 * The stored data with every frame setting read as the widget renders it — for a reader that has
 * only the stored data at hand and does not know the widget's fields, as the colour fields' swatch
 * in the attribute panel: every placeable widget offers all eight settings of Allgemein (pinned by
 * `aiCatalogView.parity.test`, "offers all eight frame settings").
 *
 * @remarks
 * The reading of {@link storedFrameSetting} for all settings at once: the Rückfall-Regel of the
 * frame settings first, then the cascade of {@link withWidgetFrame}; the other keys stay as stored.
 * @param stored - The widget data as stored in the project; never changed.
 * @param presets - The usable Rahmenvorgaben ({@link widgetFramePresetsOf}).
 * @returns `stored` itself when every frame setting holds a usable value, else a read copy.
 */
export const storedWidgetFrame = <T extends object>(stored: T, presets: WidgetFramePresets): T =>
    withWidgetFrame(usableWidgetData(stored, FRAME_RULES), WIDGET_FRAME_KEYS, presets);
