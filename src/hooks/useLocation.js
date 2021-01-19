import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [ err, setErr ] = useState(null);

    // putting should track in the array or a value in [] tells react to run
    // each time [shouldTrack] changes
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
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

        if(shouldTrack) {
            startWatching();
        } else {
            if(subscriber) {
                //stop watching
                subscriber.remove();
            } 
            subscriber = null;
        }

        return () => {
            if(subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]); // new value callback only if state.recording changes

    return [err]
};