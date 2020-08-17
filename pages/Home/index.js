import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranscripts } from '../../actions/geneActions'
import Search from '../../components/Search'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    searchTranscripts = data => {
        let {symbol, protein, acid } = data
        this.props.getTranscripts(symbol, protein, acid)
    }

    render() {
        return (
            <div>
                <div className="home">
                    <Search searchTranscripts={this.searchTranscripts} />
                    { this.props.fetchingTranscripts &&
                        <span>Loading...</span>
                    }
                    { this.props.fetchingTranscriptsError &&
                        <span>Some error occurred.</span>
                    }
                    { this.props.transcripts && this.props.transcripts.Transcript &&
                        <ul>
                        {   this.props.transcripts.Transcript.map(transcript => {
                                return (<li key={transcript.id}>
                                    <a href={`http://www.ensembl.org/id/${transcript.id}`} target="_blank">{transcript.id}</a>
                                </li>)
                            })
                        }
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        transcripts: state.transcripts,
        fetchingTranscripts: state.fetchingTranscripts,
        fetchingTranscriptsError: state.fetchingTranscriptsError
    }
}

export default connect(mapStateToProps, { getTranscripts })(Home)