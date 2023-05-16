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
      educationalCounter: 0,
      educationalInfo: [
        {key: 0, school: '', study: '', start: '', finish: ''}
      ],
    }

  this.handleGenSubmit = this.handleGenSubmit.bind(this);
  }

  handleGenSubmit (form) {
    this.setState({
        Name: form.inputName,
        Email: form.inputEmail,
        Num: form.inputNumber,
    }, /* () => console.log(this.state, "App") */);
    
  }

  handleEducationalSubmit (form) {
    console.log(form);
    /* this.setState(prevState => ({

      educationalInfo: prevState.educationalInfo.map(
        el => el.key === form.key? { ...el, school: form.educationalInfo.school }: el
      ),
      educationalInfo: prevState.educationalInfo.map(
        el => el.key === form.key? { ...el, study: form.educationalInfo.study }: el
      ),
      educationalInfo: prevState.educationalInfo.map(
        el => el.key === form.key? { ...el, start: form.educationalInfo.start }: el
      ),
      educationalInfo: prevState.educationalInfo.map(
        el => el.key === form.key? { ...el, finish: form.educationalInfo.finish }: el
      )
    
    })) */
    
  }

  render () {
    
    return (
      <div className="App">
        <header className="App-header">The Odin Project - CV Application</header>
        <GeneralForm onSub = {this.handleGenSubmit}  />
        <Educational onSub = {this.handleEducationalSubmit} keyInfo = {this.state.educationalCounter} />
        <div className='practicalExp-title'>Practical Experience</div>
        <div className='practicalExp'></div>
        <button className='addPracticalExp'>Add</button>
        <div className="completeCv-title">Your CV</div>
      </div>
    );
  }
}

export default App;
