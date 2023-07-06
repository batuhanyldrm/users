import {combineReducers} from "redux";
import Reducer from "./userReducer";

const reducers = combineReducers({
    users: Reducer
});

export default reducers;