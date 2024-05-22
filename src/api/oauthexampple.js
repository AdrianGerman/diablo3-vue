import axios from 'axios';

// Aqui deberas poner tu información del cliente, ya que es privada este solo es un archivo de ejemplo.
const clientId = 'clientId';
const clientSecret = 'clientSecret';

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