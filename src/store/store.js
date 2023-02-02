import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice'
import signUpReducer from './signUp/signUpSlice'
import footerReducer from './footer/footerSlice'
import modalSessionReducer from './modalSession/modalSessionSlice'
import reducer from './auth/authSlice';

 const store = configureStore({
  reducer: {
    auth: reducer,
    user: userReducer,
    signUp: signUpReducer,
    footer: footerReducer,
    modalSession: modalSessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

})

export default store;