import store from '../store/store'

export function getToken () {
    const currentState = store.getState().auth.tokenInfo.token;
    return currentState; 
}
