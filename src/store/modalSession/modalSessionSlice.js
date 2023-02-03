import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalSessionOpen: false,
}

const modalSessionSlice = createSlice({
  name: 'modalSession',
  initialState: initialState,
  reducers: {
    setModalSessionOpen: (state) => {
      state.modalSessionOpen = true;
    },
    setModalSessionClose: (state) => {
      state.modalSessionOpen = false;
    }
  }
});

const { actions, reducer } = modalSessionSlice;

export const { setModalSessionOpen, setModalSessionClose } = actions;

export default reducer;