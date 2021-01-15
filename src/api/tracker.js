import axios from 'axios';

// after  hours take the new URL from ngrok and replace baseURL
export default axios.create({
    baseURL: 'http://16f027d99752.ngrok.io'
});