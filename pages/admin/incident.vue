<template>
    <div class="main">
        <menu-admin/>
        <div id="right">
        <div id="tab">
            <div id="titre"><h1>Liste des incidents enregistrés</h1></div>
            <table>
               <tr>
                   <td>
                       Date d'ajout 
                   </td>
                   <td>
                       Titre
                   </td>
                   <td>
                       Déclarant.s
                   </td>
                   <td>
                       Commentaires
                   </td>
                   <td>
                       Status
                   </td>
                   <td>
                       Action
                   </td>
                </tr>
            </table>
        </div>
    </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import menuAdmin from '~/components/menuAdmin.vue'
export default Vue.extend({
  components: { menuAdmin },
  layout: "admin",
    
})
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