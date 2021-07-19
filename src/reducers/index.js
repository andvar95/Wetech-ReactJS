import {combineReducers} from "redux";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    auth:authReducer
    //My Reduecers
    //TODO: Auth, Board, Team, 
})