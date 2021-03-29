import React from "react";
import "./styles.css";

const InputButton = ({ text, disabled, classe, callback }) => {
  return (
    <div className="inputButton">
      <button
        type="button"
        className={classe}
        disabled={disabled}
        onClick={callback}
      >
        {text}
      </button>
    </div>
  );
};

export default InputButton;
