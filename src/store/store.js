import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice'
import signUpReducer from './signUp/signUpSlice'
import footerReducer from './footer/footerSlice'
import modalSessionReducer from './modalSession/modalSessionSlice'
import reducer from './auth/authSlice';

const combinedReducer = combineReducers({
  auth: reducer,
  user: userReducer,
  signUp: signUpReducer,
  footer: footerReducer,
  modalSession: modalSessionReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined
  }

  return combinedReducer(state, action)
}

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

})

export default store;