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
          contact:build.query({
               query: (id:any) => ({
                    url: `/users/${id}`, // Add pagination parameters
                    method: 'get',
                    provideTags:['Crud']
                  }), 
          }),
          addData:build.mutation({
            query: (user:any) => ({
              url:"/users",
              method:"POST",
              body:user,           
                }),
               invalidatesTags:['Crud']            
           }),
           deleteData:build.mutation({
               query: (id:any) => ({
                    url:`/users/${id}`,
                    method:"DELETE",                      
                }),
               invalidatesTags:['Crud'] 
          }),
                  // Inside apiConnect definition
          updateData:build.mutation({
               query: ({ id, ...userData }) => ({
               url: `/users/${id}`,
               method: "PUT",
               body: userData,
               }),
               invalidatesTags: ["Crud"],
          }),    
     }),
  
   
})

export const {useGetDataQuery,useContactQuery,useAddDataMutation,useDeleteDataMutation,useUpdateDataMutation}=apiConnect