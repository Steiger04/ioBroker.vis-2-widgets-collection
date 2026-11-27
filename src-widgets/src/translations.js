/**
 * Translation registry for the widget set.
 *
 * @module translations
 * @remarks
 * vis-2 expects this module to provide a language map plus a common `prefix`.
 *
 * Both `visWidgets` entries of this adapter share one remote name, so the host loads this
 * module object once per entry: it reads `prefix` as the entries' i18n prefix and passes the
 * object to `I18n.extendTranslations`, which deletes `prefix` and replaces every language map
 * with a prefixed copy. `prefix` therefore sits on the prototype: the delete of an own property
 * is a no-op, `Object.keys` (the language loop) skips it, and every later load still reads it.
 * A repeated extension is idempotent, as words already carrying the prefix are kept as they are.
 */
const translations = Object.assign(Object.create({ prefix: 'vis_2_widgets_collection_' }), {
    en: require('./i18n/en.json'),
    de: require('./i18n/de.json'),
    ru: require('./i18n/ru.json'),
    pt: require('./i18n/pt.json'),
    nl: require('./i18n/nl.json'),
    fr: require('./i18n/fr.json'),
    it: require('./i18n/it.json'),
    es: require('./i18n/es.json'),
    pl: require('./i18n/pl.json'),
    uk: require('./i18n/uk.json'),
    'zh-cn': require('./i18n/zh-cn.json'),
});

export default translations;
