import { useContext, useMemo } from "react";
import { CollectionContext } from "../components/CollectionProvider";

const usePaperWidth = (refService) => {
	const {
		widget: {
			data: { noCard },
		},
	} = useContext(CollectionContext);

	const clientWidth = refService?.current?.clientWidth;
	const clientHeight = refService?.current?.clientHeight;

	const paperWidth = useMemo(() => {
		if (clientWidth && clientHeight) {
			if (clientWidth < clientHeight) {
				if (noCard) {
					return clientWidth;
				}
				return clientWidth;
			}
			if (noCard) {
				return clientHeight;
			}
			return clientHeight;
		}
		// +return "100%";
	}, [noCard, clientHeight, clientWidth]);

	return paperWidth;
};

export default usePaperWidth;
