'use client';
import { useState, useReducer } from 'react';
import { Provider } from '@/components/ui/provider';
import { Button, Stack } from '@chakra-ui/react';

export default function Home() {
  const [allValues1, dispatch1] = useReducer(reducer1, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues2, dispatch2] = useReducer(reducer2, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues3, dispatch3] = useReducer(reducer3, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues4, dispatch4] = useReducer(reducer4, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues5, dispatch5] = useReducer(reducer5, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });
  const [allValues6, dispatch6] = useReducer(reducer6, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });

  const [selectValue1, setSelectValue1] = useState(0);
  const [selectValue2, setSelectValue2] = useState(0);
  const [selectValue3, setSelectValue3] = useState(0);
  const [selectValue4, setSelectValue4] = useState(0);
  const [selectValue5, setSelectValue5] = useState(0);
  const [selectValue6, setSelectValue6] = useState(0);

  // Provider negates all the h1-h6 elements

  return (
    <html suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Provider>
          <Stack>
            <div>
              <input value={allValues1.input1Value} onChange={e => {
                dispatch1({
                  type: 'input1Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                setSelectValue1(1);
              }}>+</Button>
              <Button onClick={() => {
                setSelectValue1(2);
              }}>-</Button>
              <Button onClick={() => {
                setSelectValue1(3);
              }}>*</Button>
              <Button onClick={() => {
                setSelectValue1(4);
              }}>/</Button>
              <Button onClick={() => {
                setSelectValue1(5);
              }}>%</Button>
              <input value={allValues1.input2Value} onChange={e => {
                dispatch1({
                  type: 'input2Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                if (selectValue1 == 1) {
                  dispatch1({
                    type: 'resultValue',
                    value: (Number)(allValues1.input1Value) + (Number)(allValues1.input2Value)
                  });
                } else if (selectValue1 == 2) {
                  dispatch1({
                    type: 'resultValue',
                    value: (Number)(allValues1.input1Value) - (Number)(allValues1.input2Value)
                  });
                } else if (selectValue1 == 3) {
                  dispatch1({
                    type: 'resultValue',
                    value: (Number)(allValues1.input1Value) * (Number)(allValues1.input2Value)
                  });
                } else if (selectValue1 == 4) {
                  dispatch1({
                    type: 'resultValue',
                    value: (Number)(allValues1.input1Value) / (Number)(allValues1.input2Value)
                  });
                } else if (selectValue1 == 5) {
                  dispatch1({
                    type: 'resultValue',
                    value: (Number)(allValues1.input1Value) % (Number)(allValues1.input2Value)
                  });
                }
              }}>=</Button>
              <input className="final" value={allValues1.resultValue} readOnly={true}></input>
            </div>
            <div>
              <input value={allValues2.input1Value} onChange={e => {
                dispatch2({
                  type: 'input1Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                setSelectValue2(1);
              }}>+</Button>
              <Button onClick={() => {
                setSelectValue2(2);
              }}>-</Button>
              <Button onClick={() => {
                setSelectValue2(3);
              }}>*</Button>
              <Button onClick={() => {
                setSelectValue2(4);
              }}>/</Button>
              <Button onClick={() => {
                setSelectValue2(5);
              }}>%</Button>
              <input value={allValues2.input2Value} onChange={e => {
                dispatch2({
                  type: 'input2Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                if (selectValue2 == 1) {
                  dispatch2({
                    type: 'resultValue',
                    value: (Number)(allValues2.input1Value) + (Number)(allValues2.input2Value)
                  });
                } else if (selectValue2 == 2) {
                  dispatch2({
                    type: 'resultValue',
                    value: (Number)(allValues2.input1Value) - (Number)(allValues2.input2Value)
                  });
                } else if (selectValue2 == 3) {
                  dispatch2({
                    type: 'resultValue',
                    value: (Number)(allValues2.input1Value) * (Number)(allValues2.input2Value)
                  });
                } else if (selectValue2 == 4) {
                  dispatch2({
                    type: 'resultValue',
                    value: (Number)(allValues2.input1Value) / (Number)(allValues2.input2Value)
                  });
                } else if (selectValue2 == 5) {
                  dispatch2({
                    type: 'resultValue',
                    value: (Number)(allValues2.input1Value) % (Number)(allValues2.input2Value)
                  });
                }
              }}>=</Button>
              <input className="final" value={allValues2.resultValue} readOnly={true}></input>
            </div>
            <div>
              <input value={allValues3.input1Value} onChange={e => {
                dispatch3({
                  type: 'input1Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                setSelectValue3(1);
              }}>+</Button>
              <Button onClick={() => {
                setSelectValue3(2);
              }}>-</Button>
              <Button onClick={() => {
                setSelectValue3(3);
              }}>*</Button>
              <Button onClick={() => {
                setSelectValue3(4);
              }}>/</Button>
              <Button onClick={() => {
                setSelectValue3(5);
              }}>%</Button>
              <input value={allValues3.input2Value} onChange={e => {
                dispatch3({
                  type: 'input2Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                if (selectValue3 == 1) {
                  dispatch3({
                    type: 'resultValue',
                    value: (Number)(allValues3.input1Value) + (Number)(allValues3.input2Value)
                  });
                } else if (selectValue3 == 2) {
                  dispatch3({
                    type: 'resultValue',
                    value: (Number)(allValues3.input1Value) - (Number)(allValues3.input2Value)
                  });
                } else if (selectValue3 == 3) {
                  dispatch3({
                    type: 'resultValue',
                    value: (Number)(allValues3.input1Value) * (Number)(allValues3.input2Value)
                  });
                } else if (selectValue3 == 4) {
                  dispatch3({
                    type: 'resultValue',
                    value: (Number)(allValues3.input1Value) / (Number)(allValues3.input2Value)
                  });
                } else if (selectValue3 == 5) {
                  dispatch3({
                    type: 'resultValue',
                    value: (Number)(allValues3.input1Value) % (Number)(allValues3.input2Value)
                  });
                }
              }}>=</Button>
              <input className="final" value={allValues3.resultValue} readOnly={true}></input>
            </div>
            <div>
              <input value={allValues4.input1Value} onChange={e => {
                dispatch4({
                  type: 'input1Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                setSelectValue4(1);
              }}>+</Button>
              <Button onClick={() => {
                setSelectValue4(2);
              }}>-</Button>
              <Button onClick={() => {
                setSelectValue4(3);
              }}>*</Button>
              <Button onClick={() => {
                setSelectValue4(4);
              }}>/</Button>
              <Button onClick={() => {
                setSelectValue4(5);
              }}>%</Button>
              <input value={allValues4.input2Value} onChange={e => {
                dispatch4({
                  type: 'input2Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                if (selectValue4 == 1) {
                  dispatch4({
                    type: 'resultValue',
                    value: (Number)(allValues4.input1Value) + (Number)(allValues4.input2Value)
                  });
                } else if (selectValue4 == 2) {
                  dispatch4({
                    type: 'resultValue',
                    value: (Number)(allValues4.input1Value) - (Number)(allValues4.input2Value)
                  });
                } else if (selectValue4 == 3) {
                  dispatch4({
                    type: 'resultValue',
                    value: (Number)(allValues4.input1Value) * (Number)(allValues4.input2Value)
                  });
                } else if (selectValue4 == 4) {
                  dispatch4({
                    type: 'resultValue',
                    value: (Number)(allValues4.input1Value) / (Number)(allValues4.input2Value)
                  });
                } else if (selectValue4 == 5) {
                  dispatch4({
                    type: 'resultValue',
                    value: (Number)(allValues4.input1Value) % (Number)(allValues4.input2Value)
                  });
                }
              }}>=</Button>
              <input className="final" value={allValues4.resultValue} readOnly={true}></input>
            </div>
            <div>
              <input value={allValues5.input1Value} onChange={e => {
                dispatch5({
                  type: 'input1Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                setSelectValue5(1);
              }}>+</Button>
              <Button onClick={() => {
                setSelectValue5(2);
              }}>-</Button>
              <Button onClick={() => {
                setSelectValue5(3);
              }}>*</Button>
              <Button onClick={() => {
                setSelectValue5(4);
              }}>/</Button>
              <Button onClick={() => {
                setSelectValue5(5);
              }}>%</Button>
              <input value={allValues5.input2Value} onChange={e => {
                dispatch5({
                  type: 'input2Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                if (selectValue5 == 1) {
                  dispatch5({
                    type: 'resultValue',
                    value: (Number)(allValues5.input1Value) + (Number)(allValues5.input2Value)
                  });
                } else if (selectValue5 == 2) {
                  dispatch5({
                    type: 'resultValue',
                    value: (Number)(allValues5.input1Value) - (Number)(allValues5.input2Value)
                  });
                } else if (selectValue5 == 3) {
                  dispatch5({
                    type: 'resultValue',
                    value: (Number)(allValues5.input1Value) * (Number)(allValues5.input2Value)
                  });
                } else if (selectValue5 == 4) {
                  dispatch5({
                    type: 'resultValue',
                    value: (Number)(allValues5.input1Value) / (Number)(allValues5.input2Value)
                  });
                } else if (selectValue5 == 5) {
                  dispatch5({
                    type: 'resultValue',
                    value: (Number)(allValues5.input1Value) % (Number)(allValues5.input2Value)
                  });
                }
              }}>=</Button>
              <input className="final" value={allValues5.resultValue} readOnly={true}></input>
            </div>
            <div>
              <input value={allValues6.input1Value} onChange={e => {
                dispatch6({
                  type: 'input1Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                setSelectValue6(1);
              }}>+</Button>
              <Button onClick={() => {
                setSelectValue6(2);
              }}>-</Button>
              <Button onClick={() => {
                setSelectValue6(3);
              }}>*</Button>
              <Button onClick={() => {
                setSelectValue6(4);
              }}>/</Button>
              <Button onClick={() => {
                setSelectValue6(5);
              }}>%</Button>
              <input value={allValues6.input2Value} onChange={e => {
                dispatch6({
                  type: 'input2Value',
                  value: e.target.value
                });
              }}></input>
              <Button onClick={() => {
                if (selectValue6 == 1) {
                  dispatch6({
                    type: 'resultValue',
                    value: (Number)(allValues6.input1Value) + (Number)(allValues6.input2Value)
                  });
                } else if (selectValue6 == 2) {
                  dispatch6({
                    type: 'resultValue',
                    value: (Number)(allValues6.input1Value) - (Number)(allValues6.input2Value)
                  });
                } else if (selectValue6 == 3) {
                  dispatch6({
                    type: 'resultValue',
                    value: (Number)(allValues6.input1Value) * (Number)(allValues6.input2Value)
                  });
                } else if (selectValue6 == 4) {
                  dispatch6({
                    type: 'resultValue',
                    value: (Number)(allValues6.input1Value) / (Number)(allValues6.input2Value)
                  });
                } else if (selectValue6 == 5) {
                  dispatch6({
                    type: 'resultValue',
                    value: (Number)(allValues6.input1Value) % (Number)(allValues6.input2Value)
                  });
                }
              }}>=</Button>
              <input className="final" value={allValues6.resultValue} readOnly={true}></input>
            </div>
          </Stack>
        </Provider>
      </body>
    </html>
  );
}

function reducer1(allValues1, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues1,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues1,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues1,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

function reducer2(allValues2, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues2,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues2,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues2,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

function reducer3(allValues3, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues3,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues3,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues3,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

function reducer4(allValues4, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues4,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues4,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues4,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

function reducer5(allValues5, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues5,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues5,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues5,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

function reducer6(allValues6, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues6,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues6,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues6,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}