import axios from 'axios'

// TODO move url to global config
const baseUrl = 'https://restcountries.eu/rest/v2'

export default {
  get () {
    return axios.get(baseUrl + '/all')
  },
  getByName (name) {
    return axios.get(baseUrl + '/name/' + name)
  },
  getByISOCode (isoCode) {
    return axios.get(baseUrl + '/alpha/' + isoCode)
  }
}
