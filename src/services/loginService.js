import axios from "axios"

class LoginService{

    async login(data){
        return axios({
            url: 'http://192.168.8.13:4001/user-control/login',
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json',
            }
        }).then((response) => {
            console.log("Deu certo", response.data);
        }).catch((error) => {
            console.error(error)
        })
    }
}

const loginService = new LoginService()

export default loginService;