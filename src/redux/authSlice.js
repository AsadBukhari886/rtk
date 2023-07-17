import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      console.log(state);
      // state.password=action.payload
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(useLoginMutation.fulfilled, (state, action) => {
  //     const user = action.payload.data;
  //     dispatch(setUser(user));
  //     console.log("login mutation completed");
  //   });
  // },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;

// export const selectUser = (state) => state.auth.user;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// export const selectLoading = (state) => state.auth.loading;
// export const selectError = (state) => state.auth.error;

// export const setUser = (user) => (dispatch) => {
//   // Perform any additional logic here if needed
//   dispatch(authSlice.actions.setUser(user));
// };
export const authReducer = authSlice.reducer;

// export default authReducer;
