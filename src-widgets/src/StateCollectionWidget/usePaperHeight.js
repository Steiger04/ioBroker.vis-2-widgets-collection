import { useContext, useMemo } from "react";
import { CollectionContext } from "../components/CollectionProvider";

const usePaperHeight = (refService) => {
	const {
		widget: {
			data: { noCard },
		},
	} = useContext(CollectionContext);

	const clientWidth = refService?.current?.clientWidth;
	const clientHeight = refService?.current?.clientHeight;

	const paperHeight = useMemo(() => {
		if (clientHeight && clientWidth) {
			if (clientHeight < clientWidth) {
				if (noCard) {
					return clientHeight;
				}
				return clientHeight;
			}
			if (noCard) {
				return clientWidth;
			}
			return clientWidth;
		}
		// return "100%";
	}, [noCard, clientHeight, clientWidth]);

	return paperHeight;
};

export default usePaperHeight;
