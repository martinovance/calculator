import React, { useState } from 'react';
import './App.css';

const labels = ['1', '2', '3'];

const App = () => {
  const [theme, setTheme] = useState('theme1');
  const [position, setPosition] = useState('initial');
  const [result, setResult] = useState('');

  const toggleTheme = () => {
    switch (theme) {
      case 'theme1':
        setTheme('theme2');
        document.body.style.backgroundColor = '#d1cdcc';
        break;
      case 'theme2':
        setTheme('theme3');
        document.body.style.backgroundColor = '#57067f';
        break;
      case 'theme3':
        setTheme('theme1');
        document.body.style.backgroundColor = '#647299';
        break;
      default:
        setTheme('theme1');
        document.body.style.backgroundColor = '#647299';
        break;
    };

    if (position === 'initial') {
      setPosition('center');
    } else if (position === 'center') {
      setPosition('end');
    } else {
      setPosition('initial');
    };
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const reset = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.length -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('error')
    }
  }

const formatInputValue = (value) => {
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const formattedValue = formatInputValue(value);
    setResult(formattedValue);
  };


  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="header">
          <h2>calc</h2>
          <div className="toggle">
            <body1>THEME</body1>
            <div>
              <div className="toggle-label">
                {labels.map((label) => (
                  <div className="label" key={label}>
                    {label}
                  </div>
                ))}
              </div>
              <div className="toggle-divs" onClick={toggleTheme} >
                <div className={`toggle-dot ${position}`} />
              </div>
            </div>
          </div>
        </div>
        <form>
          <input 
            type="text" 
            placeholder="0" 
            value={formatInputValue(result)} 
            onChange={handleInput} 
          />
        </form>

        <div className="keypad">
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="highlight" onClick={backspace} id="delete">DEL</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="-" onClick={handleClick}>-</button>
          <button name="." onClick={handleClick}>.</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="/" onClick={handleClick}>/</button>
          <button name="*" onClick={handleClick}>x</button>
          <button className="highlight" onClick={reset} id="clear">RESET</button>
          <button className="action" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  )
}

export default App;