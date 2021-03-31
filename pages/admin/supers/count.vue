<template>
  <div>
    <h2> Rajouter un super </h2>
    <p>{{ compte }}</p>
      <button class="back"><NuxtLink :to="`/admin/superheros/`">Retour</NuxtLink></button>
  </div>
</template>

<script>
import Vue from 'vue'
import Alert from '~/components/Alert.vue';
import menuAdmin from '~/components/menuAdmin.vue'
export default Vue.extend({
  components: { menuAdmin, Alert },
  layout: "admin",
  asyncData : async ({$axios}) => {
    const compte  = await $axios.$get(`http://localhost:8080/supers/count`);

    return {
      compte : compte
    };
  }
})
</script>
