<template>
  <div class="section" style="height: 30%; margin: 0; padding: 0; text-align: center;">
    <div class="background"
         style="background-image: url('https://www.spacex.com/static/images/backgrounds/human_spaceflight_earth.jpg'); position: absolute; width: 100%; height: 100%; margin: 0; padding: 0; background-color: #000; background-position: center center; background-repeat: no-repeat; background-size: cover;">
      <img class="logo-login" src="~/assets/Logo_HERO_CORP.png">
      <div class="section-inner resize"
           style="height: 694px; position: relative;max-width: 1400px;margin: 0 auto; display: block; width: 100%;">
        <div class="inner-right-middle"
             style="text-align: left; width: 50%; max-width: 520px; right: 60px; margin-top:50px; position:absolute">
          <form role="form">
            <h2
              style="font-size: 29px; font-weight: 1000; text-transform: uppercase; margin: auto auto 10px; color: rgb(255, 255, 255);position: relative;">
              We are the Nation's First line of defense.</h2>
            <div class="my-3 pt-5">
              <label class="text-lg"></label>
              <b-form-input v-model="email" placeholder="SERVICE ADDRESS"
                            style="width: 100%; background-color: #151515; height:62px; font-size: 12px;color: #b8b8b8; padding: 1rem 5px 29px 1rem; font-weight: 400; top: 0; left: 0; display: inline-block; text-align: left;text-transform: uppercase;"></b-form-input>
            </div>
            <div class="">
              <label class="text-lg"></label>
              <b-form-input v-model="password" placeholder="PASSWORD"
                            style="width: 100%; background-color: #151515; height:62px; font-size: 12px;color: #b8b8b8; padding: 1rem 5px 29px 1rem; font-weight: 400; top: 0; left: 0; display: inline-block; text-align: left;text-transform: uppercase;"></b-form-input>
            </div>
            <div class="">
              <button class="btn btn-lg" type="submit"
                      style="opacity: .25; width: 260px; height: 50px; border: 2px solid #fff; background: #000; border-radius : 0; color: #fff; text-transform: uppercase; margin: 12px 0 8px 120px; font-size: 14px">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    width: 130px;
    margin-left: 1300px;
    margin-top: 20px;
  }

</style>
