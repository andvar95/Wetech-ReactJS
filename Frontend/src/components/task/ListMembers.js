import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ListMembers = ({ handleAdd, handleDelete, value, data, type }) => {
  return (
    <>
      {value.map((v, i) => (
        <div className="row align-items-start" key={uuidv4()}>
          <div className="col-10">
            <input
              className="form-control"
              name={type + i}
              value={value[i]}
              onChange={(e) => {
                handleAdd({ target: e, type });
              }}
              list={"list" + type}
              placeholder={type + " " + (i + 1)}
            ></input>

            <datalist id={"list" + type}>
              {data.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </datalist>
          </div>
          <div className="col-1">
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                handleDelete({ idx: i, type });
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
