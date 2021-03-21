<template>
  <div>
    <h4 v-if="error.statusCode === 404" class="text-center text-white">Bonjour citoyen, cette page n'existe pas.</h4>
    <h4 class="text-center text-white" v-else>Bonjour citoyen, une erreur est vite arrivée. Vous pouvez retournez à la page d'accueil.</h4>
    <h5 class="text-center text-white">Vous pouvez retournez à la
      <NuxtLink to="/admin"> page d'accueil</NuxtLink>
    </h5>
    <p class="text-center text-white">La Hero Corp.</p>

  </div>
</template>

<script>

export default {
  props: ['error'],
  layout: 'error',
}
</script>

<style scoped>
a {
  color: #64734B;
  text-decoration: underline;
}
</style>
