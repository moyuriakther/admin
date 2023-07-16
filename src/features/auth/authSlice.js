import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    adminLoggedIn: (state, action) => {
      // console.log(action);
      state.token = action?.payload?.user?.token;
      state.user = action?.payload?.user;
    },
    adminLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
  },
});

export const { adminLoggedIn, adminLoggedOut } = authSlice.actions;
export default authSlice.reducer;
