<template>
  <div>
    <h1>This is Characters page</h1>
  </div>
</template>

<script>
import CharacterService from '@/services/CharacterService.js'

export default {
  name: 'CharacterList',
  data() {
    return {
      characters: []
    }
  },
  created() {
    CharacterService.getCharacters()
      .then(response => {
        this.characters = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>

<style></style>
