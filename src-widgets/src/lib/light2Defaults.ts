/**
 * The defaults of the Light2 fields the picker geometry reads for 0.
 *
 * @module lib/light2Defaults
 * @remarks
 * An unset field reads its default before the widget sees it (`lib/fieldDefaults`). These two read
 * 0 as their default too, and an emptied field ('') like 0 — a reading of the stored value that
 * the widget's reading does not answer. One source: the field definitions (`lib/light2Fields`) take
 * their `default` from here, and the pure picker geometry reads the same constants. A plain module
 * without React, so the picker geometry can import it.
 */

/** The height of the Button-Modus modal (`colorLightModalHeight`), in px; also for a height of 0. */
export const COLOR_LIGHT_MODAL_HEIGHT_DEFAULT = 300;

/** The slider width (`colorLightSliderWidth`), in slider units; also for a width of 0. */
export const COLOR_LIGHT_SLIDER_WIDTH_DEFAULT = 1;
