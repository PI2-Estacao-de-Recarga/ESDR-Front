import HttpClient from "../../utils/httpClient";

export const authRepository = {
    signIn,
    getUser,
};

async function signIn({email,password}) {
    let _axios = new HttpClient({ api: true, authenticated: false }).instance;

    let body = {
        email, 
        password, 
    }
    
    let ret = _axios.post('/login', body);

    return ret;
}

async function getUser(token, userId) {
    let _axios = new HttpClient({ api: true, authenticated: true, token: token }).instance;
    
    let ret = await _axios.get(`/get-user?userId=${userId}`);
    
    return ret.data;
}