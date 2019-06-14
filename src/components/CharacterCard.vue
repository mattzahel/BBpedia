<template>
  <v-card class="my-2 mx-1">
    <v-img :src="character.img" aspect-ratio="0.7" alt="character-img"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ character.name }}</h3>
        <div class="subheading">{{ character.portrayed }}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn
        flat
        block
        router
        :to="{
          name: 'characterDetails',
          params: { id: character.char_id }
        }"
        class="grey lighten-3"
      >
        <v-icon left small>info</v-icon>Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    character: Object
  }
  // data() {
  //   return {
  //     slug: ''
  //   }
  // },
  // methods: {
  //   createSlug(name) {
  //     this.slug = name.replace(/\s+/g, '-').toLowerSpace()
  //   }
  // },
  // computed: {
  //   replaceSlug() {
  //     let slug = this.createSlug(this.props.character.name)
  //     console.log(slug)
  //     return slug
  //   }
  // }
}
</script>

<style></style>
