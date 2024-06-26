import axios from 'axios';


const clientId = process.env.VUE_APP_CLIENT_ID;
const clientSecret = process.env.VUE_APP_CLIENT_SECRET;

// API URL para hacer oauth
const region = 'eu';
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
    const body = new FormData();
    body.append('grant_type', 'client_credentials');
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        auth: { username: clientId, password: clientSecret }
    }
    return axios.post(API_URL, body, config);
}

export { getToken };