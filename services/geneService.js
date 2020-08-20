import axios from 'axios';
const service = axios.create({
    baseURL: 'http://rest.ensembl.org/'
})

export default {
    getTranscripts(symbol) {
        return service.get(`lookup/symbol/homo_sapiens/${symbol}?expand=1`)
    },

    getMultipleTranscripts(id) {
        return service.get(`sequence/id/${id}?multiple_sequences=true&type=protein&context-type=application/json`)
    }
}