<template>
  <div>
    <h1>Détail de la crise</h1>
    <h3>{{ crise.type }}</h3>
    <h4>{{ crise.description }}</h4>
    <NuxtLink to="/admin/crise">Back to Crise</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const crise  = await $axios.$get(`http://localhost:8080/crises/${params.id}`)
    return { crise }
  }
}
</script>
<style scoped>
h4 {
  text-align: center;
  color: white;
  border: solid 3px;
  margin-top: 150px;
  margin-bottom: 150px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  text-align: center;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>
