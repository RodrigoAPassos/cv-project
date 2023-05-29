import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputName: '',
            inputEmail: '',
            inputNumber: '',
            inputTitle: '',
            inputAddress: '',
            profile: '',
            skills: [],
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
    }

    nameChange ({target: {value}}) {
        this.setState({inputName: value})
    }
    
    emailChange ({target: {value}}) {
        this.setState({inputEmail: value})
    }
    
    numberChange ({target: {value}}) {
        this.setState({inputNumber: value})
    }

    titleChange ({target: {value}}) {
        this.setState({inputTitle: value})
    }

    addressChange ({target: {value}}) {
        this.setState({inputAddress: value})
    }

    handleFile (event) {
        if (event.target.files && event.target.files[0]) {
            this.setState({profile: URL.createObjectURL(event.target.files[0])});
          }
    }

    handleSkillsChange ({target: {value}}) {
        let skillSet = value.split(',');
        this.setState({skills: skillSet});
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.onSub(this.state);
    }

    render() {
        const { inputName, inputEmail, inputNumber, inputAddress, inputTitle, skills } = this.state;
        return(
            <div className='generalInformation'>
                <h3 className='generalInfo-title'>General Information</h3>
                <form action="" className="generalInfo-form" onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Name: ' id='inputName' name='inputName' onChange={this.nameChange} value={inputName} required></input>
                    <input type='email' placeholder='E-mail: ' id='inputEmail' name='inputEmail' onChange={this.emailChange} value={inputEmail} required></input>
                    <input type='tel' id='inputNumber' name='inputNumber' onChange={this.numberChange} value={inputNumber} pattern='[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}' placeholder='Phone Number: +99(99)99999-9999' required></input>
                    <input type='text' placeholder='Address: ' id='inputAddress' name='inputAddress' onChange={this.addressChange} value={inputAddress} maxLength={50} required></input>
                    <input type='text' placeholder='Title: ' id='inputTitle' name='inputTitle' onChange={this.titleChange} value={inputTitle} maxLength={30} required></input>
                    <textarea name='skills' className='skills-entry' onChange={this.handleSkillsChange} value={skills} maxLength={100} placeholder='Type your skills separeted by comma...'></textarea>
                    <div className="photoEntry">
                        <label htmlFor='inputPhoto'>Photo</label>
                        <input id='inputPhoto' name='candidatePhoto' type='file' onChange={this.handleFile}></input>
                    </div>
                    <button className='genSub' type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default GeneralForm;