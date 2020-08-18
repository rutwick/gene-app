import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbolName: '',
            sequencePosition: '',
            acidLetter: '',
            error: ''
        }
    }

    submit = e => {
        e.preventDefault();

        if(!(this.state.symbolName && this.state.sequencePosition && this.state.acidLetter)) {
            this.setState({
                error: 'Please enter all values!'
            })
        } else {
            this.setState({
                error: ''
            })
            this.props.searchTranscripts(this.state);
        }
    }

    updateSymbolName = e => {
        this.setState({
            symbolName: e.target.value
        })
    }

    updateSequencePosition = e => {
        this.setState({
            sequencePosition: e.target.value
        })
    }

    updateAcidLetter = e => {
        this.setState({
            acidLetter: e.target.value
        })
    }

    render() {
        return (
            <div className="searchForm">
                <form onSubmit={this.submit}>
                    <label>
                        Symbol
                        <input type="text" placeholder="Enter Symbol Name" value={this.state.symbolName} onChange={this.updateSymbolName}></input>
                    </label>
                    <label>
                        Protein Sequence Position
                        <input type="text" placeholder="Enter Protein Sequence" value={this.state.sequencePosition} onChange={this.updateSequencePosition}></input>
                    </label>
                    <label>
                        Acid Letter
                        <input type="text" placeholder="Enter Amino Acid letter" value={this.state.acidLetter} onChange={this.updateAcidLetter}></input>
                    </label>
                    <input type="submit" value="Submit" />
                    { this.state.error &&
                        <span className="error">{this.state.error}</span>
                    }
                </form>
            </div>
        )
    }
}

export default Search;