import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<AUTHTODO.GetResponse, AUTHTODO.GetRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    postLogin: build.mutation<
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

export const { useGetUserQuery, usePostLoginMutation } = api;
