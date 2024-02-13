import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiConnect=createApi({
     reducerPath:'apiConnect',
     baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
     //Query-get Endpoints
     //Mutations -Post EndPoints
     endpoints:(build)=>({
          getData:build.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `todos?_page=${page}&_limit=${limit}`, // Add pagination parameters
                method: 'get',
              }),
          }),
     }),
})

export const {useGetDataQuery}=apiConnect