import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiConnect=createApi({
     reducerPath:'apiConnect',
     baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3500/'}),
     tagTypes:['Crud'],
     //Query-get Endpoints
     //Mutations -Post EndPoints
     endpoints:(build)=>({
          getData:build.query({   
          query: () => ({
               url: `/users`, // Add pagination parameters
               method: 'get',
               provideTags:['Crud']
             }),   
          }),
          addData:build.mutation({
            query: (user:any) => ({
              url:"/users",
              method:"POST",
              body:user   
        }),

           }),
     }),
})

export const {useGetDataQuery,useAddDataMutation}=apiConnect