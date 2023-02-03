import store from '../store/store'

export function getToken () {
    const currentState = store.getState().root.auth.tokenInfo.token;
    return currentState; 
}
