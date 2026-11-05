/**
 * The per-widget parameters of the Zustandseditor and what follows from them.
 *
 * @module lib/stateEditorConfig
 * @remarks
 * One place turns a widget's parameters (OID property, Marker-Ebene, fixed two rows) into the
 * per-state field list (`commonFields({ perState: true })`, the single source of the per-state
 * fields, ADR-0104 §1) and the Zustandszeilen config (`lib/stateRows`). The Zustandseditor
 * group, the OID pick and Light2's switch-OID seeding all read their row keys from here, so
 * no second key list can drift (the old `clearValueFields` list had).
 */
import commonFields from './commonFields';
import { stateRowSchema } from './stateRows';

import type { StateRowsConfig } from './stateRows';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/** The parameters a widget passes to its Zustandseditor (Spec, parameters per widget). */
export type StateEditorParams = {
    /** Data property of the OID the rows describe — `oid` (default), Light2 `colorLightSwitchOid`. */
    oidProperty?: string;
    /** The widget passes a Marker-Ebene to useData (Slider): per-state colours inherit it first. */
    markerLayer?: boolean;
    /** The widget always has exactly two rows (boolean widgets, Light2): no add/clone/delete. */
    fixedRows?: boolean;
};

/** A widget's Zustandseditor, resolved from its {@link StateEditorParams}. */
export type StateEditorSpec = {
    /** The per-state field definitions the rows are edited with (dividers included). */
    perStateFields: readonly RxWidgetInfoAttributesField[];
    /** Row schema and OID property for the Zustandszeilen-Operationen. */
    config: StateRowsConfig;
};

/**
 * Resolves a widget's Zustandseditor parameters.
 *
 * @param params The widget's parameters; omitted ones take their default.
 * @returns Per-state field list and Zustandszeilen config.
 */
export const stateEditorSpec = (params: StateEditorParams = {}): StateEditorSpec => {
    const resolved: Required<StateEditorParams> = {
        oidProperty: params.oidProperty ?? 'oid',
        markerLayer: params.markerLayer ?? false,
        fixedRows: params.fixedRows ?? false,
    };
    const perStateFields = commonFields({
        groupName: '',
        allFields: false,
        perState: true,
        markerLayer: resolved.markerLayer,
    });

    return {
        perStateFields,
        config: {
            schema: stateRowSchema(perStateFields),
            oidProperty: resolved.oidProperty,
            fixedRows: resolved.fixedRows,
        },
    };
};
