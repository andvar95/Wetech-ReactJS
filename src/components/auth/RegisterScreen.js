import React from 'react';
import validator from 'validator';
import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import { useDispatch,useSelector} from "react-redux";
//import { setError,removeError} from "../../actions/ui"
//∫import {startRegisterWithEmailPasswordName} from "../../actions/auth"


export const RegisterScreen = () => {

  //const dispatch = useDispatch(); //dispatch actions

  //const {msgError} = useSelector(state=>state.ui)  //get redux state in every part  

  const [formValues, handleInputChange ]  = useForm({
    name:'andres',
    email:'andres@gmail.com',
    password:'123456',
    password2:'123456'
  })

  const {name,email,password,password2} = formValues;
  
  
  const handleRegister =(event) =>{
    event.preventDefault();
    

  }

  /*
  const isFormValid = ()=>{
    if(name.trim().length === 0){
      dispatch(setError('Name is required'))
      return false
    }
    else if(!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    }
    else if(password !== password2 || password.length <5) {
      dispatch(setError('Password should be at least 6 characterers and match each other'))
      return false
    }

    dispatch(removeError())
    return true;

  }
*/
    return (
        <div>
             <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
   {/*
     msgError&&(
        <div className="auth__alert-error">
         {msgError}
        </div>)
*/
   }
      <input 
        type="text" 
        placeholder="name" 
        name="name"
        className="auth__input"
        autoComplete ="off"
        value={name}
        onChange = {handleInputChange}
        />
        <input 
        type="text" 
        placeholder="email" 
        name="email"
        className="auth__input"
        autoComplete ="off"
        value={email}
        onChange = {handleInputChange}
        />


        <input type="password" 
        placeholder="password" 
        name="password" 
        className="auth__input"
        value={password}
        onChange = {handleInputChange}
        />



        <input type="password" 
        placeholder="Confirm password" 
        name="password2" 
        className="auth__input"
        value={password2}
        onChange = {handleInputChange}
        />


        <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>

     
        
        <Link 
        className="link"
        to="/auth/login">Already register</Link>
      </form>
            
        </div>
    )
}
