import React from "react";
import "./styles.css";

const InputText = ({ label, value, callback }) => {
  return (
    <div className="inputText">
      <label htmlFor="iptn">{label}</label>
      <input
        id="iptn"
        type="text"
        value={value}
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
};

export default InputText;
