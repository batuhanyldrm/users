import { ADD_USER, DELETE_USER, FETCH_USERS, UPDATE_USER } from "../actions/types";

const Reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {...action.payload}
        case ADD_USER:
            return { ...state, ...action.payload };
        case DELETE_USER:
            return state.filter((item) => item.id !== action.payload)
        case UPDATE_USER:
            const updateUser = {...state}
            updateUser.map((item, index) => {
                if (action.payload.id == item.id) {
                    updateUser[index].firstName = action.payload.firstName
                    updateUser[index].lastName = action.payload.lastName
                    updateUser[index].email = action.payload.email
                    updateUser[index].phone = action.payload.phone
                    updateUser[index].domain = action.payload.domain
                    updateUser[index].company.name = action.payload.company.name
                }
            })
            return updateUser;
        default:
            return state
    }
};

export default Reducer;