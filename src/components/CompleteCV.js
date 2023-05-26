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
      Profile: 'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg',
      educationalInfo: [],
      expInfo: [],
    }

    this.loadCV = this.loadCV.bind(this);
  };

  loadCV () {
    let eduData = [...this.props.cvData.educationalInfo];
    let expData = [...this.props.cvData.expInfo];
    this.setState({
      Name: this.props.cvData.Name,
      Num: this.props.cvData.Num,
      Email: this.props.cvData.Email,
      Address: this.props.cvData.Address,
      Title: this.props.cvData.Title,
      Profile: this.props.cvData.profile,
      educationalInfo: eduData,
      expInfo: expData,
    });
  }

  render() {
    const { Name, Num, Email, Title, Address, Profile } = this.state;
    
    return (
      <div className='completeCV'>
        <button onClick={this.loadCV}>Load / Reload CV</button>
        <div className="cv-display">
          <img alt='profile-image' height={150} src={Profile} />
          <div className='candidateName'>{Name}</div>
          <div className='candidateTitle'>{Title}</div>
          <h4 className='contactTitle'>Contact</h4>
          <div className='candidateEmail'>{Email}</div>
          <div className='candidateNum'>{Num}</div>
          <div className='candidateAddress'>{Address}</div>
          <h4 className='educInfoTitle'>Education</h4>
          {this.state.educationalInfo.map((input, index) => {
            return (
              <div className='educDispInfo' key={index}>
                <div className='candidateSchool' id={`school${index}`}>{input.school}</div>
                <div className='candidateStudy' id={`study${index}`}>{input.study}</div>
                <div className='candidateStart' id={`start${index}`}>{input.start}</div>
                <div className='candidatefinish' id={`finish${index}`}>{input.finish}</div>
              </div>
            )
          })}
          <h4 className='expInfoTitle'>Working Experience</h4>
          {this.state.expInfo.map((input, index) => {
            return (
              <div className='expDispInfo' key={index}>
                <div className='candidateCompName' id={`comp${index}Name`}>{input.compName}</div>
                <div className='candidatePosition' id={`position${index}`}>{input.position}</div>
                <div className='candidateDesc' id={`desc${index}`}>{input.desc}</div>
                <div className='candidateFrom' id={`from${index}`}>{input.from}</div>
                <div className='candidateUntil' id={`until${index}`}>{input.until}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}