/*import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk("auth/fetchUserData", async (token) => {
  try {
    // Decode the token to get email
    const decoded = jwtDecode(token);
    console.log("Decoded Token Data:", decoded);

    const email = decoded.email;

    // Send request to get user data
    const response = await axios.post("http://localhost:3000/user/getUser", { email });
    console.log("User Data Response:", response.data); // Log server response

    return response.data; // Return user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    isAdmin: false,
    userData: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isLogged = true;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.isLogged = false;
      state.isAdmin = false;
      localStorage.removeItem("token");
    },
    userData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLogged = true;
      state.isAdmin = action.payload.isAdmin;
    });
  },
});

// Extract action and reducer
export const { setUser,logout,userData } = authSlice.actions;
export const authReducer = authSlice.reducer;

// Create Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Get token from localStorage and fetch user data
const token = localStorage.getItem("token");
if (token) {
  console.log("Token from localStorage:", token);
  store.dispatch(fetchUserData(token)); // Dispatch fetchUserData with token
}

export default store;
*/
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

// Async thunk to fetch user data
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

// Auth Slice
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
      state.userData = null; // Reset userData on logout
    
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLogged = true;
      state.isAdmin = action.payload.isAdmin;
      state.userData = action.payload; // Store full user data
    });
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

// Create Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Auto-fetch user data from token
const token = localStorage.getItem("token");
if (token) {
  console.log("Token from localStorage:", token);
  store.dispatch(fetchUserData(token));
}

export default  store ;
