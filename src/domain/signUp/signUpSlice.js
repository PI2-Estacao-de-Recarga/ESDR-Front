import { createSlice } from '@reduxjs/toolkit'
import { signUpRepository } from './signUpRepository'

const initialState = {
  success: false,
  error: false,
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log('action.payload', action.payload)
    }
  }
})

const { actions, reducer } = signUpSlice

export const { signUp } = actions

export default reducer