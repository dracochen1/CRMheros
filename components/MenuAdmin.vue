<template>
  <div id="menu">
    <ul>
        <img src="@/assets/Logo_HERO_CORP.png" alt="logo herocorp" id="logo_hero">
        <li><img src="@/assets/dashboard.png" alt="logo dashboard" class="logo_menu"><nuxt-link to="/admin/" class="menu_link">Tableau de bord</nuxt-link></li>
        <li><img src="@/assets/user.png" alt="logo user" class="logo_menu"><nuxt-link to="/admin/account" class="menu_link">Mon profil</nuxt-link></li>
        <li><img src="@/assets/group.png" alt="logo civils" class="logo_menu"><nuxt-link to="/admin/civil" class="menu_link">Civils</nuxt-link></li>
        <li><img src="@/assets/building.png" alt="logo organisation" class="logo_menu"><nuxt-link to="/admin/organisation" class="menu_link">Organisation</nuxt-link></li>
        <li><img src="@/assets/verified.png" alt="logo bouclier superhéros" class="logo_menu"><nuxt-link to="/admin/superheros" class="menu_link">Super-héros</nuxt-link></li>
        <li><img src="@/assets/spy2.png" alt="logo supervilains" class="logo_menu"><nuxt-link to="/admin/supervilains" class="menu_link">Super-vilains</nuxt-link></li>
        <li><img src="@/assets/globe.png" alt="logo incident" class="logo_menu"><nuxt-link to="/admin/incident" class="menu_link">Incidents</nuxt-link></li>
        <li><img src="@/assets/Mission.png" alt="logo mission" class="logo_menu"><nuxt-link to="/admin/mission" class="menu_link">Missions</nuxt-link></li>
        <li><img src="@/assets/crise1.png" alt="logo crise" class="logo_menu"><nuxt-link to="/admin/crise" class="menu_link">Crises</nuxt-link></li>
        <li><img src="@/assets/rapport.png" alt="logo rapport" class="logo_menu"><nuxt-link to="/admin/rapport" class="menu_link">Rapports</nuxt-link></li>
        <li><img src="@/assets/feedback.png" alt="logo satisfaction" class="logo_menu"><nuxt-link to="/admin/satisfactions" class="menu_link">Satisfactions</nuxt-link></li>
    </ul>
</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({

})

</script>

<style scoped>

ul{
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
}
li{
   display: inline-flex;
   justify-content: space-between;
   width: 100%;
   align-items: center;
}
li:hover, .menu_link:hover{
    background-color:#0099ff ;
    color: white;
}
.menu_link,li{
    text-decoration: none;
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align:center;
    font-size: 1em;
}
.menu_link{
    padding-right: 10px;
}
.logo_menu{
    width: auto;
    height: 4vh;
    padding-left: 10px;
}
#menu{
    background-color: #ecf0f1;
    width: 15vw;
    float: left;
    min-height: 100vh;
}
#logo_hero{
    width: 100px;
    display: block;
    margin: auto;
    padding: 2vh;
}
@media screen and (max-width: 1024px)
{
  ul
  {
    display: flex;
    flex-direction: column;
    background-color: #ecf0f1;
    width: 100vw;
    float: left;
    min-height: 100vh;
  }
}
</style>
