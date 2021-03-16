import React, {Component} from 'react';




export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            superHeroes: [
                {
                    name: 'Superman',
                    powerLevel: 5001
                },
                {
                    name: 'Flash',
                    powerLevel: 5000
                },
                {
                    name: 'Green Arrow',
                    powerLevel: 10,
                    color: 'green'
                }
            ],
            userInput: '',
            filteredSuperHeroes: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    onClickHeroes(prop){
        let superHeroes = this.state.superHeroes;
        let filteredSuperHeroes = [];
        
        for (let index = 0; index < superHeroes.length; index++) {
           if(superHeroes[index].hasOwnProperty(prop)) {
               filteredSuperHeroes.push(superHeroes[index]);
           }
        }
        // console.log(filteredSuperHeroes)
        this.setState({ filteredSuperHeroes: filteredSuperHeroes})
    }
    
    render (){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.superHeroes) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.onClickHeroes(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredSuperHeroes) }</span>
            </div>
        )
    }
}