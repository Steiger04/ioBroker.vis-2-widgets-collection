/**
 * Input widget preview fixture.
 *
 * @module preview/scenes/input
 * @remarks
 * Demo story: a numeric setpoint (21.5 °C) shown read-only with a thermometer
 * icon — the canonical ioBroker use case for the Input widget (inline-edit of a
 * bound value). The rest of the CollectionContext (host theme, socket stub,
 * getPropertyValue, …) is supplied by {@link module:preview/mockContext.buildPreviewContext}.
 */

import InputCollection from '../../InputCollectionWidget/InputCollection';

import type { PreviewScene } from '../types';

const OID = 'demo.0.temperature';

// Thermometer icon as an inline SVG data URI — no external asset to ship. Stroke
// uses the host primary (#3399CC) so the icon matches the accent without needing
// forceColorMask.
const thermometerIcon = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3399CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
)}`;

const inputScene: PreviewScene = {
    slug: 'input',
    component: InputCollection,
    size: { width: 480, height: 160 },
    context: {
        widget: {
            data: {
                oid: OID,
                oidObject: { _id: OID, type: 'number', unit: '°C' },
                unit: ' °C', // leading space → useHtmlValue renders "21.5 °C"
                onlyDisplay: true, // read-only display (no edit TextField)
                write: false,
                noHeader: true,
                noFooter: true,
                noHeaderIcon: true,
                noIcon: false,
                noValue: false,
                icon: thermometerIcon,
                valueSize: '2.5rem',
            },
            style: {},
        },
        values: {
            [`${OID}.val`]: 21.5,
        },
        mode: 'light',
        wrappedContent: true,
    },
};

export default inputScene;
