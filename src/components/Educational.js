import React, { Component } from 'react';

class Educational extends Component {
    constructor (props) {
        super(props);
        this.state = {
            key: 0,
            educationalInfo: {school: '', study: '', start: '', finish: ''},
        }

        this.handleEducationalSubmit = this.handleEducationalSubmit.bind(this);
        this.schoolNameChange = this.schoolNameChange.bind(this);
        this.studyChange = this.studyChange.bind(this);
        this.startChange = this.startChange.bind(this);
        this.finishChange = this.finishChange.bind(this);
    }

    schoolNameChange ({target: {value}}) {
        this.setState(prevState => ({
            educationalInfo: {                   // object that we want to update
                ...prevState.educationalInfo,    // keep all other key-value pairs
                school: value                    // update the value of specific key
            }
        }))
    }

    studyChange ({target: {value}}) {
        this.setState(prevState => ({
            educationalInfo: {                   // object that we want to update
                ...prevState.educationalInfo,    // keep all other key-value pairs
                study: value                    // update the value of specific key
            }
        }))
    }

    startChange ({target: {value}}) {
        this.setState(prevState => ({
            educationalInfo: {                   // object that we want to update
                ...prevState.educationalInfo,    // keep all other key-value pairs
                start: value                    // update the value of specific key
            }
        }))
    }

    finishChange ({target: {value}}) {
        this.setState(prevState => ({
            educationalInfo: {                   // object that we want to update
                ...prevState.educationalInfo,    // keep all other key-value pairs
                finish: value                    // update the value of specific key
            }
        }))
    }

    handleEducationalSubmit (e) {
        e.preventDefault();
        this.setState({key: this.props.keyInfo});
        this.props.onSub(this.state);
    }

    render() {
        const { school, study, start, finish } = this.state.educationalInfo;

        return(
            <div className='educationalInfo'>
                <div className='EduInfo-title'>Educational Information</div>
                <form action="" className="educationalInfo-form" onSubmit={this.handleEducationalSubmit}>
                    <label htmlFor='inputSchool'>School's Name: </label>
                    <input type='text' id='inputSchool' name='inputSchool' onChange={this.schoolNameChange} value={school} required></input>
                    <label htmlFor='inputStudy'>Title of Study: </label>
                    <input type='text' id='inputStudy' name='inputStudy' onChange={this.studyChange} value={study} required></input>
                    <label htmlFor='inputDateS'>Start: </label>
                    <input type='date' id='inputDateS' name='inputDateS' onChange={this.startChange} value={start} required></input>
                    <label htmlFor='inputDateF'>Finish: </label>
                    <input type='date' id='inputDateF' name='inputDateF' onChange={this.finishChange} value={finish} required></input>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default Educational;