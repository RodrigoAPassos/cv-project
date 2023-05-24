import React, { Component } from 'react';

class Educational extends Component {
    constructor (props) {
        super(props);
        this.state = {
            educationalInfo: [{school: '', study: '', start: '', finish: ''}],
        }

        this.handleEducationalSubmit = this.handleEducationalSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.addEducationInfo = this.addEducationInfo.bind(this);
    }

    handleFormChange (index, event) {
        let data = [...this.state.educationalInfo];
        data[index][event.target.name] = event.target.value;
        this.setState({educationalInfo: data});
    }

    handleEducationalSubmit (e) {
        e.preventDefault();
        this.props.onSub(this.state);
    }

    addEducationInfo () {
        let newInfo = {school: '', study: '', start: '', finish: ''};
        this.setState(prevState => ({
            educationalInfo: [...prevState.educationalInfo, newInfo]
        }));
    }

    render() {
        
        return(
            <div className='educational-information'>
                <form action="" className="educationalInfo-form" onSubmit={this.handleEducationalSubmit}>
                    <h3 className='eduInfo-title'>Educational Information</h3>
                    {this.state.educationalInfo.map((input, index) => {
                    return (
                        <div className='educationalInfo' key={index}>
                            <div className="name-session">
                                <input type='text' placeholder="School's Name: " id={`inputSchool${index}`} name='school' onChange={event => this.handleFormChange(index, event)} value={input.school} required></input>
                                <input type='text' placeholder='Title of Study: ' id={`inputStudy${index}`} name='study' onChange={event => this.handleFormChange(index, event)} value={input.study} required></input>
                            </div>
                            <div className="date-session">
                                <div className="start">
                                    <label htmlFor={`inputDateS${index}`}>Start: </label>
                                    <input type='date' id={`inputDateS${index}`} name='start' onChange={event => this.handleFormChange(index, event)} value={input.start} required></input>
                                </div>
                                <div className="finish">
                                    <label htmlFor={`inputDateF${index}`}>Finish: </label>
                                    <input type='date' id={`inputDateF${index}`} name='finish' onChange={event => this.handleFormChange(index, event)} value={input.finish} required></input>
                                </div>
                            </div>
                            <button type='button' onClick={this.addEducationInfo} >Add Education Info</button>
                        </div>
                    )})}
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default Educational;