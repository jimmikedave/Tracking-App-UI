import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// after  hours take the new URL from ngrok and replace baseURL
const instance = axios.create({
    baseURL: 'http://67eb03915106.ngrok.io'
});

// automatically adds token to each request
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;