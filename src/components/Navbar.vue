<template>
  <nav>
    <v-toolbar app class="grey lighten-4">
      <v-toolbar-title class="text-uppercase grey--text">
        <img
          src="@/assets/logo.png"
          alt="breaking-bad-logo"
          height="40"
          class="mt-2"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          exact
          v-for="link in links"
          :key="link.text"
          router
          :to="{ name: link.name }"
          >{{ link.text }}</v-btn
        >
      </v-toolbar-items>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
        aria-hidden="true"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      right
      width="250"
      class="grey lighten-4"
      v-if="drawer"
    >
      <v-btn icon @click="drawer = !drawer" aria-hidden="true">
        <v-icon>close</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="{ name: link.name }"
          class="my-2"
        >
          <v-list-tile-action>
            <v-icon class="black--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="title">{{
            link.text
          }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { text: 'Home', name: 'home', icon: 'home' },
        { text: 'Characters', name: 'characters', icon: 'people' },
        { text: 'Quotes', name: 'quotes', icon: 'format_quote' }
      ]
    }
  }
}
</script>

<style></style>
