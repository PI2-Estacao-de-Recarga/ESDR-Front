import HttpClient from "../../utils/httpClient";

export const authRepository = {
    signIn,
};

async function signIn({email,password}) {
    let _axios = new HttpClient({ api: true, authenticated: false }).instance;

    let body = {
        email, 
        password, 
    }

    let ret = await _axios.post('/login', body);

    return ret.data;
}