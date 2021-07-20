import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {getReducer} from "./baseReducer"

export const rootReducer = combineReducers({
    auth:authReducer,
    items:getReducer
    //My Reduecers
    //TODO: Auth, Board, Team, 
})