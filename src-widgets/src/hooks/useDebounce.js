import { useContext, useEffect, useRef } from "react";
import { Subject, debounceTime, throttleTime } from "rxjs";
import { CollectionContext } from "../components/CollectionProvider";

function useDebounce({
	value,
	data: { sampleInterval, sampleIntervalValue, delay },
}) {
	const { setValue, oidObject } = useContext(CollectionContext);

	const _delay = sampleInterval ? sampleIntervalValue : delay;

	const oid = oidObject?._id;

	const delayDuration = useRef(null);

	useEffect(() => {
		delayDuration.current = new Subject();

		const delayDurationSubscription = delayDuration.current
			.pipe(sampleInterval ? throttleTime(_delay) : debounceTime(_delay))
			.subscribe((value) => setValue(oid, value));

		return () => {
			delayDurationSubscription.unsubscribe();
		};
	}, [sampleInterval, _delay, oid, setValue]);

	useEffect(() => {
		if (delayDuration.current) {
			delayDuration.current.next(value);
		}
	}, [value]);
}

export default useDebounce;
