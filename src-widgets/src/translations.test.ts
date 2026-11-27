import { describe, expect, it } from 'vitest';
import { I18n } from '@iobroker/gui-components';
import translations from './translations';

const PREFIX = 'vis_2_widgets_collection_';

/**
 * The two steps the vis-2 host runs per `visWidgets` entry with `i18n: "component"`
 * (visLoadWidgets.tsx): read the prefix of the shared remote module, then extend the
 * global dictionary with it. Both entries of this adapter share one remote `name`, so
 * the host runs this twice against the same module object.
 */
function hostLoad(): string | undefined {
    const module = { default: translations as Record<string, unknown> };
    if (module.default.prefix === true) {
        module.default.prefix = 'vis-2-widgets-collection_';
    }
    const i18nPrefix = module.default.prefix as string | undefined;
    I18n.extendTranslations(module.default);
    return i18nPrefix;
}

describe('translations module loaded by the host for two visWidgets entries', () => {
    it('hands every load the prefix and keeps the words prefixed exactly once', () => {
        const first = hostLoad();
        const second = hostLoad();

        expect(first).toBe(PREFIX);
        expect(second).toBe(PREFIX);

        const de = window.i18nTranslations.de as Record<string, string>;
        expect(de[`${PREFIX}widgets_collection_heating`]).toBe('Widget-Sammlung · Heizung');
        expect(de[`${PREFIX}${PREFIX}widgets_collection_heating`]).toBeUndefined();
        expect(Object.keys(window.i18nTranslations)).not.toContain('prefix');
    });
});
