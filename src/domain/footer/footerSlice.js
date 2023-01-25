import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "home",
};

const footerSlice = createSlice({
  name: "footer",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action) => {
      console.log("action.payload", action.payload);
      state.activeTab = action.payload;
    }
  }
});

const { actions, reducer } = footerSlice;

export const { setActiveTab } = actions;

export default reducer;