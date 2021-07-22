import {types} from "../types/types";

const initialState = {
    checking:true,
    token:''
}



export const authReducer = (state=initialState, action)=>{
    switch (action.type) {
        case types.authIsAuth:
           return {
               ...state,
               checking:action.payload.checking,
               token:action.payload.token,
           }
    
        default:
            return state;
    }
}