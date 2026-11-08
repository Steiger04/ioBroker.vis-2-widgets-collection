/**
 * The field `aliasActive` is offered where it is read (ADR-0111 Nr. 15).
 *
 * @module lib/aliasActive.parity.test
 * @remarks
 * The `alias` resolver has no Active stage, so the Button-Group has no reader for the field; the
 * Slider's selected mark does read it. Introspects `getWidgetInfo()` like
 * `delayFields.parity.test.ts` (same mocks: the vis-2 runtime base, the widget bodies and the
 * color fields contribute no field).
 */
import { beforeAll, describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../ButtonGroupCollectionWidget/ButtonGroupCollection', () => ({ default: () => null }));
vi.mock('../SliderCollectionWidget/SliderCollection', () => ({ default: () => null }));

/** The named fields of the widget's Active group, in field order. */
const activeFieldsOf = (info: RxWidgetInfo): (string | undefined)[] =>
    (info.visAttrs.find(group => group.name === 'active')?.fields ?? [])
        .map(field => (field as { name?: string }).name)
        .filter(Boolean);

let buttonGroup: (string | undefined)[];
let slider: (string | undefined)[];

beforeAll(async () => {
    const [buttonGroupWidget, sliderWidget] = await Promise.all([
        import('../ButtonGroupCollectionWidget/ButtonGroupCollectionWidget'),
        import('../SliderCollectionWidget/SliderCollectionWidget'),
    ]);
    buttonGroup = activeFieldsOf(buttonGroupWidget.default.getWidgetInfo());
    slider = activeFieldsOf(sliderWidget.default.getWidgetInfo());
}, 60_000);

describe('aliasActive in the Active group', () => {
    it('is not offered by the Button-Group, the alias resolver has no Active stage', () => {
        expect(buttonGroup).not.toContain('aliasActive');
    });

    it('stays with the Slider, its selected mark reads it', () => {
        expect(slider).toContain('aliasActive');
    });

    it('is all the Button-Group gives up against the Slider', () => {
        expect(slider.filter(name => name !== 'aliasActive')).toEqual(buttonGroup);
    });
});
