import React from "react";

const Inputs = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.result === "" ? "" : props.prevValue + props.compute}
      />
      <input
        type="text"
        placeholder="0"
        value={
          props.displayResult === "" ? props.showNumber : props.displayResult
        }
      />
    </>
  );
};
export default Inputs;
