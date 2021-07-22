import React,{useState,useEffect} from 'react'
import {FormSprint} from "./FormSprint";

import { useDispatch, useSelector } from "react-redux";
import { getAll, remove } from "../../actions/base";
export const Sprint = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.sprint,()=>{});
    const [sprintSelect, SetSprintSelect] = useState({
      name: "",
      description: "",
      project: localStorage.getItem("currentProject"),
    });
    useEffect(() => {
      dispatch(getAll("sprint"));
    }, [dispatch]);
  
    const [modal, setModal] = useState(false);
  //for edit need modify the before selected for can edit
    const handleCreate = () => {
      setModal(true);
      SetSprintSelect({
        name: "",
        description: "",
        project: localStorage.getItem("currentProject"),
      });
      
    };
  
    const handleEdit = (element) => {
      SetSprintSelect({
        _id: element._id,
        name: element.name,
        description: element.description,
        project: element.project,
      });  
      setModal(true);
    };
    const handleDelete = (id) => {
      dispatch(remove("sprint/" + id));
    };
  
    return (
      <>
        <div className="row">
          <div className="col-md-8">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#sprint-collapse"
              aria-expanded="true"
            >
              Sprints
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleCreate();
              }}
            >
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
        <div className="collapse show" id="sprint-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            {items &&
              items.map((element) => (
                <div className="row" key={element._id}>
                  <div className="col-md-8">
                    <li className="link-ligth rounded">{element.name}</li>
                  </div>
                  <div className="col-md-4">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(element)}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(element._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
          </ul>
        </div>
  
        <div className={modal ? "modal" : "none"}>
          <FormSprint sprint={sprintSelect} onClose={(modal) => setModal(modal)} />
        </div>
      </>
    );
}
