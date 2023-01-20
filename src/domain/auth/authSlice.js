import { createSlice } from '@reduxjs/toolkit'

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