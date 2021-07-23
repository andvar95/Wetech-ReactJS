import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {getReducer} from "./baseReducer"
import { roleReducer} from "./projectReducer"

export const rootReducer = combineReducers({
    auth:authReducer,
    items:getReducer,
    project:roleReducer,
    //My Reduecers
    //TODO: Auth, Board, Team, 
})