<template>
    <div class="nav">
        <nuxt-link to="/" class="brand">
          <img src="~/assets/Logo_HERO_CORP.png">
        </nuxt-link>
        <nav>
            <nuxt-link to="/">
                Home
            </nuxt-link> |
            <nuxt-link to="/info">
                Informations
            </nuxt-link>
        </nav>
    </div>
    
</template>
<style scoped>
    .brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      color: #39b982;
      text-decoration: none;
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 200px;
      align-items: center;
      background-color: #0D1218;
      margin:0px;
      padding:20px;
    }
    .nav .nav-item {
      box-sizing: border-box;
      margin: 0 5px;
      color: rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }
    .nav .nav-item.router-link-exact-active {
      color: #39b982;
      border-bottom: solid 2px #39b982;
    }
    .nav a {
      display: inline-block;
    }
    
</style>
