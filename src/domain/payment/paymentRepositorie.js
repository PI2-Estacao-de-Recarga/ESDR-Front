import HttpClient from "../../util/httpClient";

export const PaymentRepository = {
  getStatement,
}

async function getStatement() {
  let _axios = new HttpClient({ api: true, authenticated: true }).instance;

  let response = _axios.get('/payment/statement')

  return response;
}