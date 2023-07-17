// // login user
// export const loginApi = async (credentials) => {
//   const response = await fetch("/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });

//   if (!response.ok) {
//     throw new Error("Login failed");
//   }

//   return response.json();
// };

// // Get User Data
// export const getUserApi = async () => {
//   const response = await fetch("/api/user", {
//     headers: {
//       Authorization: "Bearer yourAccessToken", // Replace with your actual access token or authentication header
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch user data");
//   }

//   return response.json();
// };

// // Register New user

// export const registerUserApi = async (userData) => {
//   const response = await fetch("/api/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to register user");
//   }

//   return response.json();
// };

// redux toolkit

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { authSlice } from "./redux/authSlice";
import authReducer from "./redux/authSlice";
import { setUser } from "./redux/authSlice";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ashanti.up.railway.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log("Error:", error);
        }
      },

      // async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data: updatedUser } = await queryFulfilled;
      //     const patchResult = dispatch(
      //       api.util.updateQueryData("getPost", id, (draft) => {
      //         Object.assign(draft, updatedUser);
      //       })
      //     );
      //     setUser(updatedUser);
      //   } catch {
      //     console.log("Error in updating the user");
      //   }
      // },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    getUser: builder.query({
      query: () => "",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } = api;

export default api;
