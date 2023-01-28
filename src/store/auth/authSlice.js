import { createSlice } from '@reduxjs/toolkit'
import { authRepository } from './authRepository';
import { createAsyncThunk } from '@reduxjs/toolkit';

//Slice

export const login = createAsyncThunk('login', async (data) => {
  console.log(data);
  const response = await authRepository.signIn(data);
  return response;
});

const initialState = {
  isAuthenticated: false,
  error: "",
  loading: false,
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
    setSignIn: (state, action) => {
    }, 
    setLoading(state, action) { 
      state.loading = action.payload;  
      console.log(state);    
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser.cpf = action.payload.cpf;
      state.currentUser.name = action.payload.name;
      state.currentUser.email = action.payload.email;
      state.tokenInfo.token = action.payload.token;
      state.tokenInfo.expireIn = action.payload.expireIn;
      state.isAuthenticated = true;
      state.loading = false;
      console.log("Estado: ", state);
    })
    builder.addCase(login.rejected, state => {
      state.loading = false;
      console.log("Estado: ", state);
    })
  }
})

const { actions, reducer } = authSlice

export const { setSignIn, setLoading } = actions

export default reducer










// const login = (email, password) => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//   const response = await authRepository.signIn(email, password);
//   dispatch(setSignIn(response.data));

//   } catch (error) {
//     dispatch(setError(error));
//   }
// }

// const login = createAsyncThunk(
//   'login',
//   async (email, password, thunkAPI) => {
//     const response = await authRepository.signIn(email, password);
//     return response.data
//   }
// )