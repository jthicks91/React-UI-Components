//<------Imports Below-----> //
import React from "react";
import "./App.css";

import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonWrapper from "./components/ButtonComponents/ButtonWrapper";
import NumberButtons from "./components/ButtonComponents/NumberButton";
import ActionButtons from "./components/ButtonComponents/ActionButton";

//<------Imports Above-----> //

//layout calculator rendenerings in order as seen on design file
//first row will be clear button and ÷...
// second row will be 7,8,9, X...
// third row 4,5,6,-....
// fourth row 1,2,3,+
// fifth row 0, =;

class App extends React.Component {
  render() {
    return (
      <div className="calc-container">
        <CalcDisplay />
        <ButtonWrapper className="clear-item">
          <ActionButtons className="three-quarters" text="clear" />
          <NumberButtons bgrColor="red-button" text="÷" />
        </ButtonWrapper>
        <ButtonWrapper>
          <NumberButtons bgrColor="number-button" text="7" />
        </ButtonWrapper>
      </div>
    );
  }
}

export default App;
