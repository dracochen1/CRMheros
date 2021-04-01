<template>
  <div>
    <menu-admin/>
    <div id="right">
        <nuxt-link id="link_back" to="/admin/incident"><img src="@/assets/left-arrow.png">Revenir au tableau d'incidents</nuxt-link>
        <div id="container_incident">
            <h3>Détail de l'incident</h3>
            <p>Type d'incident : {{ incident.type }}</p>
            <p>Description de l'incident : {{ incident.description }}</p>
            <p>Lieu de l'incident : {{incident.location}}</p>
            <p>Déclarant.s de l'incident : {{incident.source}}</p>
            <div id="container_button" v-if="incident.status === true">
                <button id="button_decl" @click="openMission">Declencher une mission</button>
                <button id="button_close" @click="closeIncident(incident)">Fermer l'incident</button>
            </div>
            <div v-else-if="incident.status === false" id="incident_close">
              <p style="color:red">L'incident est fermé</p>
            </div>
        </div>
      
    </div>
    <form-incident id="form"/>
  </div>
</template>

<script>
import menuAdmin from '~/components/menuAdmin.vue';
import axios from 'axios';
import FormIncident from '~/components/FormIncident.vue';
export default {
  components: { menuAdmin, FormIncident },
    layout: "admin",
  async asyncData ({ $axios, params }) {
    const incident  = await $axios.$get(`http://localhost:8080/incidents/${params.id}`)
    return { incident }
  },
  methods: {
      closeIncident: function(incident){

        axios.patch(`http://localhost:8080/incidents/${incident.id}`, {
            "type": incident.type,
            "description": incident.description,
            "location" : incident.location,
            "source" : incident.source,
            "alert" : false,
            "status" : false
        })
        .then((response) => {
            document.location.href = `/admin/incidents/${incident.id}`

        }, (error) => {

        });
      },
      openMission : function(){
        document.querySelector("#form").style.display = "inline-table";
      }
  }
}
</script>
<style scoped>
#form{
  display: none;
}
#right{
  width: 83vw;
  height: 100vh;
  display: flex;
  align-items: center;
  float: right;

}
#container_incident{
   border-radius: 10px;
    width: 60vw;
    height: 70vh;
    margin: auto;
    background-color: #f2f2f2;

}
#container_incident p, #container_incident h3{
    text-align: center;
}
#container_button{
    display: flex;
    justify-content: space-around;
}
#button_decl{

}
#link_back{
    position: absolute;
    top: 0;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2vh;
}
#link_back img{
    width: 20px;
    margin-right: 1vw;
}
#button_decl{
     background-color: #e74c3c;
    border: none;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    border: 2px solid #e74c3c;
}
#button_close{
    border: none;
    padding: 10px 30px;
    color: black;
    background-color: #bdc3c7;
    border: 2px solid #bdc3c7;
    cursor: pointer;
}
#button_close:hover{
     background-color: white;
    transition: 300ms;
}
#button_decl:hover{
     background-color: white;
    color: #e74c3c;
    transition: 300ms;
}
#incident_close{
  margin-top: 10vh;
}
#incident_close p{
  font-size: 1.3em;
}
</style>
