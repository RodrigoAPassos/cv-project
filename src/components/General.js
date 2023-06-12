import React, { useState } from 'react';

const GeneralForm = (props) => {

    const [form, setForm] = useState({
        inputName: '',
        inputEmail: '',
        inputNumber: '',
        inputTitle: '',
        inputAddress: '',
        profile: 'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg',
        skills: [],
    })

    const nameChange =  (Event) => {
        setForm({
            ...form,
            inputName: Event.target.value,
        })
    }
    
    const emailChange = (Event) => {
        setForm({
            ...form,
            inputEmail: Event.target.value,
        })
    }
    
    const numberChange = (Event) => {
        setForm({
            ...form,
            inputNumber: Event.target.value,
        })
    }

    const titleChange = (Event) => {
        setForm({
            ...form,
            inputTitle: Event.target.value,
        })
    }

    const addressChange = (Event) => {
        setForm({
            ...form,
            inputAddress: Event.target.value,
        })
    }

    const handleFile = (Event) => {
        if (Event.target.files.length == 0) {
            setForm({
                ...form,
                profile: 'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg',
            }) 
        }else if (Event.target.files && Event.target.files[0]) {
            setForm({
                ...form,
                profile: URL.createObjectURL(Event.target.files[0]),
            })
        }
    }

    const handleSkillsChange = (Event) => {
        let skillSet = Event.target.value.split(',');
        setForm({
            ...form,
            skills: skillSet,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSub(form);
    }

    return(
        <div className='generalInformation'>
            <h3 className='generalInfo-title'>General Information</h3>
            <form action="" className="generalInfo-form" onSubmit={handleSubmit}>
                <input type='text' placeholder='Name: ' id='inputName' name='inputName' onChange={nameChange} value={form.inputName} required></input>
                <input type='email' placeholder='E-mail: ' id='inputEmail' name='inputEmail' onChange={emailChange} value={form.inputEmail} required></input>
                <input type='tel' id='inputNumber' name='inputNumber' onChange={numberChange} value={form.inputNumber} pattern='[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}' placeholder='Phone Number: +99(99)99999-9999' required></input>
                <input type='text' placeholder='Address: ' id='inputAddress' name='inputAddress' onChange={addressChange} value={form.inputAddress} maxLength={50} required></input>
                <input type='text' placeholder='Title: ' id='inputTitle' name='inputTitle' onChange={titleChange} value={form.inputTitle} maxLength={30} required></input>
                <textarea name='skills' className='skills-entry' onChange={handleSkillsChange} value={form.skills} maxLength={100} placeholder='Type your skills separeted by comma...'></textarea>
                <div className="photoEntry">
                    <label htmlFor='inputPhoto'>Photo</label>
                    <input id='inputPhoto' name='candidatePhoto' type='file' onChange={handleFile} ></input>
                </div>
                <button className='genSub' type='submit'>Save</button>
            </form>
        </div>
    )
}


export default GeneralForm;