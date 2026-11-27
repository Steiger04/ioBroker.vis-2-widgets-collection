/**
 * The Raumthermostat-Inhalt in the Mini-Dialog of a house type (ADR-0122 Nr. 10, Nachtrag K1).
 *
 * @module HeatingThermostatCollectionWidget/ThermostatContent.test
 * @remarks
 * A stand-in house type draws its own Collection frame and opens the content of its entry 3 in the
 * Mini-Dialog. Pinned: the content reads the numbered binding (Kartenkopf and set-point of the
 * entry), draws nothing of the Collection frame, and inside the dialog takes the dialog's stage —
 * never the tile, never a dialog of its own. The dialog's box is fed by a ResizeObserver fake, since
 * happy-dom lays nothing out. The content inside the widget's frame is pinned by the render tests
 * of the widget body.
 */
import { createTheme, ThemeProvider } from '@mui/material';
import { afterAll, afterEach, describe, expect, it } from 'vitest';

import type { FC } from 'react';

import { collectionScene, testScopedMount, withContentBox } from '../lib/testing/collectionScene';
import CollectionBase from '../components/CollectionBase';
import { ContentBoxContext } from '../hooks/useContentBox';
import useData from '../hooks/useData';
import MiniDialog from '../lib/heating/MiniDialog';
import type { MeasuredBox } from '../lib/heating/stageRule';
import ThermostatContent from './ThermostatContent';

/** The box the ResizeObserver fake reports for the Mini-Dialog's content area. */
let dialogBox: MeasuredBox | undefined;

const nativeResizeObserver = globalThis.ResizeObserver;

/** Reports {@link dialogBox} for the dialog's content area, nothing for anything else. */
class DialogBoxObserver {
    readonly #callback: ResizeObserverCallback;

    constructor(callback: ResizeObserverCallback) {
        this.#callback = callback;
    }

    observe(element: Element): void {
        if (dialogBox && element.hasAttribute('data-heating-dialog-box')) {
            this.#callback([{ contentRect: dialogBox } as unknown as ResizeObserverEntry], this);
        }
    }

    // eslint-disable-next-line class-methods-use-this -- nothing to stop
    unobserve(): void {}

    // eslint-disable-next-line class-methods-use-this -- nothing to stop
    disconnect(): void {}
}

globalThis.ResizeObserver = DialogBoxObserver;

afterAll(() => {
    globalThis.ResizeObserver = nativeResizeObserver;
});

afterEach(() => {
    dialogBox = undefined;
});

const mountBody = testScopedMount();

/** The house type's data: its frame lines and the numbered binding of entry 3. */
const HOUSE_DATA = {
    header: 'Hausübersicht',
    footer: 'Alle Räume',
    bezeichnung3: 'Bad',
    soll3: 'hz.e3.setpoint',
    soll3Object: { _id: 'hz.e3.setpoint', type: 'number', unit: '°C', write: true, minValue: 5, maxValue: 30 },
};

/** A stand-in house type: its own frame, and the content of entry 3 in the Mini-Dialog. */
const HouseType: FC = function HouseType() {
    const { data } = useData('');
    return (
        <CollectionBase
            data={data}
            cornerIcon={false}
        >
            <span data-house-list="">Räume</span>
            <MiniDialog
                open
                onClose={() => {}}
                title="Raumübersicht"
                label="Bad"
                size={{ width: 420, height: 700 }}
                inset={12}
            >
                <ThermostatContent entry={3} />
            </MiniDialog>
        </CollectionBase>
    );
};

/** The house type's scene: its frame measured, entry 3 reporting 19.5 °C. */
const scene = (): ReturnType<typeof withContentBox> =>
    withContentBox(collectionScene('heating-house-stand-in', HOUSE_DATA, 19.5, 'hz.e3.setpoint'), {
        width: 300,
        height: 200,
    });

/** The open dialogs (portalled into the document body). */
const dialogs = (): HTMLElement[] => [...document.body.querySelectorAll<HTMLElement>('[role="dialog"]')];

describe('ThermostatContent: entry 3 in the Mini-Dialog of a house type', () => {
    it("shows the entry's Kartenkopf and set-point in the dialog's Voll stage", () => {
        dialogBox = { width: 396, height: 636 };
        mountBody(HouseType, scene());
        const [dialog] = dialogs();

        expect(dialog.querySelector('[data-heating-stage]')?.getAttribute('data-heating-stage')).toBe('voll');
        expect(dialog.querySelector('[data-heating-head-name]')?.textContent).toBe('Bad');
        expect(dialog.querySelector('[data-heating-setpoint]')?.textContent).toBe('19.5 °C');
    });

    it('draws nothing of the Collection frame: no frame lines, no frame card', () => {
        dialogBox = { width: 396, height: 636 };
        const { container } = mountBody(HouseType, scene());
        const [dialog] = dialogs();

        // The house type's own frame stands in the widget.
        expect(container.querySelector('.BASE-HEADER')?.textContent).toBe('Hausübersicht');
        expect(dialog.querySelector('.BASE-PAPER-0, .BASE-HEADER, .BASE-PAPER-1')).toBeNull();
        expect(dialog.textContent).not.toContain('Hausübersicht');
        expect(dialog.textContent).not.toContain('Alle Räume');
    });

    it('never draws its tile or a dialog of its own: a Mini-sized dialog box gives Einfach', () => {
        dialogBox = { width: 156, height: 66 };
        mountBody(HouseType, scene());

        expect(dialogs()).toHaveLength(1);
        const [dialog] = dialogs();
        expect(dialog.querySelector('[data-heating-stage]')?.getAttribute('data-heating-stage')).toBe('einfach');
        expect(dialog.querySelector('[data-heating-tile]')).toBeNull();
        expect(dialog.querySelector('[data-heating-setpoint]')?.textContent).toBe('19.5 °C');
    });
});

describe('ThermostatContent: a theme of its own (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“)', () => {
    /** A theme with a larger spacing unit and a larger h3 than the standard theme. */
    const theme = createTheme({ spacing: 10, typography: { h3: { fontSize: '3.5rem' } } });
    const box = { width: 741, height: 160 };

    /** The Raumthermostat alone in that theme, its Content-Box published. */
    const Themed: FC = function Themed() {
        return (
            <ThemeProvider theme={theme}>
                <ContentBoxContext.Provider value={box}>
                    <ThermostatContent />
                </ContentBoxContext.Provider>
            </ThemeProvider>
        );
    };
    /** The Raumthermostat alone in the standard theme, the same Content-Box published. */
    const Standard: FC = function Standard() {
        return (
            <ContentBoxContext.Provider value={box}>
                <ThermostatContent />
            </ContentBoxContext.Provider>
        );
    };
    const data = {
        inhaltsabstand: 0,
        soll: 'hz.setpoint',
        sollObject: { _id: 'hz.setpoint', type: 'number', unit: '°C', write: true, minValue: 5, maxValue: 30 },
    };
    /** The width of ± as drawn: 52 px at the design, so the Maßstab is a 52nd of it. */
    const stepIn = (container: HTMLElement): number =>
        parseFloat(getComputedStyle(container.querySelector<HTMLElement>('[data-heating-step="up"]')!).width);

    it("draws Quer by the plan of the theme's measures: its set-point row fits the box", () => {
        const { container } = mountBody(Themed, collectionScene('heating-thermostat-themed', data, 21, 'hz.setpoint'));
        const setpoint = container.querySelector<HTMLElement>(
            '[data-heating-slot="setpoint"] [data-heating-setpoint]',
        )!;
        const font = parseFloat(getComputedStyle(setpoint).fontSize);
        const step = stepIn(container);

        expect(container.querySelector('[data-heating-arrangement]')?.getAttribute('data-heating-arrangement')).toBe(
            'quer',
        );
        // The Maßstab as ± draw it (52 px at the design); the set-point in the theme's h3 at it.
        const scale = step / 52;
        expect(font).toBeCloseTo(56 * scale, 3);
        // „21,0 °C“ measured 161 px wide at 48 px of font; ± with their gap of 1.5 units of 10 px.
        expect(font * (161 / 48) + 2 * step + 2 * 15 * scale).toBeLessThanOrEqual(box.width);
    });

    it('draws Quer at a smaller Maßstab than the standard theme: its larger h3 and spacing unit need more room', () => {
        const themed = mountBody(Themed, collectionScene('heating-thermostat-themed', data, 21, 'hz.setpoint'));
        const themedStep = stepIn(themed.container);
        const standard = mountBody(Standard, collectionScene('heating-thermostat-standard', data, 21, 'hz.setpoint'));

        expect(themedStep).toBeLessThan(stepIn(standard.container));
    });
});
