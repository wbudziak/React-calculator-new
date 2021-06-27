/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Keyboard from "./Keyboard";
import styles from "./Calculator.module.css";

const Calculator = (props) => {
  const [current, setCurrent] = useState("0");
  const [prev, setPrev] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [operator, setOperator] = useState("");
  const [displayOperator, setDisplayOperator] = useState("");
  const [equalIsClicked, setEqualIsClicked] = useState(false);
  const [finalResult, setFinalResult] = useState("");
  const [minusClicked, setMinusClicked] = useState(false);
  useEffect(() => {
    if (equalIsClicked) {
      setFinalResult(currentResult);
    }
    if (current !== "" && prev !== "") {
      switch (operator) {
        case "*":
          setCurrentResult(parseFloat(prev) * parseFloat(current));
          break;
        case "+":
          setCurrentResult(parseFloat(prev) + parseFloat(current));
          break;
        case "-":
          setCurrentResult(parseFloat(prev) - parseFloat(current));
          break;
        case "/":
          setCurrentResult(parseFloat(prev) / parseFloat(current));
          break;
        case "%":
          setCurrentResult(parseFloat(prev) % parseFloat(current));
          break;
      }
    }
    if (current === ".") {
      setCurrent("0" + current);
    }
  }, [operator, prev, current, currentResult, displayOperator]);

  const switchHandler = (e) => {
    if (!equalIsClicked && current !== "") {
      if (minusClicked || current === "0") return;
      if (current.toString().includes("-")) {
        setCurrent(current.toString().slice(1));
      } else {
        setCurrent("-" + current.toString());
      }
    }
    if (equalIsClicked) {
      setPrev("");
      setCurrentResult("-" + currentResult.toString());
      if (currentResult.toString().includes("-")) {
        setCurrentResult(currentResult.toString().slice(1));
      }
    }
  };
  const reset = (e) => {
    setPrev("");
    setCurrent("0");
    setCurrentResult("");
    setOperator("");
    setEqualIsClicked(false);
    setFinalResult("");
    setMinusClicked(false);
    setDisplayOperator("");
  };
  const equalHandler = (e) => {
    if (current === "") {
      setCurrent(prev);
    }
    if (equalIsClicked) {
      setCurrent(current);
      setPrev(currentResult);
    }
    setEqualIsClicked(true);
    setFinalResult(currentResult);
  };
  const operatorHandler = (e) => {
    if (current === "" && prev === "") {
      return;
    } else {
      if (e.target.value === "*") {
        setDisplayOperator(" x");
      } else if (e.target.value === "/") {
        setDisplayOperator(" ÷");
      } else {
        setDisplayOperator(` ${e.target.value}`);
      }
    }
    setFinalResult("");
    setEqualIsClicked(false);
    setOperator(e.target.value);
    if (current !== "" || current === "0") {
      if (minusClicked) {
        setPrev("-" + current);
        setMinusClicked(false);
      } else {
        setPrev(current);
      }
      setCurrent("");
    }
    if (currentResult !== "") {
      setCurrent("");
      setPrev(currentResult);
    }
  };
  const enterNumber = (e) => {
    if (e.target.value === "-") {
      setMinusClicked(true);
      return;
    }
    if (equalIsClicked && e.target.value === "0") {
      reset(e);
      return;
    }
    if (equalIsClicked) {
      reset(e);
      setCurrent(e.target.value);
      return;
    }
    if (e.target.value === "." && current.includes(".")) return;
    setCurrent(
      current === "0"
        ? current.slice(1) + e.target.value
        : current + e.target.value
    );
  };
  const buttonHandler = (e) => {
    if (e.target.getAttribute("type") === "number" || e.target.value === "-") {
      enterNumber(e);
    }
    if (e.target.getAttribute("type") === "operator") {
      operatorHandler(e);
    }
    if (e.target.getAttribute("type") === "equal") {
      equalHandler(e);
    }
    if (e.target.getAttribute("type") === "reset") {
      reset(e);
    }
    if (e.target.getAttribute("type") === "switch") {
      switchHandler(e);
    }
  };
  return (
    <>
      <calculator className={styles.calculator}>
        <Inputs
          prev={prev}
          current={current}
          finalResult={finalResult}
          displayOperator={displayOperator}
        ></Inputs>
        <Keyboard click={buttonHandler}></Keyboard>
      </calculator>
    </>
  );
};
export default Calculator;
