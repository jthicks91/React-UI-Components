import React from "react";
import "./Button.css";

// Build button wrapper for Buttons that will be reusable with styling the multiple buttons for this applicaiton;
// Button wrapper will pass on its props to its children
// .button wrapper class will be template for height and flex property;
// .number-button and red-button one will be for specific styling such as width, colors and text-alignment;

const ButtonWrapper = props => {
  return (
    <div className={`button-wrapper ${props.className}`}>{props.children}</div>
  );
};

export default ButtonWrapper;
