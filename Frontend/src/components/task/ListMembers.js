import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ListMembers = ({ handle, value, data, type }) => {
  return (
    <>
      {value.map((v,i) => (
        <div>
          <input
            className="form-control"
            key={uuidv4()}
            name={type+i}
            value={value[i]}
            onChange={(e) => {
              handle({ target: e, type });
            }}
            list={"list"+type}
            placeholder={type + " " + (i+1)}
          ></input>
          <datalist id={"list"+type}>
            {data.map((d,i) => (
              <option key={uuidv4()+i} value={d}>
                {d}
              </option>
            ))}
          </datalist>
          <button 
            className="btn btn-danger">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </>
  );
};
