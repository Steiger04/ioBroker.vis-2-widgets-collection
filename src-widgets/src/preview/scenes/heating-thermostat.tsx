/**
 * Raumthermostat preview fixture.
 *
 * @module preview/scenes/heating-thermostat
 * @remarks
 * Demo story: a living-room wall thermostat at its start size 420 × 700 px, so the image shows the
 * full arrangement (Voll, Groß) of ADR-0122: the Kartenkopf with Bezeichnung, Unterzeile and the
 * chip „Heating“ (one valve at 35 %), the dial at 21.5 °C over 20.8 °C, the hint line of the Auto
 * mode, the pills Setback / Comfort / Off, the operating-mode segment with Auto lit and the readings
 * bar (humidity, valve, window closed, battery). Every Bedeutung is bound as a pick in the editor
 * stores it — `<field>Object` and its Wertezuordnung — so no read through the socket is needed
 * (the preview socket answers only the theme). Header and footer stay empty as in the palette, the
 * frame keeps its standard padding and elevation.
 */

import HeatingThermostatCollection from '../../HeatingThermostatCollectionWidget/HeatingThermostatCollection';

import type { PreviewScene } from '../types';

const DEVICE = 'demo.0.livingroom-thermostat';

/** The demo data points, one per bound Bedeutung. */
const OID = {
    soll: `${DEVICE}.setpoint`,
    ist: `${DEVICE}.temperature`,
    luftfeuchte: `${DEVICE}.humidity`,
    betriebsart: `${DEVICE}.mode`,
    boost: `${DEVICE}.boost`,
    fenster: `${DEVICE}.window`,
    erreichbarkeit: `${DEVICE}.reachable`,
    batteriestand: `${DEVICE}.battery`,
    ventil1: 'demo.0.livingroom-valve.level',
} as const;

/** The object a pick stores for a data point (a Hilfs-ID: the real range only, no root fields). */
const picked = (id: string, type: string, extra: Record<string, unknown> = {}): Record<string, unknown> => ({
    _id: id,
    name: id,
    type,
    write: true,
    onlyDisplay: false,
    ...extra,
});

const heatingThermostatScene: PreviewScene = {
    slug: 'heating-thermostat',
    component: HeatingThermostatCollection,
    size: { width: 468, height: 748 },
    context: {
        widget: {
            data: {
                bezeichnung: 'Living room',
                unterzeile: 'Wall thermostat',
                soll: OID.soll,
                sollObject: picked(OID.soll, 'number', { unit: '°C', minValue: 4.5, maxValue: 30.5, step: 0.5 }),
                ist: OID.ist,
                istObject: picked(OID.ist, 'number', { unit: '°C', write: false }),
                luftfeuchte: OID.luftfeuchte,
                luftfeuchteObject: picked(OID.luftfeuchte, 'number', { unit: '%', write: false }),
                betriebsart: OID.betriebsart,
                betriebsartObject: picked(OID.betriebsart, 'number', {
                    commonStates: { 0: 'AUTO', 1: 'MANUAL', 2: 'VACATION' },
                }),
                betriebsartZuordnung: { auto: [0], manuell: [1], urlaub: [2] },
                boost: OID.boost,
                boostObject: picked(OID.boost, 'boolean'),
                boostZuordnung: { an: [true], aus: [false] },
                fenster: OID.fenster,
                fensterObject: picked(OID.fenster, 'number', {
                    write: false,
                    commonStates: { 0: 'CLOSED', 1: 'OPEN' },
                }),
                fensterZuordnung: { zu: [0], offen: [1] },
                erreichbarkeit: OID.erreichbarkeit,
                erreichbarkeitObject: picked(OID.erreichbarkeit, 'boolean', { write: false }),
                erreichbarkeitZuordnung: { erreichbar: [true], unerreichbar: [false] },
                batteriestand: OID.batteriestand,
                batteriestandObject: picked(OID.batteriestand, 'number', { unit: '%', write: false }),
                ventil1: OID.ventil1,
                ventil1Object: picked(OID.ventil1, 'number', { unit: '%', write: false }),
                ventilAnzahl: 1,
                komfort: 21,
                absenk: 17,
                ansicht: 'voll',
                // The frame's standard (ADR-0117) as a placed widget inherits it; the preview
                // provider gets no frame keys, so the scene states it.
                basePadding: 1,
                baseElevation: 4,
            },
            style: {},
        },
        values: {
            [`${OID.soll}.val`]: 21.5,
            [`${OID.ist}.val`]: 20.8,
            [`${OID.luftfeuchte}.val`]: 48,
            [`${OID.betriebsart}.val`]: 0,
            [`${OID.boost}.val`]: false,
            [`${OID.fenster}.val`]: 0,
            [`${OID.erreichbarkeit}.val`]: true,
            [`${OID.batteriestand}.val`]: 80,
            [`${OID.ventil1}.val`]: 35,
        },
        mode: 'light',
        hostAllowsCard: true,
    },
};

export default heatingThermostatScene;
