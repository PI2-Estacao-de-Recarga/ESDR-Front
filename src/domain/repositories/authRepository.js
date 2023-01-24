import HttpClient from "../../utils/httpClient";
import axios from 'axios';


export const authRepository = {
    signIn,
};

async function signIn(username, password) {
    let _axios = new HttpClient({ api: true, authenticated: false }).instance;

    let body = {
        "username": username,
        "password": password,
    }
    
    console.log("ola", _axios);

    let ret = await _axios.post('/login', body);

    


    return ret;
}