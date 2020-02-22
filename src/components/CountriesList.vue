<template>
  <div>
    <div class="row mt-4 mb-5 mt-md-5">
      <div class="col-12 col-md">
        <div class="search__wrapper">
          <input type="search" class="search__input" v-model="search" v-on:search="this.searchCountries" v-on:keyup="this.searchCountries" placeholder="Search for a country">
        </div>
      </div>
      <!--<div class="col ml-auto mt-4">
        <select class="js-custom-select" data-placeholder="Filter by Region">
          <option value="">Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>-->
    </div>

    <div class="row mt-2 ml-3 mr-3">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="country in countries" :key="country.alpha2Code">
        <a class="card h-100" :href='"#/country/" + country.alpha2Code'>
          <div class="card__image-container">
            <img class="card__image mw-100" :src="country.flag" :alt="'flag '+country.name">
          </div>
          <div class="card__content">
            <p class="card__title">{{country.name}}</p>

            <!-- TODO move key values to config array -->
            <dl class="card__list">
              <dt class="card__list-key">Population: </dt>
              <!-- TODO Number format (thousand) -->
              <dd class="card__list-value">{{country.population}}</dd>

              <dt class="card__list-key">Region: </dt>
              <dd class="card__list-value">{{ country.region }}</dd>

              <dt class="card__list-key">Capital:</dt>
              <dd class="card__list-value">{{ country.capital }}</dd>
            </dl>
          </div>
        </a>
      </div>
    </div>

    <!-- error results -->
    <div class="row" v-if="show404">
      <div class="col text-center">
        <p class="text-bold">Sorry no country found for the given search parameters.</p>
        <p>Try changing your input or try it on another planet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import countriesApi from '../api/countries'

export default {
  name: 'CountriesList',
  data () {
    return {
      countries: [],
      search: '',
      timer: null,
      show404: false
    }
  },
  created () {
    this.fetchCountries()
  },
  methods: {
    async fetchCountries () {
      this.show404 = false
      const { data } = await countriesApi.get()
      this.countries = data
    },
    async fetchFilteredCountries () {
      this.show404 = false

      try {
        const { data } = await countriesApi.getByName(this.search)
        this.countries = data
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
        this.countries = []
        this.show404 = true
      }
    },
    searchCountries () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => {
        if (this.search === '') {
          this.fetchCountries()
        } else {
          this.fetchFilteredCountries()
        }
      }, 800)
    }
  }
}
</script>
