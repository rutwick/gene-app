import axios from 'axios';
const service = axios.create({
    baseURL: 'http://rest.ensembl.org/'
})

export default {
    getTranscripts(symbol, protein, acid) {
        return service.get(`lookup/symbol/homo_sapiens/${symbol}?expand=1`)
    }
}