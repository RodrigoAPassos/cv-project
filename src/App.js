import './App.css';
import React, { Component } from 'react';
import GeneralForm from './components/General';
import Practical from './components/Practical';
import Educational from './components/Educational';
import CompleteCV from './components/CompleteCV';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      Name: '',
      Num: '',
      Email: '',
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (form) {
    this.setState({
        Name: form.inputName,
        Email: form.inputEmail,
        Num: form.inputNumber,
    }, () => console.log(this.state, "App"));
    
  }

  render () {
    const { inputEmail, inputName, inputNumber } = this.state;
    return (
      <div className="App">
        <header className="App-header">The Odin Project - CV Application</header>
        <GeneralForm onSub = {this.handleSubmit}  />
        <div className="completeCv-title">Your CV</div>
        <Educational />
        <Practical />
      </div>
    );
  }
}

export default App;
