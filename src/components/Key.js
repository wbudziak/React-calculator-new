import React, { useState } from "react";
import styles from "./Key.module.css";
const Key = (props) => {
  // const { value } = props;
  const { result, prevValue, displayOperator, showNumber } = props;

  const [click, setClick] = useState(false);
  const mouseDown = () => {
    setClick(true);
  };
  const mouseUp = () => {
    setClick(false);
  };
  return (
    <>
      <button
        className={styles.key}
        type="submit"
        style={
          click === true
            ? { transform: "scale(0.95)" }
            : { transform: "scale(1)" }
        }
        value={props.value}
        text={props.text}
        onClick={props.click}
        onMouseDown={mouseDown}
        onMouseLeave={mouseUp}
        onMouseUp={mouseUp}
        type={props.type}
      >
        {props.text}
      </button>
    </>
  );
};
export default Key;
