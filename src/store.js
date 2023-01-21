import {configureStore} from "@reduxjs/toolkit";
import {usersListSlice} from "./models/usersList/usersListSlice";
import {userItemSlice} from "./models/userItem/userItemSlice";

export const store = configureStore({
    reducer: {
        usersListInfo: usersListSlice.reducer,
        userInfo: userItemSlice.reducer
    }
})