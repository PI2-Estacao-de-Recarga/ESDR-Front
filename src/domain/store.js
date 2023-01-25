import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import signUpReducer from './signUp/signUpSlice'
import footerReducer from './footer/footerSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    signUp: signUpReducer,
    footer: footerReducer,
  },
})