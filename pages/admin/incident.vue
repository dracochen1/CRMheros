<template>
    <div class="main">
        <menu-admin/>
        <div id="right">
        <div id="tab">
            <div id="titre"><h1>Liste des incidents enregistrés</h1></div>
            <div id="table">
                <table>
               <tr>
                   <td>
                       <strong>Type</strong>
                   </td>
                   <td>
                       <strong>Description</strong>
                   </td>
                   <td>
                       <strong>Lieu</strong>
                   </td>
                   <td>
                       <strong>Source</strong>
                   </td>
                   <td>
                       <strong>Status</strong>
                    </td>
                   <td>
                       <strong>Detail</strong>
                   </td>
                </tr>
                <tr v-for="element in incident" :key="element.id">
                    <td>{{element.type}}</td>
                    <td>{{element.description}}</td>
                    <td>{{element.location}}</td>
                    <td>{{element.source}}</td>
                    <td v-if="element.status === true" style="color:green">Ouvert</td>
                    <td style="color:red" v-else-if="element.status === false" >Fermé</td>
                    <td><NuxtLink :to="`/admin/incidents/${element.id}`"><img src="@/assets/eye.png" id="eye" alt="logo detail"></NuxtLink></td>
                </tr>


            </table>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Alert from '~/components/Alert.vue'
import menuAdmin from '~/components/menuAdmin.vue'
import axios from 'axios';
export default Vue.extend({
  components: { menuAdmin, Alert },
  layout: "admin",
   asyncData: async ({ $axios }) =>{
       var incident = [];
        const  incidents  = await $axios.$get(`http://localhost:8080/incidents/`);
        for(var i = 0; i < incidents.length ; i++){
            var url = incidents[i].id;
            incident.push(await $axios.$get(`http://localhost:8080/incidents/` + url));
        }
        for(var i= 0; i < incident.length; i++){
            for(var i = 0; i < incident.length; i++){
               axios.patch(`http://localhost:8080/incidents/${incident[i].id}`, {
              "type": incident[i].type,
              "description": incident[i].description,
              "location" : incident[i].location,
              "source" : incident[i].source,
              "alert" : false,
              "status" : incident[i].status
              })
              .then((response) => {
                  console.log(response);
              }, (error) => {
                  console.log(error);
              });
             }
        }
        incident.reverse();
        return{
            incident : incident,
        }
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
#table{
    width: 100%;
    height: 80%;
    overflow: auto;
}
</style>
