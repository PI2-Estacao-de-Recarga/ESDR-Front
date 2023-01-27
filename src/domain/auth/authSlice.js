import { createSlice } from '@reduxjs/toolkit'
import { authRepository } from '../repositories/authRepository';

//Slice

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: "",
  tokenInfo: {
    token: "",
    expireIn: "",
  },
  currentUser: {
    cpf: '',
    email: '',
    name: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setSignIn: async (state, action) => {
      state = {...state,
        loading: true,
      }
      await authRepository.signIn(action.payload)
    .then(response => { 
      state.currentUser = {...state.currentUser, 
        cpf: response.cpf,
        email: response.email,
        name: response.name,
      };
      state.tokenInfo = {...state.tokenInfo, 
        token: response.token,
        expireIn: response.expireIn,
      };
      state = {...state,
        isAuthenticated: true,
        loading:false
      }
    })
    .catch(error => {
      state = {...state,
        isAuthenticated: false,
        loading: false,
        error: error.response.data.error,
      }
    })
    console.log("Estado: ", state)
    }, 
  },
})

const { actions, reducer } = authSlice

export const { setSignIn } = actions

export default reducer

// // Actions

//  export const signIn = (username, password) => async dispatch => {
//     try {
//       const login = await authRepository.signIn(action.payload);
//       dispatch(setCurrentUser(login.data.cpf));
//       console.log("Deu certo", login.data);
//     }
//     catch (error) {
//         return console.error(error);
//     }
// }
