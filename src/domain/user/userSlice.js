import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nome: 'Fulano',
  email: 'Fulano@email.com',
  telefone: '999999999',
  cpf: '999.999.999-99',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserProfile (state) {
      return state
    },
    updateUser: (state, action) => {
      state = action.payload

      return state
    },
  },
})

const { actions, reducer } = userSlice

export const { getUserProfile, updateUser } = actions

export default reducer