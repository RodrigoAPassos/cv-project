import React, { Component } from 'react';

export default class CompleteCV extends Component {
  constructor (props) {
    super(props);
    /* this.state = {
      Name: '',
      Num: '',
      Email: '',
      Address: '',
      Title: '',
      educationalInfo: [],
      expInfo: [],
    } */

    let eduData = [...this.props.cvData.educationalInfo];
    let expData = [...this.props.cvData.expInfo];
    /* this.setState({educationalInfo: data}); */
    this.state = {
      Name: this.props.cvData.Name,
      Num: this.props.cvData.Num,
      Email: this.props.cvData.Email,
      Address: this.props.cvData.Address,
      Title: this.props.cvData.Title,
      educationalInfo: eduData,
      expInfo: expData,
    };

    //this.loadCV = this.loadCV.bind(this);
  };

  /* loadCV () {
    let eduData = [...this.props.educationalInfo];
    let expData = [...this.props.expInfo];
    //this.setState({educationalInfo: data});
    this.setState({
      Name: this.props.cvData.Name,
      Num: this.props.cvData.Num,
      Email: this.props.cvData.Email,
      Address: this.props.cvData.Address,
      Title: this.props.cvData.Title,
      educationalInfo: eduData,
      expInfo: expData,
    }, console.log(this.state));
  } */

  render() {
    const { Name, Num, Email, Title, Address } = this.state;
    
    return (
      <div className='completeCV'>
        <div className='candidateTitle'>{Title}</div>
        <div className='candidateName'>{Name}</div>
        <div className='candidateEmail'>{Email}</div>
        <div className='candidateNum'>{Num}</div>
        <div className='candidateName'>{Address}</div>
      </div>
    )
  }
}