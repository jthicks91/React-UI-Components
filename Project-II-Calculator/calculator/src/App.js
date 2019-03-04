import React from "react";
import "./App.css";

import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonWrapper from "./components/ButtonComponents/ButtonWrapper";
import NumberButtons from "./components/ButtonComponents/NumberButton";
import ActionButtons from "./components/ButtonComponents/ActionButtons";

//layout calculator rendenerings in order as seen on design file
//first row will be clear button and ÷...
// second row will be 7,8,9, X...
// third row 4,5,6,-....
// fourth row 1,2,3,+
// fifth row 0, =;

// make seperate class for num-button that will style each of the text in number buttons with everything besides width and border (font-size)
// make number-button class for width and boder;

class App extends React.Component {
  render() {
    return (
      <div className="calc-container">
        <CalcDisplay />
        <ButtonWrapper className="clear-item">
          <ActionButtons className="three-quarters-text" text="clear" />
          <NumberButtons bgrColor="red-button" text="÷" />
        </ButtonWrapper>
        <ButtonWrapper>
          <NumberButtons bgrColor="numb-button" text="7" />
          <NumberButtons bgrColor="numb-button" text="8" />
          <NumberButtons bgrColor="numb-button" text="9" />
          <NumberButtons bgrColor="red-button" text="x" />
        </ButtonWrapper>
        <ButtonWrapper>
          <NumberButtons bgrColor="numb-button" text="4" />
          <NumberButtons bgrColor="numb-button" text="5" />
          <NumberButtons bgrColor="numb-button" text="6" />
          <NumberButtons bgrColor="red-button" text="-" />
        </ButtonWrapper>
        <ButtonWrapper>
          <NumberButtons bgrColor="numb-button" text="1" />
          <NumberButtons bgrColor="numb-button" text="2" />
          <NumberButtons bgrColor="numb-button" text="3" />
          <NumberButtons bgrColor="red-button" text="+" />
        </ButtonWrapper>
        <ButtonWrapper>
          <ActionButtons className="three-quarters-text" text="0" />
          <NumberButtons bgrColor="red-button" text="=" />
        </ButtonWrapper>
      </div>
    );
  }
}

export default App;
