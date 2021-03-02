<template>
  <div>
     <menu-admin/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import menuAdmin from '~/components/menuAdmin.vue'
export default Vue.extend({
  components: { menuAdmin },
  layout: "admin"

  
})
</script>

<style>

</style>