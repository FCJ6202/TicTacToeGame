import React, { useState } from "react";
import Game from "./Game";
import Win from "./Win";

function App() {
  const [win, SetWin] = useState(".");

  const IsFull = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === ".") {
          return false;
        }
      }
    }
    return true;
  };

  const IsWin = (matrix) => {
    for (let idx = 0; idx < matrix.length; idx++) {
      if (
        matrix[idx][0] === matrix[idx][1] &&
        matrix[idx][1] === matrix[idx][2] &&
        matrix[idx][0] !== "."
      ) {
        SetWin(matrix[idx][0]);
        return;
      }
    }

    //Col

    for (let idx = 0; idx < matrix.length; idx++) {
      if (
        matrix[0][idx] === matrix[1][idx] &&
        matrix[1][idx] === matrix[2][idx] &&
        matrix[0][idx] !== "."
      ) {
        SetWin(matrix[0][idx]);
        return;
      }
    }
    // Dig-1
    if (
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2] &&
      matrix[2][2] !== "."
    ) {
      SetWin(matrix[0][0]);
      return;
    }
    if (
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0] &&
      matrix[2][0] !== "."
    ) {
      SetWin(matrix[0][2]);
      return;
    }

    if (IsFull(matrix)) {
      SetWin("Draw");
      return;
    }
    SetWin(".");
    return;
  };

  return win !== "." ? <Win win={win} /> : <Game key={0} IsWin={IsWin} />;
}
export default App;
