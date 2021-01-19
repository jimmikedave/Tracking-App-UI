import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
// shows apple maps for ios, google for android
// polyline - creates lines on the map
import MapView, { Polyline } from 'react-native-maps'; 
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
   
    return <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: .01,
                longitudeDelta: .01
            }}
            region={{ // updates the map with current location
                ...currentLocation.coords,
                latitudeDelta: .01,
                longitudeDelta: .01 
            }}
        >
        </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;