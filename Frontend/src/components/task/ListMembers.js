import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ListMembers = ({ handleAdd, handleDelete, value, data, type }) => {
  console.log("value: ", value);
  return (
    <>
      {value.map((v, i) => (
        <div className="row align-items-start" key={uuidv4()}>
          <div className="col-10">
            <select
              name="cars"
              id="cars"
              value={value[i]}
              name={i}
              onChange={(e) => handleAdd({ target: e, type })}
            >
              {data && data.map((d, i) => (
                <option key={i} value={d._id}>
                  {d.name}
                </option>
              ))}
            </select>
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
