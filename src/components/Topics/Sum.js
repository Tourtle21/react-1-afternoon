import React, {Component} from 'react';

class Sum extends Component {

    constructor() {
        super();
        this.state = {
            numbers: [0, 0],
            sum: null
        }
    }

    handleInputs = (e, num) => {
        let newNumbers = this.state.numbers.slice();
        newNumbers[num] = parseInt(e.target.value);
        this.setState({
            numbers: newNumbers
        })
    } 

    add = () => {
        this.setState({
            sum: this.state.numbers[0] + this.state.numbers[1]
        })
    }
    
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleInputs(e, 0)}/>
                <input className="inputLine" onChange={(e) => this.handleInputs(e, 1)}/>
                <button className="confirmationButton" onClick={this.add}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;