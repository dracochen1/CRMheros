<template>
    <div>
      <h1>TEST api</h1>
      <h2>
        <NuxtLink to="/posts/45">➡ Click to see redirected post</NuxtLink>
      </h2>
        <ul v-for="civil in civils" :key="civil.id">
          <li>
            <NuxtLink :to="`/admin/civils/${civil.id}`">{{civil.lastName}}</NuxtLink>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
      const  civils  = await $axios.$get(`http://localhost:8080/civils/`)
      return { civils }
    }
}
</script>
