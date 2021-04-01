<template>
  <div>
    <h2> Add Civil </h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Your FirstName" v-model="form.firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Your LastName" v-model="form.lastName">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" id="password" placeholder="Your Password" v-model="form.password">
      </div>
      <div class="form-group">
        <label for="civility">Civility</label>
        <input type="text" class="form-control" id="civility" placeholder="Your Civility" v-model="form.civility">
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" placeholder="Your Address" v-model="form.address">
      </div>
      <div class="form-group">
        <label for="mail">Email address</label>
        <input type="email" class="form-control" id="mail" placeholder="name@example.com"
               v-model="form.mail">
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="number" class="form-control" id="phone" placeholder="0675456789"
               v-model="form.phone">
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date Of Birth</label>
        <input type="text" class="form-control" id="dateOfBirth" placeholder="20/11/1991"
               v-model="form.dateOfBirth">
      </div>
      <div class="form-group">
        <label for="dateOfDeath">Date Of Death</label>
        <input type="text" class="form-control" id="dateOfDeath" placeholder="20/11/2031"
               v-model="form.dateOfDeath">
      </div>
      <div class="form-group">
        <label for="dateAdded">Date Added</label>
        <input type="text" class="form-control" id="dateAdded" placeholder="02/10/2018"
               v-model="form.dateAdded">
      </div>
      <div class="form-group">
        <label for="numberOfIncidentsDeclared">Number Of Incidents Declared</label>
        <input type="number" class="form-control" id="numberOfIncidentsDeclared" placeholder="56"
               v-model="form.numberOfIncidentsDeclared">
      </div>
      <div class="form-group">
        <label for="numberOfAccidentsSuffered">NumberOfAccidentsSuffered</label>
        <input type="number" class="form-control" id="numberOfAccidentsSuffered" placeholder="6"
               v-model="form.numberOfAccidentsSuffered">
      </div>
      <div class="form-group">
        <label for="organisations">Civil organisation is : </label>
        <select id="organisations" v-model="form.organization ">
          <option value="">Please Select</option>
          <option v-for="organisation in organisations" v-bind:key="organisation.id">
            {{ organisation.id}}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="organisations">Civil organisation name is : </label>
          <ul v-for="organisation in organisations" v-bind:key="organisation.id">
            <li>{{ organisation.name }}</li>
          </ul>
      </div>
      <div class="form-group">
        <label for="roles">Civil role is : </label>
        <select id="roles" v-model="form.role ">
          <option value="">Please Select</option>
          <option v-for="role in roles" v-bind:key="role.id">
            {{ role.id }}
          </option>
        </select>
        <span style="padding-left:5%">Organisation is: {{form.role}}</span>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" onclick="alert('Civil ajouté!')">Submit</button>
      </div>
      <button class="back"><NuxtLink :to="`/admin/civil/`">Retour</NuxtLink></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostFormAxios',
  asyncData: async ({$axios}) => {
    const organisations  = await $axios.$get(`http://localhost:8080/organizations/`);
    const roles  = await $axios.$get(`http://localhost:8080/civils/`);
    return{
      organisations : organisations,
      roles : roles
    }
  },
  data(){
    return{
      form: {
        firstName: '',
        lastName: '',
        password: '',
        civility: '',
        address: '',
        mail: '',
        phone: '',
        dateOfBirth: '',
        dateOfDeath: '',
        dateAdded: '',
        numberOfIncidentsDeclared: '',
        numberOfAccidentsSuffered: '',
        organization: '',
        role: ''
      }
    }
  },
  methods: {
    async submitForm () {
      try {
        await this.$axios.$post('http://localhost:8080/civils/', {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          password: this.form.password,
          civility: this.form.civility,
          address: this.form.address,
          mail: this.form.mail,
          phone: this.form.phone,
          dateOfBirth: this.form.dateOfBirth,
          dateOfDeath: this.form.dateOfDeath,
          dateAdded: this.form.dateAdded,
          numberOfIncidentsDeclared: this.form.numberOfIncidentsDeclared,
          numberOfAccidentsSuffered: this.form.numberOfAccidentsSuffered,
          organization: this.form.organization,
          role: this.form.role
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
li{
  color:white;
}
ul {
  list-style-type: none;
}
</style>
