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
 * definitions' ranges and the Theme Studio section read it. A setting joins by its row.
 *
 * Nothing is written: the cascade fills a copy, and data without an unset frame setting comes
 * back as the same object.
 */

/** A frame setting with a bounded number (the field's slider). */
interface NumberFrameSetting {
    readonly kind: 'number';
    /** The built-in standard: the field's default before ADR-0117, so stored widgets look the same. */
    readonly standard: number;
    readonly min: number;
    readonly max: number;
    readonly step: number;
}

/** A frame setting that is on or off (the field's checkbox). */
interface BooleanFrameSetting {
    readonly kind: 'boolean';
    /** The built-in standard: the field's default before ADR-0117, so stored widgets look the same. */
    readonly standard: boolean;
}

/** A frame setting of the Widget-Rahmen. */
export type WidgetFrameSetting = NumberFrameSetting | BooleanFrameSetting;

/**
 * The frame settings that take a Rahmenvorgabe, by the name of their widget data field.
 *
 * @remarks
 * ADR-0117 names eight ({@link WIDGET_FRAME_SETTING_COUNT}); the table holds those built so far, in
 * the order of their fields under Allgemein. A boolean keeps the semantics of its field (`noHeader`:
 * true hides the header), however a control presents it.
 */
export const WIDGET_FRAME_SETTINGS = {
    noHeader: { kind: 'boolean', standard: false },
    noHeaderIcon: { kind: 'boolean', standard: false },
    noFooter: { kind: 'boolean', standard: false },
    outlined: { kind: 'boolean', standard: false },
    outlinedFrame: { kind: 'boolean', standard: false },
    basePadding: { kind: 'number', standard: 1, min: 0, max: 10, step: 0.1 },
    baseElevation: { kind: 'number', standard: 4, min: 0, max: 24, step: 1 },
} as const satisfies Record<string, WidgetFrameSetting>;

/** The name of a frame setting: its widget data field and its key in the Rahmenvorgaben. */
export type WidgetFrameKey = keyof typeof WIDGET_FRAME_SETTINGS;

/** The frame settings in table order. */
export const WIDGET_FRAME_KEYS = Object.keys(WIDGET_FRAME_SETTINGS) as readonly WidgetFrameKey[];

/** The number of frame settings the Widget-Rahmen has (ADR-0117), the Studio summary's total. */
export const WIDGET_FRAME_SETTING_COUNT = 8;

/** The value a frame setting of the kind `S` takes: a number or a boolean. */
type FrameValue<S extends WidgetFrameSetting> = S extends BooleanFrameSetting ? boolean : number;

/** The Rahmenvorgaben of the user theme (`UserTheme.widgetFrame`): a value per frame setting. */
export type WidgetFramePresets = {
    [K in WidgetFrameKey]?: FrameValue<(typeof WIDGET_FRAME_SETTINGS)[K]>;
};

/** Whether `key` names a frame setting. */
export const isWidgetFrameKey = (key: string): key is WidgetFrameKey => Object.hasOwn(WIDGET_FRAME_SETTINGS, key);

/** Whether a value is usable as the Rahmenvorgabe of `key`: the setting's kind, a number within its bounds. */
export function isUsableFramePreset(key: WidgetFrameKey, value: unknown): boolean {
    const setting: WidgetFrameSetting = WIDGET_FRAME_SETTINGS[key];
    if (setting.kind === 'boolean') {
        return typeof value === 'boolean';
    }
    return typeof value === 'number' && Number.isFinite(value) && value >= setting.min && value <= setting.max;
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
        if (values[key] === undefined || values[key] === null) {
            filled ??= { ...values };
            filled[key] = presets[key] ?? WIDGET_FRAME_SETTINGS[key].standard;
        }
    }
    return (filled as T | undefined) ?? data;
}
