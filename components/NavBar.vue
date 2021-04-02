<template>
    <div class="nav">
        <nuxt-link to="/" class="brand">
          <img class="nav-logo" src="~/assets/Logo_HERO_CORP.png">
        </nuxt-link>
        <nav>
            <nuxt-link to="/login" style="color: #82945d">
                Compte
            </nuxt-link> |
            <nuxt-link to="/location" style="color: #82945d">
                Location
            </nuxt-link>
        </nav>
    </div>

</template>
<style scoped>

.nav-logo {
  width : 50%
}
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
      height: 130px;
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

    @media screen and (max-width: 1024px)
    {
      .nav-logo {
        width : 22%;
        margin-left: 125px;
      }
      .nav
      {
        display: flex;
        justify-content: center;
      }
    }
</style>
