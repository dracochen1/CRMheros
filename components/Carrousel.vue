<template>

  <div class="carousel-wrapper">
    <h3>Nos supers sont là pour vous ! </h3>
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
}
h3{
    color:white;
    text-align: center;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
  display: block;
  margin-top:5px;
}
</style>
