import {types} from "../types/types";

const initialState = {
    roleProject:'',
   
}



export const roleReducer = (state=initialState, action)=>{
    switch (action.type) {

        case types.getRoleProject:
            return{
                ...state,
                roleProject:action.payload
            }
    
        default:
            return state;
    }
}