import HttpClient from "../../utils/httpClient";

export const signUpRepository = {
  signUp,
};

async function signUp({ name, cpf, email, password, confirmPassword }) {
  let _axios = new HttpClient({ api: true, authenticated: false }).instance;

  let body = {
    name,
    cpf,
    email,
    password,
    confirmPassword,
  }

  let response = _axios.post('/create-user', body)

  return response;
}