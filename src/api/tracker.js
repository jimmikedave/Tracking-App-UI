import axios from 'axios';

// after 8 hours take the new URL from ngrok and replace baseURL
export default axios.create({
    baseURL: 'http://73a0ea70fcd9.ngrok.io'
});