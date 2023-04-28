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
      inputName: '',
      inputEmail: '',
      inputNumber: '',
      Name: '',
      Num: '',
      Email: ''
  }
  this.nameChange = this.nameChange.bind(this);
  this.emailChange = this.emailChange.bind(this);
  this.numberChange = this.numberChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange ({target: {value}}) {
    this.setState({inputName: value})
  }

  emailChange ({target: {value}}) {
    this.setState({inputEmail: value})
  }

  numberChange ({target: {value}}) {
    this.setState({inputNumber: value})
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({
        Name: this.state.inputName,
        Email: this.state.inputEmail,
        Num: this.state.inputNumber,
        inputName: '',
        inputEmail: '',
        inputNumber: '',
    })
    //console.log(this.state);
  }

  render () {
    const { inputEmail, inputName, inputNumber } = this.state;
    return (
      <div className="App">
        <header className="App-header">The Odin Project - CV Application</header>
        <GeneralForm onSub = {this.handleSubmit} onNumChange = {this.numberChange} onEmail = {this.emailChange} onName = {this.nameChange} inName = {inputName} inEmail = {inputEmail} inNum = {inputNumber} />
        <div className="completeCv-title">Your CV</div>
        <Educational />
        <Practical />
      </div>
    );
  }
}

export default App;
