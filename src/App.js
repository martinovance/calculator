import React, { useState } from 'react';
import './App.css';

// import TripleToggleSwitch from 'react-triple-toggle-switch';

const App = () => {
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('theme1');

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
    }
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

  // const labels = {
  //   left: {
  //     title: 'left',
  //     value: 'left'
  //   },
  //   right: {
  //     title: 'right',
  //     value: 'right'
  //   },
  //   center: {
  //     title: 'center',
  //     value: 'center'
  //   },
  // }

  // const onChange = (value) => {
  //   console.log('value',value)
  // }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="header">
          <h2>calc</h2>
          <div className="toggle">
            <body1>THEME</body1>
            {/* <h6>1 2 3</h6> */}
            <div>
            {/* <TripleToggleSwitch
              labels={labels}
              onChange={onChange}
            /> */}
            </div>
              <button
                onClick={toggleTheme}
              >
                toggleMode
              </button>
          </div>
        </div>
        <form>
          <input type="text" placeholder="0" value={result} />
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