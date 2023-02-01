import HttpClient from "../../utils/httpClient";

export const paymentRepository = {
    createPayment,
};


async function createPayment(token, userId, value) {
    
    let _axios = new HttpClient({ api: true, authenticated: true, token: token }).instance;

    let body = {
        pixKey: "61995382149",
        value: value,
        userId: userId,
    }
    
    let ret = await _axios.post(`/create-payment`, body);
    
    return ret.data;
}