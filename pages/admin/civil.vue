<template>
  <div class="main">
    <menu-admin/>
    <div id="right">
        <div id="tab">
            <div id="titre"><h1>Liste des civils</h1></div>
            <table>
               <tr>
                   <td>
                     Nom
                     <ul v-for="civil in civils" :key="civil.id">
                       <li>
                         <NuxtLink :to="`/admin/civils/${civil.id}`">{{civil.id}}</NuxtLink>
                       </li>
                     </ul>
                   </td>
                   <td>
                       Prénom
                   </td>
                   <td>
                       Adresse
                   </td>
                   <td>
                       Adresse mail
                   </td>
                   <td>
                       Téléphone
                   </td>
                   <td>
                       Détail
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
      const civils = await $axios.$get(`http://localhost:8080/civils/`);
      return {
        civils: civils
      };
    },
  }
)
</script>
<style scoped>
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
