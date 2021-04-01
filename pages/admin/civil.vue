<template>
  <div class="main">
    <menu-admin/>
    <div v-if="alert === true">
        <alert/>
    </div>

    <div id="right">
        <div id="tab">
            <div id="titre"><h1>Liste des civils</h1></div>
            <table>
               <tr>
                   <td>
                     Nom
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
                   <td>
                       Supprimer
                   </td>
                </tr>
                <tr v-for="element in civils" :key="element.id">
                    <td>{{element.lastName}}</td>
                    <td>{{element.firstName}}</td>
                    <td>{{element.address}}</td>
                    <td>{{element.mail}}</td>
                    <td>{{element.phone}}</td>
                    <td><NuxtLink :to="`/admin/civils/${element.id}`"><img src="@/assets/eye.png" id="eye" alt="logo detail"></NuxtLink></td>
                    <td><button id="button_delete" @click="DeleteCivil(element.id)"><img src="@/assets/delete.png" id="delete" alt="logo delete"></button></td>
                </tr> 
            </table>
        </div>
      <button><NuxtLink :to="`/admin/civils/post`">Ajouter un civil</NuxtLink></button>
    </div>

  </div>

</template>
<script>
import Vue from 'vue'
import Alert from '~/components/Alert.vue';
import menuAdmin from '~/components/menuAdmin.vue'
import axios from 'axios';
export default Vue.extend({
    components: { menuAdmin, Alert },
    layout: "admin",
    methods: {
        DeleteCivil : function(id){
           axios.delete('http://localhost:8080/civils/' + id)
            .then(response => {
               document.location.href = "/admin/civil";
            });
            },
    },
    asyncData : async function test ({$axios}) {
        const civils  = await $axios.$get(`http://localhost:8080/civils/`);
        var civil = [];
        var incident = [];
        for(var i = 0; i < civils.length ; i++){
            var url = civils[i].id;
            civil.push(await $axios.$get(`http://localhost:8080/civils/` + url));
        }
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
        alert : alert,
        civils : civils
        };
    }

})
</script>
<style scoped>
#right{

  width: 84vw;
  float: right;
}
#eye{
    width: 30px;
}
#delete{
    width: 20px;
    transform: scale(1);
}
#delete:hover{
    transform: scale(1.10);
    transition: 200ms;
}
#button_delete{
    border: none;
}
#eye:hover,#eye:focus{
    transform: scale(1.15);
    transition: 300ms;
}
#tab{
    background-color: #f2f2f2;
    width: 90%;
    height: 600px;
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

button {
  display: block;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
  height: 50px;
  width: 150px;
  margin-bottom: 25px;
}
#table{
    width: 100%;
    height: 80%;
    overflow: auto;
}
</style>
