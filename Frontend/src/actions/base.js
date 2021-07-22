import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";




export const getAll = (endpoint) =>{
    return async(dispatch,getState) =>{

        const res = await fetchConToken(endpoint,{},'GET')
        console.log("Rest",res)
        const content = await res.json();
        const {items} = getState();
       
        console.log(content)
        dispatch({type:types.getAll,payload:content.result,currentState:items,field:endpoint})

        
    }
}

export const create = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'POST');
        console.log("RESPUESTA",res);
        const content = await res.json();

        const {items} = getState();
        console.log(getState())
        //dispatch(getAll(endpoint))
        dispatch({type:types.create,payload:content.result,currentState:items,field:endpoint})

    }
}



export const update = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,body,'PUT');
        const content = await res.json();

        const {items} = getState();
        //dispatch(getAll(endpoint))
        dispatch({type:types.update,payload:content.result,currentState:items,field:endpoint})
    }
}

export const remove = (endpoint,body)=>{
    return async(dispatch,getState) =>{
        const res = await fetchConToken(endpoint,{},'DELETE');
        console.log('RESPUEST DELETE' ,res);
        const content = await res.json();
        console.log('COENTNET',content.body);
        const {items} = getState();
        //dispatch(getAll(endpoint))
        dispatch({type:types.delete,payload:content.result,currentState:items,field:endpoint})
    }
 
}
