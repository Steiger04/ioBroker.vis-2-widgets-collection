/**
 * `Generic.t` as a function to hand on.
 *
 * @module JsonTableCollectionWidget/translate
 * @remarks
 * vis-2's `VisRxWidget.t` reads `this.getI18nPrefix()`, so a bare `Generic.t` passed as a
 * callback loses `this` and throws in the host. Pure helpers that take a translation
 * function (`typeBadgeText`, `depthWarningText`) get this one.
 */

import Generic from '../Generic';

/**
 * Translate a key of this widget set.
 *
 * @param key The translation key (without the widget set's prefix).
 * @param args Values for the key's placeholders.
 * @returns The translated text.
 */
export const translate = (key: string, ...args: string[]): string => Generic.t(key, ...args);
