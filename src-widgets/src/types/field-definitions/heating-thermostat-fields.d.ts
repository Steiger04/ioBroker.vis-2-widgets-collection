/**
 * Raumthermostat field definitions (heating family, ADR-0119, ADR-0120, ADR-0122, ADR-0123).
 *
 * @remarks
 * Every Bedeutung is an id field with its `<field>Object` (typed by the `${string}Object` index of
 * the common-object fields); the main Bedeutung is `soll`, not `oid`. A Wertezuordnung is stored
 * under `<bedeutung>Zuordnung`. The valve list is `ventil1…ventilN` with `ventil{m}Object`, counted
 * by `ventilAnzahl`. List entries of the house types carry their number before every suffix
 * (`soll3`, `soll3Object`).
 */
export interface HeatingThermostatFieldsRxData {
    /** Set-point temperature (main Bedeutung, a number state). */
    soll?: string;
    /** Name in the Kartenkopf. */
    bezeichnung?: string;
    /** Optional second line of the Kartenkopf. */
    unterzeile?: string;
    /** Measured temperature. */
    ist?: string;
    /** Humidity. */
    luftfeuchte?: string;
    /** Operating mode as read. */
    betriebsart?: string;
    /** Operating mode, written only. */
    betriebsartSetzen?: string;
    /** Boost on/off. */
    boost?: string;
    /** Ends a running boost. */
    boostBeenden?: string;
    /** Remaining boost time. */
    boostRestzeit?: string;
    /** Holiday mode on/off. */
    urlaub?: string;
    /** End of the holiday. */
    urlaubEnde?: string;
    /** Window state. */
    fenster?: string;
    /** Low battery. */
    batterieSchwach?: string;
    /** Battery level. */
    batteriestand?: string;
    /** Reachability. */
    erreichbarkeit?: string;
    /**
     * Number of valves in the valve list (`ventil1…ventilN`).
     *
     * @default 0
     */
    ventilAnzahl?: number;
    /**
     * Comfort temperature the pill writes into `soll`.
     *
     * @default 21
     */
    komfort?: number;
    /**
     * Setback temperature the pill writes into `soll`.
     *
     * @default 17
     */
    absenk?: number;
    /**
     * Upper bound of the size stages.
     *
     * @default 'voll'
     */
    ansicht?: 'voll' | 'einfach';
    /** Valve values and the Wertezuordnungen, by their generated names. */
    [key: `ventil${number}`]: string | undefined;
    [key: `${string}Zuordnung`]: Record<string, unknown> | string | undefined;
}
