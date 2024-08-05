import React from "react";

const UserInput = ({
  label = "Default",
  type = "text",
  name = "name",
  value = "",
  required = "false",
  onChange,
}) => {
  return (
    <p>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        requred={required}
      />
    </p>
  );
};

export default UserInput;
