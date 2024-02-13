import { configureStore } from "@reduxjs/toolkit";
import { apiConnect } from "../serviceApi/Api";

export const store=configureStore({
      reducer:{
        [apiConnect.reducerPath]:apiConnect.reducer,
      },
     middleware:(getDefaultMiddleware)=>
          getDefaultMiddleware().concat(apiConnect.middleware),
     
})