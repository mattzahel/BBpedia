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
          <v-card class="my-2 mx-1">
            <v-img
              :src="character.img"
              aspect-ratio="0.7"
              alt="character-img"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ character.name }}</h3>
                <div class="subheading">{{ character.nickname }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="primary">
                <v-icon left small>info</v-icon>Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CharacterService from '@/services/CharacterService.js'
import CharactersInput from '@/components/CharactersInput'

export default {
  name: 'CharacterList',
  components: {
    CharactersInput
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
        console.log(response.data)
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
