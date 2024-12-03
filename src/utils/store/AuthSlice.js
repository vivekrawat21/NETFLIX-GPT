import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(Cookies.get("user") || "null"),
    token: Cookies.get("token") || null, 
  },
  reducers: {
    setUser: (state, action) => {
      Cookies.set("user", JSON.stringify(action.payload)); // Save user to cookies
      state.user = action.payload;
    },
    setToken: (state, action) => {
      Cookies.set("token", action.payload, { secure: true, sameSite: "Strict" }); // Save token to cookies
      state.token = action.payload;
    },
    setLogout: (state) => {
      Cookies.remove("user"); // Remove user from cookies
    
      Cookies.remove("token"); // Remove token from cookies
     
    
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, setLogout } = authSlice.actions;
export default authSlice.reducer;
