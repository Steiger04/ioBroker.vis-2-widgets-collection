/**
 * Hook that reads a dynamic OID property from {@link module:components/CollectionProvider.CollectionContext}.
 *
 * @module hooks/useOidValue
 * @remarks
 * This is a small convenience wrapper around `getPropertyValue` that handles
 * `"nothing_selected"` and keeps a local state value in sync.
 */

import { useContext, useEffect, useState, useMemo } from 'react';
import { CollectionContext } from '../components/CollectionProvider';

/**
 * Supported OID value types.
 */
type OidValue = string | number | boolean | null | undefined;

/** Identifier for an OID property name (e.g. `"oid"`, `"oid1"`). */
type OidIdentifier = string | undefined | null;

/**
 * Returns the current value for a given OID property name.
 *
 * @param oid - OID property name to read (e.g. `"oid"`, `"oid1"`).
 * @returns Current value for the selected OID (or `undefined` if not selected).
 * @example
 * ```tsx
 * const value = useOidValue('oid1');
 * return <span>{String(value ?? '')}</span>;
 * ```
 */
const useOidValue = (oid: OidIdentifier): OidValue => {
    const { getPropertyValue } = useContext(CollectionContext);

    const oidValue = useMemo(() => {
        if (!oid || oid === 'nothing_selected') {
            return undefined;
        }

        return getPropertyValue(oid);
    }, [oid, getPropertyValue]);

    const [value, setValue] = useState<OidValue>(oidValue);

    useEffect(() => {
        if (oidValue !== undefined) {
            setValue(oidValue);
        }
    }, [oidValue]);

    return useMemo(() => value, [value]);
};

export default useOidValue;
