<template>
  <div class="home ma-0">
    <v-parallax
      height="600"
      :src="require('@/assets/hero-bg.jpg')"
      alt="parallax-image"
      class="hidden-md-and-down parallax"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-3 font-weight-thin mb-3">Breaking Bad Info App</h1>
        <h2 class="display-1">
          Learn more about your favorite characters and find their most famous
          quotes!
        </h2>
      </v-layout>
    </v-parallax>
    <div class="hidden-lg-and-up">
      <v-img :src="require('@/assets/hero-bg.jpg')" alt="hero-image"></v-img>
      <v-layout align-center column justify-center py-3 px-2>
        <h1 class="headline mb-3">Breaking Bad Info App</h1>
        <h2 class="title font-weight-thin">
          Learn more about your favorite characters and find their most famous
          quotes!
        </h2>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
<style lang="scss" scoped></style>
