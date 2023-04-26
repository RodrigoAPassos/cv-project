import './App.css';
import React, { Component } from 'react';
import General from './components/General';
import Practical from './components/Practical';
import Educational from './components/Educational';

class App extends Component {
  constructor () {
    super ();
    
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">The Odin Project - CV Application</header>
      <General />
      <Educational />
      <Practical />
    </div>
    );
  }
}

export default App;
