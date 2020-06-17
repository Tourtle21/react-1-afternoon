import React, {Component} from 'react';

class FilterObject extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {name: "Steve", age: 45, pets:['horse', 'cat'], house:'cabin', kids:['Silvia', 'Sam']},
                {name: 'Linda', age:12, house:'beach house', job:'fishing', hobby:'hair styling', mom:'Rosalinda'},
                {name: 'Gertrude', type:'animal', hobby:'jumping'},
                {name: 'Rosalinda', age: 29, job:'cleaning', kids:['Jay', 'Pickles', 'Linda']}
            ],
            userInput: "",
            filteredArray: [],
        }
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value});
    }

    filterArray = () => {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(item => item[this.state.userInput]),
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleInput(e)}/>
                <button className="confirmationButton" onClick={this.filterArray}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;