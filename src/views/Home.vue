<template>
  <div class="home">
      <countries-list></countries-list>
  </div>
</template>

<script>
// @ is an alias to /src
import CountriesList from "@/components/CountriesList";

export default {
  name: 'home',
  components: {
    CountriesList
  }
}
</script>
