import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signUpRepository } from './signUpRepository'

export const signUpThunk = createAsyncThunk('signUp', async (data, {rejectWithValue}) => {
  const response = await signUpRepository.signUp(data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return rejectWithValue(error.response.data.error);
    });
  return response;
});

const initialState = {
  success: false,
  error: false,
  errorMessage: '',
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.error;
      state.errorMessage = action.payload.errorMessage;
    }
  },
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => {
    })
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      state.success = true;
      state.error = false;
      state.errorMessage = '';
    })
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    })
  }
})

const { actions, reducer } = signUpSlice

export const { signUp, setError } = actions

export default reducer