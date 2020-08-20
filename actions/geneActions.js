import dataService from '../services/geneService';

export let actions = {
    GET_TRANSCRIPTS_PROGRESS: 'GET_TRANSCRIPTS_PROGRESS',
    GET_TRANSCRIPTS_SUCCESS: 'GET_TRANSCRIPTS_SUCCESS',
    GET_TRANSCRIPTS_ERROR: 'GET_TRANSCRIPTS_ERROR'
}

export function getTranscripts(geneSymbol) {
    return dispatch => {
        dispatch({
            type: actions.GET_TRANSCRIPTS_PROGRESS
        })

        // Make service call
        dataService.getTranscripts(geneSymbol).then(response => {
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

export function getMultipleTranscripts(id, position, letter) {
    return dispatch => {
        dispatch({
            type: actions.GET_TRANSCRIPTS_PROGRESS
        })

        dataService.getMultipleTranscripts(id).then(response => {
            let filtered = []
            if(response.status === 200) {
                // Filter by position
                position = parseInt(position, 10);
                filtered = response.data.filter(t => t.seq.length > position && letter === t.seq[position])
                dispatch({
                    type: actions.GET_TRANSCRIPTS_SUCCESS,
                    payload: filtered
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