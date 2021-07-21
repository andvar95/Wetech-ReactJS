import {types} from "../types/types";



export const getReducer = (state={}, action)=>{
    switch (action.type) {
        case types.getAll:
           return {
            ...action.currentState,  
            [action.field]:action.payload
            }
        
        case types.create:
            console.log("entre")
            const  output =  {
                ...action.currentState,  
                [action.field]:[...[action.currentState[action.field]], action.payload]
            }
            console.log(output)
            return output
        
    

        default:
            return state;
    }
}