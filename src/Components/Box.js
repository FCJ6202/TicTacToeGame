import React from "react";

const Box = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="p-3 border bg-light">
        <div
          onClick={() => props.HandleMatrix(props.cell)}
          className="container"
        >
          <h1 className="text-center Box">{props.value}</h1>
        </div>
      </div>
    </div>
  );
};

export default Box;
