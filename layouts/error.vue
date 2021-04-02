<template>
  <div class="error-slider">
    <h4 v-if="error.statusCode === 404" class="text-center text-white">Bonjour citoyen, cette page n'existe pas.</h4>
    <h4 v-else class="text-center text-white">Bonjour citoyen, vous n'êtes pas autorisé ici.</h4>
    <h5 class="text-center text-white">Vous pouvez retournez à la
      <NuxtLink to="/admin/account"> page d'accueil</NuxtLink>
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
.error-slider {
  margin-bottom: 190px;
  margin-top: 190px;
}

a {
  color: #64734B;
  text-decoration: underline;
}

@media screen and (max-width: 1024px) {
  .error-slider {
    margin-bottom: 190px;
    margin-top: 282px;
  }
}


</style>
