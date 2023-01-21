import {createSlice} from "@reduxjs/toolkit";

const initialUserItemState = {
    userItem: undefined
}

export const userItemSlice = createSlice({
    name: 'users-list',
    initialState: initialUserItemState,
    reducers: {
        setUserItem: (state, {payload}) => {
            state.userItem = payload
        },
        clearUserItemState: (state) => {
            state.userItem = undefined
        }
    }
})

export const {setUserItem, clearUserItemState} = userItemSlice.actions

export const userItemSelector = (state) => state.userInfo.userItem