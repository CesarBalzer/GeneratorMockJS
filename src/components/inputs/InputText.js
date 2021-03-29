import React from "react";
import "./styles.css";

const InputText = ({ label, value, callback }) => {
  return (
    <div className="inputText">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
};

export default InputText;
