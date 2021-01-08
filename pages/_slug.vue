<template>
  <div class="container">
    <div>
      <img :src="planet.image" alt="" />
      <h1 class="title">{{ planet.title }}</h1>
      <p>{{ planet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const planet = await fetch(
      `https://api.nuxtjs.dev/planets/${params.slug}`
    ).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res.status)
    })
    return { planet }
  },
}
</script>
