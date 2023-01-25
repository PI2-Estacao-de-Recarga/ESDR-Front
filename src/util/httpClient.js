import store from '../domain/store';
import axios from 'axios';

export default class HttpClient {
  _axios;

  constructor(props) {
    if (props.config) {
      this._axios = axios.create(props.config);
    } else {
      if (props.api) {
        this._axios = axios.create({
          baseURL: 'http://192.168.56.1:4001/user-control',
          timeout: 5000,
          headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
          }
        });
        if ((props.authenticated) || (props.authenticated === undefined || props.authenticated == null))
          this._axios.defaults.headers.common['Authorization'] = `Bearer ${ store.getState().auth.access_token }`;
      } else {
        this._axios = axios.create({
          timeout: 3000,
        });
      }
    }
  }

  get instance() {
    return this._axios;
  }

}