import { useCallback, useContext } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import isNumber from '../lib/helper/isNumber';
import useDebounce from './useDebounce';

/**
 * Interface für den Return-Typ des useValueState Hooks
 */
interface UseValueStateReturn {
    value: string | number | boolean | undefined | null;
    hasValueChanged: boolean;
    updateValue: (value: string | number | boolean, onlyValues?: boolean) => void;
}

/**
 * Hook für Wert-State Management mit Typkonvertierung und Debouncing
 *
 * @param idName Der Name der OID-Property
 * @returns Objekt mit value und updateValue
 */
const useValueState = (idName: string): UseValueStateReturn => {
    const { setState, widget, getPropertyValue, hasPropertyValueChanged } = useContext(CollectionContext);

    // Sicherer Zugriff auf dynamische Properties
    const oidObject = (widget.data as any)[`${idName}Object`];

    // const value = useOidValue(idName);
    const value = getPropertyValue(idName);

    const hasValueChanged = hasPropertyValueChanged(idName);

    const debounce = useDebounce({
        oidObject,
        data: widget.data,
    }) as { next: (value: string | number | boolean) => void } | null;

    const updateValue = useCallback(
        (value: string | number | boolean, onlyValues = false): void => {
            const _oid = oidObject?._id;

            if (!_oid) {
                return;
            }

            //n const oidType = oidObject?.common?.type;
            const oidType = oidObject?.type;
            let processedValue: string | number | boolean = value;

            switch (oidType) {
                case 'string':
                    processedValue = String(value);
                    break;
                case 'number':
                    // console.log("Number(value): ", Number(value));
                    // console.log("isNumber(value): ", isNumber(value));
                    processedValue = isNumber(value) ? Number(value) : 'NaN';
                    break;
                case 'mixed':
                    processedValue = /^true$/i.test(String(value))
                        ? true
                        : /^false$/i.test(String(value))
                          ? false
                          : isNumber(value)
                            ? Number(value)
                            : String(value);
                    break;
                case 'boolean':
                    processedValue = /^true$/i.test(String(value));
                    break;
                default:
                    break;
            }

            if (processedValue === undefined || processedValue === null || processedValue === 'NaN') {
                return;
            }

            const stateUpdate = {
                values: {
                    [`${_oid}.val`]: processedValue,
                    [`${_oid}.lc`]: 1111111111111,
                },
            };

            if (onlyValues) {
                setState((prevState: any) => ({
                    ...prevState,
                    ...stateUpdate,
                }));
            } else {
                /* console.log(
					`useValueState -> setState -> oid: ${_oid}, value: ${processedValue}`,
				); */
                setState((prevState: any) => ({
                    ...prevState,
                    ...stateUpdate,
                }));
                if (debounce) {
                    debounce.next(processedValue);
                }
            }
        },
        [oidObject, setState, debounce],
    );

    return {
        value,
        hasValueChanged,
        updateValue,
    };
};

export default useValueState;
