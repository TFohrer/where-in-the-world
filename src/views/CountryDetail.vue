<template>
  <div class="country detail">
    <h1>This is the country detail page</h1>
    <div v-if="country">
      <h2>country found: {{country.name}}</h2>
    </div>
  </div>
</template>

<script>
import countriesApi from '../api/countries'

export default {
  name: 'CountryDetail',
  components: {},
  data () {
    return {
      country: null
    }
  },
  created () {
    let isoCode = this.$route.params.isoCode
    if (isoCode) { this.fetchCountry(isoCode) }
  },
  methods: {
    async fetchCountry (isoCode) {
      let { data } = await countriesApi.getByISOCode(isoCode)
      this.country = data
    }
  }
}
</script>
