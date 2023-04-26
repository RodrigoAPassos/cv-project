import React, { Component } from 'react';

class General extends Component {
    constructor () {
        super();
        this.state = {
            inputName: '',
            inputEmail: '',
            inputNumber: '',
            Name: '',
            Num: '',
            Email: ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({
            Name: this.state.inputName,
            Email: this.state.inputEmail,
            Num: this.state.inputNumber,
            inputName: '',
            inputEmail: '',
            inputNumber: '',
        })
        console.log(this.state);
    }

    render() {
        const { general } = this.state;
        return(
            <div className='generalInformation'>
                <div className='generalInfo-title'>General Information</div>
                <form action="" className="generalInfo-form" onSubmit={this.handleSubmit}>
                    <label htmlFor='inputName'>Name: </label>
                    <input type='text' id='inputName' name='inputName' onChange={this.nameChange} value={this.state.inputName} required></input>
                    <label htmlFor='inputEmail'>E-mail: </label>
                    <input type='email' id='inputEmail' name='inputEmail' onChange={this.emailChange} value={this.state.inputEmail} required></input>
                    <label htmlFor='inputNumber'>Number: </label>
                    <input type='text' id='inputNumber' name='inputNumber' onChange={this.numberChange} value={this.state.inputNumber} pattern='[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}' placeholder='+99(99)99999-9999' required></input>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default General;