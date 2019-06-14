<template>
  <v-form>
    <h1>Search for character</h1>
    <v-text-field
      v-model="name"
      placeholder="e.q. Walter White"
      v-on:input="$emit('characterInput', name)"
    />
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style></style>
