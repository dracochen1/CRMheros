<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="650"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="650"
            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/11/superman-angry-featured.jpg"
            alt="Superman"
          >
        </template>
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="650"
            src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/05/Batman-Jason-Fabok-Comic-Art.jpg"
            alt="Batman"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="650"
            src="https://c.wallhere.com/photos/b8/b4/1920x984_px_DC_Comics_Supergirl_superhero-1094145.jpg!d"
            alt="Supergirl"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="650"
            src="https://www.disneyphile.fr/wp-content/uploads/2021/02/thumb2-deadpool-4k-superheroes-art-gun.jpg"
            alt="Deadpool"
          >
        </template>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="650"
            src="https://images.hdqwalls.com/wallpapers/the-boys-season-2-x6.jpg"
            alt="The seven"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

