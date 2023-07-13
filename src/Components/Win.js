import React from "react";

const Draw = () => {
  return <h1>Match is Draw</h1>;
};

const Win = (props) => {
  return props.win !== "Draw" ? <h1>{props.win} is Winner </h1> : <Draw />;
};

export default Win;
