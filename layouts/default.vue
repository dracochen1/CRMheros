<template>
  <div id="app">
    <nav-bar />
      <Nuxt />
    <Footer />
  </div>
</template>

<script>

import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<script>

import Footer from '~/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>



<style>
    html {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }
    #app {
      box-sizing: border-box;
      padding: 0px ;
      margin: 0 auto;
      background-color: #131929;
    }
    a {
      color: red;
      font-weight: 600;
      background-color: transparent;
    }
    img {
      border-style: none;
      width: 100%;
    }
    h1 {
      font-size: 50px;
      font-weight: 700;
    }
    h2 {
      font-size: 38px;
      font-weight: 700;
    }
    h3 {
      font-size: 28px;
      font-weight: 700;
    }
    h4 {
      font-size: 21px;
      font-weight: 700;
    }
    h5 {
      font-size: 16px;
      font-weight: 700;
    }
    h6 {
      font-size: 15px;
      font-weight: 700;
    }
    strong {
      font-weight: bolder;
    }
    button,
    label,
    input,
    optgroup,
    select,
    textarea {
      display: inline-flex;
      font-family: 'Open sans', sans-serif;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    .error {
      border: 1px solid red;
    }
    .errorMessage {
      color: red;
    }
</style>
