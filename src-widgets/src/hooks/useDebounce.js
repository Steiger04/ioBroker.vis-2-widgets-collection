import { useContext, useEffect, useRef } from "react";
import { Subject, debounceTime, throttleTime } from "rxjs";
import { CollectionContext } from "../components/CollectionProvider";

function useDebounce({ value, sampleInterval, data }) {
	const { setValue, oidObject } = useContext(CollectionContext);

	const delay = data.sampleInterval ? data.sampleIntervalValue : data.delay;

	const oid = oidObject?._id;

	const delayDuration = useRef(null);

	useEffect(() => {
		delayDuration.current = new Subject();

		const delayDurationSubscription = delayDuration.current
			.pipe(sampleInterval ? throttleTime(delay) : debounceTime(delay))
			.subscribe((value) => setValue(oid, value));

		return () => {
			delayDurationSubscription.unsubscribe();
		};
	}, [sampleInterval, delay, oid, setValue]);

	useEffect(() => {
		if (delayDuration.current) {
			delayDuration.current.next(value);
		}
	}, [value]);
}

export default useDebounce;
