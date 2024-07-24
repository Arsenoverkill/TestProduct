import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { apiTodo } from "./crud";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [apiTodo.reducerPath]: apiTodo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, apiTodo.middleware),
});
