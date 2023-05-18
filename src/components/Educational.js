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
            <div>
                <form action="" className="educationalInfo-form" onSubmit={this.handleEducationalSubmit}>
                    <div className='EduInfo-title'>Educational Information</div>
                    {this.state.educationalInfo.map((input, index) => {
                    return (
                        <div className='educationalInfo' key={index}>
                            <label htmlFor='inputSchool'>School's Name: </label>
                            <input type='text' id='inputSchool' name='school' onChange={event => this.handleFormChange(index, event)} value={input.school} required></input>
                            <label htmlFor='inputStudy'>Title of Study: </label>
                            <input type='text' id='inputStudy' name='study' onChange={event => this.handleFormChange(index, event)} value={input.study} required></input>
                            <label htmlFor='inputDateS'>Start: </label>
                            <input type='date' id='inputDateS' name='start' onChange={event => this.handleFormChange(index, event)} value={input.start} required></input>
                            <label htmlFor='inputDateF'>Finish: </label>
                            <input type='date' id='inputDateF' name='finish' onChange={event => this.handleFormChange(index, event)} value={input.finish} required></input>
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