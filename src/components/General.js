import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const { inputName, inputEmail, inputNumber, onNumChange, onEmail, onName } = this.props;
        return(
            <div className='generalInformation'>
                <div className='generalInfo-title'>General Information</div>
                <form action="" className="generalInfo-form" onSubmit={this.props.onSub}>
                    <label htmlFor='inputName'>Name: </label>
                    <input type='text' id='inputName' name='inputName' onChange={onName} value={inputName} required></input>
                    <label htmlFor='inputEmail'>E-mail: </label>
                    <input type='email' id='inputEmail' name='inputEmail' onChange={onEmail} value={inputEmail} required></input>
                    <label htmlFor='inputNumber'>Number: </label>
                    <input type='text' id='inputNumber' name='inputNumber' onChange={onNumChange} value={inputNumber} pattern='[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}' placeholder='+99(99)99999-9999' required></input>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default GeneralForm;