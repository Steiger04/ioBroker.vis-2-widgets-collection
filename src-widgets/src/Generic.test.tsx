/**
 * The instance `getWidgetInfo` every widget class inherits from `Generic`.
 *
 * @module Generic.test
 * @remarks
 * The seam is what vis-2 does with it: `VisRxWidget`'s constructor calls `this.getWidgetInfo()`
 * and its own method throws (Vis/visRxWidget.tsx:175, :1316). The hoisted host keeps those two
 * traits, so a class that is reached too late or not at all fails here with the host's error.
 */

import { describe, expect, it, vi } from 'vitest';

const host = vi.hoisted(() => {
    const infoReadInConstructor: { id: string }[] = [];

    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string): string {
            return key;
        }

        constructor() {
            infoReadInConstructor.push(this.getWidgetInfo());
        }

        // eslint-disable-next-line class-methods-use-this
        getWidgetInfo(): { id: string } {
            throw new Error('not implemented');
        }
    };

    return { infoReadInConstructor };
});

import type { RxWidgetInfo } from '@iobroker/types-vis-2';
import CheckboxCollectionWidget from './CheckboxCollectionWidget/CheckboxCollectionWidget';
import Generic from './Generic';

class FirstWidget extends Generic<Record<string, unknown>> {
    static getWidgetInfo(): RxWidgetInfo {
        return { id: 'tplFirst' } as RxWidgetInfo;
    }
}

class SecondWidget extends Generic<Record<string, unknown>> {
    static getWidgetInfo(): RxWidgetInfo {
        return { id: 'tplSecond' } as RxWidgetInfo;
    }
}

describe('Generic: getWidgetInfo of an instance', () => {
    it('returns the static of the class of the instance', () => {
        expect(new FirstWidget({} as never).getWidgetInfo().id).toBe('tplFirst');
        expect(new SecondWidget({} as never).getWidgetInfo().id).toBe('tplSecond');
    });

    it("already answers the host's constructor", () => {
        host.infoReadInConstructor.length = 0;

        new FirstWidget({} as never);
        new SecondWidget({} as never);

        expect(host.infoReadInConstructor.map(info => info.id)).toEqual(['tplFirst', 'tplSecond']);
    });

    it('serves a real widget class that declares only the static', () => {
        expect(new CheckboxCollectionWidget({} as never).getWidgetInfo().id).toBe('tplCheckboxCollectionWidget');
    });
});
