import {types} from "../types/types";
import {useSelector} from "react-redux"



export const getReducer = (state={}, action)=>{
    switch (action.type) {
        case types.getAll:
        
           console.log(action)
           return {
            ...action.currentState,  
            [action.field]:action.payload
            }
        
    

        default:
            return state;
    }
}