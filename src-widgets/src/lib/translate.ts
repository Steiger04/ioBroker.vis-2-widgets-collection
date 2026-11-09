/**
 * The texts of this widget set, without its base class.
 *
 * @module lib/translate
 * @remarks
 * `Generic` needs `window.visRxWidget` the moment it is loaded, this module only when a text is
 * asked for: it has no runtime import. The host's `VisRxWidget.t` reads the prefix from its
 * `this`, so a bare `Generic.t` handed on as a callback throws there. `translate` brings its own
 * receiver and can be handed on as it is.
 */

import type VisRxWidget from '@iobroker/types-vis-2/visRxWidget';

/** The prefix of this widget set's i18n keys, also what `Generic.getI18nPrefix` returns. */
export const I18N_PREFIX = 'vis_2_widgets_collection_';

/** Stands in for the widget class as the `this` of the host's `t`. */
const PREFIX_RECEIVER = { getI18nPrefix: (): string => I18N_PREFIX };

/**
 * Translates a key of this widget set.
 *
 * @param key - The translation key (without the widget set's prefix).
 * @param args - Values for the key's placeholders.
 * @returns The translated text.
 */
export const translate = (key: string, ...args: string[]): string =>
    (window.visRxWidget as typeof VisRxWidget).t.call(PREFIX_RECEIVER, key, ...args);

/**
 * Translates a field label exactly once.
 *
 * @param label - Field label; the vis-2 host catalog has usually prefixed it with the set's i18n
 *   prefix already (`i18nPrefix + label`), while the host's `t` adds that prefix itself.
 * @returns The translated label.
 */
export const translateFieldLabel = (label: string): string =>
    translate(label.startsWith(I18N_PREFIX) ? label.slice(I18N_PREFIX.length) : label);
