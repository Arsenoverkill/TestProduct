import { apiTodo as index } from "..";

const apiTodo = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: build.mutation<TODO.PostResponse, TODO.PostRequest>({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = apiTodo;
