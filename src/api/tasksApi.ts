import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../features/tasks/tasksTypes";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    fetchTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation<Task, Partial<Task>>({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation<Task, Partial<Task>>({
      query: ({ id, ...patch }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation<{ id: string }, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useFetchTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
