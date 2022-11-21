import "./App.css";
import Screen from "./components/Screen";
import ButtonsPad from "./components/ButtonsPad";
import React, { useState } from "react";

function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const btnClicked = (num) => {
    if (num === "C") {
      return clearAll();
    } else if (num === "CE") {
      return clearEntry();
    } else if (num === "=") {
      return [
        setResult(eval(equation).toString()),
        // setEquation(equation + "="),
        setEquation(eval(equation).toString()),
      ];
    } else if (equation.length >= 16) {
      setResult("Digit limit met");
    } else if (
      (ops.includes(num) && equation === "") ||
      (ops.includes(num) && ops.includes(equation.slice(-1)))
    ) {
      return;
    } else {
      setEquation(equation + num);
    }
    // console.log(equation, ops.includes(equation));
  };

  const clearAll = () => {
    setEquation("");
    setResult("");
  };

  const clearEntry = () => {
    setEquation(equation.slice(0, -1));
  };

  return (
    <div className="App">
      <div id="calculator">
        <Screen equation={equation} result={result} />
        <ButtonsPad
          btnClicked={btnClicked}
          clearAll={clearAll}
          clearEntry={clearEntry}
          // solve={solve}
        />
      </div>
    </div>
  );
}

export default App;
