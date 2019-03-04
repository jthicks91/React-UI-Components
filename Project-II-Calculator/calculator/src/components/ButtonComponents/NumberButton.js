import React from "react";
import "./Button.css";

const NumberButtons = props => {
  return (
    <button className={`number-button ${props.bgrColor}`}>{props.text}</button>
  );
};

export default NumberButtons;
