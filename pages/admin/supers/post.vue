<template>
  <div>
    <h2> Rajouter un super </h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" class="form-control" id="Name" placeholder="Nom du super" v-model="form.name">
      </div>
      <div class="form-group">
        <label for="power">Pouvoirs</label>
        <input type="text" class="form-control" id="power" placeholder="Pouvoirs du super" v-model="form.power">
      </div>
      <div class="form-group">
        <label for="weakness">Faiblesses</label>
        <input type="text" class="form-control" id="weakness" placeholder="Faiblesses du super" v-model="form.weakness">
      </div>
      <div class="form-group">
        <label for="score">Score</label>
        <input type="number" class="form-control" id="score" placeholder="Score du super" v-model="form.score">
      </div>
      <div class="form-group">
        <label for="comment">Commentaires</label>
        <input type="text" class="form-control" id="comment" placeholder="Commentaires" v-model="form.comment">
      </div>
      <div class="form-group">
        <label for="civils">L'identité secréte du civil est: </label>
        <select id="civils" v-model="form.civil ">
          <option value="">Selectionnez</option>
          <option v-for="civil in civils" v-bind:key="civil.id" :value="civil.id">
            {{ civil.firstName }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" onclick="alert('Super ajouté!')">Submit</button>
      </div>
      <button class="back"><NuxtLink :to="`/admin/superheros/`">Retour</NuxtLink></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostFormAxios',
  asyncData: async ({$axios}) => {
    const civils  = await $axios.$get(`http://localhost:8080/civils/`);
    return{
      civils : civils,
    }
  },
  data(){
    return{
      form: {
        name: '',
        power: '',
        weakness: '',
        score: '',
        comment: '',
        civil: ''
      }
    }
  },
  methods: {
    async submitForm () {
      try {
        await this.$axios.$post('http://localhost:8080/supers/', {
          name: this.form.name,
          power: this.form.power,
          weakness: this.form.weakness,
          score: this.form.score,
          comment: this.form.comment,
          civil: this.form.civil
        });
        await new Promise(resolve => setTimeout(resolve, 2500));
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>


<style scoped>
.form-group {
  margin-top: 5px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
label{
  color: white;
}
h2{
  color: white;
  text-align: center;
  margin-top: 25px;
}
.back {
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom:15px;
}
span{
  color:white;
}
</style>
