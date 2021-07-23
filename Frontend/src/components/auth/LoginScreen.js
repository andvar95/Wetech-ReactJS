import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import { startLogin,errorMessage} from "../../actions/auth";


export const LoginScreen = ({history}) => {

  const dispatch = useDispatch()
  const {token,error} = useSelector(state=>state.auth)


  if(error){
    console.log(error);
    setTimeout(()=>{
      console.log("terminar error");
      dispatch(errorMessage(''))

    },6000)

  }

  const [formValues, handleInputChange ]  = useForm({
    email:'',
    password:''
  })

  const {email,password} = formValues;

 

  const handleLogin = (event) =>{
    event.preventDefault();
    dispatch(startLogin(email,password))   
    history.push("/home/projects")
  
  }

  if(token)history.push("/home/projects")

  

  return (
    <div>
      {error&&<div className="text-error">
         Email or password invalid
        </div>}
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input 
        type="text" 
        placeholder="email" 
        name="email"
        className="auth__input"
        autoComplete ="off"
        value={email}
        onChange={handleInputChange}
        />
        <input type="password" 
        placeholder="password" 
        name="password" 
        className="auth__input"
        value={password}
        onChange={handleInputChange}
        />
        <button 
        className="btn btn-primary btn-block" 
        type="submit">Login</button>
        <Link 
        className="link"
        to="/auth/register">Create new account</Link>
      </form>
    </div>
  );
};
