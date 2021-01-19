import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [ err, setErr ] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, //update every second
                distance: 10, //update every 10 meters
            }, 
            callback
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e)
        }
    };

    // putting should track in the array or a value in [] tells react to run
    // each time [shouldTrack] changes
    useEffect(() => {
        if(shouldTrack) {
            startWatching();
        } else {
            //stop watching
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]); 

    return [err]
};