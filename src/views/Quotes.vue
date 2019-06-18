<template>
  <v-container transition="slide-x-transition">
    <searchForm @searchCharacter="updateSearch($event)">
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
              :items="uniqueAuthors"
              label="Author"
            ></v-select>
          </v-flex>
        </v-layout>
      </template>
    </searchForm>
    <v-layout flex wrap>
      <v-flex xs12 my-2 v-for="item in filteredQuotes" :key="item.quote_id">
        <QuoteCard :quote="item"></QuoteCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CharacterService from '@/services/CharacterService.js'
import searchForm from '@/components/searchForm'
import QuoteCard from '@/components/QuoteCard'

export default {
  name: 'Quotes',
  components: {
    searchForm,
    QuoteCard
  },
  data() {
    return {
      quotes: [],
      search: '',
      select: ''
    }
  },
  computed: {
    filteredQuotes() {
      return this.quotes.filter(item => {
        return (
          item.quote.toLowerCase().includes(this.search.toLowerCase()) &&
          item.author.toLowerCase().includes(this.select.toLowerCase())
        )
      })
    },
    uniqueAuthors() {
      const authors = this.quotes.map(item => {
        return item.author
      })
      return authors
    }
  },
  created() {
    CharacterService.getQuotes()
      .then(response => {
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
