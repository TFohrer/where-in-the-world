<template>
  <div class="country detail">
    <div class="row mt-3 mb-5">
      <div class="col">
        <button @click="$router.back()" class="button button--back">Back</button>
      </div>
    </div>
    <div class="row" v-if="country">
      <div class="col-5">
        <img :src="country.flag" class="mw-100">
      </div>
      <div class="offset-1 col-5">
        <h1 class="mb-5">{{country.name}}</h1>
        <div class="row mb-5">
          <div class="col-6">
            <dl>
              <dt>Native Name: </dt>
              <dd>{{country.nativeName}}</dd>

              <dt>Population:</dt>
              <dd>{{country.population}}</dd>

              <dt>Region:</dt>
              <dd>{{ country.region }}</dd>

              <dt>Sub Region:</dt>
              <dd>{{ country.subregion }}</dd>

              <dt>Capital:</dt>
              <dd>{{ country.capital }}</dd>
            </dl>
          </div>
          <div class="col-6">
            <dl>
              <dt>Top Level Domain:</dt>
              <dd>{{ country.topLevelDomain[0]}}</dd>

              <dt>Currencies:</dt>
              <dd>{{ this.objectArrayToString(country.currencies, 'name')}}</dd>

              <dt>Languages:</dt>
              <dd>{{ this.objectArrayToString(country.languages, 'name') }}</dd>

            </dl>
          </div>
        </div>
        <div class="row" v-if="country.borders.length > 0">
          <p class="col-auto">Border Countries:</p>
          <div class="col">
              <a v-for="borderCountry in country.borders" v-bind:key="borderCountry" class="button d-inline-block mr-2 mb-2" :href="'#/country/'+borderCountry">
                {{borderCountry}}
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countriesApi from '../api/countries'
import mixin from '../mixins/mixin'

export default {
  name: 'CountryDetail',
  components: {},
  mixins: [mixin],
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
