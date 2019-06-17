<template>
  <v-container>
    <v-card flat>
      <v-layout row wrap>
        <v-flex xs12 sm6 xl4>
          <v-img :src="character.img"></v-img>
        </v-flex>
        <v-flex xs12 sm6 xl6 pa-2>
          <h1 class="display-1 text-xs-center text-sm-left pa-2">
            {{ character.name }}
          </h1>
          <h2 class="title text-xs-center text-sm-left my-2 px-2">
            "{{ character.nickname }}"
          </h2>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>cake</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ shortBirthdate }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>favorite</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ character.status }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>work</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{
                  character.occupation
                }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>local_movies</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ character.appearance }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>star</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ character.portrayed }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
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
  },
  computed: {
    shortBirthdate() {
      if (this.character.birthday) {
        return this.character.birthday.slice(0, 10)
      } else {
        return 'Undefined'
      }
    }
  }
}
</script>

<style></style>
