import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slice/userSlice";
export var store = configureStore({
    reducer: {
        user:userSlice
    }
})