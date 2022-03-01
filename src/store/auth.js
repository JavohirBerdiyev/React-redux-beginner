import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  showAuthendler: false,
};

const authSlice = createSlice({
  name: "authheadler",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.showAuthendler = true;
    },
    logout(state) {
      state.showAuthendler = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
