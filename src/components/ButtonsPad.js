import React from "react";
import "../App.css";

function ButtonsPad({ numClicked }) {
  const nums = [
    "C",
    "CE",
    "%",
    "÷",
    7,
    8,
    9,
    "×",
    4,
    5,
    6,
    "–",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  return (
    <div id="buttonsPad">
      {nums.map((num, i) => (
        <button key={i} value={num} onClick={numClicked} className={num === "=" ? 'equal' : ''}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default ButtonsPad;
