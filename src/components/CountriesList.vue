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
      <div class="col-3" v-for="country in countries" :key="country">
        <a class="card" :href='"#/country/" + country'>
          <img class="card__image mw-100" src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg">
          <div class="card__content">
            <p class="card__title">India</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountriesList',
  data () {
    return {
      countries: [0, 1, 2]
    }
  }
}
</script>

<style scoped>

</style>
