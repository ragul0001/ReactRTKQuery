import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiConnect=createApi({
     reducerPath:'apiConnect',
     baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500/'}),
     tagTypes:['Todos'],
     //Query-get Endpoints
     //Mutations -Post EndPoints
     endpoints:(build)=>({
          getData:build.query({
          //   query: ({ page = 1, limit = 10 }) => ({
          //       url: `todos?_page=${page}&_limit=${limit}`, // Add pagination parameters
          //       method: 'get',
          //     }),
          query: () => ({
               url: `/todos`, // Add pagination parameters
               method: 'get',
               provideTags:['Todos']
             }),
             
          }),
          addTodo:build.mutation({
                query:(todo)=>({
                     url: "/todos",
                     method:'POST',
                     body:todo,
                  
                }),
                invalidatesTags:['Todos']
          }),
          updateTodo:build.mutation({
               query:(todo)=>({
                    url: `/todos/${todo.id}`,
                    method:'PATCH',
                    body:todo
               }),
               invalidatesTags:['Todos']
         }),
         deleteTodo:build.mutation({
          query:({id})=>({
               url: `/todos/${id}`,
               method:'DELETE',
               body:id
          }),
          invalidatesTags:['Todos']
          }),

     }),
})

export const {useGetDataQuery,useAddTodoMutation,useUpdateTodoMutation,useDeleteTodoMutation}=apiConnect