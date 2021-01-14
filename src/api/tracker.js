import axios from 'axios';

// after  hours take the new URL from ngrok and replace baseURL
export default axios.create({
    baseURL: 'http://2322423e92fb.ngrok.io'
});