import React, { Component } from 'react';

export default class CompleteCV extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Name: '',
      Num: '',
      Email: '',
      Address: '',
      Title: '',
      skills: [],
      Profile: 'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg',
      educationalInfo: [],
      expInfo: [],
    }

    this.loadCV = this.loadCV.bind(this);
  };

  loadCV () {
    let eduData = [...this.props.cvData.educationalInfo];
    let expData = [...this.props.cvData.expInfo];
    let skillSet = [...this.props.cvData.skills];
    this.setState({
      Name: this.props.cvData.Name,
      Num: this.props.cvData.Num,
      Email: this.props.cvData.Email,
      Address: this.props.cvData.Address,
      Title: this.props.cvData.Title,
      skills: skillSet,
      Profile: this.props.cvData.profile,
      educationalInfo: eduData,
      expInfo: expData,
    });
  }

  render() {
    const { Name, Num, Email, Title, Address, Profile } = this.state;
    
    return (
      <div className='completeCV'>
        <button className='loadBtn' onClick={this.loadCV}>Load / Reload CV</button>
        <div className="cv-display">
          <div className="profile-area">
            <img alt='profile-image' height={150} src={Profile} />
            <h3 className='candidateName'>{Name}</h3>
            <div className='candidateTitle'>{Title}</div>
          </div>
          <div className="contact-area">
            <h4 className='contactTitle'>Contact</h4>
            <div className='candidateNum'>📱 {Num}</div>
            <div className='candidateEmail'>📧 {Email}</div>
            <div className='candidateAddress'>{Address}</div>
          </div>
          <div className='skills-area'>
            <h4 className='skillsTitle'>Skills</h4>
            <ul className='skillsList'>
              {this.state.skills.map((input, index) => 
                  <li className='skillsDisp' key={index}>{input}</li>
              )}
            </ul>
          </div>
          <div className="education-area">
            <h4 className='educInfoTitle'>Education</h4>
            {this.state.educationalInfo.map((input, index) => {
              return (
                <div className='educDispInfo' key={index}>
                  <div className='candidateSchool' id={`school${index}`}>{input.school}</div>
                  <div className='candidateStudy' id={`study${index}`}>{input.study}</div>
                  <div className='educDates'>
                    <div className='candidateStart' id={`start${index}`}>{input.start}</div>
                    <div className='candidatefinish' id={`finish${index}`}>{input.finish}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="workingExp-area">
            <h4 className='expInfoTitle'>Working Experience</h4>
            {this.state.expInfo.map((input, index) => {
              return (
                <div className='expDispInfo' key={index}>
                  <div className='candidateCompName' id={`comp${index}Name`}>{input.compName}</div>
                  <div className='candidatePosition' id={`position${index}`}>{input.position}</div>
                  <div className='expDates'>
                    <div className='candidateFrom' id={`from${index}`}>{input.from}</div>
                    <div className='candidateUntil' id={`until${index}`}>{input.until}</div>
                  </div>
                  <div className="desc-area">
                    <div className='descTitle'>Job Description:</div>
                    <div className='candidateDesc' id={`desc${index}`}>{input.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}