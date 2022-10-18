



import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "teacher",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    tloginStart: (state) => {
      state.isFetching = true;
    },
    tloginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    tloginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    tlogout: (state) => {
      state.currentUser = null;
    },
   
  },
});

export const { tloginStart, tloginSuccess, tloginFailure, tlogout } = userSlice.actions;
export default userSlice.reducer;