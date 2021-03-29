<template>
  <div class="main">
    <menu-admin/>
    <div v-if="alert === true">
        <alert/>
    </div>
    <div id="right">
      <div id="tab">
        <div id="titre"><h1>Liste des crises</h1></div>
        <table>
          <tr>
            <td>
              Détails
              <ul v-for="crise in crises" :key="crise.id">
                <li>
                  <NuxtLink :to="`/admin/crises/${crise.id}`">{{crise.id}}</NuxtLink>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import menuAdmin from '~/components/menuAdmin.vue'
export default({
    components: {menuAdmin},
    layout: "admin",
    asyncData: async ({$axios}) => {
      const crises = await $axios.$get(`http://localhost:8080/crises/`);
      var incident = [];
        const  incidents  = await $axios.$get(`http://localhost:8080/incidents/`);
        for(var i = 0; i < incidents.length ; i++){
            var url = incidents[i].id;
            incident.push(await $axios.$get(`http://localhost:8080/incidents/` + url));
        }
        var alert = false;
        for(var i = 0; i < incident.length; i++){
            if(incident[i].alert === true){
                alert = true;
            }
        }
      return {
        crises: crises,
        alert : alert
      };
    },
  }
)
</script>
<style scoped>
#false{
    display: none;
}
#true{
    display: table;
}
#right{

  width: 84vw;
  float: right;
}
#tab{
  background-color: #f2f2f2;
  width: 90%;
  height: 80%;
  margin: auto;
  border-radius: 20px;
  margin-top: 10vh;
}
.main{
  display: flex;
  margin: 0;
  padding: 0;
}
#titre{
  width: 70%;
  height: 10vh;
  background-color: #309aff;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  top: -25px;
  margin: auto;
}
#titre h1{
  font-size: 1.3em;
  color: white;
}
table{
  width: 100%;
}
table tr td{
  text-align: center;
}
</style>
