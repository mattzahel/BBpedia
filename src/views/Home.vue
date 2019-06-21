<template>
  <div class="home ma-0">
    <v-parallax
      height="600"
      :src="require('@/assets/hero-bg.jpg')"
      alt="parallax-image"
      class="hidden-md-and-down parallax"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-3 mb-3">
          Breaking Bad
          <span class="font-weight-thin">Info App</span>
        </h1>
        <h2 class="display-1">
          Learn more about your favorite characters and find their most famous
          quotes
        </h2>
      </v-layout>
    </v-parallax>
    <div class="hidden-lg-and-up">
      <v-img :src="require('@/assets/hero-bg.jpg')" alt="hero-image"></v-img>
      <v-layout align-center column justify-center py-3 px-2>
        <h1 class="headline mb-3">Breaking Bad Info App</h1>
        <h2 class="title font-weight-thin">
          Learn more about your favorite characters and find their most famous
          quotes
        </h2>
      </v-layout>
    </div>
    <v-container>
      <p class="subheading py-4">
        <span class="font-weight-bold">Breaking Bad</span> is an American
        neo-Western crime drama television series created and produced by Vince
        Gilligan. The show originally aired on AMC for five seasons, from
        January 20, 2008 to September 29, 2013. Set and filmed in Albuquerque,
        New Mexico, the series tells the story of Walter White (Bryan Cranston),
        a struggling and depressed high school chemistry teacher who is
        diagnosed with stage-3 lung cancer. Together with his former student
        Jesse Pinkman (Aaron Paul), White turns to a life of crime by producing
        and selling crystallized methamphetamine to secure his family's
        financial future before he dies, while navigating the dangers of the
        criminal underworld. The title comes from the Southern colloquialism
        "breaking bad" which means to "raise hell" or turn to a life of crime.
      </p>
      <v-layout justify-space-around mt-4 flex wrap>
        <v-flex xs12 md5 my-1>
          <v-card class="text-xs-center">
            <h3 class="title py-3">Characters</h3>
            <p class="subheading">
              Check out informations about every character
            </p>
            <v-btn class="my-3">Characters</v-btn>
          </v-card>
        </v-flex>
        <v-flex xs12 md5 my-1>
          <v-card class="text-xs-center">
            <h3 class="title py-3">Quotes</h3>
            <p class="subheading">
              Find your favorite quotes from Breaking Bad series
            </p>
            <v-btn class="my-3">Quotes</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
<style lang="scss" scoped></style>
