import { configureStore } from "@reduxjs/toolkit";
import { apiConnect } from "../Apiconnections/Service";

export const store=configureStore({
      reducer:{
        [apiConnect.reducerPath]:apiConnect.reducer,
      },
     middleware:(getDefaultMiddleware)=>
          getDefaultMiddleware().concat(apiConnect.middleware),
     
})