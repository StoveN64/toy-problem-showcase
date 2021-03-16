import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  whatPalindrome(userInput) {
    let forward = userInput;
    let back = userInput;
    back = back.split('');
    back = back.reverse();
    back = back.join('');

    if ( forward === back ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.whatPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}