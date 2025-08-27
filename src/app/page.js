'use client';
import { useState, useReducer } from 'react';
import { Provider } from '@/components/ui/provider';
import { Button, Stack, AbsoluteCenter } from '@chakra-ui/react';

export default function Home() {
  const [allValues, dispatch] = useReducer(reducer, {
    input1Value: 0,
    input2Value: 0,
    resultValue: 0
  });

  const [selectValue, setSelectValue] = useState(0);

  // Provider negates all the h1-h6 elements

  return (
    <html suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Provider>
          <AbsoluteCenter>
            <Stack>
              <div>
                <input value={allValues.input1Value} onChange={e => {
                  dispatch({
                    type: 'input1Value',
                    value: e.target.value
                  });
                }}></input>
                <Button onClick={() => {
                  setSelectValue(1);
                }}>+</Button>
                <Button onClick={() => {
                  setSelectValue(2);
                }}>-</Button>
                <Button onClick={() => {
                  setSelectValue(3);
                }}>*</Button>
                <Button onClick={() => {
                  setSelectValue(4);
                }}>/</Button>
                <Button onClick={() => {
                  setSelectValue(5);
                }}>%</Button>
                <input value={allValues.input2Value} onChange={e => {
                  dispatch({
                    type: 'input2Value',
                    value: e.target.value
                  });
                }}></input>
                <Button onClick={() => {
                  if (selectValue == 1) {
                    dispatch({
                      type: 'resultValue',
                      value: (Number)(allValues.input1Value) + (Number)(allValues.input2Value)
                    });
                  } else if (selectValue == 2) {
                    dispatch({
                      type: 'resultValue',
                      value: (Number)(allValues.input1Value) - (Number)(allValues.input2Value)
                    });
                  } else if (selectValue == 3) {
                    dispatch({
                      type: 'resultValue',
                      value: (Number)(allValues.input1Value) * (Number)(allValues.input2Value)
                    });
                  } else if (selectValue == 4) {
                    dispatch({
                      type: 'resultValue',
                      value: (Number)(allValues.input1Value) / (Number)(allValues.input2Value)
                    });
                  } else if (selectValue == 5) {
                    dispatch({
                      type: 'resultValue',
                      value: (Number)(allValues.input1Value) % (Number)(allValues.input2Value)
                    });
                  }
                }}>=</Button>
                <input className="final" value={allValues.resultValue} readOnly={true}></input>
              </div>
            </Stack>
          </AbsoluteCenter>
        </Provider>
      </body>
    </html>
  );
}

function reducer(allValues, action) {
  if (action.type == 'input1Value') {
    return {
      ...allValues,
      input1Value: action.value
    };
  } else if (action.type == 'input2Value') {
    return {
      ...allValues,
      input2Value: action.value
    };
  } else if (action.type == 'resultValue') {
    return {
      ...allValues,
      resultValue: action.value
    };
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}
