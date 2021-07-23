import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ListMembers = ({ handleAdd, handleDelete, value, data, type }) => {
  return (
    <>
      {value &&
        value.map((v, i) => (
          <div className="row align-items-start" key={uuidv4()}>
            <div className="col-10">
              <select
                className="form-control"
                value={v}
                name={`${(type, i)}`}
                required
                onChange={(e) => handleAdd({ target: e, type })}
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                {data &&
                  data.map((d, i) => (
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
