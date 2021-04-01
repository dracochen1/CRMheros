<template>
  <div class="main">
    <menu-admin/>
    <div id="right">
      <div id="tab">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="~/assets/Logo_HERO_CORP.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Bonjour <span class="font-weight-bolder"> {{civilFirstName}},</span></h5>
            <p class="card-text">Bienvenue dans l'application de la Hero Corp</p>
          </div>
        </div>
    </div>
</div>
  </div>


</template>

<script>

import Vue from 'vue'
import Alert from '~/components/Alert.vue';
import menuAdmin from '~/components/menuAdmin.vue'
import {mapState} from 'vuex';

export default ({
  components: {menuAdmin, Alert},
  layout: "admin",
  computed: {
    ...mapState({
      civilFirstName: (state) => state.civilFirstName
    }),
  },

  asyncData: async ({$axios}) => {
    let incident = [];
    const incidents = await $axios.$get(`http://localhost:8080/incidents/`);
    for (let i = 0; i < incidents.length; i++) {
      let url = incidents[i].id;
      incident.push(await $axios.$get(`http://localhost:8080/incidents/` + url));
    }
    let alert = false;
    for (let i = 0; i < incident.length; i++) {
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
.card-img-top {
  width: 166px;
  margin: auto;
}
#right{

  width: 58vw;
  float: right;
}
#false {
  display: none;
}

#true {
  display: table;
}

</style>
