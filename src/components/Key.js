import React from "react";
const Key = (props) => {
  return (
    <>
      <button
        type="submit"
        value={props.value}
        text={props.text}
        onClick={props.click}
        type={props.type}
      >
        {props.text}
      </button>
    </>
  );
};
export default Key;
