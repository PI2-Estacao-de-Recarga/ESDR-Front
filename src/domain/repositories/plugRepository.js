import HttpClient from "../../utils/httpClient";

export const plugRepository= {
    setPlug,
    getPlug,
};

async function setPlug(token, userId, timeAmount, name) {
    let _axios = new HttpClient({ api: true, authenticated: true, token: token }).instance;

    let body = {
        name: name,
	    timeAmount: timeAmount,
        userId: userId,
    }
    
    let ret = await _axios.post(`set-plug`, body);
    
    return ret.data;
}

async function getPlug(token, userId = "", inUse = true) {
    let _axios = new HttpClient({ api: true, authenticated: true, token: token }).instance;

    let ret = await _axios.get(`/get-plugs?inUse=${inUse}&userId=${userId}`);

    // ?inUse=${inUse}&userId=${userId}`);
    return ret.data;
}

