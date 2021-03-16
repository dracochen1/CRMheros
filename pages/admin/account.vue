<template>
  <div>
    <menu-admin/>

    <div> Bonjour <span class="font-weight-bold">{{ civilFirstName }}</span></div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Alert from '~/components/Alert.vue';
import menuAdmin from '~/components/menuAdmin.vue'
import {mapState} from 'vuex';

export default Vue.extend({
  components: {menuAdmin, Alert},
  layout: "admin",
  computed: {
    ...mapState({
      civilFirstName: (state) => state.civilFirstName
    }),
  },

  asyncData: async ({$axios}) => {
    var incident = [];
    const incidents = await $axios.$get(`http://localhost:8080/incidents/`);
    for (var i = 0; i < incidents.length; i++) {
      var url = incidents[i].id;
      incident.push(await $axios.$get(`http://localhost:8080/incidents/` + url));
    }
    var alert = false;
    for (var i = 0; i < incident.length; i++) {
      if (incident[i].alert === true) {
        alert = true;
      }
    }
    return {
      alert: alert
    };
  }
})
</script>

<style scoped>

#false {
  display: none;
}

#true {
  display: table;
}
</style>
