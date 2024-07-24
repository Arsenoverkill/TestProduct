import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<AUTHTODO.GetResponse, AUTHTODO.GetRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    postTodo: build.mutation<
      AUTHTODO.LoginPostResponse,
      AUTHTODO.LoginPostRequest
    >({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = api;
