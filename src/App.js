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
      educationalInfo: [],
      expInfo: [],
    }

  this.handleGenSubmit = this.handleGenSubmit.bind(this);
  this.handleEducationalSubmit = this.handleEducationalSubmit.bind(this);
  this.handlePracticalSubmit = this.handlePracticalSubmit.bind(this);
  }

  handleGenSubmit (form) {
    this.setState({
        Name: form.inputName,
        Email: form.inputEmail,
        Num: form.inputNumber,
    }, /* () => console.log(this.state, "App") */);
    
  }

  handleEducationalSubmit (form) {
    //add at end
    /* this.setState(prevState => ({
      educationalInfo: [...prevState.educationalInfo, form.educationalInfo]
    }), ()=> console.log(this.state)); */
    //replace
    let data = [...form.educationalInfo];
    this.setState({educationalInfo: data}, /* ()=> console.log(this.state) */);
  }

  handlePracticalSubmit (form) {
    let data = [...form.expInfo];
    this.setState({expInfo: data}, ()=> console.log(this.state));
  }

  render () {
    
    return (
      <div className="App">
        <header className="App-header">The Odin Project - CV Application</header>
        <GeneralForm onSub = {this.handleGenSubmit}  />
        <Educational onSub = {this.handleEducationalSubmit} />
        <Practical onSub = {this.handlePracticalSubmit}  />
        <div className="completeCv-title">Your CV</div>
      </div>
    );
  }
}

export default App;
