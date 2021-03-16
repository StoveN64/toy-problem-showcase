import React, {Component} from 'react';


export default class EvenAndOdd extends Component {
    constructor (){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(value) {
        this.setState({ userInput: value });
        }

    assignEvenOdds(userInput){
        let array = userInput.split(',') ;
        let evens = [];
        let odds = [];

        for (let index = 0; index < array.length; index++) {
            if (array[index] % 2 === 0) {
                evens.push(array[index])
            } else {
                odds.push(array[index])
            }
            
        }
        this.setState({ evenArray: evens.join(','), oddArray: odds.join(',')});
        // console.log({evens, odds})
    }


    
    render (){
        return (
            
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>
                <input className='inputLine' onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className='confirmationButton' onClick={() => this.assignEvenOdds(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens:[{ this.state.evenArray }]</span>
                <span className='resultsBox'>Odds: [{ this.state.oddArray }]</span>
            </div>
        )
    }
}