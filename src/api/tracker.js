import axios from 'axios';

// after  hours take the new URL from ngrok and replace baseURL
export default axios.create({
    baseURL: 'http://84f8481729f9.ngrok.io'
});