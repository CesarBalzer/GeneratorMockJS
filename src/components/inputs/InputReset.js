import React from "react";
import "./styles.css";

const InputReset = ({ text, classe, callback }) => {
  return (
    <div className="inputReset">
      <button type="reset" className={classe} onClick={callback}>
        {text}
      </button>
    </div>
  );
};

export default InputReset;
