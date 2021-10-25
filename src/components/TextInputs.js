import React from "react";
import classes from "../styles/TextInputs.module.css";

const TextInputs = ({ icon, ...rest }) => {
  return (
    <>
      <div className={classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </>
  );
};

export default TextInputs;
