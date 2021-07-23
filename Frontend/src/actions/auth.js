import {fetchSinToken, fetchConToken} from "../helpers/fetch";
import {types} from "../types/types";
import history from '../routers/history';




export const startLogin = (email,password) =>{

   
    return async(dispatch) =>{
        const res = await fetchSinToken('auth/login',{email,password},'POST')
        const body = await res.json()
        console.log(body)

        if(body.token) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('user',body.user);
        dispatch(checkAuth())
    }

    if(body.message){
        dispatch({type:types.authLogError,payload:{
            error:body.message
        }})
    }

    }
}


export const errorMessage=(error)=>{
    return (dispatch)=>{
        dispatch({type:types.authLogError,payload:{
        error:error
    }})}
}

export const logout = ()=>{
    localStorage.removeItem('token');
    
    return (
     {type:types.authIsAuth,
    payload:{
        token:''}}
)}
      

export const startRegister = ({name,email,address,phone,password,social}) =>{

    return async(dispatch)=>{
        const res = await fetchSinToken('auth/register',{name,email,address,phone,password,social},'POST')
        const body = await res.json()

        if(body) {localStorage.setItem('token',body.token)
        localStorage.setItem('user',body._id);
        dispatch(checkAuth())
      }

      if(body.message){
        dispatch({type:types.authLogError,payload:{
            error:body.message
        }})
    }


    }

}

export const checkInit=()=>({
    type:types.authIsAuth,
    payload:{
        checking:true
        }
})


export const checkAuth= () =>{

    if(localStorage.getItem('token')){
    return {type:types.authIsAuth,
    payload:{
        token:localStorage.getItem('token'),
        checking:false,
        error:''}
    }
    
    }
    else{
        return {type:types.authIsAuth,
            payload:{
                checking:false}
            }
    }
}


export const getRoleProject = () =>{
    return async(dispatch,getState)=>{
        const res = await fetchConToken('project/myrole/'+localStorage.getItem('currentProject'),{},'GET')
        const body = await res.json()

        
        localStorage.setItem('rolProject',body.result.rol)
        //dispatch({type:types.getRoleProject,payload:body.result.rol})
    }
  
  }


const login = (user) =>({
    type:types.authLogin,

})
