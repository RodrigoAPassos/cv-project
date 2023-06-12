import React, { useState } from 'react';

const Educational = (props) => {

    const [educForm, setEducForm] = useState([
        {school: '', study: '', start: '', finish: ''}
    ])

    const handleFormChange = (index, Event) => {
        let data = [...educForm];
        data[index][Event.target.name] = Event.target.value;
        setEducForm(data);
    }

    const handleEducationalSubmit = (e) => {
        e.preventDefault();
        props.onSub(educForm);
    }

    const addEducationInfo = () => {
        let newInfo = {school: '', study: '', start: '', finish: ''};
        setEducForm([
            ...educForm,
            newInfo
        ])

    }
        
    return(
        <div className='educational-information'>
            <form action="" className="educationalInfo-form" onSubmit={handleEducationalSubmit}>
                <h3 className='eduInfo-title'>Educational Information</h3>
                {educForm.map((input, index) => {
                return (
                    <div className='educationalInfo' key={index}>
                        <div className="name-session">
                            <input type='text' placeholder="School's Name: " id={`inputSchool${index}`} name='school' onChange={event => handleFormChange(index, event)} value={input.school} required></input>
                            <input type='text' placeholder='Title of Study: ' id={`inputStudy${index}`} name='study' onChange={event => handleFormChange(index, event)} value={input.study} required></input>
                        </div>
                        <div className="date-session">
                            <div className="start">
                                <label htmlFor={`inputDateS${index}`}>Start: </label>
                                <input type='date' id={`inputDateS${index}`} name='start' onChange={event => handleFormChange(index, event)} value={input.start} required></input>
                            </div>
                            <div className="finish">
                                <label htmlFor={`inputDateF${index}`}>Finish: </label>
                                <input type='date' id={`inputDateF${index}`} name='finish' onChange={event => handleFormChange(index, event)} value={input.finish} required></input>
                            </div>
                        </div>
                        <button type='button' onClick={addEducationInfo} >Add Education Info</button>
                    </div>
                )})}
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}


export default Educational;