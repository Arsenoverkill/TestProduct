import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<AUTHTODO.GetResponse, AUTHTODO.GetRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    Login: build.mutation<

      AUTHTODO.LoginPostResponse,
      AUTHTODO.LoginPostRequest
    >({
      query: (loginData) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["auth"],
    }),
    register: build.mutation<
      AUTHTODO.RegisterPostResponse,
      AUTHTODO.RegisterPostRequest
    >({
      query: (registerData) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: registerData,
      }),
      invalidatesTags: ["auth"],

    }),
  }),
});

export const { useGetMeQuery,useLoginMutation ,useRegisterMutation } = api;

