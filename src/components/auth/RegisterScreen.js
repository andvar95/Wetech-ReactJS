import React from 'react';
import validator from 'validator';
import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import { useDispatch,useSelector} from "react-redux";
//import { setError,removeError} from "../../actions/ui"
import {startRegister} from "../../actions/auth"
import templateSocial from "../../helpers/templateSocial";

export const RegisterScreen = () => {

  const dispatch = useDispatch(); //dispatch actions
  console.log(templateSocial)

  //const {msgError} = useSelector(state=>state.ui)  //get redux state in every part  

  const [formValues, handleInputChange ]  = useForm({
    name:'andres',
    email:'andres@gmail.com',
    phone:"12313123",
    address:'Calle 1',
    password:'123456',
    password2:'123456',
    social:[
      { name: 'Website', description: '' },
      { name: 'Github', description: '' },
      { name: 'Twitter', description: '' },
      { name: 'Facebook', description: '' },
      { name: 'Instagram', description: '' },
  ]
  })

  const {name,email,address,phone,password,password2,social} = formValues;
  
  
  const handleRegister =(event) =>{
    event.preventDefault();
      console.log({name,email,address,phone,password,password2,social});
    if(isFormValid()) dispatch(startRegister({name,email,address,phone,password,social}
    ))
    

  }

  
  const isFormValid = ()=>{
    if(name.trim().length === 0){
      //dispatch(setError('Name is required'))
      return false
    }
    else if(!validator.isEmail(email)) {
      //dispatch(setError('Email is not valid'))
      return false
    }
    else if(password !== password2 || password.length <1) {
      //dispatch(setError('Password should be at least 6 characterers and match each other'))
      return false
    }

    //dispatch(removeError())
    return true;

  }

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
        placeholder="phone" 
        name="phone"
        className="auth__input"
        autoComplete ="off"
        value={phone}
        onChange = {handleInputChange}
        />

<input 
        type="text" 
        placeholder="address" 
        name="address"
        className="auth__input"
        autoComplete ="off"
        value={address}
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
