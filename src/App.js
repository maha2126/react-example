import React from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends React.Component{
  state = {num:0}

  /* countUp = () => {
    this.setState(current =>{
      current.num++
      return current
    })
  } */
  countUp = () =>{
    this.setState(current =>{
      return {
        num: current.num+1
      }
    })
  }
  render(){
    const {num} = this.state
    return<div>
      <h1>number-{num}</h1>
      <button onClick={this.countUp}>Up</button>
    </div>
  }
}

export default App;
