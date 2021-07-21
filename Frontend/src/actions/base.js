import {fetchConToken} from "../helpers/fetch";
import {types} from "../types/types";


const keys = {
    project:'projects',
    users:'result'
}


export const getAll = (endpoint) =>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,{},'GET')
        console.log("Rest",res)
        const content = await res.json();
        const {items} = getState();
       
        console.log("CONTENT",content)
        dispatch({type:types.getAll,payload:content.result,currentState:items,field:endpoint})

        
    }
}

export const create = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'POST');
        console.log("RESPUESTA",res);
        const content = await res.json();

        const {items} = getState(endpoint);
        dispatch(getAll(endpoint))
    }
}

export const update = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'PUT');
        const content = await res.json();

        const {items} = getState();
        dispatch(getAll(endpoint))
    }
}

export const remove = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,{},'DELETE');
        const content = await res.json();
        const {items} = getState();
        dispatch(getAll(endpoint))
    }
}
