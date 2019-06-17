<template>
  <div>
    <v-container>
      <searchInput @searchCharacter="updateSearch($event)">
        <template v-slot:header>
          <h1>Search for character</h1>
        </template>
        <template v-slot:input>
          <v-text-field v-model="search" placeholder="e.g. Walter White" />
        </template>
      </searchInput>

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
import searchInput from '@/components/searchInput'
import CharacterCard from '@/components/CharacterCard'

export default {
  name: 'CharacterList',
  components: {
    searchInput,
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
