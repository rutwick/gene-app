import dataService from '../services/geneService';

export let actions = {
    GET_TRANSCRIPTS: 'GET_TRANSCRIPTS',
    GET_TRANSCRIPTS_PROGRESS: 'GET_TRANSCRIPTS_PROGRESS',
    GET_TRANSCRIPTS_SUCCESS: 'GET_TRANSCRIPTS_SUCCESS',
    GET_TRANSCRIPTS_ERROR: 'GET_TRANSCRIPTS_ERROR'
}

export function getTranscripts({symbolName, sequencePosition, acidLetter}) {
    return dispatch => {
        dispatch({
            type: actions.GET_TRANSCRIPTS_PROGRESS
        })

        // Make service call
        dataService.getTranscripts(symbolName, sequencePosition, acidLetter).then(response => {
            if(response.status === 200){
                dispatch({
                    type: actions.GET_TRANSCRIPTS_SUCCESS,
                    payload: response.data
                })
            }
        }).catch(e => {
            dispatch({
                type: actions.GET_TRANSCRIPTS_ERROR,
                payload: e.data
            })
            console.log(e)
        });
    }
}