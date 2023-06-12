import './App.css';
import React, { useState } from 'react';
import GeneralForm from './components/General';
import Practical from './components/Practical';
import Educational from './components/Educational';
import CompleteCV from './components/CompleteCV';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [profile, setProfile] = useState('');
  const [skills, setSkills] = useState([]);
  const [educationalInfo, setEducInfo] = useState([]);
  const [expInfo, setExpInfo] = useState([]);

  const handleGenSubmit = (form) => {
    let skillSet = [...form.skills];
    skillSet = skillSet.map(skill => skill.trim());
    setName(form.inputName);
    setEmail(form.inputEmail);
    setNum(form.inputNumber);
    setAddress(form.inputAddress);
    setTitle(form.inputTitle);
    setProfile(form.profile);
    setSkills(skillSet);
  }

  const handleEducationalSubmit = (educForm) => {
   setEducInfo(educForm)
  }

  const handlePracticalSubmit = (expInfo) => {
    setExpInfo(expInfo)
  }

  const genInfo = {name, email, num, address, title, profile, skills};
    
  return (
    <div className="App">
      <header className="App-header">The Odin Project - CV Application</header>
      <div className="entry-forms">
        <GeneralForm onSub = {handleGenSubmit}  />
        <Educational onSub = {handleEducationalSubmit} />
        <Practical onSub = {handlePracticalSubmit}  />
      </div>
      <div className="display-cv">
        <h3 className="completeCv-title">Your CV ⬇️ </h3>
        <CompleteCV 
        generalInfo = {genInfo}
        educInfo = {educationalInfo}
        practicalInfo = {expInfo}
        />
      </div>
    </div>
  );
  
}

export default App;
