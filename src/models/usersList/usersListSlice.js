import {createSlice} from "@reduxjs/toolkit";

const initialUsersListState = {
    usersList: []
}

export const usersListSlice = createSlice({
    name: 'users-list',
    initialState: initialUsersListState,
    reducers: {
        setDefaultUsersList: (state, {payload}) => {
            state.usersList = payload
        },
        expandUsersList: (state, {payload}) => {
            state.usersList = [...state.usersList, ...payload]
        },
        clearUsersListState: (state) => {
            state.usersList = []
        }
    }
})

export const {setDefaultUsersList, expandUsersList, clearUsersListState} = usersListSlice.actions

export const usersListSelector = (state) => state.usersListInfo.usersList