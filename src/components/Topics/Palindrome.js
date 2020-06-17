import React, {Component} from 'react';

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    checkPalindrome = () => {
        let reverse = this.state.userInput.split('').reverse().join('');
        this.setState({
            palindrome: reverse === this.state.userInput && reverse ? 'true' : 'false',
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleInput(e)}/>
                <button className="confirmationButton" onClick={this.checkPalindrome}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;