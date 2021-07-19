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
               state:false,
               token:action.payload.token,
           }
    
        default:
            return state;
    }
}