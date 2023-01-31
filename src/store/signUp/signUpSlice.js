import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signUpRepository } from './signUpRepository'

export const signUpThunk = createAsyncThunk('signUp', async (data, {rejectWithValue}) => {
  console.log("data: ", data);
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
    
  },
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => {
    })
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      state.success = true;
    })
    builder.addCase(signUpThunk.rejected, (state, action) => {
      state.error = true;
      console.log("action.payload: ", action.payload);
      state.errorMessage = action.payload;
    })
  }
})

const { actions, reducer } = signUpSlice

export const { signUp } = actions

export default reducer