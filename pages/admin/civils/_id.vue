<template>
  <div>
    <menu-admin/>
    <div id="right">
        <nuxt-link id="link_back" to="/admin/civil"><img src="@/assets/left-arrow.png">Revenir au tableau de civils</nuxt-link>
        <div id="container_incident">
            <h3>Détail du civil</h3>
            <p>Prénom : <span>{{ civils.firstName }}</span></p>
            <p>Nom : <span>{{ civils.lastName }}</span></p>
            <p>Nationalité : <span>{{civils.civility}}</span></p>
            <p>Adresse : <span>{{civils.address}}</span></p>
            <p>E-mail : <span>{{civils.mail}}</span></p>
            <p>Numéro de téléphone : <span>{{civils.phone}}</span></p>
            <p>Date de naissance : <span>{{civils.dateOfBirth}}</span></p>
            <p>Date de mort : <span>{{civils.dateOfDeath}}</span></p>
            <p>Commentaire : <span>{{civils.comment}}</span></p>
            <p>Date de la dernière modification : <span>{{civils.lastModificationDate}}</span></p>
            <p>Nombre d'incidents déclarés : <span>{{civils.numberOfIncidentsDeclared}}</span></p>
            <p>Nombre d'incidents subit : <span>{{civils.numberOfAccidentsSuffered}}</span></p>
            <p>Incident.s : <span>{{civils.incidents}}</span></p>
        </div>
        </div>
    </div>
</template>

<script>

import menuAdmin from '~/components/MenuAdmin.vue';
export default {
  components: { menuAdmin },
    layout: "admin",
  async asyncData ({ $axios, params }) {
    const civils  = await $axios.$get(`http://localhost:8080/civils/${params.id}`)
    return { civils }
  },
}
</script>
<style scoped>
span{
  font-weight: bold;
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
    height: auto;
    margin: auto;
    margin-top: 10vh;
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
@media screen and (max-width: 1024px)
{
  #right{
    margin-left: auto;
    margin-top: 0px;
    margin-right: 50px;
  }
  #link_back{
    position:relative;
  }
}
</style>
