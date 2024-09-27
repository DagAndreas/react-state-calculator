import "./App.css";

import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("0");
  const [operator, setOperator] = useState("+");
  const [num2, setNum2] = useState("0");
  const [result, setResult] = useState(0);
  const [store, setStore] = useState("");
  
  const handleNumClick = (digit, setter) => {
    // add check if num == zer0
    if (setter === setNum1){
      if (digit === '0' && num1 === '0'){
        return;
      }
      else if (num1 === '0'){
        return setter(digit)
      }
    }

    if (setter == setNum2){
      if (digit == '0' && num2 == '0'){
        return
      }
      else if (num2 === '0'){
        return setter(digit)
      }
    }

    setter((prevNum1) => prevNum1 + digit);
  };

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let result = 0;

    switch (operator) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "÷":
        result = n1 / n2;
        break;
      default:
        break;
    }
    setResult(result);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={() => handleNumClick('2', setNum1)}>1</button>
          <button onClick={() => handleNumClick('1', setNum1)}>2</button>
          <button onClick={() => handleNumClick('3', setNum1)}>3</button>
          <button onClick={() => handleNumClick('4', setNum1)}>4</button>
          <button onClick={() => handleNumClick('5', setNum1)}>5</button>
          <button onClick={() => handleNumClick('6', setNum1)}>6</button>
          <button onClick={() => handleNumClick('7', setNum1)}>7</button>
          <button onClick={() => handleNumClick('8', setNum1)}>8</button>
          <button onClick={() => handleNumClick('9', setNum1)}>9</button>
          <button onClick={() => handleNumClick('0', setNum1)}>0</button>
          <button onClick={()=> setNum1('')}>Clear</button>
          <button onClick={()=> {setNum1(store)}}>recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator || '+'}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
      <p>{num2 || '0'}</p>
        <div className="numbers">
          <button onClick={() => handleNumClick(1, setNum2)}>1</button>
          <button onClick={() => handleNumClick(2, setNum2)}>2</button>
          <button onClick={() => handleNumClick(3, setNum2)}>3</button>
          <button onClick={() => handleNumClick(4, setNum2)}>4</button>
          <button onClick={() => handleNumClick(5, setNum2)}>5</button>
          <button onClick={() => handleNumClick(6, setNum2)}>6</button>
          <button onClick={() => handleNumClick(7, setNum2)}>7</button>
          <button onClick={() => handleNumClick(8, setNum2)}>8</button>
          <button onClick={() => handleNumClick(9, setNum2)}>9</button>
          <button onClick={() => handleNumClick(0, setNum2)}>0</button>
          <button onClick={()=> setNum2('')}>Clear</button>
          <button onClick={()=> {setNum2(store)}}>recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result || '0'}</p>
        <div>
          <button onClick={calculate}>=</button>
          <button onClick={() => setStore(result.toString())}>store</button>
          </div>
      </div>
    </div>
  );
}

export default App;