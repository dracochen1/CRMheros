<template>
  <div class="section">
    <div class="background">
      <img class="logo-login" src="~/assets/Logo_HERO_CORP.png">
      <div class="section-inner resize">
        <div class="inner-right-middle">
          <form @submit.prevent="logIn">
            <h2>
              Nous sommes la première ligne de défense.</h2>
            <div v-if="hasErrors" class="alert alert-danger">
              <p>Les identifiants ne sont pas valides</p>
            </div>
            <div class="my-3">
              <label class="text-lg"></label>
              <b-form-input v-model="civil.mail" class="input-form-login" placeholder="MAIL DE SERVICE"></b-form-input>
            </div>
            <div>
              <label class="text-lg"></label>
              <b-form-input v-model="civil.password" class="input-form-login" placeholder="MOT DE PASSE"
                            type="password"></b-form-input>
            </div>
            <div class="">
              <button class="btn btn-lg" type="submit" @click="logIn">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {CIVIL_LOGIN} from '~/store';

export default {
  layout: "admin",
  name: "login",

  data() {
    return {
      civil: {
        mail: "",
        password: "",
        hasErrors: false
      },
      hasErrors: false
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch(CIVIL_LOGIN, {mail: this.civil.mail})
        .then((civil) => {
          console.error(civil)
          this.$axios.setToken(this.civil.mail);

          this.hasErrors = false;
          this.$router.push({name: 'admin'})
        })
        .catch(() => {
          this.hasErrors = true
        });
    }
  }
};
</script>
<style scoped>

.section {
  height: 30%;
  margin: 0;
  padding: 0;
  text-align: center;
}

.text-lg {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.15;
  margin: 0;
  color: white;
  text-transform: uppercase;
}

.logo-login {
  width: 85px;
  margin-left: 1300px;
  margin-top: 20px;
}

h2 {
  font-size: 29px;
  font-weight: 1000;
  text-transform: uppercase;
  margin: auto auto 10px;
  color: rgb(255, 255, 255);
  position: relative;
}

.section-inner {
  height: 694px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  display: block;
  width: 100%;
}

.inner-right-middle {
  text-align: left;
  width: 50%;
  max-width: 520px;
  right: 60px;
  margin-top: 50px;
  position: absolute;
}

.background {
  background-image: url('https://www.spacex.com/static/images/backgrounds/human_spaceflight_earth.jpg');
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.input-form-login {
  width: 100%;
  background-color: #151515;
  height: 62px;
  font-size: 12px;
  color: #b8b8b8;
  padding: 1rem 5px 29px 1rem;
  font-weight: 400;
  top: 0;
  left: 0;
  display: inline-block;
  text-align: left;
  text-transform: uppercase;
}

.btn {
  opacity: .25;
  width: 260px;
  height: 50px;
  border: 2px solid #fff;
  background: #000;
  border-radius: 0;
  color: #fff;
  text-transform: uppercase;
  margin: 40px 0 8px 120px;
  font-size: 14px
}

</style>
