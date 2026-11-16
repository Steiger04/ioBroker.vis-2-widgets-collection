/**
 * Attribut-Panel-Naht — which header and footer fields the attribute panel shows under the
 * effective value of "no header" / "no footer" (ADR-0117, Ticket 06).
 *
 * @module lib/widgetFramePanel.test
 * @remarks
 * The groups of a real widget (the slider: Allgemein and the Active group, which both carry
 * header and footer fields) go through the replica of vis-2's group body
 * (`lib/testing/vis2GroupBody`): a field whose `hidden` predicate holds for every selected widget's
 * stored data is left out. vis-2 hands the predicates the raw stored data only; what is checked is
 * that they hide by the value the widget renders — the Rückfall-Regel, then the cascade own value →
 * Rahmenvorgabe → standard — never where that value is read.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

// The colour fields and dividers come back as rows; their own rendering is covered by their tests.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

import SliderCollectionWidget from '../SliderCollectionWidget/SliderCollectionWidget';
import { renderComponent, type RenderComponentHandle } from './testing/testHarness';
import { vis2CommonValues, Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from './testing/vis2GroupBody';

/** The fields of the slider's attribute group `name`. */
const groupFields = (name: string): readonly Vis2PanelField[] =>
    (SliderCollectionWidget.getWidgetInfo().visAttrs.find(group => group.name === name)?.fields ??
        []) as readonly Vis2PanelField[];

/** The fields under Allgemein that hang on the header. */
const HEADER_FIELDS = ['noHeaderIcon', 'header', 'headerSize'];
/** The fields under Allgemein that hang on the footer. */
const FOOTER_FIELDS = ['footer', 'footerSize'];

type PanelProps = {
    fields: readonly Vis2PanelField[];
    /** The stored data per selected widget. */
    widgets: Record<string, WidgetData>;
};

/** The group body as vis-2 renders it for the selected widgets. */
function Panel({ fields, widgets }: PanelProps): React.JSX.Element {
    const ids = Object.keys(widgets);
    const props = {
        context: {
            theme: vis2HostTheme,
            socket: {},
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
            projectName: 'main',
            instance: 0,
            adapterName: 'vis-2',
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        Editor: () => null,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    return (
        <Vis2GroupBody
            fields={fields}
            data={vis2CommonValues(widgets)}
            stored={Object.values(widgets)}
            onDataChange={() => undefined}
            props={props}
        />
    );
}

let panel: RenderComponentHandle<PanelProps> | null = null;

/** Opens the group `group` for the selected widgets; returns the names of the rows it shows. */
const openPanel = (widgets: Record<string, WidgetData>, group = 'common'): (() => string[]) => {
    panel?.unmount();
    panel = renderComponent(Panel, { fields: groupFields(group), widgets });
    return () => [...panel!.container.querySelectorAll('tr[data-field]')].map(row => row.getAttribute('data-field')!);
};

afterEach(() => {
    panel?.unmount();
    panel = null;
});

describe('fix: the header and footer fields follow the value the widget reads', () => {
    it.each([
        ['noHeader', HEADER_FIELDS],
        ['noFooter', FOOTER_FIELDS],
    ])('an unusable stored %s reads as unset: its fields stay, as the widget shows that part', (key, names) => {
        // The vis-2 assistant writes text into a checkbox field; the widget reads it as unset (ADR-0114).
        const rows = openPanel({ w1: { [key]: 'true' } });

        expect(rows()).toEqual(expect.arrayContaining(names));
    });

    it.each([
        ['noHeader', HEADER_FIELDS],
        ['noFooter', FOOTER_FIELDS],
    ])('a stored %s: true still hides its fields', (key, names) => {
        const rows = openPanel({ w1: { [key]: true } });

        for (const name of names) {
            expect(rows()).not.toContain(name);
        }
    });
});
