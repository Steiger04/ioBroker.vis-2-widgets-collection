import { useCallback, useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import isNumber from "../lib/helper/isNumber";
import useDebounce from "./useDebounce";
import useOidValue from "./useOidValue";

const useValueState = (idName) => {
	const {
		[`${idName}Object`]: oidObject,
		setState,
		widget,
		getPropertyValue,
		hasPropertyValueChanged,
	} = useContext(CollectionContext);

	// const value = useOidValue(idName);
	const value = getPropertyValue(idName);
	const hasValueChanged = hasPropertyValueChanged(idName);

	const debounce = useDebounce({
		oidObject,
		data: widget.data,
	});

	const setValueState = useCallback(
		(value, onlyValues = false) => {
			const _oid = oidObject?._id;

			if (!_oid) return;

			const oidType = oidObject?.common?.type;
			switch (oidType) {
				case "string":
					value = String(value);
					break;
				case "number":
					// console.log("Number(value): ", Number(value));
					// console.log("isNumber(value): ", isNumber(value));
					value = isNumber(value) ? Number(value) : "NaN";
					break;
				case "mixed":
					value = /^true$/i.test(value)
						? true
						: /^false$/i.test(value)
							? false
							: (value = isNumber(value) ? Number(value) : String(value));
					break;
				case "boolean":
					value = /^true$/i.test(String(value));
					break;
				default:
					break;
			}

			if (value === undefined || value === null || value === "NaN") return;

			if (onlyValues) {
				setState((prevState) => ({
					values: {
						...prevState.values,
						[`${_oid}.val`]: value,
						[`${_oid}.lc`]: 1111111111111,
					},
				}));
			} else {
				/* console.log(
					`useValueState -> setState -> oid: ${_oid}, value: ${value}`,
				); */
				setState((prevState) => ({
					values: {
						...prevState.values,
						[`${_oid}.val`]: value,
						[`${_oid}.lc`]: 1111111111111,
					},
				}));
				if (debounce) debounce.next(value);
			}
		},
		[oidObject, setState, debounce],
	);

	return { value, hasValueChanged, setValueState };
};

export default useValueState;
