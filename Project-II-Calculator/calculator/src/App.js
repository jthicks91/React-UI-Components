import React from "react";
import "./App.css";

import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionNumberButtons from "./components/ButtonComponents/ActionNumberButtons';

const App = () => {
  return (
    <div className='container'>
      <CalcDisplay />
      <ActionNumberButtons />
    </div>

    );
  };

  export default App;