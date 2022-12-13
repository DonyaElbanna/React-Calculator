import React from "react";
import "../App.css";

function ButtonsPad({ btnClicked }) {
  const nums = [
    "C",
    "CE",
    "±",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    ".",
    0,
    "=",
  ];

  return (
    <div id="buttonsPad">
      {nums.map((num, i) => (
        <button
          key={i}
          value={num}
          onClick={() => {
            btnClicked(num.toString());
          }}
          className={
            num === "="
              ? "equal"
              : num === "/"
              ? "divide"
              : num === "*"
              ? "multiply"
              : " "
          }
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default ButtonsPad;
