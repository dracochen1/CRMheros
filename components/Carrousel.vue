<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="i in 4" :key="i" class="img-wrapper">
        <img :src="`./${i}-200x100.jpg`" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false
      }
    }
  }
}
</script>

<style>
.carousel-wrapper {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3{
    color:white;
    text-align: center;
    margin-right: 25px;
}
.img-wrapper{
  display:flex;
  flex-direction: row;
}
.img-wrapper img {
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
  margin-top:5px;
}
</style>
