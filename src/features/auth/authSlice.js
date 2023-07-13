import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
  role: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    adminLoggedIn: (state, action) => {
      // console.log(action);
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.role = action.payload.user.isAdmin;
    },
    adminLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.role = undefined;
    },
  },
});

export const { adminLoggedIn, adminLoggedOut } = authSlice.actions;
export default authSlice.reducer;
