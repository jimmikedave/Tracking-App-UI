import axios from 'axios';

// after  hours take the new URL from ngrok and replace baseURL
export default axios.create({
    baseURL: 'http://adea1e80d1cb.ngrok.io'
});