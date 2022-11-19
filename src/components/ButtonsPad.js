import React from "react";
import "../App.css";

function ButtonsPad() {
  const nums = [
    "C",
    "()",
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
    "+/-",
    0,
    ".",
    "=",
  ];

  return (
    <div id="buttonsPad">
      {nums.map((num) => (
        <button key={num} id={num}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default ButtonsPad;
