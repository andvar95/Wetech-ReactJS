import React from "react";

const defaultState = {
  name: "",
  color: "",
};

export default function Tag() {
  const [rows, setRows] = useState([defaultState]);

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value,
    };
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat(defaultState));
  };

  const handleOnRemove = (index) => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

  return (
    <div className="tags">
      {rows.map((row, index) => (
        <TagForm
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
}
