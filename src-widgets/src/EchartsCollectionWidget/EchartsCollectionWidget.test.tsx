/**
 * ECharts attribute panel: the core field block shows only what the chart frame renders
 * (ADR-0004 "the field follows the runtime"; CONTEXT "Eck-Icon": ECharts switches it off).
 *
 * The seam is `getWidgetInfo()` — what vis-2 reads to build the panel. Mocked are the vis-2
 * runtime base (`Generic` extends `window.visRxWidget`), the render body and the heavy custom
 * editors; the field lists run for real.
 */
import { describe, expect, it, vi } from 'vitest';

import type { RxWidgetInfo } from '@iobroker/types-vis-2';

vi.mock('../Generic', () => ({ default: class {} }));
vi.mock('./EchartsCollection', () => ({ default: () => null }));
vi.mock('./EchartsConfigEditor', () => ({ default: () => null }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));

import commonFields from '../lib/commonFields';
import EchartsCollectionWidget from './EchartsCollectionWidget';

interface FieldLike {
    name?: string;
    type?: string;
    hidden?: string | ((data: Record<string, unknown>, index?: number) => boolean);
    component?: (...args: unknown[]) => unknown;
}

/**
 * Evaluates a field's `hidden` clause against widget data. String clauses in the core block
 * are `data.<key>` terms joined by `||` (e.g. `'data.circle || data.ellipse'`).
 */
const isHidden = (field: FieldLike, data: Record<string, unknown>): boolean => {
    if (typeof field.hidden === 'function') {
        return Boolean(field.hidden(data, undefined));
    }
    if (typeof field.hidden === 'string') {
        return field.hidden.split('||').some(term => {
            const key = term.trim().replace(/^data\./, '');
            return Boolean(data[key]);
        });
    }
    return false;
};

/** Widget data in which every icon/value field of the core block is set (a migrated widget). */
const FILLED: Record<string, unknown> = {
    icon: 'icon.svg',
    iconSmall: 'mdi:home',
    iconSize: 40,
    enableIconColorMask: true,
    iconColor: '#ff0000',
    iconXOffset: '4px',
    iconYOffset: '4px',
    noHeaderIcon: false,
    valueSize: 20,
};

/** The section divider text of a core-block divider, `undefined` for any other field. */
const dividerText = (field: FieldLike): string | undefined => {
    if (field.type !== 'custom' || typeof field.component !== 'function') {
        return undefined;
    }
    const element = field.component(field, {}, () => undefined, {}) as { props?: { dividerText?: string } } | null;
    return element?.props?.dividerText;
};

const INERT = [
    'icon',
    'iconSmall',
    'iconSize',
    'enableIconColorMask',
    'iconColor',
    'iconXOffset',
    'iconYOffset',
    'noHeaderIcon',
    'valueSize',
];

const echartsCommonGroup = (): FieldLike[] => {
    const info: RxWidgetInfo = EchartsCollectionWidget.getWidgetInfo();
    const group = info.visAttrs.find(g => g.name === 'common');
    return (group?.fields ?? []) as FieldLike[];
};

describe('ECharts attribute panel: core fields without a runtime consumer', () => {
    it('hides the icon block, the corner-icon switch and the value block for any widget data', () => {
        const fields = echartsCommonGroup();
        for (const name of INERT) {
            const field = fields.find(f => f.name === name);
            expect(field, name).toBeDefined();
            expect(isHidden(field!, {}), `${name} (empty data)`).toBe(true);
            expect(isHidden(field!, FILLED), `${name} (filled data)`).toBe(true);
        }
    });

    it('hides the icon and value section dividers with their sections', () => {
        const dividers = echartsCommonGroup().filter(f => dividerText(f) !== undefined);
        const byText = new Map(dividers.map(f => [dividerText(f), f]));
        expect(isHidden(byText.get('icon')!, {})).toBe(true);
        expect(isHidden(byText.get('value')!, {})).toBe(true);
        for (const text of ['header', 'footer', 'characteristics', 'geometry', 'background', 'frame_background']) {
            expect(isHidden(byText.get(text)!, {}), text).toBe(false);
        }
    });

    it('keeps the inert fields declared, so stored values stay in the widget data', () => {
        const names = new Set(echartsCommonGroup().map(f => f.name));
        for (const name of INERT) {
            expect(names.has(name), name).toBe(true);
        }
    });

    it('keeps the fields the chart frame renders (header, footer, card, colours) visible', () => {
        const fields = echartsCommonGroup();
        for (const name of [
            'noHeader',
            'header',
            'headerSize',
            'noFooter',
            'footer',
            'footerSize',
            'noCard',
            'textColor',
            'background',
            'frameBackground',
        ]) {
            const field = fields.find(f => f.name === name);
            expect(field, name).toBeDefined();
            expect(isHidden(field!, {}), name).toBe(false);
        }
    });

    it('leaves the shared core block untouched for every other widget', () => {
        const shared = commonFields() as FieldLike[];
        for (const name of ['icon', 'iconSmall', 'iconSize', 'iconColor', 'iconXOffset', 'noHeaderIcon', 'valueSize']) {
            const field = shared.find(f => f.name === name);
            expect(field, name).toBeDefined();
            expect(isHidden(field!, FILLED), name).toBe(false);
        }
        const iconDivider = shared.find(f => dividerText(f) === 'icon');
        expect(isHidden(iconDivider!, {})).toBe(false);
    });
});
