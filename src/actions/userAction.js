import { getUsers } from "../api/userApi"
import { FETCH_USERS } from "./types"

export const fetchUsers = () => async (
    dispatch
) => {
    const resp = await getUsers()
        dispatch({
            type: FETCH_USERS,
            payload: resp.data
        })
    
}