<script>
import CentralLocations from './src/CentralLocations.vue'
export default {
  name: 'App',
  components: { CentralLocations },
  data() {
    return {
      locations: [
        { id: 1, name: 'CentralLocation 1', isCentral: true },
        { id: 2, name: 'CentralLocation 2', isCentral: true },
        { id: 3, name: 'CentralLocation 3', isCentral: true }
      ],
      displayCentral: true,
      selectedCentral: "CentralLocations",
      searchData: null
    };
  },
  computed: {
    CentralLocations() {
      return this.locations(location => location.isCentral);
    }
  },
  methods: {
    toggleDisplay() {
      this.displayCentral = !this.displayCentral;
    },
    
  fetchData() {
    fetch('https://dummyjson.com/posts/search?q=love') //populate with google API
      .then(res => res.json())
      .then(data => {
        this.searchData = data;
        console.log(data);
  });
 }
}}
</script>

<template>
  <div>
    <button @click="toggleDisplay">
      <img v-if="displayCentral" src="png" alt="">
      {{ 'Display Central Location' }}
    </button>
    <div v-if='displayCentral'>
      <select v-model="selectedCentral">
        <option value="centralLocation">Select a central location</option>
        <option v-for="location in centralLocations" :key="location.id" :value="location.id">{{ location.name }}</option>
      </select>
      <ul>
        <li v-for="location in centralLocation" :key="location.id">{{ location.name }}</li>
      </ul>
      </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
