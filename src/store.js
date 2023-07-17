import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { setupListeners } from "@reduxjs/toolkit/query";
import api from "./api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authReducer } from "./redux/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
