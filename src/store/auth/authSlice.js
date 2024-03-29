import { createSlice } from '@reduxjs/toolkit'
import { authRepository } from './authRepository';
import { createAsyncThunk } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
//Slice

export const login = createAsyncThunk('login', async (data, { rejectWithValue }) => {
  const response = await authRepository.signIn(data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return rejectWithValue(error.response.data.error);
    });
  return response;
});

const initialState = {
  isAuthenticated: false,
  error: false,
  errorMessage: '',
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
    setError: (state, action) => {
      state.error = action.payload.error;
      state.errorMessage = action.payload.errorMessage;
    },
    logout: (state) => {
      state = initialState;
      console.log("Logout: ", state);
    }
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
      state.tokenInfo.expireIn = jwt_decode(action.payload.token).exp;
      state.error = false;
      state.errorMessage = '';
      state.isAuthenticated = true;
      state.loading = false;
      
      console.log("Estado: ", state);
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    })
  }
})

const { actions, reducer } = authSlice

export const { setSignIn, setLoading, setError, logout } = actions

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