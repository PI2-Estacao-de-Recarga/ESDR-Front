import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signUpRepository } from './signUpRepository'

export const signUpThunk = createAsyncThunk('signUp', async (data) => {
  console.log("data: ", data);
  const response = await signUpRepository.signUp(data);
  return response;
});

const initialState = {
  success: false,
  error: false,
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => {
      state.loading = true
    })
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      state.success = true;
      state.loading = false;
    })
    builder.addCase(signUpThunk.rejected, state => {
      state.error = true;
      state.loading = false;
    })
  }
})

const { actions, reducer } = signUpSlice

export const { signUp } = actions

export default reducer