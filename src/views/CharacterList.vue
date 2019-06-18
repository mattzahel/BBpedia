<template>
  <div>
    <v-container>
      <searchForm @searchCharacter="updateSearch($event)">
        <template v-slot:header>
          <h1>Search for character</h1>
        </template>
        <template v-slot:input>
          <v-text-field v-model="search" placeholder="e.g. Walter White" />
        </template>
      </searchForm>

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
import searchForm from '@/components/searchForm'
import CharacterCard from '@/components/CharacterCard'

export default {
  name: 'CharacterList',
  components: {
    searchForm,
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
