import React from "react";
import "./styles.css";

const InputNumber = ({ label, value, callback }) => {
  return (
    <div className="inputNumber">
      <label>{label}</label>
      <input
        type="number"
        min={1}
        max={99}
        value={value}
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
};

export default InputNumber;
