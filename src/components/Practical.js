import React, { useState } from 'react';

const Practical = (props) => {

    const [expInfo, setExpInfo] = useState([
        {compName:'', position: '', desc: '', from: '', until: ''}
    ])

    const handleFormChange = (index, Event) => {
        let data = [...expInfo];
        data[index][Event.target.name] = Event.target.value;
        setExpInfo(data);
    }

    const handleExpSubmit = (e) => {
        e.preventDefault();
        props.onSub(expInfo);
    }

    const addExpInfo = () => {
        let newExp = {compName:'', position: '', desc: '', from: '', until: ''};
        setExpInfo([
            ...expInfo,
            newExp
        ])
    }
        
    return(
        <div className='practical-info'>
            <form action="" className="expInfo-form" onSubmit={handleExpSubmit}>
                <h3 className='expInfo-title'>Practical Experience</h3>
                {expInfo.map((input, index) => {
                return (
                    <div className='expInfo' key={index}>
                        <div className="name-session">
                            <input type='text' placeholder='Company Name: ' id={`inputCompName${index}`} name='compName' onChange={event => handleFormChange(index, event)} value={input.compName} required></input>
                            <input type='text' placeholder='Position Title: ' id={`inputPosition${index}`} name='position' onChange={event => handleFormChange(index, event)} value={input.position} required></input>
                        </div>
                        <div className="date-session">
                            <div className="start">
                                <label htmlFor={`inputDateFrom${index}`}>From: </label>
                                <input type='date' id={`inputDateFrom${index}`} name='from' onChange={event => handleFormChange(index, event)} value={input.from} required></input>
                            </div>
                            <div className="finish">
                                <label htmlFor={`inputDateUntil${index}`}>To: </label>
                                <input type='date' id={`inputDateUntil${index}`} name='until' onChange={event => handleFormChange(index, event)} value={input.until} required></input>
                            </div>
                        </div>
                        <textarea name='desc' className='text-desc' onChange={event => handleFormChange(index, event)} value={input.desc} maxLength={100} placeholder='Main tasks of your job...'></textarea>
                        <button type='button' onClick={addExpInfo} >Add Practical Experience</button>
                    </div>
                )})}
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}


export default Practical;