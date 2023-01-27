import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import authReducer from './auth/authSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

})