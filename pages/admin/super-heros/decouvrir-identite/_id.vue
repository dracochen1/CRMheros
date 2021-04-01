<template>
  <div>
    <menu-admin/>
    <div id="right">
        <nuxt-link id="link_back" to="/admin/superheros"><img src="@/assets/left-arrow.png">Revenir au tableau de civils</nuxt-link>
        <div id="container_superheros">
            <br>
            <label for="identite">Veuillez entrer l'identité secrète du super-héros</label><br>
            <input id="identite"><br>
            <button @click="verifIdentite(civils)">Envoyer</button><br>
            <p id="identite_secrete"></p>
        </div>
        </div>
    </div>
</template>

<script>

import menuAdmin from '~/components/MenuAdmin.vue';
import axios from 'axios';
export default {
  components: { menuAdmin },
    layout: "admin",
  async asyncData ({ $axios, params }) {
    const civils  = await $axios.$get(`http://localhost:8080/civils/${params.id}`)
    return { civils }
  },
  methods:{
      verifIdentite : function(civils){
        if(document.querySelector("#identite").value === (civils.firstName + " " + civils.lastName)){
           document.querySelector("#identite_secrete").innerHTML = "Le nom que vous avez entré est bien l'identité secrète du super-héros";
           document.querySelector("#identite_secrete").style.color = "black";
          }
        else{
            document.querySelector("#identite_secrete").innerHTML = "Le nom que vous avez entré n'est pas son identité secrète";
            document.querySelector("#identite_secrete").style.color = "red";
        }
      }
  }
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
#container_superheros label, #identite, #container_superheros button{
    text-align: center;
    display: block;
    margin: auto;
}
#container_superheros button{
    padding: 10px 30px;
    border: none;
    background-color: #2ecc71;
    color: white;
}
#container_superheros{
   border-radius: 10px;
    width: 60vw;
    height: auto;
    margin: auto;
    margin-top: 10vh;
    background-color: #f2f2f2;

}
#container_superheros p, #container_superheros h3{
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
