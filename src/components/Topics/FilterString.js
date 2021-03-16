import React, {Component} from 'react';



export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            names: ['Steven', 'Emily', 'Trevor', 'Jackie'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    onClickFilter(userInput){
        let names = this.state.names;
        let filteredArray = [];

        for (let i = 0; i < names.length; i++) {
            if( names[i].includes(userInput)){
                filteredArray.push(names[i]);
            }
        }
        this.setState({ filteredArray: filteredArray})
    }


    
    render (){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.onClickFilter(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}