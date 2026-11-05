/**
 * The native label cell of the vis-2 attribute row a Zustandseditor field renders in.
 *
 * @module components/StateEditor/useLabelCell
 * @remarks
 * vis-2 renders a field's label from a static i18n key (`I18n.t(field.label)`,
 * `Attributes/Widget/index.tsx` `renderFieldRow`) — what depends on the Zustandszeile (the row
 * count, the image preview, the locked look) cannot go through it. The fields that need it reach
 * the row's first `<td>` from inside their value cell and portal their own node into it (or
 * style it); they never touch vis-2's nodes otherwise.
 */
import { useLayoutEffect, useState } from 'react';
import type React from 'react';

/**
 * Finds the label cell of the attribute row around an element of the value cell.
 *
 * @param anchor An element inside the field's value cell.
 * @returns The label cell, or `null` outside a vis-2 attribute row.
 */
export const useLabelCell = (anchor: React.RefObject<HTMLElement | null>): HTMLElement | null => {
    const [cell, setCell] = useState<HTMLElement | null>(null);
    useLayoutEffect(() => {
        const valueCell = anchor.current?.closest('td');
        const labelCell = valueCell?.parentElement?.firstElementChild;
        setCell(labelCell && labelCell !== valueCell ? (labelCell as HTMLElement) : null);
    }, [anchor]);
    return cell;
};
