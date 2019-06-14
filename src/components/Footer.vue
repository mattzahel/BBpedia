<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link.name" flat>
        <a :href="link.url" class="white--text">{{ link.name }}</a>
      </v-btn>

      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2019 —
        <strong>BBpedia</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'api', url: 'https://www.breakingbadapi.com/' },
        { name: 'github', url: 'https://github.com/mattzahel/BBpedia' }
      ]
    }
  }
}
</script>

<style></style>
