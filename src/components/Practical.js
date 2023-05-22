import React, { Component } from 'react';

class Practical extends Component {
    constructor (props) {
        super(props);
        this.state = {
            expInfo: [{compName:'', position: '', desc: '', from: '', until: ''}]
        }

        this.handleExpSubmit = this.handleExpSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.addExpInfo = this.addExpInfo.bind(this);
    }

    handleFormChange (index, event) {
        let data = [...this.state.expInfo];
        data[index][event.target.name] = event.target.value;
        this.setState({expInfo: data});
    }

    handleExpSubmit (e) {
        e.preventDefault();
        this.props.onSub(this.state);
    }

    addExpInfo () {
        let newExp = {compName:'', position: '', desc: '', from: '', until: ''};
        this.setState(prevState => ({
            expInfo: [...prevState.expInfo, newExp]
        }));
    }

    render() {
        
        return(
            <div className='practical-info'>
                <form action="" className="expInfo-form" onSubmit={this.handleExpSubmit}>
                    <h3 className='expInfo-title'>Practical Experience</h3>
                    {this.state.expInfo.map((input, index) => {
                    return (
                        <div className='explInfo' key={index}>
                            <div className="name-session">
                                <input type='text' placeholder='Company Name: ' id='inputCompName' name='compName' onChange={event => this.handleFormChange(index, event)} value={input.compName} required></input>
                                <input type='text' placeholder='Position Title: ' id='inputPosition' name='position' onChange={event => this.handleFormChange(index, event)} value={input.position} required></input>
                            </div>
                            <div className="date-session">
                                <div className="start">
                                    <label htmlFor='inputDateFrom'>From: </label>
                                    <input type='date' id='inputDateFrom' name='from' onChange={event => this.handleFormChange(index, event)} value={input.from} required></input>
                                </div>
                                <div className="finish">
                                    <label htmlFor='inputDateUntil'>To: </label>
                                    <input type='date' id='inputDateUntil' name='until' onChange={event => this.handleFormChange(index, event)} value={input.until} required></input>
                                </div>
                            </div>
                            <textarea name='desc' className='text-desc' onChange={event => this.handleFormChange(index, event)} value={input.desc} maxLength={100} placeholder='Main tasks of your job...'></textarea>
                            <button type='button' onClick={this.addExpInfo} >Add Practical Experience</button>
                        </div>
                    )})}
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default Practical;