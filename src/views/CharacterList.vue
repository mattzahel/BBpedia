<template>
  <div>
    <v-container>
      <CharactersInput
        @searchCharacter="updateSearch($event)"
      ></CharactersInput>

      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          xl2
          v-for="character in filteredCharacters"
          :key="character.char_id"
        >
          <CharacterCard :character="character" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CharacterService from '@/services/CharacterService.js'
import CharactersInput from '@/components/CharactersInput'
import CharacterCard from '@/components/CharacterCard'

export default {
  name: 'CharacterList',
  components: {
    CharactersInput,
    CharacterCard
  },
  data() {
    return {
      characters: [],
      search: ''
    }
  },
  created() {
    CharacterService.getCharacters()
      .then(response => {
        this.characters = response.data
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  methods: {
    updateSearch(search) {
      this.search = search
    }
  },
  computed: {
    filteredCharacters() {
      return this.characters.filter(character => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style></style>
