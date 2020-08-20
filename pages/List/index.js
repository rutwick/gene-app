import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMultipleTranscripts } from '../../actions/geneActions'
import './list.css';

class List extends Component {
    componentDidMount() {
        this.props.getMultipleTranscripts(this.props.id, this.props.position, this.props.letter)
    }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="content">
                { this.props.fetchingTranscripts &&
                        <span className="status loading">Loading...</span>
                }
                { this.props.fetchingTranscriptsError &&
                    <span className="status error">Some error occurred.</span>
                }


                
                {!this.props.fetchingTranscripts &&
                    <>
                    <h3>Results:</h3>
                    { this.props.transcripts.length ?
                        <ul className="itemList">
                            {this.props.transcripts.map(t => {
                                return <li key={t.id}>
                                    <a href={`http://www.ensembl.org/id/${t.id}`} target="_blank">{t.id}</a>
                                </li>
                            })}
                        </ul>
                        :
                        <div className="noResults">
                            <span className="status">No transcripts found with Amino Acid {this.props.letter} at position {this.props.position}.</span>
                        </div>
                    }
                    </>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        position: ownProps.match.params.position,
        letter: ownProps.match.params.letter,
        transcripts: state.transcripts,
        fetchingTranscripts: state.fetchingTranscripts,
        fetchingTranscriptsError: state.fetchingTranscriptsError
    }
}

export default connect(mapStateToProps, {getMultipleTranscripts})(List)