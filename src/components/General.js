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
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
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

    handleSubmit (e) {
        e.preventDefault();
        this.props.onSub(this.state);
    }

    render() {
        const { inputName, inputEmail, inputNumber, inputAddress, inputTitle } = this.state;
        return(
            <div className='generalInformation'>
                <h3 className='generalInfo-title'>General Information</h3>
                <form action="" className="generalInfo-form" onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Name: ' id='inputName' name='inputName' onChange={this.nameChange} value={inputName} required></input>
                    <input type='email' placeholder='E-mail: ' id='inputEmail' name='inputEmail' onChange={this.emailChange} value={inputEmail} required></input>
                    <input type='tel' id='inputNumber' name='inputNumber' onChange={this.numberChange} value={inputNumber} pattern='[\+]\d{2}[\(]\d{2}[\)]\d{5}[\-]\d{4}' placeholder='Phone Number: +99(99)99999-9999' required></input>
                    <input type='text' placeholder='Address: ' id='inputAddress' name='inputAddress' onChange={this.addressChange} value={inputAddress} maxLength={50} required></input>
                    <input type='text' placeholder='Title: ' id='inputTitle' name='inputTitle' onChange={this.titleChange} value={inputTitle} maxLength={30} required></input>
                    <button className='genSub' type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default GeneralForm;