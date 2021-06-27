import React from "react";
import Key from "./Key";
import styles from "./Keyboard.module.css";

const keys = [
  {
    id: 1,
    value: "C",
    text: "C",
    type: "reset",
  },
  {
    id: 2,
    value: "switch",
    text: "+/-",
    type: "switch",
  },
  {
    id: 3,
    value: "%",
    text: "%",
    type: "operator",
  },
  {
    id: 4,
    value: "/",
    text: "÷",
    type: "operator",
  },
  {
    id: 5,
    value: 7,
    text: "7",
    type: "number",
  },
  {
    id: 6,
    value: 8,
    text: "8",
    type: "number",
  },
  {
    id: 7,
    value: 9,
    text: "9",
    type: "number",
  },
  {
    id: 8,
    value: "*",
    text: "X",
    type: "operator",
  },
  {
    id: 9,
    value: 4,
    text: "4",
    type: "number",
  },
  {
    id: 10,
    value: 5,
    text: "5",
    type: "number",
  },
  {
    id: 11,
    value: 6,
    text: "6",
    type: "number",
  },
  {
    id: 12,
    value: "-",
    text: "-",
    type: "operator",
  },
  {
    id: 13,
    value: 1,
    text: "1",
    type: "number",
  },
  {
    id: 14,
    value: 2,
    text: "2",
    type: "number",
  },
  {
    id: 15,
    value: 3,
    text: "3",
    type: "number",
  },
  {
    id: 16,
    value: "+",
    text: "+",
    type: "operator",
  },
  {
    id: 17,
    value: 0,
    text: "0",
    type: "number",
  },
  {
    id: 18,
    value: ".",
    text: ".",
    type: "number",
  },
  {
    id: 19,
    value: "=",
    text: "=",
    type: "equal",
  },
];

const Keyboard = (props) => {
  const clickKeyboard = props.click;

  return (
    <div className={styles.keyboard}>
      {keys.map((key) => (
        <Key
          key={key.id}
          text={key.text}
          value={key.value}
          click={clickKeyboard}
          type={key.type}
        ></Key>
      ))}
    </div>
  );
};
export default Keyboard;
