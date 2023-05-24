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
      Address: '',
      Title: '',
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
        Address: form.inputAddress,
        Title: form.inputTitle,
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
        <div className="entry-forms">
          <GeneralForm onSub = {this.handleGenSubmit}  />
          <Educational onSub = {this.handleEducationalSubmit} />
          <Practical onSub = {this.handlePracticalSubmit}  />
        </div>
        <div className="display-cv">
          <h3 className="completeCv-title">Your CV ⬇️ </h3>
          <CompleteCV cvData = {this.state} />
        </div>
      </div>
    );
  }
}

export default App;
