import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranscripts } from '../../actions/geneActions'
import Search from '../../components/Search'
import List from '../../components/List'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sequencePosition: '',
            acidLetter: ''
        }
    }

    searchTranscripts = data => {
        let {sequencePosition, acidLetter, symbolName } = data;
        this.setState({
            sequencePosition,
            acidLetter
        })
        this.props.getTranscripts(symbolName)
    }

    render() {
        return (
            <div>
                <div className="content">
                    <h3>Find transcripts</h3>

                    <Search searchTranscripts={this.searchTranscripts} />
                    { this.props.fetchingTranscripts &&
                        <span className="status loading">Loading...</span>
                    }
                    { this.props.fetchingTranscriptsError &&
                        <span className="status error">Some error occurred.</span>
                    }
                    { this.props.transcripts && this.props.transcripts.Transcript &&
                        <>
                            <h3>Results:</h3>
                            <List items={this.props.transcripts.Transcript} position={this.state.sequencePosition} aminoAcid={this.state.acidLetter}/>
                        </>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transcripts: state.transcripts,
        fetchingTranscripts: state.fetchingTranscripts,
        fetchingTranscriptsError: state.fetchingTranscriptsError
    }
}

export default connect(mapStateToProps, { getTranscripts })(Home)