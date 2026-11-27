/**
 * The catalogue of Thermostat-Bedeutungen: the one source for every Bedeutung of the heating
 * family (ADR-0119, ADR-0120).
 *
 * @module lib/heating/meaningCatalog
 * @remarks
 * Per Bedeutung the catalogue states its field name, the value types a pick accepts, whether it
 * carries a Wertezuordnung (with which neutral keys, and whether with `einheit` or `zeitformat`),
 * whether it is only written, and its translation key. Each heating type picks its subset; the
 * binding building block (`lib/heating/bindingFields`) builds the panel fields from it.
 *
 * The field names are stored in user projects from the first release on and never change (ADR-0119
 * Nachtrag „Spec Stufe 1 schreiben“): German, no name ends in a digit (the host's digit rule takes
 * up to two trailing digits as the entry number, ADR-0121). The numbered form of a list entry puts
 * the number before every suffix ({@link meaningKeys}).
 *
 * The valve list (`ventil{m}`, counter `ventilAnzahl`) is a counted list, not a single Bedeutung
 * field; its names live in {@link VALVE_LIST}. Valve fault (adaption) is not part of stage 1.
 */
import type { AllowedType } from '../allowedOidTypes';

/** The field names of the Thermostat-Bedeutungen (unnumbered). */
export type MeaningField =
    | 'soll'
    | 'ist'
    | 'luftfeuchte'
    | 'betriebsart'
    | 'betriebsartSetzen'
    | 'boost'
    | 'boostBeenden'
    | 'boostRestzeit'
    | 'boostDauer'
    | 'urlaub'
    | 'urlaubBeginn'
    | 'urlaubEnde'
    | 'urlaubTemperatur'
    | 'fenster'
    | 'batterieSchwach'
    | 'batteriestand'
    | 'erreichbarkeit';

/** The neutral values of a Wertezuordnung (ADR-0120 Nachtrag „Spec Stufe 1 schreiben“). */
export type NeutralKey =
    | 'auto'
    | 'manuell'
    | 'aus'
    | 'boost'
    | 'urlaub'
    | 'an'
    | 'beenden'
    | 'zu'
    | 'offen'
    | 'erreichbar'
    | 'unerreichbar'
    | 'schwach'
    | 'ok';

/** The additions a Wertezuordnung may carry: a duration's unit or a point in time's format. */
export type MappingAddition = 'einheit' | 'zeitformat';

/** The shape of a Bedeutung's Wertezuordnung, stored under `<bedeutung>Zuordnung`. */
export interface MappingShape {
    /** The neutral values in panel order; each maps to a list of device values. */
    readonly keys: readonly NeutralKey[];
    /** The additions the Bedeutung may store — exactly one of them is stored where there are two. */
    readonly additions: readonly MappingAddition[];
    /**
     * The neutral value a boolean device value `true` reads as, unless „Wert umkehren“ is on (the
     * ioBroker convention: `true` is the active, the reported state); the other keys read `false`.
     * Only Bedeutungen with it show a boolean data point as the switch „Wert umkehren“.
     */
    readonly trueKey?: NeutralKey;
}

/** One Thermostat-Bedeutung of the catalogue. */
export interface ThermostatMeaning {
    /** The unnumbered field name. */
    readonly field: MeaningField;
    /** The JS types a pick of the Bedeutung accepts. */
    readonly valueTypes: readonly AllowedType[];
    /** The Wertezuordnung the Bedeutung carries; none for a plain measured or set value. */
    readonly mapping?: MappingShape;
    /** Only written, never read (a write-only companion such as „Betriebsart setzen“). */
    readonly writeOnly: boolean;
    /** The translation key of its label. */
    readonly label: string;
    /** In the catalogue, but no type offers it yet (a later stage decides). */
    readonly unassigned?: true;
}

/** Any of the four value types — the Bedeutungen whose device encoding the Wertezuordnung maps. */
const ANY_VALUE: readonly AllowedType[] = ['boolean', 'number', 'string', 'mixed'];
/** A measured or set number. */
const NUMBER: readonly AllowedType[] = ['number'];
/** A duration as a number, or an end time as text or timestamp. */
const NUMBER_OR_TEXT: readonly AllowedType[] = ['number', 'string'];

/** A Wertezuordnung of neutral values only. */
const values = (...keys: NeutralKey[]): MappingShape => ({ keys, additions: [] });
/** A Wertezuordnung of neutral values a boolean data point may carry, `trueKey` read from `true`. */
const switchable = (trueKey: NeutralKey, ...keys: NeutralKey[]): MappingShape => ({ keys, additions: [], trueKey });
/** A Wertezuordnung of additions only. */
const additions = (...kinds: MappingAddition[]): MappingShape => ({ keys: [], additions: kinds });

/** Builds a catalogue entry; write-only only where stated. */
const meaning = (
    field: MeaningField,
    label: string,
    valueTypes: readonly AllowedType[],
    extra: Partial<Pick<ThermostatMeaning, 'mapping' | 'writeOnly' | 'unassigned'>> = {},
): ThermostatMeaning => ({ field, label, valueTypes, writeOnly: false, ...extra });

/**
 * All Thermostat-Bedeutungen of the family, keyed by field name. The labels are literal keys, so
 * the code scan against `en.json` finds them.
 */
export const MEANINGS: Readonly<Record<MeaningField, ThermostatMeaning>> = {
    soll: meaning('soll', 'heating_soll', NUMBER),
    ist: meaning('ist', 'heating_ist', NUMBER),
    luftfeuchte: meaning('luftfeuchte', 'heating_luftfeuchte', NUMBER),
    betriebsart: meaning('betriebsart', 'heating_betriebsart', ANY_VALUE, {
        mapping: values('auto', 'manuell', 'aus', 'boost', 'urlaub'),
    }),
    betriebsartSetzen: meaning('betriebsartSetzen', 'heating_betriebsart_setzen', ANY_VALUE, {
        mapping: values('auto', 'manuell', 'aus'),
        writeOnly: true,
    }),
    boost: meaning('boost', 'heating_boost', ANY_VALUE, { mapping: switchable('an', 'an', 'aus') }),
    boostBeenden: meaning('boostBeenden', 'heating_boost_beenden', ANY_VALUE, {
        mapping: switchable('beenden', 'beenden'),
        writeOnly: true,
    }),
    boostRestzeit: meaning('boostRestzeit', 'heating_boost_restzeit', NUMBER_OR_TEXT, {
        mapping: additions('einheit', 'zeitformat'),
    }),
    // ADR-0120's writable boost parameter; stage 4 (Boost und Urlaub) assigns it.
    boostDauer: meaning('boostDauer', 'heating_boost_dauer', NUMBER, {
        mapping: additions('einheit'),
        unassigned: true,
    }),
    urlaub: meaning('urlaub', 'heating_urlaub', ANY_VALUE, { mapping: switchable('an', 'an', 'aus') }),
    // Stage 4 (Boost und Urlaub) assigns it: the Raumthermostat starts no Urlaub.
    urlaubBeginn: meaning('urlaubBeginn', 'heating_urlaub_beginn', NUMBER_OR_TEXT, {
        mapping: additions('zeitformat'),
        unassigned: true,
    }),
    urlaubEnde: meaning('urlaubEnde', 'heating_urlaub_ende', NUMBER_OR_TEXT, { mapping: additions('zeitformat') }),
    // Stage 4 (Boost und Urlaub) assigns it.
    urlaubTemperatur: meaning('urlaubTemperatur', 'heating_urlaub_temperatur', NUMBER, { unassigned: true }),
    fenster: meaning('fenster', 'heating_fenster', ANY_VALUE, { mapping: switchable('offen', 'zu', 'offen') }),
    batterieSchwach: meaning('batterieSchwach', 'heating_batterie_schwach', ANY_VALUE, {
        mapping: switchable('schwach', 'schwach', 'ok'),
    }),
    batteriestand: meaning('batteriestand', 'heating_batteriestand', NUMBER),
    erreichbarkeit: meaning('erreichbarkeit', 'heating_erreichbarkeit', ANY_VALUE, {
        mapping: switchable('erreichbar', 'erreichbar', 'unerreichbar'),
    }),
};

/** The subset of the catalogue a heating type offers. */
export interface MeaningSubset {
    /** The main Bedeutung: the type's main data point (ADR-0119), first in {@link meanings}. */
    readonly main: MeaningField;
    /** The Bedeutungen the type offers, in panel order. */
    readonly meanings: readonly MeaningField[];
}

/** The subset of the Raumthermostat (stage-1 spec „Was mit dem ersten Release festliegt“). */
export const ROOM_THERMOSTAT: MeaningSubset = {
    main: 'soll',
    meanings: [
        'soll',
        'ist',
        'luftfeuchte',
        'betriebsart',
        'betriebsartSetzen',
        'boost',
        'boostBeenden',
        'boostRestzeit',
        'urlaub',
        'urlaubEnde',
        'fenster',
        'batterieSchwach',
        'batteriestand',
        'erreichbarkeit',
    ],
};

/** The stored keys of one Bedeutung. */
export interface MeaningKeys {
    /** The id field. */
    readonly field: string;
    /** The object its pick stores. */
    readonly object: string;
    /** Its Wertezuordnung. */
    readonly mapping: string;
}

/**
 * The stored keys of a Bedeutung, unnumbered or for a list entry.
 *
 * @param field - The Bedeutung's field name.
 * @param entry - The entry number of a list entry (ADR-0121); none for a single-room type.
 * @returns The keys, the number before every suffix (`soll3`, `soll3Object`, `betriebsart3Zuordnung`).
 */
export const meaningKeys = (field: MeaningField, entry?: number): MeaningKeys => {
    const base = entryKey(field, entry);
    return { field: base, object: `${base}Object`, mapping: `${base}Zuordnung` };
};

/**
 * A key of the binding, unnumbered or for a list entry: the one numbering rule of the family
 * (ADR-0121). Numbered per entry is the binding alone — the Bedeutungen with their object and
 * Wertezuordnung ({@link meaningKeys}) and the Kartenkopf's Bezeichnung and Unterzeile, which stand
 * with the binding ({@link headerKeys}, ADR-0123 Nr. 8). Widget values (`komfort`, `absenk`,
 * `ansicht`) belong to the widget and stay unnumbered.
 *
 * @param base - The unnumbered key.
 * @param entry - The entry number of a list entry; none for a single-room type.
 * @returns The key with the number before every suffix.
 */
export const entryKey = (base: string, entry?: number): string => `${base}${entry ?? ''}`;

/** The Kartenkopf keys of a binding. */
export interface HeaderKeys {
    /** Bezeichnung: the name in the Kartenkopf. */
    readonly name: string;
    /** Unterzeile: the second line below it. */
    readonly subLine: string;
}

/**
 * The Kartenkopf keys of a binding, unnumbered or for a list entry ({@link entryKey}).
 *
 * @param entry - The entry number of a list entry; none for a single-room type.
 */
export const headerKeys = (entry?: number): HeaderKeys => ({
    name: entryKey('bezeichnung', entry),
    subLine: entryKey('unterzeile', entry),
});

/** The valve list: flat, counted, one id field per valve (ADR-0119, ADR-0121). */
export const VALVE_LIST = {
    /** The base field: valves are stored as `ventil1…ventilN`, each with `ventil{m}Object`. */
    field: 'ventil',
    /** The counter. */
    counter: 'ventilAnzahl',
    /** A valve value is a level. */
    valueTypes: NUMBER,
    /** The label of one valve. */
    label: 'heating_ventil',
    /** The label of the list. */
    listLabel: 'heating_ventile',
    /** The host subscribes up to two trailing digits (ADR-0121). */
    max: 99,
} as const;
