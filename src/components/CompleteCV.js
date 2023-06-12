import React, { useState } from 'react';

  const CompleteCV = (props) => {

    const [cvData, setCvData] = useState({
      Name: '',
      Num: '',
      Email: '',
      Address: '',
      Title: '',
      skills: [],
      Profile: 'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg',
      educationalInfo: [],
      expInfo: [],
    })

  const loadCV = () => {
    let eduData = [...props.educInfo];
    let expData = [...props.practicalInfo];
    let skillSet = [...props.generalInfo.skills];
    setCvData({
      Name: props.generalInfo.name,
      Num: props.generalInfo.num,
      Email: props.generalInfo.email,
      Address: props.generalInfo.address,
      Title: props.generalInfo.title,
      skills: skillSet,
      Profile: props.generalInfo.profile,
      educationalInfo: eduData,
      expInfo: expData,
    });
  }
    
  return (
    <div className='completeCV'>
      <button className='loadBtn' onClick={loadCV}>Load / Reload CV</button>
      <div className="cv-display">
        <div className="left-area">
          <div className="profile-area">
            <img alt='profile-image' height={150} src={cvData.Profile} />
            <div className='candidateName'>{cvData.Name}</div>
            <div className='candidateTitle'>{cvData.Title}</div>
          </div>
          <div className="contact-area">
            <div className='contactTitle'>Contact</div>
            <div className='candidateNum'>📱 {cvData.Num}</div>
            <div className='candidateEmail'>📧 {cvData.Email}</div>
            <div className='candidateAddress'>{cvData.Address}</div>
          </div>
          <div className='skills-area'>
            <div className='skillsTitle'>Skills</div>
            <ul className='skillsList'>
              {cvData.skills.map((input, index) =>
                  <li className='skillsDisp' key={index}>{input}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="right-area">
          <div className="education-area">
            <div className='educInfoTitle'>Education</div>
            {cvData.educationalInfo.map((input, index) => {
              return (
                <div className='educDispInfo' key={index}>
                  <div className='candidateSchool' id={`school${index}`}>{input.school}</div>
                  <div className='candidateStudy' id={`study${index}`}>{input.study}</div>
                  <div className='educDates'>
                    <div className="startDate">
                      <div className='startTitle'>Start: </div>
                      <div className='candidateStart' id={`start${index}`}>{input.start}</div>
                    </div>
                    <div className="finishDate">
                      <div className='finishTitle'>Finish: </div>
                      <div className='candidatefinish' id={`finish${index}`}>{input.finish}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="workingExp-area">
            <div className='expInfoTitle'>Working Experience</div>
            {cvData.expInfo.map((input, index) => {
              return (
                <div className='expDispInfo' key={index}>
                  <div className='candidateCompName' id={`comp${index}Name`}>{input.compName}</div>
                  <div className='candidatePosition' id={`position${index}`}>{input.position}</div>
                  <div className='expDates'>
                    <div className="fromDate">
                      <div className='fromTitle'>From: </div>
                      <div className='candidateFrom' id={`from${index}`}>{input.from}</div>
                    </div>
                    <div className="untilDate">
                      <div className='untilTitle'>Until: </div>
                      <div className='candidateUntil' id={`until${index}`}>{input.until}</div>
                    </div>
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
    </div>
  )
}

export default CompleteCV;