import { useContext, useEffect, useRef } from 'react';
import { Subject, debounceTime, throttleTime } from 'rxjs';
import { CollectionContext } from '../components/CollectionProvider';

function useDebounce({ oidObject, data: { sampleInterval, sampleIntervalValue, delay } }) {
    const { setValue } = useContext(CollectionContext);
    const delayDurationRef = useRef(new Subject());

    const _delay = sampleInterval ? Number(sampleIntervalValue) : Number(delay);
    const oid = oidObject?._id;

    useEffect(() => {
        if (!oid) return;

        const delayDurationSubscription = delayDurationRef.current
            .pipe(
                sampleInterval
                    ? throttleTime(_delay, undefined, { leading: false, trailing: true })
                    : debounceTime(_delay),
            )
            .subscribe(value => {
                /* console.log(
					`useDebounce -> delayDuration -> oid, value: ${oid}. ${value}`,
				); */
                setValue(oid, value);
            });

        return () => {
            return delayDurationSubscription.unsubscribe();
        };
    }, [oid, setValue, sampleInterval, _delay]);

    return delayDurationRef.current;
}

export default useDebounce;
