/**
 * vis-2 widget editor field generator for shared (cross-widget) options.
 *
 * @module lib/commonFields
 * @remarks
 * Many widgets in this collection share a large set of configuration fields (icons, header/value/footer,
 * card/frame settings, background, etc.). This helper produces those shared fields and supports a suffix
 * mechanism (`groupName`) to generate indexed variants.
 *
 * The frame settings of the Widget-Rahmen (ADR-0117, lib/widgetFrame) are the exception: a frame
 * field is always named after its setting (`noCard`, `basePadding` …) and exists only in the full
 * list without group suffix — the reduced list (`allFields: false`, the Active and per-state
 * variants) drops it.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/common-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createColorField, createWidgetFrameField, hiddenWhenTruthy, type HiddenPredicate } from './fieldFactories';
import { isUrlIcon } from './helper/isUrlIcon';
import { canvasUserTheme } from './theme/canvasTheme';
import { isWidgetFrameKey, storedFrameSetting, widgetFramePresetsOf } from './widgetFrame';

import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Options controlling how the shared field list is generated.
 */
type Settings = {
    /** Optional suffix used to create grouped/indexed field names (e.g. `iconSmall1`). */
    groupName?: string;
    /** If `true`, includes the full common field list; otherwise generates a reduced subset. */
    allFields?: boolean;
    /**
     * The list builds the per-state rows of a `values` group: vis-2 clones it per index and
     * renames every field `name{n}`, the contract carried over (`visWidgetsCatalog.tsx`), so
     * a state colour field `x{n}` declares its base field `x` as fallback field.
     */
    perState?: boolean;
    /**
     * With {@link Settings.perState}: the widget passes a Marker-Ebene to useData (the slider),
     * so `iconColor{n}` / `textColor{n}` inherit `markerIconColor` / `markerTextColor` before
     * the base field — the order the state resolvers walk for a mark.
     */
    markerLayer?: boolean;
};

/**
 * Hides a field while the frame setting `key` is on as the widget renders it (ADR-0117): vis-2
 * hands the predicate the stored data alone, which lib/widgetFrame reads the widget's way — the
 * Rückfall-Regel of the frame setting, then the cascade over the Rahmenvorgaben of the theme the
 * canvas shows (the Leinwand-Theme, {@link canvasUserTheme}: the Studio draft, else the stored theme).
 *
 * @remarks
 * Before the page knows any theme the built-in standard applies, as on the canvas of a widget
 * that has not read the theme yet. vis-2 re-runs the predicate on every render of the attribute
 * panel, not on a change of the theme: a changed Rahmenvorgabe shows with the panel's next render.
 * @param key - The boolean frame setting the field hangs on (`noHeader`, `noFooter`).
 */
const hiddenWhileFrameOn =
    (key: 'noHeader' | 'noFooter'): HiddenPredicate =>
    data =>
        storedFrameSetting(data, key, widgetFramePresetsOf(canvasUserTheme())).effective;

/**
 * Build the shared editor field list used by most widgets.
 *
 * @param settings Optional generation settings.
 */
const commonFields = (settings?: Settings): readonly RxWidgetInfoAttributesField[] => {
    const { groupName = '', allFields = true, perState = false, markerLayer = false } = settings || {};
    // The header and footer fields of every list hang on the widget's own header and footer.
    const headerOff = hiddenWhileFrameOn('noHeader');
    const footerOff = hiddenWhileFrameOn('noFooter');

    /**
     * The fallback fields of the colour field `base{groupName}` — the variant inherits what the
     * widget paints for it while it has no value (ADR-0004, per-state and Active variants):
     * - Active (`groupName` set): the base field `base`. The Marker-Ebene does not apply — the
     *   active style `data` resolves without it. The runtime tier between the two, `base{n}` of
     *   the state currently active, depends on the live value and is a documented divergence
     *   (pattern Select arrow): the swatch resolves over the base fields.
     * - per state (`perState`): the base field, behind the Marker-Ebene field where the widget
     *   has one (`marker`, slider marks only).
     * - the base list itself: none — its terminal (and `inheritTextStyle`) end the cascade.
     */
    const inheritFrom = (base: string, marker?: string): string[] => {
        if (groupName !== '') {
            return [base];
        }
        if (!perState) {
            return [];
        }
        return markerLayer && marker ? [marker, base] : [base];
    };

    const fields: (RxWidgetInfoAttributesField | ExtendedField)[] = [
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="icon" />,
            hidden: hiddenWhenTruthy('noIcon'),
        },
        {
            name: `icon${groupName}`,
            label: 'icon',
            type: 'image',
            default: '',
        },
        {
            name: `iconSmall${groupName}`,
            label: 'small_icon',
            type: 'icon64',
            default: '',
        },
        {
            name: `iconSize${groupName}`,
            label: 'icon_size',
            type: 'slider',
            min: 1,
            max: 500,
            step: 1,
            hidden: hiddenWhenTruthy('noIcon'),
        },
        {
            name: `enableIconColorMask${groupName}`,
            label: 'enable_icon_color_mask',
            type: 'checkbox',
            default: false,
            tooltip: 'enable_icon_color_mask_tooltip',
            hidden: (data, index) => {
                let _hidden = true;

                const suffix = index !== undefined ? index : groupName;
                const iconField = data[`icon${suffix}`];
                const iconSmallField = data[`iconSmall${suffix}`];

                if (suffix === '' || suffix === 'Active') {
                    _hidden = false;
                }

                if (index !== undefined) {
                    _hidden =
                        !data.iconColor &&
                        !data.enableIconColorMask &&
                        !data[`iconColor${index}`] &&
                        !isUrlIcon(iconField as string) &&
                        !isUrlIcon(iconSmallField as string);
                }

                return _hidden;
            },
        },
        // Icon color field with noGradient flag
        createColorField({
            name: `iconColor${groupName}`,
            label: 'icon_color',
            fallbackFields: inheritFrom('iconColor', 'markerIconColor'),
            noGradient: true,
            terminal: 'primary',
        }),
        {
            name: `iconXOffset${groupName}`,
            label: 'icon_x_offset',
            type: 'text',
            hidden: hiddenWhenTruthy('noIcon'),
        },
        {
            name: `iconYOffset${groupName}`,
            label: 'icon_y_offset',
            type: 'text',
            hidden: hiddenWhenTruthy('noIcon'),
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="header" />,
            hidden: data => !allFields && headerOff(data),
        },
        // Frame settings of the Widget-Rahmen (ADR-0117): the Erb-Adapter, no `default`
        // (createWidgetFrameField).
        createWidgetFrameField('noHeader'),
        createWidgetFrameField('noHeaderIcon', { hidden: headerOff }),
        {
            name: `header${groupName}`,
            label: 'header_text',
            type: 'html',
            default: '',
            hidden: headerOff,
        },
        {
            name: `headerSize${groupName}`,
            label: 'header_size',
            type: 'slider',
            min: 0,
            max: 500,
            step: 1,
            hidden: headerOff,
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="value" />,
        },
        {
            name: `alias${groupName}`,
            label: 'alias',
            type: 'html',
            default: '',
        },
        {
            name: `value${groupName}`,
            label: 'value',
            type: 'text',
            default: '',
            hidden: (data, _i) =>
                (data.oidObject as { type?: string })?.type === 'boolean' || data.name === 'valueActive',
        },
        {
            name: `valueSize${groupName}`,
            label: 'value_size',
            type: 'slider',
            min: 0,
            max: 500,
            step: 1,
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="footer" />,
            hidden: data => !allFields && footerOff(data),
        },
        // A frame setting of the Widget-Rahmen (ADR-0117), see noHeader.
        createWidgetFrameField('noFooter'),
        {
            name: `footer${groupName}`,
            label: 'footer_text',
            type: 'html',
            default: '',
            hidden: footerOff,
        },
        {
            name: `footerSize${groupName}`,
            label: 'footer_size',
            type: 'slider',
            min: 0,
            max: 500,
            step: 1,
            hidden: footerOff,
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="characteristics" />,
        },
        // A frame setting of the Widget-Rahmen (ADR-0117), see noHeader.
        createWidgetFrameField('noCard'),
        {
            name: `squaredCorner${groupName}`,
            label: 'squared_corner',
            type: 'checkbox',
            default: false,
        },
        // Text color field
        createColorField({
            name: `textColor${groupName}`,
            label: 'text_color',
            fallbackFields: inheritFrom('textColor', 'markerTextColor'),
            terminal: 'text',
            inheritTextStyle: true,
        }),
        {
            label: '',
            name: 'allFieldsDivider',
            type: 'custom',
            component: () => <CollectionDivider />,
        },
        // Frame settings of the Widget-Rahmen (ADR-0117), see noHeader.
        createWidgetFrameField('outlined'),
        createWidgetFrameField('outlinedFrame'),
        {
            label: '',
            name: 'allFieldsDivider',
            type: 'custom',
            component: () => <CollectionDivider />,
        },
        // Frame settings of the Widget-Rahmen (ADR-0117): no `default` — vis-2 would store it on
        // every dropped widget, which could then never follow the Rahmenvorgabe of the theme. Unset,
        // a setting reads the Rahmenvorgabe, else the built-in standard (lib/widgetFrame); the
        // Erb-Adapter names that and takes its slider range from the same table.
        createWidgetFrameField('basePadding'),
        createWidgetFrameField('baseElevation'),
        {
            label: '',
            name: 'allFieldsDivider',
            type: 'custom',
            component: () => <CollectionDivider dividerText="geometry" />,
        },
        {
            name: `square${groupName}`,
            label: 'square',
            type: 'checkbox',
            hidden: 'data.circle || data.ellipse',
            default: false,
        },
        {
            name: `ellipse${groupName}`,
            label: 'ellipse',
            type: 'checkbox',
            hidden: 'data.circle || data.square',
            default: false,
        },
        {
            name: `circle${groupName}`,
            label: 'circle',
            type: 'checkbox',
            hidden: 'data.ellipse || data.square',
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="background" />,
        },
        // Content background color field (no fallback of its own; the per-state and Active
        // variants inherit it, see inheritFrom). Terminal `paper`: with no value the
        // card's inner paper (CollectionBase, BASE-PAPER-1) keeps MUI's Paper default
        // `palette.background.paper`, so the swatch shows that. Under `noCard` the runtime
        // paints `transparent`, so the swatch shows the checkerboard (ADR-0004); an embedded
        // widget paints it too, but its field data does not say so and the swatch stays on
        // paper. Read by the swatch only — the runtime resolver (`propertyResolvers`
        // `background`) has its own chain and stays `''`.
        createColorField({
            name: `background${groupName}`,
            label: 'background',
            fallbackFields: inheritFrom('background'),
            terminal: 'paper',
            terminalWithoutCard: 'transparent',
        }),
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="frame_background" />,
        },
        // Frame background color field (no fallback of its own; the per-state and Active
        // variants inherit it, see inheritFrom). Terminal `paper`: with no
        // explicit override the card/frame surface inherits the effective theme's
        // `palette.background.paper` (preset-controlled), matching the swatch. Under
        // `noCard` the frame paints nothing and the swatch shows the checkerboard (ADR-0004).
        createColorField({
            name: `frameBackground${groupName}`,
            label: 'frame_background',
            fallbackFields: inheritFrom('frameBackground'),
            terminal: 'paper',
            terminalWithoutCard: 'transparent',
        }),
    ];

    if (allFields) {
        const valuesToDelete = [`alias${groupName}`, `value${groupName}`];

        return fields.filter(obj => !valuesToDelete.includes(obj.name!));
    }

    // The reduced list carries no frame setting: its fields keep the setting's name, whatever the suffix.
    const valuesToDelete = [
        'allFieldsDivider',
        groupName === 'Active' ? `value${groupName}` : '',
        `squaredCorner${groupName}`,
        `square${groupName}`,
        `ellipse${groupName}`,
        `circle${groupName}`,
    ];

    return fields.filter(obj => !valuesToDelete.includes(obj.name!) && !isWidgetFrameKey(obj.name ?? ''));
};

export default commonFields;
