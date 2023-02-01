import HttpClient from "../../utils/httpClient";

export const plugRepository= {
    setPlug,
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

