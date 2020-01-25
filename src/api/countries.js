import axios from 'axios'

export default {
  get () {
    return axios.get('https://restcountries.eu/rest/v2/all')
  },
  getByISOCode (isoCode) {
    return axios.get('https://restcountries.eu/rest/v2/alpha/' + isoCode)
  }
}
