<template>
<div class="Slider">
  <div class="PriorText">
    <h2>Nous sommes la première ligne de défense.
    </h2>
    <br>
    <p>
      <strong>Nous accomplissons ce que les autres ne peuvent pas accomplir et allons là où les autres ne peuvent pas aller.</strong><br>
<br>
      Une carrière chez Hero Corp ne ressemble à aucune autre. Nous recherchons des personnes de tous horizons pour mener à bien l'œuvre de l'humanité.
    </p>
    <button @click="postAlert">LANCER UNE ALERTE</button>
  </div>
  <div class="picture"><img src="~/assets/HerosCorp.png"></div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  methods:{
    postAlert : function(){
   axios.post('http://localhost:8080/incidents/', {
              "type": "incendie",
              "description": "un incendie est déclaré",
              "location" : "Paris",
              "source" : "Glenn Oberlé",
              "alert" : false,
              "status" : true
              })
              .then(() => {
                  document.location.href="/thanks";
              }, (error) => {
                  console.log(error);
              });
    }
  }
}
</script>
<style scoped>
.Slider {
	display: -ms-flex;
	display: -webkit-flex;
	display: flex;
  width: 75%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  align-items: center;
  margin-bottom: 50px;
}

.Slider > div {
	width: 50%;
	padding: 10px;
}

.Slider > div:first-child {
	margin-right: 20px;
}
h2{
  margin:0px;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  color:white;
}

p{
  margin:0px;
  color:white;
}

button{
  margin-top: 40px;
  padding: 20px;
  display: inline-block;
  background-color: #C01E25;
  border-radius: 10px;
  border: 4px double #cccccc;
  color: #eeeeee;
  text-align: center;
  font-size: 28px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
}
button:hover {
  background-color: red;
}

@media screen and (max-width: 1024px)
{
  .Slider
  {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

</style>
