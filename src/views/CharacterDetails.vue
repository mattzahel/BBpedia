<template>
  <div>
    <h1 class="text-xs-center">{{ character.name }}</h1>
  </div>
</template>

<script>
import CharacterService from '@/services/CharacterService.js'

export default {
  name: 'CharacterShow',
  data() {
    return {
      character: {}
    }
  },
  created() {
    CharacterService.getCharacter(this.$route.params.id)
      .then(response => {
        this.character = response.data[0]
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>

<style></style>
