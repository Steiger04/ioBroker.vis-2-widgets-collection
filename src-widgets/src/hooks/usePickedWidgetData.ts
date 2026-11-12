/**
 * Reads the objects of the id fields that hold an id without its object, and the widget data with
 * their picks and the palette's defaults read in (lib/pickedWidgetData, lib/fieldDefaults,
 * KI-Integration).
 *
 * @module hooks/usePickedWidgetData
 * @remarks
 * Each object is read once per id field and id through the widget's socket, the way the editor pick
 * reads it ({@link loadPickedObjectAsync}); a missing object, a type the field does not take and a
 * socket error read as no usable object. A result stays with its field and id, so a changed id
 * neither loses nor mixes up a read still running. Nothing is written: no widget data, no state.
 * Data whose id fields all carry their own object reads no object; with no unset key that has a
 * default it comes back unchanged.
 */
import { useEffect, useMemo, useRef, useState } from 'react';

import { loadPickedObjectAsync, type PickedObject } from '../lib/commonObjectFields';
import { NO_FIELD_DEFAULTS } from '../lib/fieldDefaults';
import {
    awaitedObjectsOf,
    pickedWidgetData,
    type AwaitedObject,
    type OidPickField,
    type WidgetDataReading,
} from '../lib/pickedWidgetData';

import type { Connection } from '@iobroker/gui-components';
import type { WidgetData } from '@iobroker/types-vis-2';

/** The key of a read: the id field and the id it holds. */
const readKey = ({ field, id }: AwaitedObject): string => `${field.name}\n${id}`;

const NO_FIELDS: readonly OidPickField[] = [];

/**
 * The widget data with the picks of its awaited objects and the palette's defaults read in.
 *
 * @param data - The widget data as the widget reads it.
 * @param reading - The widget's id fields with the shared pick and its field defaults; none: the
 *   data as it is.
 * @param socket - The widget's connection.
 * @returns `data` itself while nothing is read in: no awaited object loaded and no unset key with
 *   a default.
 */
export default function usePickedWidgetData<T extends object>(
    data: T,
    reading: WidgetDataReading | undefined,
    socket: Connection,
): T {
    const fields = reading?.oidPickFields;
    const defaults = reading?.defaults ?? NO_FIELD_DEFAULTS;
    const [loaded, setLoaded] = useState<ReadonlyMap<string, PickedObject | null>>(() => new Map());
    const running = useRef(new Set<string>());

    const awaited = useMemo(() => awaitedObjectsOf(data as WidgetData, fields ?? NO_FIELDS), [data, fields]);

    useEffect(() => {
        for (const awaitedObject of awaited) {
            const key = readKey(awaitedObject);
            if (loaded.has(key) || running.current.has(key)) {
                continue;
            }
            running.current.add(key);
            loadPickedObjectAsync(socket, awaitedObject.id, awaitedObject.field.allowedTypes)
                // A socket error is no usable object, as for the editor pick (ADR-0111 Nr. 1).
                .catch(() => undefined)
                .then(picked => {
                    running.current.delete(key);
                    setLoaded(previous => new Map(previous).set(key, picked ?? null));
                })
                .catch(() => undefined);
        }
    }, [awaited, loaded, socket]);

    return useMemo(
        () => pickedWidgetData(data as WidgetData, awaited, item => loaded.get(readKey(item)), defaults) as T,
        [data, awaited, loaded, defaults],
    );
}
