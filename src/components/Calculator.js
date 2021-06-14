/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Keyboard from "./Keyboard";
const Calculator = (props) => {
  const [prevValue, setPrevValue] = useState("");
  const [nextValue, setNextValue] = useState("");
  const [result, setResult] = useState("");
  const [compute, setCompute] = useState("");
  const [displayResult, setDisplayResult] = useState("");
  const [flag, setFlag] = useState(true);
  const [computeFlag, setComputeFlag] = useState(true);
  const [displayCurrent, setDisplayCurrent] = useState("");
  const [computeEnable, setComputeEnable] = useState(true);
  const [preview, setPreview] = useState("");
  const [showNumber, setShowNumber] = useState("");

  useEffect(() => {
    switch (compute) {
      case "*":
        setResult(prevValue * nextValue);
        break;
      case "+":
        setResult(prevValue + nextValue);
        break;
      case "-":
        setResult(prevValue - nextValue);
        break;
      case "/":
        setResult(prevValue / nextValue);
        break;
      case "%":
        setResult(prevValue % nextValue);
        break;
    }
    console.log(result);
  }, [prevValue, nextValue, result, compute]);

  const reset = (event) => {
    setPrevValue(result);
    setNextValue("");
    setCompute("");
    setResult("");
    setFlag(true);
    setComputeFlag(true);
    setDisplayCurrent("");
    setComputeEnable(true);
    setShowNumber("");
  };
  const selectKey = (event) => {
    if (event.target.getAttribute("type") === "number") {
      setDisplayResult("");
      if (flag) {
        if (displayResult !== "") {
          setPrevValue(parseFloat(event.target.value));
          setShowNumber(parseFloat(event.target.value));
          return;
        }
        setPrevValue(parseFloat(prevValue + event.target.value));
        setShowNumber(parseFloat(prevValue + event.target.value));
      } else {
        setComputeEnable(true);
        setNextValue(parseFloat(nextValue + event.target.value));
        setShowNumber(parseFloat(nextValue + event.target.value));
      }
    }
    if (event.target.getAttribute("type") === "reset") {
      setDisplayResult("");
      reset();
    }
    if (event.target.getAttribute("type") === "compute") {
      if (computeEnable === false || prevValue === "") return;
      setComputeEnable(false);
      setPreview(`${result}`);
      setShowNumber("");
      if (computeFlag === false) {
        setPrevValue(result);
        setDisplayCurrent(result);
        setNextValue("");
        setCompute(event.target.value);
      } else {
        setComputeFlag(false);
        setFlag(!flag);
        setCompute(event.target.value);
      }
    }
    if (event.target.getAttribute("type") === "equal") {
      if (prevValue === "" || nextValue === "") return;
      reset();
      setDisplayResult(result);
    }
  };
  return (
    <>
      <div>
        <Inputs
          compute={compute}
          result={result}
          prevValue={prevValue}
          showNumber={showNumber}
          displayResult={displayResult}
        ></Inputs>
        <Keyboard click={selectKey}></Keyboard>
      </div>
    </>
  );
};
export default Calculator;
