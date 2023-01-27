import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import signUpReducer from './signUp/signUpSlice'
import footerReducer from './footer/footerSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    signUp: signUpReducer,
    footer: footerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})