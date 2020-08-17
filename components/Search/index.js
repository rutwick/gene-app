import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: '',
            protein: '',
            acid: ''
        }
    }

    submit = e => {
        e.preventDefault();
        this.props.searchTranscripts(this.state);
    }

    updateSymbol = e => {
        this.setState({
            symbol: e.target.value
        })
    }

    updateProtein = e => {
        this.setState({
            protein: e.target.value
        })
    }

    updateAcid = e => {
        this.setState({
            acid: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Enter Symbol Name" value={this.state.symbol} onChange={this.updateSymbol}></input>
                    <input type="text" placeholder="Enter Protein Sequence" value={this.state.protein} onChange={this.updateProtein}></input>
                    <input type="text" placeholder="Enter Amino Acid letter" value={this.state.acid} onChange={this.updateAcid}></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Search;