import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputName: '',
            inputEmail: '',
            inputNumber: '',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
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

    handleSubmit (e) {
        e.preventDefault();
        this.props.onSub(this.state);
        /* this.setState({
            inputNumber: '',
            inputEmail: '',
            inputName: ''
        }) */
    }

    render() {
        const { inputName, inputEmail, inputNumber } = this.state;
        return(
            <div className='generalInformation'>
                <h3 className='generalInfo-title'>General Information</h3>
                <form action="" className="generalInfo-form" onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Name: ' id='inputName' name='inputName' onChange={this.nameChange} value={inputName} required></input>
                    <input type='email' placeholder='E-mail: ' id='inputEmail' name='inputEmail' onChange={this.emailChange} value={inputEmail} required></input>
                    <input type='tel' id='inputNumber' name='inputNumber' onChange={this.numberChange} value={inputNumber} pattern='[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}' placeholder='Number: +99(99)99999-9999' required></input>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default GeneralForm;