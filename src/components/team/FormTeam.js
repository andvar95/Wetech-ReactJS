import React from 'react'
import {useForm} from "../../hooks/useForm";

export const  FormTeam =({onClose=(modal)=>modal}) => {


    const [formValues, handleInputChange ]  = useForm({
        name:'Your Team Name',
        description:'Write down about your team'
      })

      const {name,description} = formValues;

      const handleCreateTeam = (event) =>{
        event.preventDefault();
      
      }
    
  
    return (
     
            <div className="form__container">
               
                <form className="form__content" onSubmit={handleCreateTeam}>
                <h3 className="auth__title mb-5">TEAMS</h3>
                    <input 
                    type="text" 
                    placeholder="name" 
                    name="email"
                    className="auth__input"
                    autoComplete ="off"
                    value={name}
                    onChange={handleInputChange}
                    />
                    <input type="text" 
                    placeholder="description" 
                    name="password" 
                    className="auth__input"
                    value={description}
                    onChange={handleInputChange}
                    />
                    <button 
                    className="btn btn-primary btn-block" 
                    type="submit">Create Team</button>

            
                    
                </form>

                <div className="modal__close" onClick={()=>onClose(false)}>
                <i className="fas fa-times-circle fa-2x"></i>
            </div>
            </div>




      
    )
}
