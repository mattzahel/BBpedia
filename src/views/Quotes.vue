<template>
  <v-container>
    <searchInput @searchCharacter="updateSearch($event)">
      <template v-slot:header>
        <h1>Search for quote</h1>
      </template>
      <template v-slot:input>
        <v-layout flex wrap>
          <v-flex xs12 md8 mr-1>
            <v-text-field v-model="search" placeholder="e.g. Say my name." />
          </v-flex>
          <v-flex xs12 md4>
            <v-select
              v-model="select"
              :items="quotes.author"
              label="Author"
            ></v-select>
          </v-flex>
        </v-layout>
      </template>
    </searchInput>
    <v-layout flex wrap>
      <v-flex xs12 my-2 v-for="item in quotes" :key="item.quote_id">
        <v-card flat elevation="1">
          <v-card-title>
            <blockquote class="blockquote">{{ item.quote }}</blockquote>
          </v-card-title>
          <v-card-actions>
            <p class="text-xs-right text-md-left w-100 mx-5 mb-3">
              {{ item.author }}
            </p>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import searchInput from '@/components/searchInput'
import CharacterService from '@/services/CharacterService.js'

export default {
  components: {
    searchInput
  },
  data() {
    return {
      quotes: [],
      search: '',
      select: ''
    }
  },
  created() {
    CharacterService.getQuotes()
      .then(response => {
        console.log(response.data)
        this.quotes = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.w-100 {
  width: 100%;
}
</style>
