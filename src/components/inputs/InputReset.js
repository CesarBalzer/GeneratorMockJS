import React from "react";
import "./styles.css";

const InputReset = ({ text, classe, callback }) => {
  return (
    <div className="inputButton">
      <button type="reset" className={`button ${classe}`} onClick={callback}>
        {text}
      </button>
    </div>
  );
};

export default InputReset;
