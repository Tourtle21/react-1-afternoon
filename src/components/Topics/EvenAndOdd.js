import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value})
    }

    handleEvenOddArrays = () => {
        let arr = this.state.userInput.split(',')
        let evensArray = arr.filter(num => parseInt(num) % 2 === 0);
        let oddsArray = arr.filter(num => parseInt(num) % 2 === 1);
        this.setState({
            evenArray: evensArray.map(num=>parseInt(num)),
            oddArray: oddsArray.map(num=>parseInt(num))
            
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleInput(e)}/>
                <button className="confirmationButton" onClick={this.handleEvenOddArrays}>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;