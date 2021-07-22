import React ,{useEffect,} from 'react';
import {useForm} from "../../hooks/useForm";
import { create, getAll, update } from "../../actions/base";
import { useDispatch, useSelector } from "react-redux";
export const FormSprint = ({onClose=(modal)=>modal,sprint}) => {
  let itemTeam = { ...sprint };
  const dispatch = useDispatch();

  const { items } = useSelector(
    (state) => state,
    () => {}
  ); 

  const [
    formValues,
    handleInputChange,
    reset,
    ,
    ,
    ,
    setValues,
  ] = useForm(itemTeam);

  useEffect(() => {
    setValues({
      name: sprint.name,
      description: sprint.description,
      project: sprint.project,
    });
  }, [sprint]);
  
  const { name, description  } = formValues;

  const handleCreateSprint = (event) => {
    event.preventDefault();
    if (sprint._id) {
      //edit
      dispatch(update(`sprint/${sprint._id}`, formValues));
    } else {
      dispatch(create("sprint", formValues));
    }
    onClose(false);
    reset();
  };

  
    return (
     
            <div className="form__container">
               
                <form className="form__content" onSubmit={handleCreateSprint}>
                <h3 className="auth__title mb-5">SPRINTS</h3>
                    <input 
                    type="text" 
                    placeholder="name" 
                    name="name"
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
