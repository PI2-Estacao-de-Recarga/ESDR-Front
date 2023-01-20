import HttpClient from "../../utils/httpClient";

export const authRepository = {
    signIn,
};

async function signIn(username, password) {
    let _axios = new HttpClient({ api: true, authenticated: false }).instance;

    let body = {
        "username": username,
        "password": password,
    }

    let ret = await _axios.post('/login', body);

    // let ssoDTO: SsoDTO = SsoDTO.fromObject(ret.data);

    return ret;
}