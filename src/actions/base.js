import {fetchConToken} from "../helpers/fetch";
import {types} from "../types/types";


const keys = {
    project:'projects'
}


export const getAll = (endpoint) =>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,{},'GET')
        const content = await res.json()
        const field = keys[endpoint];
       

        const {items} = getState();
       
        console.log(items)
        dispatch({type:types.getAll,payload:content[field],currentState:items[field],field:endpoint})

        
    }
}

export const create = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'POST');
        const content = await res.json();

        const {items} = getState();
        dispatch({type:types.create,payload:content,currentState:items,field:endpoint})
    }
}

export const update = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'PUT');
        const content = await res.json();

        const {items} = getState();
        dispatch({type:types.update,payload:content,currentState:items,field:endpoint})
    }
}

export const remove = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'DELETE');
        const content = await res.json();

        const {items} = getState();
        dispatch({type:types.delete,payload:content,currentState:items,field:endpoint})
    }
}
