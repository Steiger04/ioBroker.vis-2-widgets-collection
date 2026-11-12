/**
 * Reads the objects of the id fields that hold an id without its object, and the widget data with
 * their picks read in (lib/pickedWidgetData, KI-Integration).
 *
 * @module hooks/usePickedWidgetData
 * @remarks
 * Each object is read once per id field and id through the widget's socket, the way the editor pick
 * reads it ({@link loadPickedObjectAsync}); a missing object, a type the field does not take and a
 * socket error read as no usable object. A result stays with its field and id, so a changed id
 * neither loses nor mixes up a read still running. Nothing is written: no widget data, no state.
 * Data whose id fields all carry their own object reads no object and comes back unchanged.
 */
import { useEffect, useMemo, useRef, useState } from 'react';

import { loadPickedObjectAsync, type PickedObject } from '../lib/commonObjectFields';
import { awaitedObjectsOf, pickedWidgetData, type AwaitedObject, type OidPickField } from '../lib/pickedWidgetData';

import type { Connection } from '@iobroker/gui-components';
import type { WidgetData } from '@iobroker/types-vis-2';

/** The key of a read: the id field and the id it holds. */
const readKey = ({ field, id }: AwaitedObject): string => `${field.name}\n${id}`;

const NO_FIELDS: readonly OidPickField[] = [];

/**
 * The widget data with the picks of its awaited objects read in.
 *
 * @param data - The widget data as the widget reads it.
 * @param fields - The widget's id fields with the shared pick; none: the data as it is.
 * @param socket - The widget's connection.
 * @returns `data` itself while no awaited object is loaded or none is awaited.
 */
export default function usePickedWidgetData<T extends object>(
    data: T,
    fields: readonly OidPickField[] | undefined,
    socket: Connection,
): T {
    const [loaded, setLoaded] = useState<ReadonlyMap<string, PickedObject | null>>(() => new Map());
    const reading = useRef(new Set<string>());

    const awaited = useMemo(() => awaitedObjectsOf(data as WidgetData, fields ?? NO_FIELDS), [data, fields]);

    useEffect(() => {
        for (const awaitedObject of awaited) {
            const key = readKey(awaitedObject);
            if (loaded.has(key) || reading.current.has(key)) {
                continue;
            }
            reading.current.add(key);
            loadPickedObjectAsync(socket, awaitedObject.id, awaitedObject.field.allowedTypes)
                // A socket error is no usable object, as for the editor pick (ADR-0111 Nr. 1).
                .catch(() => undefined)
                .then(picked => {
                    reading.current.delete(key);
                    setLoaded(previous => new Map(previous).set(key, picked ?? null));
                })
                .catch(() => undefined);
        }
    }, [awaited, loaded, socket]);

    return useMemo(
        () =>
            awaited.length
                ? (pickedWidgetData(data as WidgetData, awaited, item => loaded.get(readKey(item))) as T)
                : data,
        [data, awaited, loaded],
    );
}
