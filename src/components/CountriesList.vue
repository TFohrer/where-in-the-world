<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="search__wrapper">
          <input type="search" class="search__input" placeholder="Search for a country">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3 mb-5" v-for="country in countries" :key="country.alpha2Code">
        <a class="card h-100" :href='"#/country/" + country.alpha2Code'>
          <img class="card__image mw-100" :src="country.flag">
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
  </div>
</template>

<script>
import countriesApi from '../api/countries'

export default {
  name: 'CountriesList',
  data () {
    return {
      countries: [0, 1, 2]
    }
  },
  async mounted () {
    const { data } = await countriesApi.get()
    this.countries = data
  }
}
</script>
