import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

// tricks expo location that we are moving
const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            alititudeAccuracy: 5,
            altitude: 5,
            longitude: -73.95415093756648 + increment * tenMetersWithDegrees,
            latitude: 40.669899936803304 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++
}, 1000);