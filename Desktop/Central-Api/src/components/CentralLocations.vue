<script>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
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

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
