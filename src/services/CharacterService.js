import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCharacters() {
    return apiClient.get('/characters')
  },
  getCharacter(id) {
    return apiClient.get('/characters/' + id)
  },
  getQuotes() {
    return apiClient.get('/quotes')
  },
  getQuote(author) {
    return apiClient.get('/quotes/author=' + author)
  }
}
