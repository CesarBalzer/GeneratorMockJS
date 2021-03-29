import React from "react";
import "./styles.css";

const InputNumber = ({ label, value, classe, callback }) => {
  return (
    <div className="inputNumber">
      <label htmlFor="ipt">{label}</label>
      <input
        id="ipt"
        className={`button ${classe}`}
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
