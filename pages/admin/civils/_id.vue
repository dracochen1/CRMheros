<template>
  <div>
      <h1>{{ civil.lastName }}</h1>
      <NuxtLink to="/external-plugins">Back to Posts</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const civil  = await $axios.$get(`http://localhost:8080/civils/${params.id}`)
    console.log(civil)
    return { civil }
  }
}
</script>