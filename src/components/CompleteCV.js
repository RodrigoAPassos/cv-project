import React, { Component } from 'react';

export default class CompleteCV extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Name: '',
      Num: '',
      Email: '',
      educationalInfo: [],
      expInfo: [],
      display: false
    }

  }

  loadCV () {
    this.setState({
      Name: this.props.Name,
      Num: this.props.Num,
      Email: this.props.Email,
      display: true,
    }, console.log(this.state))
  }

  render() {
    const { Name, Num, Email, display } = this.state;
    return (
      <div className='completeCV'>
        {/* <button className='load' onClick={this.loadCV} >Load CV</button> */}
        {
        display? 
          <div className='candidateName'>{Name}</div>
        
        : 
        <div></div>}
      </div>
    )
  }
}