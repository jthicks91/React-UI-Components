//<------Imports Below-----> //
import React from "react";
import "./App.css";

import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

//<------Imports Above-----> //

const App = () => {
  return (
    <div className="calc-container">
      <CalcDisplay />
    </div>
  );
};

export default App;
