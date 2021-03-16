<template>
  <div class="main">
    <menu-admin/>
    <div v-if="alert === true">
        <alert/>
    </div>
    <div id="right">
      <div id="top">
        <div class="container">
          <div class="container_logo_mission"><img src="@/assets/exclamation.png" alt="logo missions" id="logo_container_mission"></div>
          <h1>Total missions</h1>
        </div>
        <div class="container">
          <div class="container_logo_hero"><img src="@/assets/spy.png" alt="logo hero" id="logo_container_hero"></div>
          <h1>Nombre de super-heros</h1>
        </div>
        <div class="container">
          <div class="container_logo_orga"><img src="@/assets/building.png" alt="logo orga" id="logo_container_orga"></div>
          <h1>Nombre de super-heros</h1>
          <ul v-for="civil in civils" :key="civil.id">
            <li>
              <p>{{civil.lastName}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="bottom">
        <div class="container_bottom">
          <div id="location_hero_titre"><h1>Locations de super-héros<p id="date" >du {{date}}</p></h1></div>
        </div>
        <div class="container_bottom">
             <div id="score_hero"><h1>Super-héros en chiffe<p id="date" >du {{date}}</p></h1></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import menuAdmin from '~/components/menuAdmin.vue'
import Alert from '~/components/Alert.vue'
export default {
  components: { menuAdmin, Alert },
  layout: "admin",
  asyncData: async ({ $axios }) => {
    var date = new Date()
    var month = date.getMonth() + 1;
    var dateday = date.getDate() +"/" +  month +"/" +  date.getFullYear();
    const  civils  = await $axios.$get(`http://localhost:8080/civils/`);
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
      date: dateday,
      civils: civils,
      alert : alert
    };


  },
}

</script>


<style scoped>
#logo_container_mission,#logo_container_hero, #logo_container_orga{
  width: 70%;

}
#false{
    display: none;
}
#true{
    display: table;
}
.container_logo_mission{
  position: absolute;
  margin-top: -5vh;
  margin-left: -2vw;
  width:7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: #eb9696;
  opacity: 70%;
}
.container_logo_hero{
   position: absolute;
  margin-top: -5vh;
  margin-left: -2vw;
  width:7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: #b7eb96;
  opacity: 70%;
}
.container_logo_orga{
   position: absolute;
  margin-top: -5vh;
  margin-left: -2vw;
  width:7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: #e4eb2d;
  opacity: 70%;
}
#right{

  width: 84vw;
  float: right;
}
#top{
  margin-top: 10vh;
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
}
#top h1{
  font-size: 1.2em;
  font-weight: normal;
  text-align: right;
  padding-right: 2vw;
}
#top .container{
  width: 23vw;
  height: 30vh;
  background-color: #ecf0f1;
}
#bottom{
  margin-top: 10vh;
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
}
#bottom .container_bottom{
  background-color: #ecf0f1;
  width: 38vw;
  height: 40vh;
}
#bottom h1{
  font-size: 1.3em;
  color: white;

}
#location_hero_titre, #score_hero{
  background-color: #fcbf5d;
  border-radius: 5px;
  position: relative;
  text-align: center;
  top: -5vh;
  width: 90%;
  margin: 0 auto;

}
#location_hero_titre p, #score_hero p{
  padding: 0;
  margin: 0;
  font-size: 0.9em;
  padding-bottom: 1vh;
}
#location_hero_titre h1, #score_hero h1{
  font-size: 1em;
  padding-top: 1vh;
}
.main{
  display: flex;
  margin: 0;
  padding: 0;
}
</style>
