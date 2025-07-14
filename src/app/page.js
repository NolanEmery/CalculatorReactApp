'use client';
import "react";
import { useState } from 'react';
import Button from "./button.js";

export default function Home() {
  const [allValues, setAllValues] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [selectValue, setSelectValue] = useState(0);

  return (
    <>
    <h1>Calculator App</h1>
    <input value={allValues.input1Value} onChange={e => {
      setAllValues({
        ...allValues,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue(4);
    }} str="Division"></Button>
    <input value={allValues.input2Value} onChange={e => {
      setAllValues({
        ...allValues,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue == 1) {
          setAllValues({
            ...allValues,
            resultValue: (Number)(allValues.input1Value) + (Number)(allValues.input2Value)
          });
        } else if (selectValue == 2) {
          setAllValues({
            ...allValues,
            resultValue: (Number)(allValues.input1Value) - (Number)(allValues.input2Value)
          });
        } else if (selectValue == 3) {
          setAllValues({
            ...allValues,
            resultValue: (Number)(allValues.input1Value) * (Number)(allValues.input2Value)
          });
        } else if (selectValue == 4) {
          setAllValues({
            ...allValues,
            resultValue: (Number)(allValues.input1Value) / (Number)(allValues.input2Value)
          });
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues.resultValue} readOnly={true}></input>
    </>
  );
}