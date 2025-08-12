import { useContext, useEffect, useState, useMemo } from 'react';
import { CollectionContext } from '../components/CollectionProvider';

/**
 * Typen für OID-Werte
 */
type OidValue = string | number | boolean | null | undefined;
type OidIdentifier = string | undefined | null;

/**
 * Hook für OID-Wert-Management
 * Verwaltet den aktuellen Wert eines OID-Objekts mit automatischer Synchronisation
 *
 * @param oid - OID-Bezeichner des zu überwachenden Objekts
 * @returns Aktueller Wert des OID-Objekts
 */
const useOidValue = (oid: OidIdentifier): OidValue => {
    const { getPropertyValue } = useContext(CollectionContext);

    // Memoized OID-Wert für bessere Performance
    const oidValue = useMemo(() => {
        if (!oid || oid === 'nothing_selected') {
            return undefined;
        }

        return getPropertyValue(oid);
    }, [oid, getPropertyValue]);

    // State für den aktuellen Wert
    const [value, setValue] = useState<OidValue>(oidValue);

    // Synchronisation des lokalen States mit dem OID-Wert
    useEffect(() => {
        if (oidValue !== undefined) {
            setValue(oidValue);
        }
    }, [oidValue]);

    // Memoized Return-Wert
    return useMemo(() => value, [value]);
};

export default useOidValue;
