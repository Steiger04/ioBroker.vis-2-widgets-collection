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
 * translations module registers, as `I18n.extendTranslations` stores it.
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
import { PLACEABLE_WIDGETS, STILL_OPEN, type WidgetName } from './testing/aiSeams';
import { I18N_PREFIX } from './translate';

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

const checked = PLACEABLE_WIDGETS.filter(name => !STILL_OPEN.includes(name));

describe('Naht 1: the assistant’s view of the widget catalog', () => {
    it('reads the prefix the translations module registers', () => {
        expect(REGISTERED_PREFIX).toBe(I18N_PREFIX);
    });

    it('checks at least the Switch', () => {
        expect(checked).toContain('SwitchCollectionWidget');
    });

    describe.each(checked)('%s', name => {
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
    });
});
