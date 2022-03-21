
const dev = true;
const test = false;
const prod =false;

let api_url;
let react_url;

if(dev){
    api_url = 'http://127.0.0.1:8000';
    react_url = 'http://localhost:3000';
}

if(prod){
    api_url = 'https://vicsr-api-test.herokuapp.com';
    react_url = 'http://vicsr.herokuapp.com';
}

export const API_URL = api_url, REACT_URL = react_url;