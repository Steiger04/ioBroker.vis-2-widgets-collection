import { useEffect, useState } from "react";
import { useContext } from "react";
import { CollectionContext } from "../components/CollectionProvider";

const useOidValue = (oid) => {
	const { getPropertyValue } = useContext(CollectionContext);

	const oidValue = getPropertyValue(oid);

	const [value, setValue] = useState(oidValue);

	useEffect(() => {
		if (oidValue !== undefined) setValue(oidValue);
	}, [oidValue]);

	return value;
};

export default useOidValue;
