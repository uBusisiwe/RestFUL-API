<script>
import CentralLocations from '/components/CentralLocations.vue'
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
    fetch('https://dummyjson.com/posts/search?q=love')//Populate with Google API link
      .then(res => res.json())
      .then(data => {
        this.searchData = data;
        console.log(data);
  });
 }
}}
</script>

<template>
    <h1>{{ locations }}</h1>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
