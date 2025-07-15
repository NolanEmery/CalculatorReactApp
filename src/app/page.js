'use client';
import "react";
import { useState } from 'react';
import Button from "./button.js";

export default function Home() {
  const [allValues1, setAllValues1] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues2, setAllValues2] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues3, setAllValues3] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues4, setAllValues4] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues5, setAllValues5] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues6, setAllValues6] = useState({
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  // const allValues = [allValues1, allValues2, allValues3, allValues4, allValues5, allValues6];
  // const setAllValues = [setAllValues1, setAllValues2, setAllValues3, setAllValues4, setAllValues5, setAllValues6];
  // const [allValues, setAllValues] = useState([
  //   {key: 1,input1Value: 0,input2Value: 0,resultValue: 0},
  //   {key: 2,input1Value: 0,input2Value: 0,resultValue: 0},
  //   {key: 3,input1Value: 0,input2Value: 0,resultValue: 0},
  //   {key: 4,input1Value: 0,input2Value: 0,resultValue: 0},
  //   {key: 5,input1Value: 0,input2Value: 0,resultValue: 0},
  //   {key: 6,input1Value: 0,input2Value: 0,resultValue: 0}]); // find a value in this array

  const [selectValue1, setSelectValue1] = useState(0);
  const [selectValue2, setSelectValue2] = useState(0);
  const [selectValue3, setSelectValue3] = useState(0);
  const [selectValue4, setSelectValue4] = useState(0);
  const [selectValue5, setSelectValue5] = useState(0);
  const [selectValue6, setSelectValue6] = useState(0);
  // const selectValues = [selectValue1, selectValue2, selectValue3, selectValue4, selectValue5, selectValue6];
  // const setSelectValues = [setSelectValue1, setSelectValue2, setSelectValue3, setSelectValue4, setSelectValue5, setSelectValue6];
  // const [selectValues, setSelectValues] = useState([
  //   {key: 1,value:0},
  //   {key: 2,value:0},
  //   {key: 3,value:0},
  //   {key: 4,value:0},
  //   {key: 5,value:0},
  //   {key: 6,value:0}]); // find a value in this array

  // both types of state setter functions correctly set the state.
  // however, both are extremely slow
  // function Row({ number }) {
  //   // const allValuesTemp = allValues.find(a => a.key == number);
  //   // const selectValuesTemp = selectValues.find(s => s.key == number);

  //   return (
  //     <div>
  //     <input value={allValues[number-1].input1Value} onChange={e => {
  //       // update an object in an array using spread
  //       setAllValues[number-1]({
  //         ...allValues[number-1],
  //         input1Value: e.target.value
  //       });
  //       // setAllValues(allValues.map(a => {
  //       //   if (a.key == number) {
  //       //     return ({
  //       //       ...a,
  //       //       input1Value: e.target.value
  //       //     });
  //       //   } else {
  //       //     return a;
  //       //   }
  //       // }));
  //     }}></input>
  //     <Button handleClick={() => {
  //       setSelectValues[number-1](1);
  //       // setSelectValues(selectValues.map(s => {
  //       //   if (s.key == number) {
  //       //     return ({
  //       //       ...s,
  //       //       value: 1
  //       //     });
  //       //   } else {
  //       //     return s;
  //       //   }
  //       // }));
  //     }} str="Addition"></Button>
  //     <Button handleClick={() => {
  //       setSelectValues[number-1](2);
  //       // setSelectValues(selectValues.map(s => {
  //       //   if (s.key == number) {
  //       //     return ({
  //       //       ...s,
  //       //       value: 2
  //       //     });
  //       //   } else {
  //       //     return s;
  //       //   }
  //       // }));
  //     }} str="Subtraction"></Button>
  //     <Button handleClick={() => {
  //       setSelectValues[number-1](3);
  //       // setSelectValues(selectValues.map(s => {
  //       //   if (s.key == number) {
  //       //     return ({
  //       //       ...s,
  //       //       value: 3
  //       //     });
  //       //   } else {
  //       //     return s;
  //       //   }
  //       // }));
  //     }} str="Multiplication"></Button>
  //     <Button handleClick={() => {
  //       setSelectValues[number-1](4);
  //       // setSelectValues(selectValues.map(s => {
  //       //   if (s.key == number) {
  //       //     return ({
  //       //       ...s,
  //       //       value: 4
  //       //     });
  //       //   } else {
  //       //     return s;
  //       //   }
  //       // }));
  //     }} str="Division"></Button>
  //     <Button handleClick={() => {
  //       setSelectValues[number-1](5);
  //       // setSelectValues(selectValues.map(s => {
  //       //   if (s.key == number) {
  //       //     return ({
  //       //       ...s,
  //       //       value: 5
  //       //     });
  //       //   } else {
  //       //     return s;
  //       //   }
  //       // }));
  //     }} str="Mod"></Button>
  //     <input value={allValues[number-1].input2Value} onChange={e => {
  //       setAllValues[number-1]({
  //         ...allValues[number-1],
  //         input2Value: e.target.value
  //       });
  //       // setAllValues(allValues.map(a => {
  //       //   if (a.key == number) {
  //       //     return (
  //       //       {
  //       //         ...a,
  //       //         input2Value: e.target.value
  //       //       }
  //       //     );
  //       //   } else {
  //       //     return a;
  //       //   }
  //       // }));
  //     }}></input>
  //     <Button handleClick={() => {
  //         if (selectValues[number-1].value == 1) {
  //           setAllValues[number-1]({
  //             ...allValues[number-1],
  //             resultValue: (Number)(allValues[number-1].input1Value) + (Number)(allValues[number-1].input2Value)
  //           });
  //           // setAllValues(allValues.map(a => {
  //           //   if (a.key == number) {
  //           //     return (
  //           //       {
  //           //         ...a,
  //           //         resultValue: (Number)(allValuesTemp.input1Value) + (Number)(allValuesTemp.input2Value)
  //           //       }
  //           //     );
  //           //   } else {
  //           //     return a;
  //           //   }
  //           // }));
  //         } else if (selectValuesTemp.value == 2) {
  //           setAllValues[number-1]({
  //             ...allValues[number-1],
  //             resultValue: (Number)(allValues[number-1].input1Value) - (Number)(allValues[number-1].input2Value)
  //           });
  //           // setAllValues(allValues.map(a => {
  //           //   if (a.key == number) {
  //           //     return (
  //           //       {
  //           //         ...a,
  //           //         resultValue: (Number)(allValuesTemp.input1Value) - (Number)(allValuesTemp.input2Value)
  //           //       }
  //           //     );
  //           //   } else {
  //           //     return a;
  //           //   }
  //           // }));
  //         } else if (selectValuesTemp.value == 3) {
  //           setAllValues[number-1]({
  //             ...allValues[number-1],
  //             resultValue: (Number)(allValues[number-1].input1Value) * (Number)(allValues[number-1].input2Value)
  //           });
  //           // setAllValues(allValues.map(a => {
  //           //   if (a.key == number) {
  //           //     return (
  //           //       {
  //           //         ...a,
  //           //         resultValue: (Number)(allValuesTemp.input1Value) * (Number)(allValuesTemp.input2Value)
  //           //       }
  //           //     );
  //           //   } else {
  //           //     return a;
  //           //   }
  //           // }));
  //         } else if (selectValuesTemp.value == 4) {
  //           setAllValues[number-1]({
  //             ...allValues[number-1],
  //             resultValue: (Number)(allValues[number-1].input1Value) / (Number)(allValues[number-1].input2Value)
  //           });
  //           // setAllValues(allValues.map(a => {
  //           //   if (a.key == number) {
  //           //     return (
  //           //       {
  //           //         ...a,
  //           //         resultValue: (Number)(allValuesTemp.input1Value) / (Number)(allValuesTemp.input2Value)
  //           //       }
  //           //     );
  //           //   } else {
  //           //     return a;
  //           //   }
  //           // }));
  //         } else if (selectValuesTemp.value == 5) {
  //           setAllValues[number-1]({
  //             ...allValues[number-1],
  //             resultValue: (Number)(allValues[number-1].input1Value) % (Number)(allValues[number-1].input2Value)
  //           });
  //           // setAllValues(allValues.map(a => {
  //           //   if (a.key == number) {
  //           //     return (
  //           //       {
  //           //         ...a,
  //           //         resultValue: (Number)(allValuesTemp.input1Value) % (Number)(allValuesTemp.input2Value)
  //           //       }
  //           //     );
  //           //   } else {
  //           //     return a;
  //           //   }
  //           // }));
  //         }
  //     }} str="Equals"></Button>
  //     <input className="final" value={allValues[number-1].resultValue} readOnly={true}></input>
  //     </div>
  //   );
  // }

  return (
    <>
    <h1>Calculator App</h1>
    <table>
    {/* <tr>
    <Row number={1} />
    </tr> */}
    <tr>
    <div>
    <input value={allValues1.input1Value} onChange={e => {
      setAllValues1({
        ...allValues1,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue1(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue1(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue1(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue1(4);
    }} str="Division"></Button>
    <Button handleClick={() => {
      setSelectValue1(5);
    }} str="Mod"></Button>
    <input value={allValues1.input2Value} onChange={e => {
      setAllValues1({
        ...allValues1,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue1 == 1) {
          setAllValues1({
            ...allValues1,
            resultValue: (Number)(allValues1.input1Value) + (Number)(allValues1.input2Value)
          });
        } else if (selectValue1 == 2) {
          setAllValues1({
            ...allValues1,
            resultValue: (Number)(allValues1.input1Value) - (Number)(allValues1.input2Value)
          });
        } else if (selectValue1 == 3) {
          setAllValues1({
            ...allValues1,
            resultValue: (Number)(allValues1.input1Value) * (Number)(allValues1.input2Value)
          });
        } else if (selectValue1 == 4) {
          setAllValues1({
            ...allValues1,
            resultValue: (Number)(allValues1.input1Value) / (Number)(allValues1.input2Value)
          });
        } else if (selectValue1 == 5) {
          setAllValues1({
            ...allValues1,
            resultValue: (Number)(allValues1.input1Value) % (Number)(allValues1.input2Value)
          })
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues1.resultValue} readOnly={true}></input>
    </div>
    </tr>
    <tr>
    <div>
    <input value={allValues2.input1Value} onChange={e => {
      setAllValues2({
        ...allValues2,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue2(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue2(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue2(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue2(4);
    }} str="Division"></Button>
      <Button handleClick={() => {
      setSelectValue2(5);
    }} str="Mod"></Button>
    <input value={allValues2.input2Value} onChange={e => {
      setAllValues2({
        ...allValues2,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue2 == 1) {
          setAllValues2({
            ...allValues2,
            resultValue: (Number)(allValues2.input1Value) + (Number)(allValues2.input2Value)
          });
        } else if (selectValue2 == 2) {
          setAllValues2({
            ...allValues2,
            resultValue: (Number)(allValues2.input1Value) - (Number)(allValues2.input2Value)
          });
        } else if (selectValue2 == 3) {
          setAllValues2({
            ...allValues2,
            resultValue: (Number)(allValues2.input1Value) * (Number)(allValues2.input2Value)
          });
        } else if (selectValue2 == 4) {
          setAllValues2({
            ...allValues2,
            resultValue: (Number)(allValues2.input1Value) / (Number)(allValues2.input2Value)
          });
        } else if (selectValue2 == 5) {
          setAllValues2({
            ...allValues2,
            resultValue: (Number)(allValues2.input1Value) % (Number)(allValues2.input2Value)
          })
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues2.resultValue} readOnly={true}></input>
    </div>
    </tr>
    <tr>
    <div>
    <input value={allValues3.input1Value} onChange={e => {
      setAllValues3({
        ...allValues3,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue3(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue3(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue3(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue3(4);
    }} str="Division"></Button>
    <Button handleClick={() => {
      setSelectValue3(5);
    }} str="Mod"></Button>
    <input value={allValues3.input2Value} onChange={e => {
      setAllValues3({
        ...allValues3,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue3 == 1) {
          setAllValues3({
            ...allValues3,
            resultValue: (Number)(allValues3.input1Value) + (Number)(allValues3.input2Value)
          });
        } else if (selectValue3 == 2) {
          setAllValues3({
            ...allValues3,
            resultValue: (Number)(allValues3.input1Value) - (Number)(allValues3.input2Value)
          });
        } else if (selectValue3 == 3) {
          setAllValues3({
            ...allValues3,
            resultValue: (Number)(allValues3.input1Value) * (Number)(allValues3.input2Value)
          });
        } else if (selectValue3 == 4) {
          setAllValues3({
            ...allValues3,
            resultValue: (Number)(allValues3.input1Value) / (Number)(allValues3.input2Value)
          });
        } else if (selectValue3 == 5) {
          setAllValues3({
            ...allValues3,
            resultValue: (Number)(allValues3.input1Value) % (Number)(allValues3.input2Value)
          })
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues3.resultValue} readOnly={true}></input>
    </div>
    </tr>
    <tr>
    <div>
    <input value={allValues4.input1Value} onChange={e => {
      setAllValues4({
        ...allValues4,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue4(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue4(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue4(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue4(4);
    }} str="Division"></Button>
    <Button handleClick={() => {
      setSelectValue4(5);
    }} str="Mod"></Button>
    <input value={allValues4.input2Value} onChange={e => {
      setAllValues4({
        ...allValues4,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue4 == 1) {
          setAllValues4({
            ...allValues4,
            resultValue: (Number)(allValues4.input1Value) + (Number)(allValues4.input2Value)
          });
        } else if (selectValue4 == 2) {
          setAllValues4({
            ...allValues4,
            resultValue: (Number)(allValues4.input1Value) - (Number)(allValues4.input2Value)
          });
        } else if (selectValue4 == 3) {
          setAllValues4({
            ...allValues4,
            resultValue: (Number)(allValues4.input1Value) * (Number)(allValues4.input2Value)
          });
        } else if (selectValue4 == 4) {
          setAllValues4({
            ...allValues4,
            resultValue: (Number)(allValues4.input1Value) / (Number)(allValues4.input2Value)
          });
        } else if (selectValue4 == 5) {
          setAllValues4({
            ...allValues4,
            resultValue: (Number)(allValues4.input1Value) % (Number)(allValues4.input2Value)
          })
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues4.resultValue} readOnly={true}></input>
    </div>
    </tr>
    <tr>
    <div>
    <input value={allValues5.input1Value} onChange={e => {
      setAllValues5({
        ...allValues5,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue5(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue5(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue5(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue5(4);
    }} str="Division"></Button>
    <Button handleClick={() => {
      setSelectValue5(5);
    }} str="Mod"></Button>
    <input value={allValues5.input2Value} onChange={e => {
      setAllValues5({
        ...allValues5,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue5 == 1) {
          setAllValues5({
            ...allValues5,
            resultValue: (Number)(allValues5.input1Value) + (Number)(allValues5.input2Value)
          });
        } else if (selectValue5 == 2) {
          setAllValues5({
            ...allValues5,
            resultValue: (Number)(allValues5.input1Value) - (Number)(allValues5.input2Value)
          });
        } else if (selectValue5 == 3) {
          setAllValues5({
            ...allValues5,
            resultValue: (Number)(allValues5.input1Value) * (Number)(allValues5.input2Value)
          });
        } else if (selectValue5 == 4) {
          setAllValues5({
            ...allValues5,
            resultValue: (Number)(allValues5.input1Value) / (Number)(allValues5.input2Value)
          });
        } else if (selectValue5 == 5) {
          setAllValues5({
            ...allValues5,
            resultValue: (Number)(allValues5.input1Value) % (Number)(allValues5.input2Value)
          })
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues5.resultValue} readOnly={true}></input>
    </div>
    </tr>
    <tr>
    <div>
    <input value={allValues6.input1Value} onChange={e => {
      setAllValues6({
        ...allValues6,
        input1Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
      setSelectValue6(1);
    }} str="Addition"></Button>
    <Button handleClick={() => {
      setSelectValue6(2);
    }} str="Subtraction"></Button>
    <Button handleClick={() => {
      setSelectValue6(3);
    }} str="Multiplication"></Button>
    <Button handleClick={() => {
      setSelectValue6(4);
    }} str="Division"></Button>
    <Button handleClick={() => {
      setSelectValue6(5);
    }} str="Mod"></Button>
    <input value={allValues6.input2Value} onChange={e => {
      setAllValues6({
        ...allValues6,
        input2Value: e.target.value
      });
    }}></input>
    <Button handleClick={() => {
        if (selectValue6 == 1) {
          setAllValues6({
            ...allValues6,
            resultValue: (Number)(allValues6.input1Value) + (Number)(allValues6.input2Value)
          });
        } else if (selectValue6 == 2) {
          setAllValues6({
            ...allValues6,
            resultValue: (Number)(allValues6.input1Value) - (Number)(allValues6.input2Value)
          });
        } else if (selectValue6 == 3) {
          setAllValues6({
            ...allValues6,
            resultValue: (Number)(allValues6.input1Value) * (Number)(allValues6.input2Value)
          });
        } else if (selectValue6 == 4) {
          setAllValues6({
            ...allValues6,
            resultValue: (Number)(allValues6.input1Value) / (Number)(allValues6.input2Value)
          });
        } else if (selectValue6 == 5) {
          setAllValues6({
            ...allValues6,
            resultValue: (Number)(allValues6.input1Value) % (Number)(allValues6.input2Value)
          })
        }
    }} str="Equals"></Button>
    <input className="final" value={allValues6.resultValue} readOnly={true}></input>
    </div>
    </tr>
    </table>
    </>
  );
}