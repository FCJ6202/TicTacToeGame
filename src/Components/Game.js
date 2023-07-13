import React, { useState } from "react";
import Box from "./Box";

function Game(props) {
  const [matrix, setMatrix] = useState([
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
  ]);

  const [chance, setChance] = useState("O");

  const IsEmpty = (row, col) => {
    return matrix[row][col] === ".";
  };
  const HandleMatrix = (cell) => {
    const { row, col } = cell;
    if (!IsEmpty(row, col)) {
      alert("This cell is already Clicked");
      return;
    }
    let newArr = [...matrix];
    newArr[row][col] = chance;
    setMatrix(newArr);
    setChance(chance === "X" ? "O" : "X");
    props.IsWin(matrix);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">{document.title} Game</h1>
      <div className="px-4 border border-5">
        <div className="container row gx-5 my-3">
          {matrix[0].map((ele, col) => {
            return (
              <Box
                key={0 + col}
                cell={{ row: 0, col: col }}
                HandleMatrix={HandleMatrix}
                value={matrix[0][col]}
              />
            );
          })}
        </div>

        <div className="container row gx-5 my-3">
          {matrix[1].map((ele, col) => {
            return (
              <Box
                key={3 + col}
                cell={{ row: 1, col: col }}
                HandleMatrix={HandleMatrix}
                value={matrix[1][col]}
              />
            );
          })}
        </div>

        <div className="container row gx-5 my-3">
          {matrix[2].map((ele, col) => {
            return (
              <Box
                key={6 + col}
                cell={{ row: 2, col: col }}
                HandleMatrix={HandleMatrix}
                value={matrix[2][col]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Game;
