import React from "react";
import "./Button.css";

// interpolation to invoke dynamic properties to our data within our component;

const ActionButtons = props => {
  return (
    <button className={`three-quarters ${props.className}`}>
      {props.text}
    </button>
  );
};

export default ActionButtons;
