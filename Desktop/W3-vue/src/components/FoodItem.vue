<template>
    <div>
        <h2>{{ foodName }}
        <img src="/src/assets/img_quality.svg" v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
  export default {
  props: ['foodName', 'foodDesc', 'isFavorite'],
  emits: [ 'toggle-favorite'],
  data() {
    return {
        foodIsFavorite: this.isFavorite
    }
  },
 
  methods: {
    toggleFavorite() {
        //this.foodIsFavorite = !this.foodIsFavorite;
        this.$emit('toggle-favorite', this.foodName);
    }
  }
};
</script>

<style scoped>
img {
    height: 1.5em;
    float: right;
}
</style>