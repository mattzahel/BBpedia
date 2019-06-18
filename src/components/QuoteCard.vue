<template>
  <v-card flat elevation="1">
    <v-card-title>
      <blockquote class="blockquote">{{ quote.quote }}</blockquote>
    </v-card-title>
    <v-card-actions>
      <p class="text-xs-right text-md-left w-100 mx-5 mb-3">
        {{ quote.author }}
      </p>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    quote: Object
  }
}
</script>

<style></style>
