import { getUsers, removeUser } from "../api/userApi"
import { ADD_USER, DELETE_USER, FETCH_USERS, UPDATE_USER } from "./types"

export const fetchUsers = () => async (
    dispatch
) => {
    const resp = await getUsers()
        dispatch({
            type: FETCH_USERS,
            payload: resp.data
        })
    
}

export const addUser = (data) => async (
    dispatch
) => {
    dispatch({
        type: ADD_USER,
        payload: data
    })
}

export const deleteUser = (id) => async (
    dispatch
) => {
    const resp = await removeUser(id)
        dispatch({
            type: DELETE_USER,
            payload: id
        })
}

export const updateUser = (data) => async (
    dispatch
) => {
    dispatch({
        type: UPDATE_USER,
        payload: data
    })
}