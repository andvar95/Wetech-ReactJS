import React from "react";
import { useDispatch,useSelector,useState} from "react-redux";
import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import { startLogin} from "../../actions/auth";


export const LoginScreen = ({history}) => {

  const dispatch = useDispatch()


  //const {loading} = useSelector(state=>state.ui) 
console.log(history);
  const [formValues, handleInputChange ]  = useForm({
    email:'andres@gmail.com',
    password:'123456'
  })

  const {email,password} = formValues;

  const handleLogin = (event) =>{
    event.preventDefault();
    history.replace('/');
    dispatch(startLogin(email,password))
  
  }
  

  return (
    <div>
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
