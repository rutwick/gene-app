import { actions } from '../actions/geneActions';
const initState = {
    transcripts: {},
    fetchingTranscripts: false,
    fetchingTranscriptsError: false
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case actions.GET_TRANSCRIPTS_PROGRESS:
            return Object.assign({}, state, {
                fetchingTranscripts: true,
                fetchingTranscriptsError: false,
                transcripts: {}
            })

        case actions.GET_TRANSCRIPTS_SUCCESS:
            return Object.assign({}, state, {
                fetchingTranscripts: false,
                fetchingTranscriptsError: false,
                transcripts: action.payload
            })

        case actions.GET_TRANSCRIPTS_ERROR:
            return Object.assign({}, state, {
                fetchingTranscripts: false,
                fetchingTranscriptsError: true,
                transcripts: {}
            })

        default:
            return state;
    }
}

export default rootReducer;