import { useCallback, useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import isNumber from "../lib/helper/isNumber";
import useDebounce from "./useDebounce";
import useOidValue from "./useOidValue";

const useValueState = (idName) => {
	const context = useContext(CollectionContext);
	const { [`${idName}Object`]: oidObject, values, setState, widget } = context;

	const value = useOidValue(idName);

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
				setState({ values: { ...values, [`${_oid}.val`]: value } });
			} else {
				// setState({ values: { ...values, [`${_oid}.val`]: value } });
				if (debounce) debounce.next(value);
			}
		},
		[oidObject, values, setState, debounce],
	);

	return { value, setValueState };
};

export default useValueState;
