/**
 * The defaults of the Light2 fields the widget reads while a field is unset or emptied.
 *
 * @module lib/light2Defaults
 * @remarks
 * One source: the field definitions (`lib/light2Fields`) take their `default` from here, and the
 * runtime (the body, the Button-Modus, the picker geometry) falls back to the same constants. A
 * plain module without React, so the pure picker geometry can import it.
 */

/** The long-press delay of the Button-Modus (`colorLightDelayLongPress`), in ms. */
export const COLOR_LIGHT_DELAY_LONG_PRESS_DEFAULT = 500;

/** The height of the Button-Modus modal (`colorLightModalHeight`), in px. */
export const COLOR_LIGHT_MODAL_HEIGHT_DEFAULT = 300;

/** The slider width (`colorLightSliderWidth`), in slider units. */
export const COLOR_LIGHT_SLIDER_WIDTH_DEFAULT = 1;

/** The Kelvin range of the CCT-Ansicht (`colorLightCtMin`, `colorLightCtMax`). */
export const COLOR_LIGHT_CT_MIN_DEFAULT = 2000;
export const COLOR_LIGHT_CT_MAX_DEFAULT = 6500;
