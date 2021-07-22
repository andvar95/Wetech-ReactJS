import React from "react";
import { useForm } from "../../hooks/useForm";

export const FormTag = ({ onClose = (modal) => modal }) => {
  const [formValues, handleInputChange] = useForm({
    name: "js",
    color: "Write down about your team",
  });

  const { name, color } = formValues;

  const handleCreateTeam = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form__container">
      <form className="form__content" onSubmit={handleCreateTeam}>
        <h3 className="auth__title mb-5">Tag</h3>
        <input
          value={name}
          onChange={handleInputChange}
          placeholder="Tag Name"
        />
        <input type="color" value={color} onChange={handleInputChange} />

        <button className="btn btn-primary btn-block" type="submit">
          Create Tag
        </button>
      </form>

      <div className="modal__close" onClick={() => onClose(false)}>
        <i className="fas fa-times-circle fa-2x"></i>
      </div>
    </div>
  );
};

function TagForm({ onChange, onRemove, name, color }) {
  return (
    <div>
      <input
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
        placeholder="Tag Name"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => onChange("color", e.target.value)}
      />
      <button onClick={onRemove}>Delete</button>
    </div>
  );
}
