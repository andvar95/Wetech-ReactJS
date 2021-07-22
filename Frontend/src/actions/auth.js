import {fetchSinToken} from "../helpers/fetch";
import {types} from "../types/types";

export const startLogin = (email,password) =>{
    return async(dispatch) =>{
        const res = await fetchSinToken('auth/login',{email,password},'POST')
        const body = await res.json()

        if(body) {localStorage.setItem('token',body.token);
    localStorage.setItem('user',body.user);
    
    }
        dispatch(checkAuth())

    }
}
export const logout = ()=>{
    localStorage.removeItem('token');
    
    return (
     {type:types.authIsAuth,
    payload:{
        token:''}}
)}
      

export const startRegister = ({name,email,address,phone,password,social}) =>{

    return async()=>{
        const res = await fetchSinToken('auth/register',{name,email,address,phone,password,social},'POST')
        const body = await res.json()

        if(body) localStorage.setItem('token',body.token)


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
        checking:false}
    }
    
    }
    else{
        return {type:types.authIsAuth,
            payload:{
                checking:false}
            }
    }
}




const login = (user) =>({
    type:types.authLogin,

})
