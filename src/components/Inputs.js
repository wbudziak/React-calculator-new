import React, { useEffect, useState } from "react";
import styles from "./screen.module.css";

const Inputs = (props) => {
  const {
    prev,
    current,
    displayCurrent,
    displayPreview,
    finalResult,
    displayOperator,
  } = props;
  const [fontSize, setFontSize] = useState(32);

  return (
    <screen className={styles.screen}>
      <input
        className={styles.previousOperand}
        type="text"
        readOnly
        value={finalResult === "" ? prev + displayOperator : ""}
      />
      <input
        style={{ fontSize: `${fontSize}px` }}
        className={styles.currentOperand}
        type="text"
        placeholder="0"
        readOnly
        value={
          finalResult === "" ? current : Math.round(finalResult * 10000) / 10000
        }
      />
    </screen>
  );
};
export default Inputs;
