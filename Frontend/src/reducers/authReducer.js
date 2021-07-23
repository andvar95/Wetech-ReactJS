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
               error:action.payload.error
        
           }
        
        case types.authLogError:
            return{
                ...state,
                error:action.payload.error
            }
        case types.getRoleProject:
            return{
                ...state,
                roleProject:action.payload
            }
    
        default:
            return state;
    }
}