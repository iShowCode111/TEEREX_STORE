import { configureStore } from "@reduxjs/toolkit"; 
import { tshirtApiReducer , tshirtApiReducerPath , tshirtApiMiddleware} from "./tshirtSlice"
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer:{
        [tshirtApiReducerPath] : tshirtApiReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tshirtApiMiddleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;