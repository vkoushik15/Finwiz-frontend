
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async (token) => {
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded Token Data:", decoded);

    const response = await axios.post("http://localhost:3000/user/getUser", {
      email: decoded.email,
    });

    console.log("User Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    isAdmin: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.isAdmin = action.payload.isAdmin;
      
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.isLogged = false;
      state.isAdmin = false;
      state.userData = null; 
    
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLogged = true;
      state.isAdmin = action.payload.isAdmin;
      state.userData = action.payload; 
    });
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;


const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const token = localStorage.getItem("token");
if (token) {
  console.log("Token from localStorage:", token);
  store.dispatch(fetchUserData(token));
}

export default  store ;
