<template>
  <div>
      <h1>{{ civil.lastName }}</h1>
      <NuxtLink to="http://localhost:8080/civils/">Back to Civils</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const civil  = await $axios.$get(`http://localhost:8080/civils/${params.id}`)
    return { civil }
  }
}
</script>
