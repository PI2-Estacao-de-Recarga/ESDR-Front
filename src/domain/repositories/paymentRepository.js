import HttpClient from "../../utils/httpClient";

export const paymentRepository = {
    createPayment,
    createOperation,
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

async function createOperation(token, userId, operationType, creditAmount){
    let _axios = new HttpClient({ api: true, authenticated: true, token: token }).instance;
    let body = {};

    if(operationType == "COMPRA"){
        body = {
            operationType: operationType,
            userId: userId,
            creditAmount: creditAmount,
        }
    } else if (operationType == "USO") {
        body = {
            operationType: operationType,
            creditAmount: creditAmount,
            userId: userId, 
        }
    }
      
    let ret = await _axios.post(`/create-operation`, body);
    
    return ret.data;
}