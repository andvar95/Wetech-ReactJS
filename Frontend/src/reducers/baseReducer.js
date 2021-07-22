import {types} from "../types/types";



export const getReducer = (state={}, action)=>{
    switch (action.type) {
        case types.getAll:
           return {
            ...action.currentState,  
            [action.field]:action.payload
            }
        
        case types.create:
            if(!action.currentState[action.field]) action.currentState[action.field] = []
            const tempVar =  action.currentState[action.field]
            if (Object.keys(tempVar).includes("To-Do")) {
                console.log(tempVar);
                action.currentState[action.field] = tempVar
                const create = action.currentState
                return create;
            } else {
                console.log(tempVar);
                tempVar.push(action.payload)
                action.currentState[action.field] = tempVar
                const create = action.currentState
                return create
            }

        case types.update:
            if(!action.currentState[action.field]) action.currentState[action.field] = []
            let tempUpdate =  action.currentState[action.field]
            console.log(tempUpdate)
            console.log(action)
            tempUpdate = tempUpdate.map((data) => (data._id === action.payload._id ? action.payload : data))
            action.currentState[action.field] = tempUpdate
            const update = action.currentState
            return update

        case types.delete:
            if(!action.currentState[action.field]) action.currentState[action.field] = []
            let tempDelete =  action.currentState[action.field]
            tempDelete = tempDelete.filter((data) => data._id !== action.payload._id)
            action.currentState[action.field] = tempDelete
            const remove = action.currentState
            console.log(remove)
            return remove


        default:
            return state;
    }
}