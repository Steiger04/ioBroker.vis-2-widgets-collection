/**
 * CollectionBase — the frame header, rendered.
 *
 * @module components/CollectionBase.test
 * @remarks
 * DOM contract of the frame header on the preview context: a host's `hideHeader` keeps the
 * header out of the frame exactly like the widget's own `noHeader` — the same collapsed header
 * box, its text slot left empty.
 */
import { afterEach, describe, expect, it } from 'vitest';
import { createElement, type FC } from 'react';

import CollectionBase from './CollectionBase';
import useData from '../hooks/useData/useData';
import {
    collectionScene,
    installInertResizeObserver,
    mountCollectionBody,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';

installInertResizeObserver();

const OID = 'demo.0.frame';

const mounted: MountedCollectionBody[] = [];

/** Mounts the frame around the scene's widget, the host passing `hideHeader`. */
const mountFrame = (data: Record<string, unknown>, hideHeader?: boolean): MountedCollectionBody => {
    const Frame: FC = () => {
        const { data: styleData } = useData('oid');
        return createElement(CollectionBase, { data: styleData, hideHeader });
    };
    const body = mountCollectionBody(
        Frame,
        collectionScene(
            'collection-base-test',
            { oid: OID, oidObject: { _id: OID, type: 'number' }, header: 'Küche', noFooter: true, ...data },
            0,
        ),
    );
    mounted.push(body);
    return body;
};

afterEach(() => {
    mounted.splice(0).forEach(body => body.unmount());
});

/** The frame header's box: the slot above the frame's content box. */
const headerBox = ({ container }: MountedCollectionBody): Element | null | undefined =>
    container.querySelector('.BASE-PAPER-0')?.firstElementChild;

describe('CollectionBase frame header', () => {
    it('shows the header text in the frame by default', () => {
        const frame = mountFrame({});

        expect(headerBox(frame)?.textContent).toBe('Küche');
    });

    it('hideHeader collapses the header like noHeader and leaves its text slot empty', () => {
        const hidden = mountFrame({}, true);
        const noHeader = mountFrame({ noHeader: true });
        const shown = mountFrame({});

        expect(headerBox(hidden)?.textContent).toBe('');
        expect(headerBox(hidden)?.outerHTML).toBe(headerBox(noHeader)?.outerHTML);
        expect(headerBox(hidden)?.className).not.toBe(headerBox(shown)?.className);
    });
});
