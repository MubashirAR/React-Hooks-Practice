import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, countUpdate] = useState(0);
  useEffect(() => {
    console.log('Render was executed!');
    let clickEvent = () => console.log('You clicked the window!');
    window.addEventListener('click', clickEvent);
    return () => {
      window.removeEventListener('click', clickEvent);
    };
  // }, [count % 2]); // since count % 2 doesnt change, this useEffect is not called
  }, []); // When empty array is passed, this useEffect is not called
  useEffect(() => {
    console.log('Double trouble!');
  });// No array passed? Run everytime@
  // let [obj, setObj] = useState({
  //   name: 'Mubashir',
  //   mobile: '123',
  // });
  let [obj, setObj] = useState(() => ({
    name: 'Mubashir',
    mobile: '123',
  }));
  let newMobile = () => {
    setObj({
      name: 'Mubashir',
      mobile: parseInt(Math.random() * 10 ** 10),
    });
    countUpdate(prevCount => (prevCount += 2));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {obj.name} : {obj.mobile}
        <br />
        {count}
        <button onClick={_ => newMobile()}>Increment</button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
