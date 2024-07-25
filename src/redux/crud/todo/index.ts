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
    deleteTodo: build.mutation<TODO.deleteResponse, TODO.deleteRequest>({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    editTodo: build.mutation<TODO.EditResponse, TODO.EditRequest>({
      query: ({ _id, newData }) => ({
        url: `${_id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useEditTodoMutation,
  useGetTodoQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
} = apiTodo;
