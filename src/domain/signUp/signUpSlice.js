import { createSlice } from '@reduxjs/toolkit'
import { signUpRepository } from './signUpRepository'

const initialState = {
  success: false,
  error: false,
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialState,
  reducers: {
    signUp: async (state, action) => {
      console.log('action.payload', action.payload)
      await signUpRepository.signUp(action.payload)
        .then(response => {
          console.log('response', response.data)
          state.success = true
        })
        .catch(error => {
          console.log('error', error)
          state.error = error;
        })
    }
  }
})

const { actions, reducer } = signUpSlice

export const { signUp } = actions

export default reducer