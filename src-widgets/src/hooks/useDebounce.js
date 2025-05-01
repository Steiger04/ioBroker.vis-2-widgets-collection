import { useContext, useEffect, useState } from "react";
import { Subject, debounceTime, throttleTime } from "rxjs";
import { CollectionContext } from "../components/CollectionProvider";

function useDebounce({
	oidObject,
	data: { sampleInterval, sampleIntervalValue, delay },
}) {
	const { setValue } = useContext(CollectionContext);
	const [delayDuration] = useState(() => new Subject());

	const _delay = sampleInterval ? Number(sampleIntervalValue) : Number(delay);
	const oid = oidObject?._id;

	useEffect(() => {
		// console.log("useDebounce -> useEffect");

		const delayDurationSubscription = delayDuration
			.pipe(
				sampleInterval
					? throttleTime(_delay, undefined, { leading: true, trailing: true })
					: debounceTime(_delay),
			)
			.subscribe((value) => setValue(oid, value));

		return () => {
			// console.log("useDebounce -> useEffect -> return");
			return delayDurationSubscription.unsubscribe();
		};
	}, [sampleInterval, _delay, oid, setValue, delayDuration]);

	return delayDuration;
}

export default useDebounce;
