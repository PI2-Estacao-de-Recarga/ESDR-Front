import { createSlice } from '@reduxjs/toolkit'
import { signInRepository } from '../repositories/authRepository';

//Slice

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: "",
  access_token: "",
  currentUser:  {nome: 'Fulano',
  email: 'Fulano@email.com',
  cpf: '999.999.999-99',},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: "",
        currentUser: action.payload,
      };
    },
    setAccessToken(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: "",
        access_token: action.payload,
      };
    },
    setLoading(state, action) {
      return {
        ...state,
        error: "",
        loading: action.payload,
      };

    },
  },
})

const { actions, reducer } = authSlice

export const { setCurrentUser, setLoading } = actions

export default reducer

// Actions

 export const signIn = (username, password) => async dispratch => {
    try {
      const login = await signInRepository(username, password);
      // dispatch(setCurrentUser(login));
      console.log("oi", login);
    }
    catch (e) {
        return console.error(e.message);
    }
}