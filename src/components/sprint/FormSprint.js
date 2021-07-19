import React from 'react';
import {useForm} from "../../hooks/useForm";

export const FormSprint = ({onClose=(modal)=>modal}) => {
    const [formValues, handleInputChange ]  = useForm({
        name:'Your Team Name',
        description:'Write down about your team'
      })

      const {name,description} = formValues;

      const handleCreateSprint = (event) =>{
        event.preventDefault();
      
      }
    
  
    return (
     
            <div className="form__container">
               
                <form className="form__content" onSubmit={handleCreateSprint}>
                <h3 className="auth__title mb-5">SPRINTS</h3>
                    <input 
                    type="text" 
                    placeholder="name" 
                    name="Name"
                    className="auth__input"
                    autoComplete ="off"
                    value={name}
                    onChange={handleInputChange}
                    />
                    <input type="text" 
                    placeholder="description" 
                    name="description" 
                    className="auth__input"
                    value={description}
                    onChange={handleInputChange}
                    />
                    <button 
                    className="btn btn-primary btn-block" 
                    type="submit">Create Sprint</button>

            
                    
                </form>

                <div className="modal__close" onClick={()=>onClose(false)}>
                <i className="fas fa-times-circle fa-2x"></i>
            </div>
            </div>




      
    )

}
