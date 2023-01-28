import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

})