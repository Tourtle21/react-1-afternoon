import React, {Component} from 'react';

class FilterString extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: ['Steve', 'George', 'Albert', 'Johanesberg', 'Slade', 'Karl', 'Ryan', 'Alteria', 'Tarel', 'Darius', 'Martin', 'Reginald', 'Eric', 'Koby', 'Timothy', 'Michail'],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    filterNames = () => {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(name => name.includes(this.state.userInput))
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=>this.handleInput(e)}/>
                <button className="confirmationButton" onClick={this.filterNames}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;