<template>
  <div>
    <p v-if="$fetchState.pending">Fetching planets...</p>
    <p v-else-if="$fetchState.error">An error occured</p>
    <div v-else>
      <ul>
        <li v-for="planet of planets" :key="planet.title">
          <nuxt-link :to="planet.title.toLowerCase()">{{
            planet.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.planets = await fetch('https://api.nuxtjs.dev/planets').then((res) =>
      res.json()
    )
  },
  data() {
    return {
      planets: [],
    }
  },
}
</script>
