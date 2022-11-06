import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  userInfo: {},
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    settingAuthentication: (state, action) => {
      return { ...state, isAuthenticated: action.payload };
    },
    addingUserInformation: (state, action) => {
      return { ...state, userInfo: action.payload };
    },
  },
});

export const { settingAuthentication, addingUserInformation } =
  authSlice.actions;
export default authSlice.reducer;
