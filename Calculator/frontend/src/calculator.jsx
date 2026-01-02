import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
  try {
    const [num1, operator, num2] = displayValue.split(/([+\-*/])/);
    let url;
    let metodo;

    if (operator === '+') {
      url = `http://localhost:3000/suma/${num1}/${num2}`;
      metodo = 'GET';
    } else if (operator === '*') {
      url = `http://localhost:3000/multiplicacion/${num1}/${num2}`;
      metodo = 'GET';
    } else if (operator === '-') {
      url = `http://localhost:3000/resta`;
      metodo = 'POST';
    } else if (operator === '/') {
        url = `http://localhost:3000/division`;
        metodo = 'POST';
    } else {
      throw new Error('Operación invalida');
    }


    if (metodo === 'GET') {
      fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(response => response.json())
        .then(result => {setDisplayValue(result.toString());
        })
        .catch(error => {console.error('Error:', error);
        setDisplayValue('Error');
        });
    } else {
      fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1: parseInt(num1), num2: parseInt(num2) }),  //si no hago esto, me mandaba un error de Json
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            throw new Error(result.error); 
          } else {
            setDisplayValue(result.result.toString());
          }
        })
        .catch(error => {console.error('Error:', error);
        setDisplayValue(error.message); //esto lo hice para ver cuál era el error.
      });
      }
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleDelete = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <button className="button function" onClick={() => handleButtonClick('/')}>/</button>
      <button className="button" > </button>
      <button className="button" onClick={handleClear}>C</button>
      <button className="button delete" onClick={handleDelete}>Delete</button>
      <button className="button" onClick={() => handleButtonClick('7')}>7</button>
      <button className="button" onClick={() => handleButtonClick('8')}>8</button>
      <button className="button" onClick={() => handleButtonClick('9')}>9</button>
      <button className="button function" onClick={() => handleButtonClick('*')}>*</button>
      <button className="button" onClick={() => handleButtonClick('4')}>4</button>
      <button className="button" onClick={() => handleButtonClick('5')}>5</button>
      <button className="button" onClick={() => handleButtonClick('6')}>6</button>
      <button className="button function" onClick={() => handleButtonClick('-')}>-</button>
      <button className="button" onClick={() => handleButtonClick('1')}>1</button>
      <button className="button" onClick={() => handleButtonClick('2')}>2</button>
      <button className="button" onClick={() => handleButtonClick('3')}>3</button>
      <button className="button function" onClick={() => handleButtonClick('+')}>+</button>
      <button className="button" >    </button>
      <button className="button" onClick={() => handleButtonClick('0')}>0</button>
      <button className="button equals" onClick={handleCalculate}>=</button>
    </div>
  );
}

export default Calculator;